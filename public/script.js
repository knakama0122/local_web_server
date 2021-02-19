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
    input.setAttribute('class', "textBox");
    button.setAttribute('id', candidate.value);
    button.setAttribute('class', 'removeBtn');
    button.innerHTML = '-';

    if(typeof ul.hasListener == 'undefined'){
        ul.hasListener = true;
        ul.addEventListener("click", remove())
    }

    //add input and button to li
    li.appendChild(input);
    li.appendChild(button);

    ul.appendChild(li);
    candidate.value = "";
}

    function remove(){
    var handler = function(e){
        if(e.target && e.target.matches('button.removeBtn')){
            console.log("remove from " + e.target.id + " " + e.target.nodeName);
            var curr = document.getElementById(e.target.id);
            var ul = document.getElementById('ken-list');

            if(curr !== null)
                ul.removeChild(curr);
        }
    }
    return handler;
}