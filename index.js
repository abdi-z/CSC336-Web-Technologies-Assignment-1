console.log("working");

let d = new Date();

window.onload = function () {
  datefunc();
};

function datefunc() {
  document.getElementById("date").innerHTML = `${d.getDate()} / ${
    d.getMonth() + 1
  } /  ${d.getFullYear()}`;
}
