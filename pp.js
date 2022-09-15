const dropdowns =document.querySelectorAll('.dropdown');
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

  
    //read more

    const readMoreBtn = document.querySelector(".read-more-btn");
    const text = document.querySelector(".text");
    
    readMoreBtn.addEventListener("click", (e) => {
      text.classList.toggle("show-more");
      if (readMoreBtn.innerText === "Read More") {
        readMoreBtn.innerText = "Read Less";
      } else {
        readMoreBtn.innerText = "Read More";
      }
    });
    
   

  function myFunction1(smallImg){
    var fullImg=document.getElementById("imageBox");
    fullImg.src=smallImg.src;
  }
  
  
  
   function incrementValue(e) {
     e.preventDefault();
     var fieldName = $(e.target).data('field');
     var parent = $(e.target).closest('div');
     var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
     if (!isNaN(currentVal)) {
         parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
     } else {
         parent.find('input[name=' + fieldName + ']').val(0);
     }
  }
  
  function decrementValue(e) {
     e.preventDefault();
     var fieldName = $(e.target).data('field');
     var parent = $(e.target).closest('div');
     var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
     if (!isNaN(currentVal) && currentVal > 0) {
         parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
     } else {
         parent.find('input[name=' + fieldName + ']').val(0);
     }
  }
  
  $('.input-group').on('click', '.button-plus', function(e) {
     incrementValue(e);
  });
  
  $('.input-group').on('click', '.button-minus', function(e) {
     decrementValue(e);
  });
  
  $(document).ready(function() {
      $(".megamenu").on("click", function(e) {
          e.stopPropagation();
      });
  });
  
  
  var modal1 = document.getElementById("exampleModalCenter");
  
  
  
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
  
  
  
  
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  