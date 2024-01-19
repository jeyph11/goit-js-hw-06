var nameInput = document.getElementById('name-input');
var nameOutput = document.getElementById('name-output');

    // method 1

// nameInput.addEventListener('input', function() {


//   nameOutput.textContent = nameInput.value || 'Anonymous';
// });


    // method 2

// nameInput.addEventListener('input', () => {
//     nameOutput.textContent = nameInput.value || 'Anonymous';
 //  });

    // method 3

function inputValue() {
    nameOutput.textContent = nameInput.value || 'Anonymous (walang value)';
  }

  nameInput.addEventListener('input', inputValue);