document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("AfdIczXJ5jtb25KjB");

    const commandInput = document.getElementById('commandInput');
    const output = document.getElementById('output');

    commandInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            processCommand(this.value);
            this.value = ''; // Clear the input after enter
        }
    });

    function processCommand(command) {
        let response = '';
        switch (command.toLowerCase()) {
            case 'help':
                response = 'Commands available: portfolio, resume, contact, clear, reset';
                break;
            case 'portfolio':
                output.innerHTML = '<p>Enter "portfolio-featured" to view Featured Projects.<br>Enter "portfolio-all" to view All Projects.</p>';
                break;
            case 'portfolio-featured':
                displayFeaturedProjects();
                break;
            case 'portfolio-all':
                displayAllProjects();
                break;
            case 'resume':
                response = 'Resume Section...';
                displayResume();
                break;
            case 'contact':
                displayContactForm();
                break;
            case 'clear':
                output.innerHTML = '';
                break;
            case 'reset':
                window.location.href = 'index.html';
                break;
            default:
                response = 'Command not recognized.';
        }
        output.innerHTML += `<p>> ${command}</p><p>${response}</p>`;
    }
});

function displayFeaturedProjects() {
    output.innerHTML = `
        <div class="list-container">
            <h3>Featured Projects</h3>
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
            </ul>
        </div>
    `;
}

function displayAllProjects() {
    output.innerHTML = `
        <div class="list-container">
            <h3>All Projects</h3>
            <ul>
                <li>Project A</li>
                <li>Project B</li>
                <!-- More projects can be added here -->
            </ul>
        </div>
    `;
}

function displayResume() {
    const resumePath = './TristanLResume.pdf';
    output.innerHTML = `
    <div class="resume-container">
        <iframe src="${resumePath}" width="100%" height="500px"></iframe>
        <a href="${resumePath}" download="Tristan_Resume.pdf" class="download-button">Download Resume</a>
    </div>
    `;
}

function displayContactForm() {
    window.location.href = './contact.html'; // Redirect to the contact form page
}

// function displayContactForm() {
//     output.innerHTML = `
//         <div class="contact-form">
//             <form id="contactForm">
//                 <input type="text" name="user_name" placeholder="Your Name" required>
//                 <input type="email" name="user_email" placeholder="Your Email" required>
//                 <textarea name="message" placeholder="Your Message" required></textarea>
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     `;

//     const contactForm = document.getElementById('contactForm');
//     if (!contactForm) {
//         console.log("Contact form not found");
//     } else {
//         console.log("Contact form found, adding event listener");
//         contactForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             console.log("Attempting to send email");
//             // Rest of the email sending code
//         });
//     }
// }

