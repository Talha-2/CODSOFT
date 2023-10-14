

let string = "";
let inputField = document.querySelector('input'); // Select the input field

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                inputField.value = string;
                string = " ";
            }
            else if (e.target.innerHTML == 'C') {
                string = " ";
                inputField.value = string;
            }
            else {
                console.log(e.target);

                string = string + e.target.innerHTML;
                inputField.value = string;
            }
        } catch (error) {
            // Handle any errors here, e.g., display an error message.
            inputField.value = "Error";
            string = "";
        }
    });
});
