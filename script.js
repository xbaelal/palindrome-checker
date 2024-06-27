const checkBtn = document.getElementById("check-btn");
const resultBox = document.getElementById("result")
const textInput = document.getElementById("text-input");
function pal() {
  const query = textInput.value;
  if (!query) {
     alert('Please input a value');
    return;
  
  }
  }
function getInput() {
    let userInput = textInput.value.toLowerCase().match(/[a-z0-9]/g)

    if(userInput.join('') === userInput.reverse().join('')){
      resultBox.textContent = `${textInput.value} is a palindrome`
    }else {
      resultBox.textContent = `${textInput.value} is not a palindrome`
    }
}  
checkBtn.addEventListener('click', getInput);