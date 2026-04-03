const menuToggle = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.querySelector('.nav-menu'); // Fixed selector

// Open Sidebar
menuToggle.addEventListener('click', () => {
  navMenu.classList.add('active'); // Fixed classList typo
});

// Close Sidebar
closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

// Close Sidebar when a link is clicked
document.querySelectorAll('.nav-items').forEach(link => { // Added the dot .
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const nameDisplay = document.getElementById('display-name');
  const profileBox = document.getElementById('user-profile');
});