function solve() {
  const placeInput = document.getElementById('place');
  const actionInput = document.getElementById('action');
  const personInput = document.getElementById('person');
  const addButton = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');
  const doneList = document.getElementById('done-list');

  addButton.addEventListener('click', function() {
      const place = placeInput.value.trim();
      const action = actionInput.value.trim();
      const person = personInput.value.trim();

      if (!place || !action || !person) {
          return; // Do nothing if any field is empty
      }

      const taskItem = createTaskItem(place, action, person);
      taskList.appendChild(taskItem);

      // Clear input fields
      placeInput.value = '';
      actionInput.value = '';
      personInput.value = '';
  });

  function createTaskItem(place, action, person) {
      const li = document.createElement('li');
      li.className = 'clean-task'; // Add class for testing

      const article = document.createElement('article'); // Correct nesting for test

      const placeP = document.createElement('p');
      placeP.textContent = `Place:${place}`;
      article.appendChild(placeP);

      const actionP = document.createElement('p');
      actionP.textContent = `Action:${action}`;
      article.appendChild(actionP);

      const personP = document.createElement('p');
      personP.textContent = `Person:${person}`;
      article.appendChild(personP);

      li.appendChild(article); // Append the article to the list item

      // Create buttons div as per the updated requirements
      const buttonsDiv = document.createElement('div');
      buttonsDiv.className = 'buttons';

      // Edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'edit';
      editButton.addEventListener('click', () => {
          placeInput.value = place;
          actionInput.value = action;
          personInput.value = person;
          li.remove();
      });

      // Done button
      const doneButton = document.createElement('button');
      doneButton.textContent = 'Done';
      doneButton.className = 'done';
      doneButton.addEventListener('click', () => {
          li.removeChild(buttonsDiv); // Remove buttons div from the task
          createDeleteButton(li);    // Add delete button for done tasks
          doneList.appendChild(li);
      });

      buttonsDiv.appendChild(editButton);
      buttonsDiv.appendChild(doneButton);
      li.appendChild(buttonsDiv); // Append the buttons div to the list item

      return li;
  }

  function createDeleteButton(taskItem) {
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';
      deleteButton.addEventListener('click', () => taskItem.remove());
      taskItem.appendChild(deleteButton); // Append the delete button to the list item
  }
}