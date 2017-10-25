/**
 * Created by zivlevy on 20/01/2017.
 */
let myHeader = document.getElementById("myHeader");
let myButton = document.getElementById("myButton");
let myList = document.getElementById("myList");
let myListItems = myList.getElementsByTagName("li");
let myInput = document.getElementById("myInput");
let btnSkin = document.getElementById("btnskin");
let counter = 1;

for (let i = 0; i < myListItems.length; i++) {
    addLiEventListener(myListItems[i]);
}

// adding event listeners
function addLiEventListener(li) {
    li.addEventListener('click', listItemClicked);
}

myButton.addEventListener('click', addListItem);
btnSkin.addEventListener('click',changeSkin);

function addListItem() {
    let li = document.createElement('li');

    if (myInput.value === "") {
        li.innerHTML = "New item " + counter;
        counter++;
    } else {
        li.innerHTML = myInput.value;
        myInput.value="";
    }
    li.addEventListener('click', listItemClicked);

    myList.appendChild(li);
}

function listItemClicked(e) {
    e.stopPropagation();
    //remove active class from others
    for (i = 0; i < myListItems.length; i++) {
        myListItems[i].classList.remove("active");
    }
    //add event listener to this item
    this.classList.add("active");

    if (e.shiftKey) {
        deleteListItem(this);
    } else {
        //change the header
        myHeader.innerHTML = this.innerHTML;
    }
}


function deleteListItem(element) {
    element.parentNode.removeChild(element);
}
document.addEventListener('click', documentClicked);

function documentClicked() {
    console.log('doc clicked')
}

function changeSkin(){
    let link=document.getElementById("link");
    if (link.getAttribute("href")==="style.css") {
        link.setAttribute("href","style-new.css");
    } else {
        link.setAttribute("href","style.css");
    }
    
}