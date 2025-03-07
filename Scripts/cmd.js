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
            addOutput("Commands:\n - profile\n - portfolio\n - projects");
            break;
        case 'profile':
            addOutput("Loading profile...");
            loadProfile();
            break;
        case 'portfolio':
            addOutput("Loading portfolio...");
            loadPortfolio();
            break;
        case 'projects':
            addOutput("Loading projects...");
            loadProjects();
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
        <p>Name: Example Name Here</p>
        <p>Contact: xxxxxxxxxxxxx</p> 
        <p>Description: 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed iaculis quam consectetur, vestibulum risus at, dapibus quam. 
        Cras sed leo eu justo sagittis tristique sed et ipsum. Morbi purus risus, convallis scelerisque nibh non, eleifend vulputate lectus. 
        </p>

        <h3>Skills</h3>
        <h4>Programming Languages</h4>
        <ul>
            <li>Ruby</li>
            <li>C#</li>
            <li>Python</li>
            <li>Rust</li>
        </ul>
        <h4>Frameworks</h4>
        <ul>
            <li>Node</li>
        </ul>
        <h4>Tools</h4>
        <ul>
            <li>CRT</li>
            <li>Captcha</li>
            <li>Visual Studio Code</li>
        <ul>
    `;    
}

function loadPortfolio() {
    contentDiv.innerHTML = `
    <h2>Portfolio</h2>

    <h3>Project One</h3>
    <p>Description: 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed iaculis quam consectetur, vestibulum risus at, dapibus quam. 
    Cras sed leo eu justo sagittis tristique sed et ipsum. Morbi purus risus, convallis scelerisque nibh non, eleifend vulputate lectus. 
    </p>
    <h4>Features</h4>
    <ul>
        <li>SEO</li>
        <li>Procedural Generation</li>
        <li>3D Mapping</li>
    </ul>

    <h3>Project Two</h3>
    <p>Description: 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed iaculis quam consectetur, vestibulum risus at, dapibus quam. 
    Cras sed leo eu justo sagittis tristique sed et ipsum. Morbi purus risus, convallis scelerisque nibh non, eleifend vulputate lectus. 
    </p>
    <h4>Features</h4>
    <ul>
        <li>Structural degredation</li>
        <li>Ecosystems</li>
        <li>Life cycle</li>
    </ul>

`;    
}

function loadProjects() {
    contentDiv.innerHTML = `
    <h2>Personal Projects</h2>
    <p>Description: 
    This is a space for all of my personal projects!
    </p>

    <ul>
        <li>Tree Generation</li>
        <li>AI Enemies</li>
        <li>Block Fragmentation</li>
    </ul>
`;    
}


// Click anywhere and have it focus on the textbox
let terminal = document.getElementById("js-terminal")

terminal.addEventListener('click', () => {
    commandInput.focus();
})