document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! Name: ' + document.getElementById('name').value + ', Email: ' + document.getElementById('email').value);
});
