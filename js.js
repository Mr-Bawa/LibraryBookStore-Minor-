let libraryForm=document.getElementById('libraryForm');
const tbody=document.getElementById('tbody');
tbody.innerHTML=localStorage.getItem('book-data');

let myAlert=document.querySelector('.toast');
let bsAlert=new bootstrap.Toast(myAlert);

function deletes(d){
    const rowIndex=(d.parentNode.parentNode.rowIndex);
    const delRow=document.getElementsByTagName('tr')[rowIndex];
    const t_body=document.getElementsByTagName('tbody')[0];
    t_body.removeChild(delRow);
    localStorage.setItem('book-data',tbody.innerHTML);
}
a=0;
bookdata=``;
class Book{
    constructor(bookName,author,catagory){
        this.bookName=bookName
        this.author=author
        this.catagory=catagory
    }
}
class bookDisplay{
    constructor(book){
        this.book=book
    }
    addBook(){
        a++
        bookdata += `<tr><th scope="row">${a}</th>
                        <td>${this.book.bookName}</td>
                        <td>${this.book.author}</td>
                        <td>${this.book.catagory}</td>
                        <td><button class="btn btn-danger" onclick={deletes(this)}>Delete</button></td></tr>    `
        tbody.innerHTML =bookdata
        console.log(bookdata)
        localStorage.setItem('book-data',bookdata)
    }
}


var libraryFormSubmit=(e)=>{
    e.preventDefault();
    
    const bookname=document.getElementById('bookName').value;
    const author=document.getElementById('authorName').value;
    const adventure=document.getElementById('adventure');
    const coding=document.getElementById('coding');
    const cooking=document.getElementById('cooking');
    
    let catagory='';
    if(adventure.checked){
        catagory='Adventure';
    }
    else if(coding.checked){
        catagory='Coding';
    }
    else{
        catagory='Cooking';
    }
    const book=new Book(bookname,author,catagory);
    const displayBook= new bookDisplay(book);
    displayBook.addBook();

    let toastBody=document.getElementsByClassName("toast-body").innerHTML = "Added";
    console.log(document.getElementsByClassName("toast-body"));
    bsAlert.show();
}
libraryForm.addEventListener('submit',libraryFormSubmit);