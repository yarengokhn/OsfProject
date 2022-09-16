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

var loadMore = function (key) {
  $.ajax({
      url: "./js/newCards.json", success: function (response) {
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
var loadCounter = 0;
var loadKeys = {
    "1": "firstCall",
    "2": "secondCall",
    "3": "thirdCall"
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

$(".load-more").on("click", function () {
  loadMore(loadKeys[loadCounter + 1]);
  loadCounter = loadCounter + 1;
});

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

