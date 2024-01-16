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
                <li><a href="https://github.com/TriLea/E-commerceORMBackend?tab=readme-ov-file" target="_blank">E-commerceORMBackend</a></li>
                <li><a href="https://github.com/TriLea/PWA_CodeEditor" target="_blank">PWA_CodeEditor</a></li>
                <li><a href="https://github.com/TriLea/portfolio-2023?tab=readme-ov-file" target="_blank">Portfolio-2023</a></li>
                <li><a href="https://github.com/TriLea/employeeTracker?tab=readme-ov-file" target="_blank">EmployeeTracker</a></li>
                <li><a href="https://github.com/TriLea/OnlyWanDogs" target="_blank">OnlyWanDogs</a></li>
            </ul>
        </div>
    `;
}

function displayAllProjects() {
    output.innerHTML = '<p>Loading projects...</p>';

    fetch('https://api.github.com/users/TriLea/repos')
        .then(response => response.json())
        .then(repos => {
            if (repos.length === 0) {
                output.innerHTML = '<p>No projects found.</p>';
                return;
            }

            const repoList = repos.map(repo => `
                <li>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </li>
            `).join('');

            output.innerHTML = `
                <div class="list-container">
                    <h3>All Projects</h3>
                    <ul>${repoList}</ul>
                </div>
            `;
        })
        .catch(error => {
            console.error('Error fetching repositories', error);
            output.innerHTML = '<p>Error loading projects.</p>';
        });
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
