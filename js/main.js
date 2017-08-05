//jQuery Function to change heading color into color theme
$(document).ready(function () {
    var mainHeadings = $('h1');
    mainHeadings.css({'color': '#78895f'});

    var subHeadings = $('h2');
    subHeadings.css({'color': '#78895f'});
});

//Java function to let user know that they are about to submit the form or cancel the submission
var x = document.getElementById('mySubmit');
x.addEventListener('click', myFunction);

function myFunction() {
    alert('You are about to submit your form');
}

var y = document.getElementById('myReset');
y.addEventListener('click', secondFunction);

function secondFunction() {
    alert('You are about to cancel your submission');
}
