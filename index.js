//accessing the form from HTML
const MyFormEl = document.querySelector(".myForm")
const myInput = document.querySelector(".myInput")
const ulEl = document.querySelector(".myList")



//add an event listener to the form and prevent it from autoloading when you submit
MyFormEl.addEventListener("submit", (event)=>{
    event.preventDefault();

    //call a function to access the rest of the form. It will be rendered here
    myToDoList()
}) 

function myToDoList() {
    //we need to access the input same way we did the form
    //then we need to add new task 

    const newTask = myInput.value;
    //create a new list element 
    const liEl = document.createElement("li")
    //connect the new task to the created element
    liEl.innerHTML = newTask
    //to add a new task, there is need to append the newly created list element to unordered list
    //meaning we must access the unorderded list first
    ulEl.appendChild(liEl)
    //after typing a task, we need the input to remain empty 
    myInput.value = ""

    //next for the icons to lie beside the task
    //we must access them

    const firstButton = document.createElement("div")
    firstButton.innerHTML = `<i class="fa-solid fa-circle-check">`
    //append it to the list 
    liEl.appendChild(firstButton)

    const secondButton = document.createElement("div")
    secondButton.innerHTML = `<i class="fa-regular fa-trash-can">`
    liEl.appendChild(secondButton)

    //we now need to add event listener to icons to enable checked and deleted 

    firstButton.addEventListener("click", ()=>{
        liEl.classList.toggle("clicked")
    })

    secondButton.addEventListener("click", ()=>{
        liEl.remove()
    })

}





