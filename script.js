let myLibrary = [];
let hardCodedBooks = [{
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: 647,
        read: true
    },
    {   title: "Fahrenheit 451",
        author: "Ray Bradbury",
        pages: 256,
        read: false
    },
    {   title: "Slaughterhouse-Five",
        author: "Kurt Vonnegut",
        pages: 190,
        read: true
    }];
for(obj of hardCodedBooks){
    let hardBook = new Book(obj);
    myLibrary.push(hardBook);
}

//Form Submit Event Listener and new Book
const form = document.querySelector('#formField')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newSubmit = new FormData(form);
    const Obj = Object.fromEntries(newSubmit);
    if(Obj.read === "on"){
        Obj.read = true;
    }else{
        Obj.read = false;
    }
    const newBook = new Book(Obj);
    myLibrary.push(newBook);
    displayLibrary();
    closeForm();
});
//Book constructor
function Book(args){
    this.title = args.title;
    this.author = args.author;
    this.pages = args.pages;
    this.read = args.read;
}
Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}
//Form open/close
function openForm() {
    document.getElementById("myform").style.display = "flex";
  } 
function closeForm() {
    document.getElementById("myform").style.display = "none";
  }
//myLibray display
//when DOM loaded
//iterate through myLibrary array of objects
//for each object create a card

document.addEventListener("DOMContentLoaded", displayLibrary());

function displayLibrary(){
    assignIndex();
    resetLibrary();
    for(obj of myLibrary){
        let cardContainer = document.getElementById('card-container');
        let card = document.createElement("div");
        card.setAttribute('class', `card card-${obj.index}`);
        let title = document.createElement("h2");
        title.textContent = `Title: ${obj.title}`
        let close = document.createElement("button");
        close.setAttribute("onclick", "removeBook()");
        close.textContent = "X"
        let author = document.createElement("h3");
        author.textContent = `Author: ${obj.author}`;
        let pages = document.createElement("span");
        pages.textContent = `Pages: ${obj.pages}`;
        let readed;
        if(obj.read){
            readed = document.createElement("input");
            readed.setAttribute("type", "checkbox");
            readed.setAttribute("checked", "checked");
            readed.setAttribute("id", "read")
            readed.style.scale = ".5";
        }else{
            readed = document.createElement("input");
            readed.setAttribute("type", "checkbox");
            readed.setAttribute("id", "read")
            readed.style.scale = ".5";
        }
        let readLabel = document.createElement("span")
        readLabel.setAttribute("class", "read-label");
        readLabel.textContent = "Read:";
        
        card.appendChild(title);
        card.appendChild(close);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readLabel);
        card.appendChild(readed);
        cardContainer.appendChild(card);
    }
}

function assignIndex(){
    let index = 0;
    for(obj of myLibrary){
        obj.index = index;
        index++
        console.log(obj)
    }
}

function resetLibrary(){
    let open = document.querySelector("#card-container");
    open.innerHTML = '<button class="open-button" onclick="openForm()">+</button>';
}

function removeBook(){
    console.log(this);
    
}




