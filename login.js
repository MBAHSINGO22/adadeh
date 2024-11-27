// Form validation and redirection
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = document.getElementById('password').value;

  // Hardcoded password
  const validPassword = '28112023';

  if (password === validPassword) {
    alert('Selamat datang sayangku');
    sessionStorage.setItem('loggedIn', 'true'); // Store session login
    window.location.href = 'index.html'; // Redirect to main page
  } else {
    alert('Yahh passwordnya salahh, ulangi lagi ya sayangg');
  }
});

// Prevent access to login page if already logged in
if (sessionStorage.getItem('loggedIn') === 'true') {
  window.location.href = 'index.html';
}
