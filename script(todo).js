const btn = document.getElementById("btn")
// console.log(btn);
btn.addEventListener('click', () => {
    const inputtask = document.getElementById("inputtask")
    const task = inputtask.value.trim()
    // console.log(task);
    if (task == "")
        return alert("Please Enter a task")


    // three element 1->Text 2->tick 3->delete
    const li = document.createElement('li') //creating li element
    li.classList.add("list-group-item") //adding class to li


    const span = document.createElement('span') //creating span element
    span.innerText = task //adding the input text into span
    span.classList.add('task-text'); // Add the new class here 
    li.appendChild(span) //appending the span in li element


    const tick = document.createElement('i') //icon tick <i class="bi bi-check2"></i>
    tick.classList.add('bi', 'bi-check2', 'fs-4', 'text-success')
    li.appendChild(tick) //appending the li in li element

    tick.addEventListener('click', () => {
        span.classList.toggle('tickclickstyle', ) //!toggle!
        
    })

    const del = document.createElement('i')
    del.classList.add('bi', 'bi-trash', 'fs-4', 'text-danger')
    li.appendChild(del)
    del.addEventListener('click', () => {
        li.remove() //removing the li from ul
    })


    document.getElementById('list').appendChild(li) //list is the id of ul tag
    //appendinng the li element to the ul tag 

    inputtask.value = '' // This will empty the input field after clicking the addtask btn
})