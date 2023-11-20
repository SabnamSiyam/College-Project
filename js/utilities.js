// console.log('utilities connected');

// lets make fuction for get input field value by id---->>>

function getInputFieldValueById(inputId) {
  const inputFieldElement = document.getElementById(inputId);
  const inputFieldStringValue = inputFieldElement.value;
  const inputFiledNumbericValue = parseFloat(inputFieldStringValue);
  inputFieldElement.value = "";
  if (isNaN(inputFiledNumbericValue)) {
    alert("Please input the valid amount.!!");
    return 0;
  } else {
    return inputFiledNumbericValue;
  }
}

// lets make fuction for get text element value by id---->>>

function getTextElementValueById(inputId) {
  const getTextElemnt = document.getElementById(inputId);
  const getTextElementStringValue = getTextElemnt.innerText;
  const getTextElementValue = parseFloat(getTextElementStringValue);
  return getTextElementValue;
}

// lets set the value for Text element by id------>>>>>
function setTextElementValueById(ElementId, newValue) {
  const textElement = document.getElementById(ElementId);
  textElement.innerText = newValue;
}

// input firld value for login and password --------------**
function getInputFieldValueForLoginById(inputId) {
  const inputFieldElement = document.getElementById(inputId);
  const inputFieldStringValue = inputFieldElement.value;
  inputFieldElement.value = "";
  return inputFieldStringValue;
}


// Function for Navbar outsite project *****
function search() {
  window.location.href = 'https://bn.wikipedia.org/wiki/%E0%A6%AE%E0%A7%81%E0%A6%A8%E0%A7%8D%E0%A6%B8%E0%A7%80%E0%A6%97%E0%A6%9E%E0%A7%8D%E0%A6%9C_%E0%A6%AA%E0%A6%B2%E0%A6%BF%E0%A6%9F%E0%A7%87%E0%A6%95%E0%A6%A8%E0%A6%BF%E0%A6%95_%E0%A6%87%E0%A6%A8%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%9F'
}

function notice() {
  window.location.href = 'https://bteb.gov.bd/site/view/notices'
}


function btebHome() {
  window.location.href ='https://bteb.gov.bd/'
}