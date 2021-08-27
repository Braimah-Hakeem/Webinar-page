let registrationForm = document.getElementById('registrationForm')
registrationForm.addEventListener('submit', event => {
    event.preventDefault()

    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get('firstName')

    let userEmailAddress = ourFormData.get('emailAddress')

    let successfulRegMsg = `

    <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
        `

        let updatedHtmlContent = document.getElementById('Main-Content')
        updatedHtmlContent.innerHTML = successfulRegMsg


})