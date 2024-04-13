window.addEventListener("load", solve);

function solve() {
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const categorySelect = document.getElementById('category');
  const addButton = document.getElementById('add-btn');
  const checkList = document.getElementById('check-list');
  const contactList = document.getElementById('contact-list');

  addButton.addEventListener('click', () => {
      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const category = categorySelect.options[categorySelect.selectedIndex].value;

      if (!name || !phone || category === "") {
          return;
      }

      const li = createListItem(name, phone, category);
      checkList.appendChild(li);

      nameInput.value = '';
      phoneInput.value = '';
      categorySelect.selectedIndex = 0; 
  });

  function createListItem(name, phone, category) {
      const li = document.createElement('li');

     
      const article = document.createElement('article');
      article.innerHTML = `<p>name:${name}</p><p>phone:${phone}</p><p>category:${category}</p>`;
      li.appendChild(article);

     
      const editButton = document.createElement('button');
     
      editButton.className = 'edit-btn';

      const saveButton = document.createElement('button');
      
      saveButton.className = 'save-btn';

      const buttonsDiv = document.createElement('div');
      buttonsDiv.className = 'buttons';
      buttonsDiv.appendChild(editButton);
      buttonsDiv.appendChild(saveButton);
      li.appendChild(buttonsDiv);

    
      editButton.addEventListener('click', function() {
          nameInput.value = name;
          phoneInput.value = phone;
          categorySelect.value = category;
          li.remove();
      });

      saveButton.addEventListener('click', function() {
          contactList.appendChild(li);
          buttonsDiv.remove();
          li.appendChild(createDeleteButton());
      });

      return li;
  }

  function createDeleteButton() {
      const deleteButton = document.createElement('button');
      
      deleteButton.className = 'del-btn';
      deleteButton.addEventListener('click', function() {
          deleteButton.parentElement.remove();
      });
      return deleteButton;
  }
}
