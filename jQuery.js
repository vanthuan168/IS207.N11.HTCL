//Navbar hover tab
$('html').mouseover(function(event){
    var arr = ["watch-list-men", 'watch-chain-men', 'watch-list-women', 'watch-chain-women'];
    var i;
    $('.nav-item__product--tab-link').mouseover(function(event){
        for(i = 0; i< arr.length; i++) {
            if (arr[i] == $(event.target).attr('name')) {
                $('.' + arr[i]).css('display', 'flex');
            } else {
                $('.' + arr[i]).hide();
            }
        }
    })

    if (jQuery.inArray($(event.target).attr('name'), arr) == -1){
        $('.watch-list-men').hide();
        $('.watch-chain-men').hide();

        $('.watch-list-women').hide();
        $('.watch-chain-women').hide();

    }
})
$('.subnav-product__tabcontent').mouseover(function(event){
    event.stopPropagation();
})

//Modal
$(document).ready(function(){
    // Cart modal
    $('html').click(function(event){
        if ($(event.target).closest('#cart').length > 0){
            $('.cart-modal').css('display', 'block');
            $('.nav-overlay__cart').show();
        }
        else {
            $('.cart-modal').css('display', 'none');
            $('.nav-overlay__search').hide();
        }
    })
    $('.cart-modal-close-icon').click(function(){
        $('.cart-modal').css('display', 'none');
        $('.nav-overlay__cart').hide();
    })
    $('.nav-overlay__cart').click(function(){
        $('.cart-modal').css('display', 'none');
        $('.nav-overlay__cart').hide();
    })
    $('.cart-modal').click(function(event){
        event.stopPropagation();
    })

    //Search modal 
    $('html').click(function(event){
        if ($(event.target).closest('#search').length > 0){
            $('.search-modal').css('display', 'block');
            $('.nav-overlay__search').show();
        }
        else {
            $('.search-modal').css('display', 'none');
            $('.nav-overlay__search').hide();
        }
    })
    $('.search-icon__close').click(function(){
        $('.search-modal').css('display', 'none');
        $('.nav-overlay__search').hide();
    })
    $('.nav-overlay__search').click(function(){
        $('.search-modal').css('display', 'none');
        $('.nav-overlay__search').hide();
    })
    $('.search-modal').click(function(event){
        event.stopPropagation();
    })

    //Account modal
    $('html').click(function(event){
        if ($(event.target).closest('#account').length > 0){
            $('.account-modal').css('display', 'flex');
            $('.nav-overlay__search').show();
        }
        else {
            $('.account-modal').css('display', 'none');
            $('.nav-overlay__search').hide();
        }
    })
    $('.account__header--close').click(function(){
        $('.account-modal').css('display', 'none');
        $('.nav-overlay__search').hide();
    })
    $('.nav-overlay__search').click(function(){
        $('.account-modal').css('display', 'none');
        $('.nav-overlay__search').hide();
    })
    $('.account-modal').click(function(event){
        event.stopPropagation();
    })
})
