const scriptURL='https://script.google.com/macros/s/AKfycbwC0-4Gc82Tj1ce0ojggmyDwRIQphR3Of6qkHzrspoyUBsk53cmg3UxN-7q1Y_GUMKR/exec'
const form = document.forms['contact-form']

form.addEventListener('submit',e => {
    e.preventDefault()
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(respone => alert("Thank you, your query has been submitted. We will reach out you shortly."))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!', error.message))

})