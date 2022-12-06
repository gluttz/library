let myLibrary = [
    {title: "The Hobbit",
    author: "J.R.R Tolkien",
    pages: 647,
    read: true}
];

const form = document.querySelector('#formField')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newBook = new FormData(form);
    const Obj = Object.fromEntries(newBook);
    const json = JSON.stringify(Obj);
    localStorage.setItem('form', json);
    const newLib = new Book(form);
    console.log(newLib)
});

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function openForm() {
    document.getElementById("myform").style.display = "flex";
  }
  
function closeForm() {
    document.getElementById("myform").style.display = "none";
  }





