
// ~~~~~~~~~~~~~~~~~~~~~~~Get Input filed Value by ID~~~~~~~~~~~~~~~~~~~~~~~~//

function getInputValue(id){
    const InputValue =document.getElementById(id).value;
    const InputValueNumber = parseFloat(InputValue);
    return InputValueNumber;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~get text field value by ID~~~~~~~~~~~~~~~~~~~~~~~~~~//
function getTextValue(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

