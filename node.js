
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

//Buy Now Button functionality

function incrementButton(){
  var element=document.getElementById("incrementText");
  var value=element.innerHTML;

  ++value;

  document.getElementById("incrementText").innerHTML=value;
}
//heart minicart 
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
  
  let container = document.querySelector(".row4");
  let loadMoreButton = document.querySelector(".row4 button");
  
  let initialItems = 4;
  let loadItems = 4;
  
  function loadInitialItems(){
    let books = JSON.parse(localStorage.getItem("books"));
    let out = "";
    let counter = 0;
    let container = document.querySelector(".row4");
    let loadMoreButton = document.querySelector(".row4 button");
    
    let initialItems = 4;
    let loadItems = 4;
    
    for(let book of books){
          
      if(counter < initialItems){
        out += `
        
        <div class="col-lg-3 mb-3">
              <div class="card w-100 h-100">
                  <div class="img">
                      <img src="${book.image}" alt="" class="image card-img-top" height="250px" width="100px">
                     

                  </div>
                  <div class="card-body">
                      <h5 class="card-title">
					  ${book.title}
                      </h5>
                      <h6 class="card-subtitle mb-2 text-muted">${book.price}</h6>
                     
                  </div>
              </div>
          </div>
  
          
          
        `;
      }
      counter++;
    
    }
  
    let div = document.createElement("div");
    container.insertBefore(div, loadMoreButton);
    div.innerHTML = out;	
  }
  function loadData(){
    let books = JSON.parse(localStorage.getItem("books"));
    let currentDisplayedItems = document.querySelectorAll(".book").length;
    let container = document.querySelector(".row4");
    let loadMoreButton = document.querySelector(".row4 button");
    
    let initialItems = 4;
    let loadItems = 4;
    
    let out = "";
    let counter = 0;
    for(let book of books){
      if(counter >= currentDisplayedItems && counter < loadItems + currentDisplayedItems){
        out += `
          
       <div class="col-lg-3 mb-3">
              <div class="card w-100 h-100">
                  <div class="img">
                      <img src="${book.image}" alt="" class="image card-img-top" height="250px" width="100px">
                     

                  </div>
                  <div class="card-body">
                      <h5 class="card-title">
					  ${book.title}
                      </h5>
                      <h6 class="card-subtitle mb-2 text-muted">${book.price}</h6>
                     
                  </div>
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

$(document).ready(function () {


  //scroll

  $(".scroll-to-top").on("click", function () {
      $("html, body").animate({
          scrollTop: 0
      }, 100);
  });
  //read more link 
  $(".read-more").on("click", function () {
      $(".read-more").css("display", "none");
      $(".more").css("display", "inline");
  })
  //change image
  $(".mini-pdp-image").on("mouseover", function () {
      $(".model-image-main")[0].attributes[0].nodeValue = $(this)[0].attributes[0].nodeValue;
  })
  //load-more

  $(".load-more").on("click", function () {
      loadMore(loadKeys[loadCounter + 1]);
      loadCounter = loadCounter + 1;
  });

  // current year
  const paragraph = `
  <p>
    &copy;Copyright ${new Date().getFullYear()} <br>All Right Reserved.
  </p>
`;
  document.getElementById('copyright').innerHTML = paragraph;
  // Print 
  $(".printPage").on("click", function() {
      $(".navbar").addClass("d-none");
      $(".general-footer").addClass("d-none");
      $(".printPage").addClass("d-none");
      $(".list-group").parent().parent().addClass("d-none");
      $(".popular-accurate").addClass("d-none");
      $(".osf-cards").addClass("d-none");
      $(".information-container").addClass("d-none");
      $(".breadcrumb").addClass("d-none");
      $(".pdp-title").addClass("d-none");
      window.print();
      $(".navbar").removeClass("d-none");
      $(".general-footer").removeClass("d-none");
      $(".printPage").removeClass("d-none");
      $(".list-group").parent().parent().removeClass("d-none");
      $(".popular-accurate").removeClass("d-none");
      $(".osf-cards").removeClass("d-none");
      $(".information-container").removeClass("d-none");
      $(".breadcrumb").removeClass("d-none");
      $(".pdp-title").removeClass("d-none");
  })







});
var loadMore = function (key) {
    $.ajax({
        url: "./books.json", success: function (response) {
            if (response[key] !== "fail" && response[key] !== undefined) {
                loadMoreSuccess(response, key);
            } else {
                alert("Cannot load more.");
            }

        }, failure: function () {
            alert("Cannot load more.");
        }
    });
}

var loadMoreSuccess = function (response, key) {
    var fourCardHtml = "";
    response[key].forEach(function (elem, index) {
        
        var cardHtml = '<div class="col-lg-3 mb-3">' +
            ' <div class="card w-100 h-100">' +
            '<div class="img">'+
            '<img src="' + elem.img + '"alt="" class="image card-img-top" height="250px" width="100px">' +
            '<div class="overlay w-100 h-100">'+
            '<button class="btn btn-circle btn-circle-xl mb-2"  onclick="incrementButton()"><i class="fa fa-plus add"></i></button>'+
            '<button class="btn btn-circle btn-circle-xl mb-2" onclick="incrementButtonHeart()"><i class="fa fa-heart heart" ></i></button>'+
          '</div>'+
            '<div class="card-body">' +
            '<h5 class="card-title">' + elem.cardText + '</h5>' +
            '<h6 class="card-subtitle mb-2 text-muted">>$ ' + elem.price + '</h6>' +
            '</div>' +
            '</div>' +
            '</div>' 

        fourCardHtml = fourCardHtml + cardHtml;
        if (index === (response[key].length - 1)) {
            $(".to-add-cards").append(fourCardHtml);
            $(".osf-cards").addClass("pb-4");
        }
    });
}

 //get-keys from json

 var loadCounter = 0;
 var loadKeys = {
     "1": "firstCall",
     "2": "secondCall",
     "3": "thirdCall"
 }

 

