const dropdowns =document.querySelectorAll('.dropdown-content');
dropdowns.forEach(dropdown => {
   const select =dropdown.querySelector('.select')
   const caret =dropdown.querySelector('.caret')
   const menu =dropdown.querySelector('.menu')
   const options =dropdown.querySelectorAll('.menu li')
   const selected =dropdown.querySelector('.selected')

})
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//cookie

$(".close").on("click", function () {
  $(".cookie").css("display", "none");
  $(".fadefade").fadeOut();
});

$(".acceptButton").on("click", function () {
  $(".cookie").css("display", "none");
  $(".fadefade").fadeOut();
  localStorage.setItem("cookie", "done");
})

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


let popUp = document.getElementById("cookiePopup");
//When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
  //Create date object
  let d = new Date();
  //Increment the current time by 1 minute (cookie will expire after 1 minute)
  d.setMinutes(2 + d.getMinutes());
  //Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  //Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});
//Check if cookie is already present
const checkCookie = () => {
  //Read the cookie and split on "="
  let input = document.cookie.split("=");
  //Check for our cookie
  if (input[0] == "myCookieName") {
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    //Show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};
//Check if cookie exists when page loads
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};
//Buy Now Button functionality

function incrementButton(){
  var element=document.getElementById("incrementText");
  var value=element.innerHTML;

  ++value;

  document.getElementById("incrementText").innerHTML=value;
}

function incrementButtonHeart(){
  var element=document.getElementById("incrementHeart");
  var value=element.innerHTML;

  ++value;

  document.getElementById("incrementHeart").innerHTML=value;
}


    //login

    $(".loginAccept").on("click", function () {
      var str = document.getElementById("myInput").value;
      if (str.match(/[a-z]/g) && str.match(
          /[A-Z]/g) && str.match(
              /[0-9]/g) && str.match(
                  /[^a-zA-Z\d]/g) && str.length >= 6)
          console.log("Correct password type");

      else
          alert("Enter the correct password type");
  });

  function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  //loadmorebutton

 
  fetch("books.json")
  .then(response => response.json())
  .then(books => {
    localStorage.setItem("books", JSON.stringify(books));
  });
  
  let container = document.querySelector(".contentload");
  let loadMoreButton = document.querySelector(".contentload button");
  let loadItems = 4;
  function loadData(){
    let books = JSON.parse(localStorage.getItem("books"));
    let currentDisplayedItems = document.querySelectorAll(".book").length;
    
    let out = "";
    let counter = 0;
    for(let book of books){
      if(counter >= currentDisplayedItems && counter < loadItems + currentDisplayedItems){
        out += `
          
        <div class="col-sm-3">
        <div class="thumb-wrapper">
          <div class="img-box">
          <img src="${book.image}"   class="image card-img-top" height="250px" width="100px">							
          </div>					
            <div class="card-body">
              <h5 class="card-title">
              ${book.title}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
              ${book.price}
              </h6>
          </div>						
        </div>
  
  
  
  
              
        `;
      }
      counter++;
    }

  
    let div = document.createElement("div");
    container.insertBefore(div, loadMoreButton);
    div.innerHTML = out;	
    div.style.opacity = 0;
  
    if(document.querySelectorAll(".book").length == books.length){
      loadMoreButton.style.display = "none";
    }
    fadeIn(div);
  }
  function fadeIn(div){
    let opacity = 0;
    let interval = setInterval(function(){
      if (opacity <= 1) {
        opacity = opacity + 0.1;
        div.style.opacity = opacity;
      }else{
        clearInterval(interval);
      } 
    }, 30);
  }
  
  const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
  if(!menu.classList.contains("active")){
    return;
  }
  if(e.target.closest(".menu-item-has-children")){
     const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
   hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
   toggleMenu();
})
closeMenu.addEventListener("click",() =>{
   toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
  toggleMenu();
})
function toggleMenu(){
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

 
