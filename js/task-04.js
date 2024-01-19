let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');


// decrementButton.addEventListener('click', () => {
//     counterValue--;
//     update();
//   });

//   incrementButton.addEventListener('click', () => {
//     counterValue++;
//     update();
//   });


//   function update() {
//     valueSpan.textContent = counterValue;
//   }



//  not arrow function

function increment() {
    counterValue++;
    update();
  }

  function decrement() {
    counterValue--;
    update();
  }
  
  function update() {
    valueSpan.textContent = counterValue;
  }
  
  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);