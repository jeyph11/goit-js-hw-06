function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

//   method 1
//   function createBoxes() {
//     const amountInput = document.querySelector('input[type="number"]');
//     const amount = parseInt(amountInput.value);

//     if (isNaN(amount) || amount < 1 || amount > 100) {
//       alert('mag lagay ka 1 to 100 lang lods');
//       return;
//     }

//     const boxesContainer = document.getElementById('boxes');
//     boxesContainer.innerHTML = '';

//     let width = 30;
//     let height = 30;

//     for (let i = 0; i < amount; i++) {
//       const box = document.createElement('div');
//       box.style.width = `${width}px`;
//       box.style.height = `${height}px`;
//       box.style.backgroundColor = getRandomHexColor();
//       boxesContainer.appendChild(box);

//       width += 10;
//       height += 10;
//     }
//   }

//   function destroyBoxes() {
//     const boxesContainer = document.getElementById('boxes');
//     boxesContainer.innerHTML = '';
//   }

//   const createBtn = document.querySelector('[data-create]');
//   const destroyBtn = document.querySelector('[data-destroy]');

//   createBtn.addEventListener('click', createBoxes);
//   destroyBtn.addEventListener('click', destroyBoxes);


// method 2
  function createBoxes() {
    const amount = parseInt(document.querySelector('input').value);

    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert('mag lagay ka 1 to 100 lang lods');
      return;
    }

    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      

      size += 10;
    }
  }

  function destroyBoxes() {
    document.getElementById('boxes').innerHTML = '';
  }

  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');

  createBtn.addEventListener('click', createBoxes);
  destroyBtn.addEventListener('click', destroyBoxes);