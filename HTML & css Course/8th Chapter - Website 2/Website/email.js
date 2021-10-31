
(function () {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_ZQuAkZfGYuFUcqipInqqk');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_3i71r7u', 'template_i1wnzhm', this)
            .then(function () {
                console.log('SUCCESS!');
                document.getElementById('contact-form').reset();
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}
