
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const emailInput = loginForm.email;
      const passwordInput = loginForm.password;

    // standardized way
    //   const emailInput = loginForm.elements.email;
    //   const passwordInput = loginForm.elements.password;
   



    //   if (!emailInput.value || !passwordInput.value) {
    //     alert('Please fill in all fields');
    //     return;
    //   }

      if (emailInput.value === '' || passwordInput.value === '' ) {
        alert('Please fill in all fields');
        return;
      }

      const dataForm = {
        email: emailInput.value,
        password: passwordInput.value
      };

      console.log(dataForm);
      loginForm.reset();
    });
