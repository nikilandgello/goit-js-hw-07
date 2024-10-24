const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    } else {
        let user = { email: email, password: password};
        console.log(user);
    }
    
    form.reset();
});
