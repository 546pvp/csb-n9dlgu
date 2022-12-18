var cell = document.getElementsByClassName("grid-item");

cell[0].onclick = function () {
  this.style.backgroundColor = "black";
  this.status = "black";
};
cell[1].onclick = function () {
  this.style.backgroundColor = "black";
  this.status = "black";
};
cell[2].onclick = function () {
  this.style.backgroundColor = "black";
  this.status = "black";
};
cell[3].onclick = function () {
  this.style.backgroundColor = "black";
  this.status = "black";
};
cell[4].onclick = function () {
  this.style.backgroundColor = "black";
  this.status = "black";
};
cell[5].onclick = function () {
  this.style.backgroundColor = "black";
  this.status = "black";
};
cell[6].onclick = function () {
  this.style.backgroundColor = "black";
  this.status = "black";
};
cell[7].onclick = function () {
  this.style.backgroundColor = "black";
  this.status = "black";
};
cell[8].onclick = function () {
  this.style.backgroundColor = "black";
  this.status = "black";
};
function updateCells() {
  if (cell[3].status === "black" && cell[5].status === "black") {
    cell[3].status = "#2196f3";
    cell[3].style.backgroundColor = "#2196f3";
    cell[5].status = "#2196f3";
    cell[5].style.backgroundColor = "#2196f3";
    cell[4].status = "black";
    cell[4].style.backgroundColor = "black";
  }
  if (cell[0].status === "black" && cell[1].status === "black") {
    cell[0].status = "#2196f3";
    cell[0].style.backgroundColor = "#2196f3";
    cell[1].status = "#2196f3";
    cell[1].style.backgroundColor = "#2196f3";
    cell[2].status = "black";
    cell[2].style.backgroundColor = "black";
  }
  if (cell[2].status === "black" && cell[5].status === "black") {
    cell[3].status = "black";
    cell[3].style.backgroundColor = "black";
  }
  if (
    cell[2].status === "black" &&
    cell[4].status === "black" &&
    cell[6].status === "black"
  ) {
    cell[2].status = "#2196f3";
    cell[2].style.backgroundColor = "#2196f3";
    cell[6].status = "#2196f3";
    cell[6].style.backgroundColor = "#2196f3";
    cell[0].status = "black";
    cell[0].style.backgroundColor = "black";
    cell[8].status = "black";
    cell[8].style.backgroundColor = "black";
  }
}
setInterval(updateCells, 1000);
