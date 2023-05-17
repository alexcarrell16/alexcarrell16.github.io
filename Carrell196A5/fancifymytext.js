function showAlert(){
    document.getElementById('textArea').style.fontSize = '24px';
}

function radioButtonChange(){
    var textArea = document.getElementById('textArea');
    var fancyButton = document.getElementById('fancyShmancy');
    var boringButton = document.getElementById('boringBetty');

    if(fancyButton.checked) {
        textArea.style.fontWeight = 'bold';
        textArea.style.color = 'blue';
        textArea.style.textDecoration = 'underline';
    }
    if (boringButton.checked) {
        textArea.style.fontWeight = 'normal';
        textArea.style.color = 'black';
        textArea.style.textDecoration = 'none';
    }
}

function convertToUppercaseAndMoo() {
    var textArea = document.getElementById('textArea');
    textArea.value = textArea.value.toUpperCase();
    var textAreaString = textArea.value;
    var partsOfString = textAreaString.split(".");
    textAreaString = partsOfString.join("-Moo.");
    textArea.value = textAreaString;
}