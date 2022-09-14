

// Set all carousel items to the same height
function carouselNormalization() {
        
    window.heights = [], //create empty array to store height values
    window.tallest; //create variable to make note of the tallest slide
    console.log("JQQQQ44Q!")
    
    function normalizeHeights() {

        jQuery('.carousel-inner .carousel-item').each(function() { //add heights to array
            window.heights.push(jQuery(this).height());
            console.log("w");
        });

        console.log(window.heights);
        window.tallest = Math.max.apply(null, window.heights); //cache largest value
        jQuery('.carousel-inner .carousel-item').each(function() {
            jQuery(this).css('min-height',window.tallest + 'px');
            console.log("tallest:", window.tallest);
        });
    }
    normalizeHeights();

    jQuery(window).on('resize orientationchange load', function () {
        
        window.tallest = 0, window.heights.length = 0; //reset vars
        jQuery('.carousel-inner .carousel-item').each(function() {
            jQuery(this).css('min-height','0'); //reset min-height
        }); 
        
        normalizeHeights(); //run it again 

    });
    
}

    carouselNormalization();
