const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages  = pages;
  this.read = read;
} 

Book.prototype.toggleRead=function(){
  this.read =!this.read;
}
function toggleRead(index){
  myLibrary[index].toggleRead();
  render();
}

function render(){
    let libraryEl=document.querySelector('#library');
    libraryEl.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
       let book = myLibrary[i];
       let bookEl = document.createElement("div");
       bookEl.setAttribute("class", "book-card");
       bookEl.innerHTML = `
       <div class ="card-header">
          <h2 class = "title">${book.title}</h2>
          <h4 class = "author">${book.author}</h4>
        </div>
        <div class = "card-body">
          <p>${book.pages}</p>
          <button class = "read-status">${book.read ? "Read" : "Not Read Yet"}</button><br><br>
          <button class= "toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button><br><br>
          <button class="remove" onclick="removeBook(${i})">REMOVE</button><br><br>
        </div>`
        ;
       libraryEl.appendChild(bookEl);
    }
}

function removeBook(index){
  myLibrary.splice(index, 1);
  render();
}


function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let page = document.querySelector('#page').value;
  let readStatus = document.querySelector('input[name="r-button"]:checked');
  let read = readStatus ? readStatus.value : ""; 
  //let read = document.querySelector('#read').checked;
  let newBook = new Book(title, author, page, read);
  myLibrary.push(newBook);
  render();
}

let newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener("click", function(){
    let newBookForm = document.querySelector('#new-book-form');
    console.log(newBookForm);
    newBookForm.style.display ="block";
     
})
document.querySelector('#new-book-form').addEventListener("submit",function(event){
    event.preventDefault();
    addBookToLibrary();
})

