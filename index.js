const getPersonBtn = document.getElementById("getPersonBtn");
getPersonBtn.addEventListener("click", function () {
  const inputName = document.getElementById("name");
  const inputAge = document.getElementById("age");
  const inputdate = document.getElementById("date");
  const selectStudy = document.getElementById("study");
  name = inputName.value;
  age = inputAge.value;
  date = inputdate.value;
  study = selectStudy.value;
  console.log(name, age, date, study);
});

document.body.style.background = "red";
setTimeout(() => (document.body.style.background = ""), 1000);
