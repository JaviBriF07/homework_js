let fields = document.querySelectorAll("#person-form input");
let personObject = {};

fields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    personObject[property] = value;
    console.log(personObject); 
  });
});

const tableBody = document.getElementById("people-list")

let element = document.querySelector("#my-button")
element.addEventListener("click", (resetEvent) => {
    let tableRow = document.createElement("tr")
    tableBody.appendChild(tableRow)
    let deleteBtn = document.createElement("button")
    const classAdd = deleteBtn.classList;
    classAdd.add("btn","btn-outline-info","btn-sm");
    deleteBtn.textContent = "x"
    for (let prop in personObject) {
        injectTextNodeToTableRow(tableRow, personObject[prop], deleteBtn)
    }
    resetEvent.target.parentNode.parentNode.reset()
})



function injectTextNodeToTableRow(tableRow, text, deleteBtn) {
    let cell = document.createElement("td")
    let textNode = document.createTextNode(`${text}`)
    cell.appendChild(textNode)
    tableRow.appendChild(cell)
    tableRow.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", (event) => {
        event.target.parentNode.remove()
    })
}




