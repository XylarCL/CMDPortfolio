const terminalContainer = document.getElementById('js-terminal');
const terminalInput = document.getElementById('js-terminal-input');
const terminalOutput = document.getElementById('js-terminal-output');
const contentDiv = document.getElementById('js-content');
const commandInput = document.getElementById('js-command');


commandInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const command = this.value;
        handleCommand(command);
        this.value = ''; // clear input
    }
});



function handleCommand(command) {

    // Add the command and its result to the terminal output
    addOutput(`$ ${command}`);
    switch (command.toLowerCase()) {
        case 'help':
            addOutput("Commands:\n - profile\n - portfolio\n - projects\n - photos\n - games");
            break;
        case 'profile':
            addOutput("Loading profile...");
            loadProfile();
            break;
        case 'portfolio':
            addOutput("Loading portfolio...");
            contentDiv.innerHTML = "<h2>My Portfolio</h2><p>Details about my portfolio here...</p>";
            break;
        case 'projects':
            addOutput("Loading projects...");
            contentDiv.innerHTML = "<h2>Personal Projects</h2><p>Details about my projects here...</p>";
            break;
        case 'photos':
            addOutput("Loading photos...");
            contentDiv.innerHTML = "<h2>Photos</h2><p>My gallery here...</p>";
            break;
        case 'games':
            addOutput("Loading games...");
            contentDiv.innerHTML = "<h2>Games</h2><p>My game projects here...</p>";
            break;
        default:
            addOutput("Unknown command. Type 'help' for available commands.");
    }
}

function addOutput(text) {
    const newOutput = document.createElement('div');
    newOutput.className = 'terminal-output';
    newOutput.textContent = text;
    terminalOutput.appendChild(newOutput);
}


// Pages
function loadProfile() {
    contentDiv.innerHTML = `
        <h2>My Profile</h2>
        <p>Name: </p>
        <p>Contact: </p> 
        <p>Description: </p>

        <h3>Skills</h3>
        <h4>Programming Languages</h4>£@£
        <ul>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
        </ul>
        <h4>Frameworks</h4>
        <ul>
            <li>...</li>
        </ul>
        <h4>Tools</h4>
        <ul>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
    `;    
}


// Click anywhere and have it focus on the textbox
let terminal = document.getElementById("js-terminal")

terminal.addEventListener('click', () => {
    commandInput.focus();
})