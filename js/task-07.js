const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

    fontSizeControl.addEventListener("input", function () {
      const fontSizeValue = fontSizeControl.value + "px";
      textSpan.style.fontSize = fontSizeValue;
    });




    // try iba

    // fontSizeControl.addEventListener("input", control  );
    // function control() {
        
    //     const fontSizeValue = fontSizeControl.value + "px";
    //     textSpan.style.fontSize = fontSizeValue; 
    // };.
    


