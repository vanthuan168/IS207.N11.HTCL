
$('html').mouseover(function(event){
    $('.nav-item__product--tab-link').mouseover(function(event){
        // Men
        if ($(event.target).attr('name') == 'watch-list-men') {
            $('.watch-list-men').css('display', 'flex');
            $('.tab-overlay').show();
        } else {
            $('.watch-list-men').hide();
            $('.tab-overlay').hide();

        }

        if ($(event.target).attr('name') == 'watch-chain-men') {
            $('.watch-chain-men').css('display', 'flex');
            // $('.tab-overlay').show();
        } else {
            $('.watch-chain-men').hide();
            // $('.tab-overlay').hide();

        }
        //Women
        if ($(event.target).attr('name') == 'watch-list-women') {
            $('.watch-list-women').css('display', 'flex');
            // $('.tab-overlay').show();
        } else {
            $('.watch-list-women').hide();
            // $('.tab-overlay').hide();

        }

        if ($(event.target).attr('name') == 'watch-chain-women') {
            $('.watch-chain-women').css('display', 'flex');
            // $('.tab-overlay').show();
        } else {
            $('.watch-chain-women').hide();
            // $('.tab-overlay').hide();

        }

    })
    if ($(event.target).attr('name') != 'watch-list-men' && $(event.target).attr('name') != 'watch-chain-men' && $(event.target).attr('name') != 'watch-list-women' && $(event.target).attr('name') != 'watch-chain-women'){
        $(event.target).remove('active')
        $('.watch-list-men').hide();
        $('.watch-chain-men').hide();

        $('.watch-list-women').hide();
        $('.watch-chain-women').hide();
        // $('.tab-overlay').hide();

    }
})
$('.subnav-product__tabcontent').mouseover(function(event){
    event.stopPropagation();
})

