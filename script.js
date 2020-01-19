var inputData = document.querySelector("Input[type='text']");
var ulSpisok = document.querySelector("ul");
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var aboutBtn = document.getElementById('about');

function deleteTodo() {
	for(let span of spans){     // let - для избавления от бага первого удаления 
		span.addEventListener("click", function() {
			span.parentElement.remove();
			event.stopPropagation();
		})
	}
}

function loadTodo(){
	if(localStorage.getItem('TodoApplication')){
		ulSpisok.innerHTML = localStorage.getItem('TodoApplication');
	}
	deleteTodo();
}

// addEventListener - обработчик события

inputData.addEventListener("keypress", function(keyPressed){ // проверка на Enter
	if(keyPressed.which === 13 & this.value != ""){
	var newLi = document.createElement("li");
	var newSpan = document.createElement("span");
	newSpan.innerHTML = "Удалить";
	
	let date = new Date();  // текущая дата
	var newTodo = this.value;
	this.value ="";
	//if (newTodo !== "") {
		ulSpisok.appendChild(newLi).append(newSpan, newTodo + date); // создаем (добавляем) задачу
	//}
	deleteTodo();

	}
})

saveBtn.addEventListener('click', function(){
	localStorage.setItem('TodoApplication', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function(){
	ulSpisok.innerHTML='';
	localStorage.setItem('TodoApplication', ulSpisok.innerHTML);
});

aboutBtn.addEventListener('click', function(){
	alert('Яковлев МФ разработал -)');
});


deleteTodo();

loadTodo();
