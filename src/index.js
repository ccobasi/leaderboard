/* eslint-disable no-return-assign */
import './style.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mchCFxyMLOw3tEZP2NKf/scores/';
const leaderboard = document.getElementById('leaderboard');
const refresh = document.getElementById('refresh');
const name = document.getElementById('name');
const score = document.getElementById('score');
const submit = document.getElementById('add');

const createGame = (name) => {
  leaderboard.innerHTML = '';
  name.result.map((e, index) => leaderboard.innerHTML += `<li class="list-group-item">${name.result[index].user} ${name.result[index].score}</li>`);

  leaderboard.appendChild(name);
};

const callApi = async () => {
  const getData = await fetch(url);
  const resource = await getData.json();
  createGame(resource);
  return resource;
};

callApi();

const addScore = () => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;',
    },
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
  })
    .then((response) => response.json());
};

refresh.addEventListener('click', callApi);
submit.addEventListener('click', addScore);