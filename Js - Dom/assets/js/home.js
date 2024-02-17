document.getElementById("lampBtn").addEventListener("click", function () {
  var body = document.body;
  if (body.classList.contains("bg-warning")) {
    body.classList.remove("bg-warning");
    body.classList.add("bg-dark");
  } else {
    body.classList.remove("bg-dark");
    body.classList.add("bg-warning");
  }
});
