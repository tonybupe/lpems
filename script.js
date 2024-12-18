// JavaScript for LPEMS Frontend

// DOM Elements
const content = document.getElementById("content");
const homeLink = document.getElementById("home-link");
const loginLink = document.getElementById("login-link");
const dashboardLink = document.getElementById("dashboard-link");

// Functions to load content dynamically
function loadHome() {
  content.innerHTML = `
    <div class="home">
      <h2>Welcome to LPEMS</h2>
      <p>Empowering Education Management for Luapula Province.</p>
    </div>
  `;
}

function loadLogin() {
  content.innerHTML = `
    <div class="login">
      <h2>Login to LPEMS</h2>
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  `;
}

function loadDashboard() {
  content.innerHTML = `
    <div class="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome, User! Manage your tasks here.</p>
    </div>
  `;
}

// Event Listeners
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  loadHome();
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  loadLogin();
});

dashboardLink.addEventListener("click", (e) => {
  e.preventDefault();
  loadDashboard();
});

// Load Home on initial page load
loadHome();
