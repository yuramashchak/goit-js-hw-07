const newForm = document.querySelector('.login-form');
newForm.addEventListener('submit', onForm);
function onForm(e) {
    e.preventDefault();

    const email = newForm.elements.email.value.trim();
    const password = newForm.elements.password.value.trim();

    const data = {
        email: email,
        password: password,
    }

    if (data.email === "" || data.password === "") {
  alert('All form fields must be filled in');
  return;
}

console.log(data);
newForm.reset();
}