import './style.css';

const leaderboard = document.getElementById('leaderboard');

const createGame = (name) => {
    leaderboard.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mchCFxyMLOw3tEZP2NKf/scores/',
    name).then((response) => {
        const list = document.createElement('ul');
        list.classList.add('list-group');
        list.innerHTML = `${response.result}`;
        leaderboard.appendChild(list);
    })
}