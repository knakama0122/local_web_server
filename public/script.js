function addItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}  


//might be better to change the id of the li to a unique id to prevent hazards
function addItemKen(){
    var ul = document.getElementById("ken-list");
    var candidate = document.getElementById("listItem");
    //li will hold all the elements per line
    //the id of the li will be set to the value from the input text;
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);

    //creating a new input for li
    var input = document.createElement("input");
    var button = document.createElement("button");
    input.setAttribute('value', candidate.value);
    button.setAttribute('id', candidate.value);
    button.setAttribute('class', 'removeBtn');
    button.innerHTML = '-';
    // button.addEventListener('onclick', removeItemKen(candidate.value));
    // button.setAttribute = ('onclick', removeItemKen(candidate.value));
    // button.onclick = function() {
    //     //create on delete function to put here;
    //     console.log("delete pressed from li: " + candidate.value);
    //     removeItemKen(candidate.value);
    // };


    ul.addEventListener("click", e => {
        if(e.target && e.target.matches('button.removeBtn')){
            console.log("remove from " + e.target.id + " " + e.target.nodeName);
            var curr = document.getElementById(e.target.id);
            if(curr !== null)
                ul.removeChild(curr);
            // removeItemKen(e.target.id);
        }
    })
    //add input and button to li
    li.appendChild(input);
    li.appendChild(button);

    ul.appendChild(li);
}

function removeItemKen(id){
    var ul = document.getElementById("ken-list");
    var li = document.getElementById(id);
    if(li !== null)
        ul.removeChild(li);
}