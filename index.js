var getPersonBtn = document.getElementById("getPersonBtn");
const form = document.getElementById("info");
const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");
const inputDate = document.getElementById("date");
const selectStudy = document.getElementById("study");
form.addEventListener("submit", function (event) {
  if (!validate(inputName, inputAge, inputDate, selectStudy)) {
    inputName.classList.add("error");
    inputAge.classList.add("error");
    inputDate.classList.add("error");
    selectStudy.classList.add("error");
  } else {
    name = inputName.value;
    age = inputAge.value;
    date = inputDate.value;
    study = selectStudy.value;
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    inputDate.classList.remove("error");
    selectStudy.classList.remove("error");
  }

  console.log(name, age, date, study);
  event.preventDefault();
});

function validate(input) {
  return !!input.value;
}
var modal = document.getElementById("my_modal");
// var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

getPersonBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
