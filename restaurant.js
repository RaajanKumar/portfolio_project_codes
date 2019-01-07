 /*

 Both Javascript and Jquery slide shows are used in this project. Jquery is used for the "Our Story" section in the second panel of the web page and Vanilla Javascript is used for the "Customer Pictures" section towards the bottom.
 
 */
 
 
 $(document).ready(function(){
    //JQUERY Slideshow ("Our Story" Section)//
    var InfiniteRotator =
    {
        init: function()
        {
            var initialFadeIn = 800;
 
            var itemInterval = 4000;
 
            var fadeTime = 2500;
 
            //count number of items
            var numberOfItems = $('.rotating-item').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
     
}); 


//------------------------------------------------------------//
//------------------------------------------------------------//


//Start of 'Vanilla' JavaScript Slideshow ("Valued Customer Pictures" Section)

//Variables
var i = 0;
var images = [];
var time = 4000;


//Images list
images[0] = "customer-pics1.jpg";
images[1] = "customer-pics2.jpg";
images[2] = "customer-pics3.jpg";

//Function Start
function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
   

    setTimeout("changeImg()", time);
}

window.onload = changeImg;


//End of 'Vanilla JavaScript Slideshow





