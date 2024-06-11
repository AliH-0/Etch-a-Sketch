function hover(box) {
    
    box.addEventListener('mouseenter', () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        box.style.background = randomColor;
     });
}
function makeGrid(size) {

    for (let i=0; i< size;i++){
        const container = document.querySelector("#container");
        let row = document.createElement("div");
         container.appendChild(row).className = "row";
          for(let x=0; x<=size;x++){
              let column = document.createElement("div");
              row.appendChild(column).className = "column";
              hover(column);
          }
      }
}



function CreateGrid() {
    container.innerHTML = "";
    const size = prompt("Please enter the size you want the grid to be:");

    if(Number.isInteger(+size) && +size > 0 && +size <=100){
        makeGrid(size)
    }
    else {
        alert("Please insert a number (less than 100)!")
        CreateGrid();
    }
}
makeGrid(16);
createButton.addEventListener("click", CreateGrid);