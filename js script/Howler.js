// Create a new Howl instance
var sound = new Howl({
  src: ['bgm audio.mp3'],volume: 0.2 
  });
  
  // Event listener for the button click
  document.getElementById('playbutton').addEventListener('click', function() {
    // Play the audio
    sound.play();
  });
  