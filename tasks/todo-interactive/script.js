let completedTasks = document.querySelectorAll('li');

for (let i = 0; i < completedTasks.length; i++) {
    let task = completedTasks[i];

    task.addEventListener('click', () => {
        task.classList.toggle('completed')
    })
}
