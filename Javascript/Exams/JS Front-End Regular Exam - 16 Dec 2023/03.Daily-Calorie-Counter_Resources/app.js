document.addEventListener("DOMContentLoaded", function() {
    const baseURL = 'http://localhost:3030/jsonstore/tasks';

    const foodInput = document.getElementById('food');
    const timeInput = document.getElementById('time');
    const caloriesInput = document.getElementById('calories');
    const addMealBtn = document.getElementById('add-meal');
    const editMealBtn = document.getElementById('edit-meal');
    const loadMealsBtn = document.getElementById('load-meals');
    const listDiv = document.getElementById('list');

    let editId = null;

    loadMealsBtn.addEventListener('click', loadMeals);
    addMealBtn.addEventListener('click', addMeal);
    editMealBtn.addEventListener('click', editMeal);

    function loadMeals() {
        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                console.log('Server response:', data);
                listDiv.innerHTML = '';
                Object.values(data).forEach(addMealToDOM);
            });
    }

    function addMealToDOM(meal) {
        console.log('Adding meal to DOM:', meal);
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        mealDiv.innerHTML = `
            <h2>${meal.food}</h2>
            <h3>${meal.time}</h3>
            <h3>${meal.calories}</h3>
            <div id="meal-buttons">
                <button class="change-meal">Change</button>
                <button class="delete-meal">Delete</button>
            </div>
        `;
        mealDiv.querySelector('.change-meal').addEventListener('click', () => prepareEdit(meal));
        mealDiv.querySelector('.delete-meal').addEventListener('click', () => deleteMeal(meal._id));
        listDiv.appendChild(mealDiv);
    }

    function prepareEdit(meal) {
        foodInput.value = meal.food;
        timeInput.value = meal.time;
        caloriesInput.value = meal.calories;
        editId = meal._id;
        editMealBtn.disabled = false;
        addMealBtn.disabled = true;
    }

    function addMeal() {
        const mealData = {
            food: foodInput.value,
            time: timeInput.value,
            calories: caloriesInput.value
        };
        fetch(baseURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(mealData)
        })
        .then(() => {
            foodInput.value = '';
            timeInput.value = '';
            caloriesInput.value = '';
            loadMeals();
        });
    }

    function editMeal() {
        const updatedMeal = {
            food: foodInput.value,
            time: timeInput.value,
            calories: caloriesInput.value
        };
        fetch(`${baseURL}/${editId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedMeal)
        })
        .then(() => {
            foodInput.value = '';
            timeInput.value = '';
            caloriesInput.value = '';
            editId = null;
            editMealBtn.disabled = true;
            addMealBtn.disabled = false;
            loadMeals();
        });
    }

    async function deleteMeal(id) {
        console.log('Deleting meal with ID:', id);
        await fetch(`${baseURL}/${id}`, {
            method: 'DELETE'
        })
        .then(() => loadMeals());
        
    }
});
