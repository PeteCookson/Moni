function sendMail(contactForm) {
    emailjs.send("gmail", "moni", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "information_request": contactForm.message.value
        })
        .then(function(response) {
            console.log('SUCCESS!', response);
            alert("Message Sent!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("There was an error");
        });
    return false;
}