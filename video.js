let video;
let durationControl;
let soundControl;
let intervalId;

document.addEventListener ('DOMContentLoaded', e => {
    video = document.querySelector('#video');

    video.addEventListener('click', playStop);

    let playButtons = document.querySelectorAll('.play');
    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener('click', playStop); 
    }

    let micControl = document.getElementById('micLevel');
    micControl.addEventListener('click', soundOf);

    durationControl = document.querySelector('#durationLevel');
    durationControl.addEventListener('mousedown', stopInterval);
    durationControl.addEventListener('click', setVideoDuration);

    durationControl.min = 0;
    durationControl.value = 0;

    soundControl = document.querySelector('#volumeLevel');
    soundControl.addEventListener('click', changeSoundVolume);
    soundControl.addEventListener('mousup', changeSoundVolume);

    soundControl.min = 0;
    soundControl.max = 10;
    soundControl.value = soundControl.max;
})

function playStop() {
    let playImg = document.querySelector('.video__play');
    console.log(playImg);
    playImg.classList.toggle('video__play--active');

    durationControl.max = video.duration;

    if(video.paused) {
        video.play();
        intervalId = setInterval(updateDuration, 1000/66);
    } else {
        video.pause();
        clearInterval(intervalId);
    }
}

function updateDuration() {
    durationControl.value = video.currentTime;
}

function setVideoDuration() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }

    video.currentTime = durationControl.value;
    intervalId = setInterval(updateDuration, 1000 / 66);
}

function stopInterval() {
    video.pause();
    clearInterval(intervalId);
}

function changeSoundVolume() {
    video.volume = soundControl.value / 10;
}

function soundOf() {
    if(video.volume === 0) {
        video.volume = soundLevel;
        soundControl.value = soundLevel * 10;
    } else {
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
    }
}