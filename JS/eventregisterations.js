const firebaseConfig = {
    apiKey: "AIzaSyDIc8AV8CSOHCMRaTI-4UgSNZslb3dKWm0",
    authDomain: "eventregister-972a8.firebaseapp.com",
    databaseURL: "https://eventregister-972a8-default-rtdb.firebaseio.com",
    projectId: "eventregister-972a8",
    storageBucket: "eventregister-972a8.appspot.com",
    messagingSenderId: "527315020141",
    appId: "1:527315020141:web:87d1c7ded22bfb6acb5264",
    measurementId: "G-35N9J2EDHC"
};

firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("EventRegister");

const cards = document.querySelectorAll('.card');
const formContainer = document.getElementById('form-container');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const venueId = card.getAttribute('data-venue');
        const form = document.createElement('form');
        form.innerHTML = `
            <style>
            form {
                display: flex;
                flex-direction: column;
                max-width: 300px;
                margin: 0 auto;
                background-color: #222;
                padding: 20px;
                border-radius: 8px;
            }

            label {
                margin-top: 10px;
                color: white;
            }

            input, button {
                padding: 8px;
                margin-top: 5px;
                border: 1px solid #666;
                border-radius: 4px;
                width: 100%;
                background-color: #444;
                color: white;
            }

            button {
                background-color: #007bff; /* Keeping original blue color for the button */
            }

            button:hover {
                background-color: #0056b3;
            }
            </style>
                <form id="EventRegister">
                <input type="hidden" id="venueId" name="venueId" value="${venueId}">
                <label for="venueId">Event Name:</label>
                <input type="text" id="eventName" name="eventName" required>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required>
                <button type="submit">Book</button>
                </form>
        `;
        formContainer.innerHTML = '';
        formContainer.appendChild(form);
        form.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(form);
            console.log(formData);
            alert('Your booking data has been sent to the admin.');
            saveMessages(venueId, formData.get('eventName'), formData.get('name'), formData.get('email'), formData.get('date'));
        });
        formContainer.style.display = 'block';
    });
});

const saveMessages = (venueId, eventName, name, email, date) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        venueId: venueId,
        eventName: eventName,
        name: name,
        email: email,
        date: date
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};