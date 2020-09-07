var getPersonBtn = document.getElementById("getPersonBtn");
const form = document.getElementById("info");
const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");
const inputDate = document.getElementById("date");
const selectStudy = document.getElementById("study");
const modal = document.querySelector(".modal");
const content = document.querySelector(".content");
let arr = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!validate(inputName, inputAge, inputDate, selectStudy)) {
    inputName.classList.add("error");
    inputAge.classList.add("error");
    inputDate.classList.add("error");
    selectStudy.classList.add("error");
  } else {
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    inputDate.classList.remove("error");
    selectStudy.classList.remove("error");
  }

  arr.push(inputName.value);
  arr.push(inputAge.value);
  arr.push(inputDate.value);
  arr.push(selectStudy.value);
  arr.forEach((item) => {
    content.innerHTML += `${item}<br>`;
  });
});

// function validate(input) {
//   return !!input.value;
// }

function validate(input) {
  if (!input.value) {

    return false;
  }
  return true
}

const modalWrapper = document.querySelector(".modal-wrapper");
const closeBtn = document.querySelector("#closeBtn");

getPersonBtn.addEventListener("click", () => {
  modalWrapper.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});