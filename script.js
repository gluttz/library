let myLibrary = [
    {title: "The Hobbit",
    author: "J.R.R Tolkien",
    pages: 647,
    read: true}
];

const form = document.querySelector('#formField')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newSubmit = new FormData(form);
    const Obj = Object.fromEntries(newSubmit);
    const newBook = new Book(Obj)
    console.log(Obj);
    console.log(newBook);

});

function Book(...args){
    this.title = args.title;
    this.author = args.author;
    this.pages = args.pages;
    this.read = args.read;
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





