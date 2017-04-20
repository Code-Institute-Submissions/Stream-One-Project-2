var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("myCarousel");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}



/************
Confirmation of form submission
************/

if (submit clicked) {}

<h3>Thank you for your request, your form has been submitted</h3>
}



if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true


form.submit({
  success: function() {
  	$('#message').html('<p>Thank you for your request.</p>');
    // code here
  }
});



