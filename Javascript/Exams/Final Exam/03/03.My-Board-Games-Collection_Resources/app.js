// Define the base URL for the REST API
const baseUrl = 'http://localhost:3030/jsonstore/games';

// Add event listeners to buttons
document.getElementById('load-games').addEventListener('click', loadGames);
document.getElementById('add-game').addEventListener('click', addGame);
document.getElementById('edit-game').addEventListener('click', editGame);

// Initially, no game is being edited
let gameBeingEdited = null;

// Function to load all games and display them
async function loadGames() {
  const gamesList = document.getElementById('games-list');
  gamesList.innerHTML = ''; // Clear current list

    const response = await fetch(baseUrl);
    const games = await response.json();
    gamesList.innerHTML = '';

    // Create and append game elements to the list
    Object.values(games).forEach(game => {
      gamesList.appendChild(createGameElement(game));
    });

    // Deactivate the edit button
    document.getElementById('edit-game').disabled = true;

}

// Function to add a new game
async function addGame() {
  const name = document.getElementById('g-name').value.trim();
  const type = document.getElementById('type').value.trim();
  const players = document.getElementById('players').value;

  if (name && type && players) {
    try {
      await fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, type, players })
      });

      // Clear the form fields
      document.getElementById('g-name').value = '';
      document.getElementById('type').value = '';
      document.getElementById('players').value = '';

      // Reload the list of games
      loadGames();
    } catch (error) {
      console.error('Failed to add a new game:', error);
    }
  }
}

// Function to populate the form for editing a game
function changeGame(id) {
  const gamesList = document.getElementById('games-list').children;
  Array.from(gamesList).forEach(gameElement => {
    if (gameElement.dataset.id === id) {
      const gameData = JSON.parse(gameElement.dataset.gameData);

      // Fill the form fields with game data
      document.getElementById('g-name').value = gameData.name;
      document.getElementById('type').value = gameData.type;
      document.getElementById('players').value = gameData.players;

      // Enable the edit button and store the id of the game being edited
      document.getElementById('edit-game').disabled = false;
      gameBeingEdited = id;
    }
  });
}

// Function to send PUT request to edit a game
async function editGame() {
  if (gameBeingEdited) {
    const name = document.getElementById('g-name').value.trim();
    const type = document.getElementById('type').value.trim();
    const players = document.getElementById('players').value;

  
      await fetch(`${baseUrl}/${gameBeingEdited}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, type, players })
      });

      // Clear the form fields and reset the edit state
      document.getElementById('g-name').value = '';
      document.getElementById('type').value = '';
      document.getElementById('players').value = '';
      document.getElementById('edit-game').disabled = true;
      gameBeingEdited = null;

      // Reload the list of games
      loadGames();

  }
}

// Function to create a game element
function createGameElement(game) {
  const div = document.createElement('div');
  div.className = 'board-game';
  div.dataset.id = game._id; // Use a data attribute to store the game id
  div.dataset.gameData = JSON.stringify(game); // Store all game data for editing

  div.innerHTML = `
    <div class="content">
      <p>${game.name}</p>
      <p>${game.type}</p>
      <p>${game.players}</p>
    </div>
    <div class="buttons-container">
      <button class="change-btn" onclick="changeGame('${game._id}')">Change</button>
      <button class="delete-btn" onclick="deleteGame('${game._id}')">Delete</button>
    </div>
  `;
  return div;
}

// Function to send DELETE request to delete a game
async function deleteGame(id) {

      await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
      });
  
      // Reload the list of games
      loadGames();

  }
  