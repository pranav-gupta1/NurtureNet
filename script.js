let moodHistory = [];

//record the mood
function recordMood() {
    const day = document.getElementById('day').value;
    const mood = document.getElementById('mood').value;
    if (day) {
        moodHistory.push({ day, mood });
        alert('Mood for day ' + day + ' recorded as ' + mood + '.');
    }
    else
        alert('Please enter a day.');
}

//show the mood history
function showHistory() {
    const historyContainer = document.getElementById('moodHistory');
    historyContainer.innerHTML = '<h3>Mood History</h3>';
    moodHistory.forEach(entry => {
        const p = document.createElement('p');
        p.textContent = `Day ${entry.day}: ${entry.mood}`;
        historyContainer.appendChild(p);
    });
}

const ecoTips = [
    "Use a reusable water bottle.",
    "Turn off lights when not in use.",
    "Recycle paper, plastic, and metal regularly."
];

const sustainabilityProjects = [
    "Join our upcoming Tree Planting Day! Sign up in the main office.",
    "Participate in our weekly recycling drive.",
    "Contribute to the school garden."
];

//show tip or project and make it random
function displayRandomTipOrProject() {
    const ecoTipElement = document.getElementById('ecoTip');
    const projectElement = document.getElementById('sustainabilityProject');
    if (ecoTipElement)
        ecoTipElement.textContent = "Tip of the day: " + ecoTips[Math.floor(Math.random() * ecoTips.length)];
    if (projectElement)
        projectElement.textContent = "Project of the day: " + sustainabilityProjects[Math.floor(Math.random() * sustainabilityProjects.length)];
}

document.addEventListener("DOMContentLoaded", function() {
    displayRandomTipOrProject();
});

//logic for sign-up/log-in
if (document.getElementById('authForm')) {
    document.getElementById('authForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        alert(`Demo Sign Up / Log In Successful for: ${username}`);
        
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        
        showSuccessIcon();
    });
}

//show UI feedback for completing sign-up/log-in action
function showSuccessIcon() {
    const iconContainer = document.createElement('div');
    iconContainer.innerHTML = '&#x2714;';
    iconContainer.style.position = 'fixed';
    iconContainer.style.top = '20px';
    iconContainer.style.right = '20px';
    iconContainer.style.fontSize = '24px';
    iconContainer.style.color = 'green';
    document.body.appendChild(iconContainer);
}