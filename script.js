document.addEventListener('DOMContentLoaded', () => {
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
                response = 'Commands available: portfolio, resume, contact, clear';
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
                // Add more logic or content for resume
                break;
            case 'contact':
                response = 'Contact Section...';
                // Add more logic or content for contact
                break;
            case 'clear':
                output.innerHTML = '';
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