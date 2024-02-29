var guessCount = 0;

function clickButton() {
    guessCount += 1;
    var returnText = document.getElementById('return');
    returnText.textContent = guessCount + " Cookies Collected";
}