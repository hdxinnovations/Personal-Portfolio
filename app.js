
const projectVideos = document.querySelectorAll('.project-vidbox video');

projectVideos.forEach(video => {
 
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; 
  });
});
