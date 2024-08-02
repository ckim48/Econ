
var taskForm = document.getElementById('task-form');
var taskInput = document.getElementById('task-input');
var taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(e){
	e.preventDefault(); // It prevents refreshing the page when user click the submit button
	addTask(taskInput.value);
	console.log("Clicked");
});

taskList.addEventListener('click', function(e){
	if(e.target.classList.contains('delete')){
		e.target.parentElement.remove();
	}
});

function addTask(task){
	var li = document.createElement('li'); // <li></li>
	li.textContent = task; // <li>Soccer</li>
	var deleteButton = document.createElement('button'); // <button></button>
	deleteButton.textContent = "Delete"; // <button>Deletes</button>
 	deleteButton.classList.add('delete');  // <button class="delete">Deletes</button>

 	li.appendChild(deleteButton); // <li>Soccer<button class="delete">Deletes</button></li>
	taskList.appendChild(li);
};
