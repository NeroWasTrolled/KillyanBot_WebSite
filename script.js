document.getElementById('hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');

    loginButton.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });
});
