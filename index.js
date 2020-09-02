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
});
