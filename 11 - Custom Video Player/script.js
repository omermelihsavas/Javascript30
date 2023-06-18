const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('.view');
const progress = videoPlayer.querySelector('.progress');
const progressBar = videoPlayer.querySelector('.progress-bar');
const toggle = videoPlayer.querySelector('.toggle');
const ranges = videoPlayer.querySelectorAll('.video-player-slider');
const skipButtons = videoPlayer.querySelectorAll('[data-skip]');

function togglePlay() {
    const toggle = video.paused ? 'play' : 'pause';
    video[toggle]();
};

function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
};

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
};

function handleRangeUpdate() {
    video[this.name] = this.value;
};

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
};

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
