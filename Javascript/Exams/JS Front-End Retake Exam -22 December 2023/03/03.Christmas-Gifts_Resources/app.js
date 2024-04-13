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

    async function loadMeals() {

        const response = await fetch(baseURL);
        const data = await response.json();
        listDiv.innerHTML = '';
        Object.values(data).forEach(meal => addMealToDOM(meal));

    }

    function addMealToDOM(meal) {
        if (!meal._id) {
            console.error('Error: Meal ID is undefined', meal);
            return;
        }
    
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
    
        const mealTitle = document.createElement('h2');
        mealTitle.textContent = meal.food;
    
        const mealTime = document.createElement('h3');
        mealTime.textContent = meal.time;
    
        const mealCalories = document.createElement('h3');
        mealCalories.textContent = meal.calories;
    
        const buttonsDiv = document.createElement('div');
        buttonsDiv.id = 'meal-buttons';
    
        const changeButton = document.createElement('button');
        changeButton.className = 'change-meal';
        changeButton.textContent = 'Change';
        changeButton.addEventListener('click', () => prepareEdit(meal));
    
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-meal';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteMeal(meal._id));
    
        buttonsDiv.appendChild(changeButton);
        buttonsDiv.appendChild(deleteButton);
    
        mealDiv.appendChild(mealTitle);
        mealDiv.appendChild(mealTime);
        mealDiv.appendChild(mealCalories);
        mealDiv.appendChild(buttonsDiv);
    
        listDiv.appendChild(mealDiv);
    }
    

    async function addMeal() {
        const mealData = {
            food: foodInput.value,
            time: timeInput.value,
            calories: caloriesInput.value
        };

        try {
            await fetch(baseURL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(mealData)
            });
            clearInputs();
            await loadMeals();
        } catch (error) {
            console.error('Failed to add meal:', error);
        }
    }

    async function editMeal() {
        const updatedMeal = {
            food: foodInput.value,
            time: timeInput.value,
            calories: caloriesInput.value
        };

        try {
            await fetch(`${baseURL}/${editId}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updatedMeal)
            });
            clearInputs();
            editId = null;
            toggleButtons(false);
            await loadMeals();
        } catch (error) {
            console.error('Failed to edit meal:', error);
        }
    }

    async function deleteMeal(id) {
        try {
            await fetch(`${baseURL}/${id}`, {
                method: 'DELETE'
            });
            await loadMeals();
        } catch (error) {
            console.error('Failed to delete meal:', error);
        }
    }

    function prepareEdit(meal) {
        foodInput.value = meal.food;
        timeInput.value = meal.time;
        caloriesInput.value = meal.calories;
        editId = meal._id;
        toggleButtons(true);
    }

    function clearInputs() {
        foodInput.value = '';
        timeInput.value = '';
        caloriesInput.value = '';
    }

    function toggleButtons(isEditing) {
        editMealBtn.disabled = !isEditing;
        addMealBtn.disabled = isEditing;
    }

