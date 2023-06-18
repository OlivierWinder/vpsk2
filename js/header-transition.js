// Get the header element
const header = document.querySelector('header');

// Function to handle the scroll event
function handleScroll() {
  // Add a CSS class to the header when the client starts scrolling
  if (window.pageYOffset > 0) {
    header.classList.add('header--active');
  } else {
    header.classList.remove('header--active');
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);