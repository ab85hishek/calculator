let screen = document.getElementById("screen");
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        console.log("pressed key is: ", buttonText);

        if (buttonText == "=") {
            screen.value = eval(screenValue);
            

        }else if(buttonText== "AC"){
            screenValue = "";
            screen.value = screenValue;
        }

        else if(buttonText == "⌫"){
            screenValue = screenValue.slice(0,-1);
            screen.value = screenValue;
        }
        
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}