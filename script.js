//check this 
//https://codepen.io/-J0hn-/pen/vxPPwB?limit=all&page=5&q=e+commerce

//On Load Store
$(document).ready(function($){
    smoothAnchors(); //Setup smooth for anchors in page
    setupProductModal(); //Setup modal for product details
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
function setupProductModal(){
    $('.product').on('click',function(element){
        //#1 - acquire the selected product
        var productId = element.currentTarget.id;    
        
        $('.modal-body').load('product-detail.php', {productId: productId, productName: "test"},function(){
            //show modal
            $('#myModal').modal({show:true});
            //add handler on Add to cart, with product id selected
            $('#myModal .add-cart-btn').on('click', function(event) {
                purchaseProduct(productId);
            });
        });
    });
    
}


/**
 * On Purchase Product
 */
function purchaseProduct(productId){
    console.log(productId);
}