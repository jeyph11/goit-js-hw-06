
var inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', function () {
  var enteredValue = inputElement.value;

  var validLength = parseInt(inputElement.getAttribute('data-length'));
  if (enteredValue.length === validLength) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
  } else if (enteredValue == "") {
    inputElement.classList.remove('invalid');
    inputElement.classList.remove('valid');
  } else {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
  }
});