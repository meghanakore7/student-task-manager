function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let list = document.getElementById("taskList");

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    list.appendChild(li);

    input.value = "";
}