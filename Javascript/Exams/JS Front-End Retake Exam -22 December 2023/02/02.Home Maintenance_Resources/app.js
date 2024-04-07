window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');
    const doneList = document.getElementById('done-list');

    addBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        const placeValue = document.getElementById('place').value.trim();
        const actionValue = document.getElementById('action').value.trim();
        const personValue = document.getElementById('person').value.trim();

        if (!placeValue || !actionValue || !personValue) {
            alert('Please fill in all fields.');
            return;
        }

        const article = document.createElement('article');
        const taskParagraph = document.createElement('p');
        taskParagraph.textContent = `Place: ${placeValue}, Action: ${actionValue}, Person: ${personValue}`;
        article.appendChild(taskParagraph);

        // Create the "Done" button
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', function() {
            doneList.appendChild(article); // Move the article to the done list
            doneBtn.remove(); // Optionally remove the "Done" button once moved
            editBtn.remove(); // Remove the "Edit" button as well
        });

        // Create the "Edit" button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function() {
            // Populate input fields with current task values for editing
            document.getElementById('place').value = placeValue;
            document.getElementById('action').value = actionValue;
            document.getElementById('person').value = personValue;

            article.remove(); // Remove the article from the current or done list
        });

        // Append buttons to the task article
        article.appendChild(editBtn);
        article.appendChild(doneBtn);

        taskList.appendChild(article);

        // Clear the input fields
        document.getElementById('place').value = '';
        document.getElementById('action').value = '';
        document.getElementById('person').value = '';
    });
}

window.addEventListener('load', solve);
