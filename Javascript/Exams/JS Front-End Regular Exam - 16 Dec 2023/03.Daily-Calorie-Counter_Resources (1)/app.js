const BASE_URL = 'http://localhost:3030/jsonstore/tasks';

const endpoints = {
    update: id => `${BASE_URL}/${id}`,
    delete: id => `${BASE_URL}/${id}`,
};

const foodElement = document.getElementById("food");
const timeElement = document.getElementById("time");
const caloriesElement = document.getElementById("calories");
const list = document.getElementById('list');

const addBtn = document.getElementById("add-meal");
const editBtn = document.getElementById("edit-meal");
const loadBtn = document.getElementById("load-meals");

let selectedTaskId = null;

function attachEvents() {
    loadBtn.addEventListener('click', loadTasks);
    addBtn.addEventListener('click', createTask);
    editBtn.addEventListener('click', editTask);
}

async function loadTasks() {
    clearList();
    try {
        const response = await fetch(BASE_URL);
        const tasks = await response.json();
        Object.values(tasks).forEach(task => list.appendChild(createTaskElement(task)));
    } catch (error) {
        console.error('Failed to load tasks:', error);
    }
}

function createTaskElement(task) {
    const container = document.createElement('div');
    container.className = 'meal';
    container.innerHTML = `
        <h2>${task.food}</h2>
        <h3>${task.time}</h3>
        <h3>${task.calories}</h3>
        <div class='meal-buttons'>
            <button class='change-meal'>Change</button>
            <button class='delete-meal'>Delete</button>
        </div>
    `;

    container.querySelector('.change-meal').addEventListener('click', () => prepareEdit(task));
    container.querySelector('.delete-meal').addEventListener('click', () => deleteTask(task.food));
    return container;
}

function prepareEdit(task) {
    selectedTaskId = task._id;
    foodElement.value = task.food;
    timeElement.value = task.time;
    caloriesElement.value = task.calories;
    editBtn.disabled = false;
    addBtn.disabled = true;
}

async function createTask(ev) {
    ev.preventDefault();
    if (validateInputs()) {
        const task = {
            food: foodElement.value,
            time: timeElement.value,
            calories: caloriesElement.value,
        };

        try {
            await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            });
            loadTasks();
        } catch (error) {
            console.error('Failed to create task:', error);
        }
        clearInputs();
    }
}

async function editTask(ev) {
    ev.preventDefault();
    if (selectedTaskId && validateInputs()) {
        const updatedTask = {
            food: foodElement.value,
            time: timeElement.value,
            calories: caloriesElement.value,
        };

        try {
            await fetch(endpoints.update(selectedTaskId), {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTask)
            });
            loadTasks();
        } catch (error) {
            console.error('Failed to edit task:', error);
        }
        clearInputs();
        selectedTaskId = null;
        addBtn.disabled = false;
        editBtn.disabled = true;
    }
}

async function deleteTask(food) {
    try {
        const id = await getIdByLocation(food);
        await fetch(endpoints.delete(id), { method: 'DELETE' });
        loadTasks();
    } catch (error) {
        console.error('Failed to delete task:', error);
    }
}

async function getIdByLocation(food) {
    const response = await fetch(BASE_URL);
    const tasks = await response.json();
    return Object.entries(tasks).find(([_, task]) => task.food === food)[1]._id;
}

function validateInputs() {
    return foodElement.value !== '' && timeElement.value !== '' && caloriesElement.value !== '';
}

function clearList() {
    list.innerHTML = '';
}

function clearInputs() {
    foodElement.value = '';
    timeElement.value = '';
    caloriesElement.value = '';
}

attachEvents();
