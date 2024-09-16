document.getElementById("input").addEventListener("keyup", function (event) {
  const text = event.target.value;
  if (text === "delete") {
    document.getElementById("btn").removeAttribute("disabled");
  } else {
    document.getElementById("btn").setAttribute("disabled", true);
  }
});

document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("delete-text").style.display = "none";
});
