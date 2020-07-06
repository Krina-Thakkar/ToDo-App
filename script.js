var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");
var deleteBtns = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	li.appendChild(btn);
 	btn.onclick = removeParent;
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleonoff(event){
	if(event.target.tagName==="LI"){
		event.target.classList.toggle("done");
	}
}

function deleteButton(){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	items[i].appendChild(btn);
	btn.onclick=removeParent;
}

for(i=0;i<items.length;i++){
deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 

ul.addEventListener("click",toggleonoff); 
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

