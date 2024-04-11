const addSongButton = document.getElementById('add-song-button');
const songInput = document.getElementById('song-input');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const volumeSlider = document.getElementById('volume-slider');
const audioPlayer = document.getElementById('audio-player');
const createPlaylistButton = document.getElementById('create-playlist-button');
const playlistInput = document.getElementById('playlist-input');
const savePlaylistButton = document.getElementById('save-playlist-button');
const loadPlaylistButton = document.getElementById('load-playlist-button');
const playlistSelector = document.getElementById('playlist-selector');

let songs = [];
let playlists = [];
let currentPlaylist = null;

addSongButton.addEventListener('click', () => {
  songInput.click();
});

songInput.addEventListener('change', (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    songs.push(file);
  }
  songInput.value = '';
});

playButton.addEventListener('click', () => {
  if (songs.length > 0) {
    const song = songs.shift();
    audioPlayer.src = URL.createObjectURL(song);
    audioPlayer.play();
    playButton.disabled = true;
    pauseButton.disabled = false;
    stopButton.disabled = false;
  }
});

pauseButton.addEventListener('click', () => {
  audioPlayer.pause();
  pauseButton.disabled = true;
  playButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  pauseButton.disabled = true;
  playButton.disabled = false;
  stopButton.disabled = true;
});

audioPlayer.addEventListener('ended', () => {
  pauseButton.disabled = true;
  playButton.disabled = false;
  stopButton.disabled = true;
});

volumeSlider.addEventListener('input', (event) => {
  audioPlayer.volume = event.target.value;
});

createPlaylistButton.addEventListener('click',)