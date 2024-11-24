document.getElementById("forgot-password-link").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".login-form").classList.add("hidden");
    document.querySelector(".forgot-password-form").classList.remove("hidden");
});

document.getElementById("back-to-login").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".forgot-password-form").classList.add("hidden");
    document.querySelector(".login-form").classList.remove("hidden");
});
