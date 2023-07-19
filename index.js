
var Book_markInput= document.getElementById("bookmarkName");
var Book_urlInput= document.getElementById("bookmarkURL");
var addbtn = document.getElementById("submitBtn");
var updatebtn = document.getElementById("updateBtn");
var myalert = document.getElementById("myalert");
var closebtn = document.getElementById("closeBtn")

var BookWebsiteList;
//localStorage
if(localStorage.getItem("productlist")==null){
    BookWebsiteList = []
}
else{
    BookWebsiteList=JSON.parse(localStorage.getItem("productlist"))
    displaydata()
}
var bookWebsite;
/*ADD BOOK WEBSITE*/
function addbook(){
    if(validationsite()==true){
        var bookWebsite ={
            name: Book_markInput.value,
            url: Book_urlInput.value
        }
        BookWebsiteList.push(bookWebsite)
        localStorage.setItem("productlist",JSON.stringify( BookWebsiteList))
        displaydata()
        clearform()
    }
    else{
       myalert.classList.replace('d-none','d-block')
    }
}
/*clear the crud */
function clearform(){
    document.getElementById("bookmarkName").value="";
   document.getElementById("bookmarkURL").value="";
}
/* DISPLAY THE LIST OF BOOK WEBSITE*/ 
function displaydata(){
    var temp='';
   for(var i=1;i< BookWebsiteList.length;i++){
    temp+=`
    <div class="but d-flex justify-content-center align-items-center">
          <button onclick="sendupdate(`+i+`)" class="btn btn-update px-5 d-none" id="updateBtn">Update</button>
    </div>
    <tr>
    <td>`+i+`</td>
    <td>`+BookWebsiteList[i].name+`</td>
    <td>
        <button class="btn btn-visit"  onclick=" visitBook(`+i+`)"><a href="`+BookWebsiteList[i].url+`"><i class="fa-solid fa-eye"></i>  visit</a></button>
    </td>
    <td>
    <button class="btn btn-update" onclick="updatebook(`+i+`)"><i class="fa-solid fa-pen"></i> Update</button>
    </td>
    <td>
        <button class="btn btn-delete" onclick=" deletBook(`+i+`)"><i class="fa-solid fa-trash-can"></i>  Delete</button>
    </td>
   </tr>`
   }
  document.getElementById("mydata").innerHTML=temp
}
//delete bookwebsite
function deletBook(index){
    BookWebsiteList.splice(index,1)
    localStorage.setItem("productlist",JSON.stringify( BookWebsiteList))
    displaydata()
}
/*visit bookwebsite */
function visitBook(){
    document.getElementById("cont").innerHTML = BookWebsiteList[i].url;
}
/*update bookwebsite */
function updatebook(index){
    addbtn.classList.replace('d-block','d-none')
    updatebtn.classList.replace('d-none','d-block')
    Book_markInput.value=BookWebsiteList[index].name;
    Book_urlInput.value=BookWebsiteList[index].url;
    

}

/*sendupdate */

function sendupdate(index){
    addbtn.classList.replace('d-none','d-block')
    updatebtn.classList.replace('d-block','d-none')
    if(validationsite()==true){
        BookWebsiteList[index].name=Book_markInput.value;
        BookWebsiteList[index].url = Book_urlInput.value;
        localStorage.setItem("productlist",JSON.stringify( BookWebsiteList[index]))
        displaydata()
        clearform()
    }

}
//delete bookwebsite
function deletBook(index){
    BookWebsiteList.splice(index,1)
    localStorage.setItem("productlist",JSON.stringify( BookWebsiteList))
    displaydata()
}
/*validation */
function validationsite(){
    var regrex=/^https?:\/\//;
    return regrex.test(Book_urlInput.value)==true;
}
/*close alert */
function closealert(){
    myalert.classList.replace('d-block','d-none')
}