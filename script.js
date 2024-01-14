document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('commandInput');
    const output = document.getElementById('output');

    commandInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            processCommand(this.value);
            this.value = ''; // Clear the input after enter
        }
    });

    function processCommand(command) {
        let response = '';
        switch (command.toLowerCase()) {
            case 'help':
                response = 'Commands available: portfolio, resume, contact';
                break;
            case 'portfolio':
                response = 'Portfolio Section...';
                // Add more logic or content for portfolio
                break;
            case 'resume':
                response = 'Resume Section...';
                // Add more logic or content for resume
                break;
            case 'contact':
                response = 'Contact Section...';
                // Add more logic or content for contact
                break;
            default:
                response = 'Command not recognized.';
        }
        output.innerHTML += `<p>> ${command}</p><p>${response}</p>`;
    }
});
