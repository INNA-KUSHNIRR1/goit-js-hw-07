const form = document.querySelector('.login-form');
const btn = document.querySelector('.login-form>button');
btn.textContent = 'Log in';
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = { email, password };
    console.log(formData);
    form.reset();
  }
}
