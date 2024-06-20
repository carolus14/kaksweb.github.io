Adocument.addEventListener('DOMContentLoaded', function() {
    const toggleaboutbtn = document.getElementById('toggleabout');
    const togglecontactbtn = document.getElementById('togglecontact');
    const aboutsection = document.getElementById('about');
    const contactsection = document.getElementById('contact');

    toggleaboutbtn.addEventListener('click', function() {
        if (aboutsection.style.display === 'none') {
            aboutsection.style.display = 'block';
        } else {
            aboutsection.style.display = 'none';
        }
    });

    togglecontactbtn.addEventListener('click', function() {
        if (contactsection.style.display === 'none') {
            contactsection.style.display = 'block';
        } else {
            contactsection.style.display = 'none';
        }
    });
});