//check this 
//https://codepen.io/-J0hn-/pen/vxPPwB?limit=all&page=5&q=e+commerce


$(document).ready(function($){
    smoothAnchors();
});



/**
 * Behaviors UX
 */
function smoothAnchors(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
}

/**
 * Open product Details
 */
$('.product').on('click',function(element){
    //#1 - acquire the selected product
    var productId = element.currentTarget.id;    
    
    $('.modal-body').load('product-detail.php', {productId: productId, productName: "test"},function(){
        $('#myModal').modal({show:true});
    });
});
