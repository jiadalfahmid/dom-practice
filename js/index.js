document.getElementById("post").addEventListener("click", function () {
  const p = document.createElement("p");
  p.innerText = document.getElementById("newComment").value;
  const newComment = document.getElementById("comments");
  newComment.appendChild(p);
  document.getElementById("newComment").value = "";
});