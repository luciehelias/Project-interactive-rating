const ratingState = document.querySelector(".rating-state");
const ratingNumber = document.querySelector(".rating-number");
const submitButton = document.querySelector(".submit-button");
const thanksMessage = document.querySelector(".thanks-message");
const selectedNumberText = document.querySelector(".selected-number");

const numberList = ratingNumber.getElementsByTagName("button");

let selectedRating = null;

for (let i = 0; i < numberList.length; i++){
    const button = numberList[i]
    button.addEventListener ('click', function(){
        selectedRating = i + 1
     })
}

submitButton.addEventListener('click', function() {
    if (selectedRating) {
        selectedNumberText.textContent = `You selected ${selectedRating} out of 5`;
        ratingState.style.display = 'none';
        thanksMessage.style.display = 'flex';
    } else {
        alert('Please select a rating before submitting.');
    }
});
