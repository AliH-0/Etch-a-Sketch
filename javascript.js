const container = document.querySelector("#container");

for (let i=0; i< 16;i++){
  let row = document.createElement("div");
   container.appendChild(row).className = "row";
    for(let x=0; x<=16;x++){
        let column = document.createElement("div");
        row.appendChild(column).className = "column";
    }
}