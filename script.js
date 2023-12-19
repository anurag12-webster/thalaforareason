// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('inputForm');
    const celebrationDiv = document.getElementById('celebration');
    const shareButton = document.getElementById('shareButton');
    const audio = document.getElementById('celebrationAudio');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      handleFormSubmit();
    });
  
    shareButton.addEventListener('click', function () {
      encodeAndShareLink();
    });
  });
  
  function handleFormSubmit() {
    const inputValue = document.getElementById('inputField').value;
  
    if (inputValue && inputValue.trim().length > 0) {
      const inputType = isNaN(inputValue) ? 'text' : 'number';
      const sum = inputType === 'number' ? calculateSum(inputValue) : 0;
  
      if ((inputType === 'text' && inputValue.trim().length === 7) ||
          (inputType === 'number' && sum === 7)) {
        celebrate();
      } else {
        alert('Keep trying! Thala is waiting.');
      }
    } else {
      alert('Please enter a valid input!');
    }
  }
  
  function calculateSum(input) {
    return Array.from(input.toString()).reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  
 function celebrate() {
  const form = document.getElementById('inputForm');
  const celebrationDiv = document.getElementById('celebration');
  const shareButton = document.getElementById('shareButton');
  const audio = document.getElementById('celebrationAudio');
  const gifImage = document.getElementById('celebrationImage');

  form.classList.add('hidden');
  celebrationDiv.classList.remove('hidden');
  shareButton.classList.remove('hidden');

  setTimeout(() => {
    audio.controls = false; // Hide controls
    audio.play(); // Ensure the audio is played
  }, 500);

  // Ensure the GIF is loaded before making it visible
  gifImage.addEventListener('load', function () {
    gifImage.style.display = 'block';
  });
}

  
  
  function encodeAndShareLink() {
    const inputValue = document.getElementById('inputField').value;
    const encodedInput = encodeURIComponent(inputValue);
    const shareLink = `https://thalaforareason-six.vercel.app/?input=${encodedInput}`;
  
    alert(`Share this link: ${shareLink}`);
  }
  
