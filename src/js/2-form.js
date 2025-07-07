const formData = {
    email: '',
    message: ''
}

const form = document.querySelector('.feedback-form')

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    const email = event.currentTarget.elements.email.value;
    const message = event.currentTarget.elements.message.value;

    formData.email = email;
    formData.message = message;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

if (localStorage.getItem("feedback-form-state")) {
    const parseForm = JSON.parse(localStorage.getItem("feedback-form-state"))
    formData.email = parseForm.email;
    formData.message = parseForm.message;
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

function onFormSubmit(event) {
    event.preventDefault()
    const email = event.currentTarget.elements.email.value;
    const message = event.currentTarget.elements.message.value;

    if (email === '' || message === '') {
        return alert('«Fill please all fields»')
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state')
    formData.email = '';
    formData.message = '';
    form.reset()
}


