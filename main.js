//setup
let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");
numberInput.addEventListener("input", getFactFetch);

// api call with Ajax
function getFactAjax() {
  let numberFact = numberInput.value;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://numbersapi.com/" + numberFact);
  xhr.onload = function() {
    if (xhr.status == 200 && numberFact != "") {
      fact.style.display = "block";
      factText.innerText = this.responseText;
    }
  };

  xhr.send();
}

// api call with fetch()
function getFactFetch() {
  let numberFact = numberInput.value;

  fetch("http://numbersapi.com/" + numberFact)
    .then(response => response.text())
    .then(data => {
      if (numberFact != "") {
        fact.style.display = "block";
        factText.innerText = data;
      }
    })
    .catch(err => console.log("err"));
}
