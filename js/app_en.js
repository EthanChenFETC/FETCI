$(document).ready(function(){

    var Header = '/base/header_en.html';

    //  Loading Header
    if (window.FETC.Current_Header == "home") {
        Header = '/base/index_header.html';
    }

    $("#header").load(Header, function(){
        // Header = Header + "?" + new Date().getTime();
        $("#maincss").load();
        //  Loading nav
        jQuery("#navWrap").load('/base/nav_en.html', function(){
            //header navigation dropdown
            jQuery('#navWrap ul li').hover(
                function(){
                    if (!jQuery(this).hasClass('hover')){
                        jQuery(this).addClass('hover');
                        jQuery(this).find('.ddNav').show();
                    }

                },
                function(){
                    var thisli = jQuery(this);
                    jQuery(this).find('.ddNav').hide(0, function(){
                        thisli.removeClass('hover');
                    });
                }
            );



        });



    });

   
    //  Loading Footer
    $("#footer").load('/base/footer_en.html', function(){

    });

    //  Loading Sub Nav.
    if (window.FETC.Current_SubNav != '') {
        $("#innerNav").load(window.FETC.SubNav[window.FETC.Current_SubNav], function(){
            
        });
    }

    //run once when ready
    jQuery('#headBanner .sideNav').delay(200).animate({
        marginLeft: '0px'
    }, 500);

    //check ie version
    var isIE = function(ver) {
        var b = document.createElement('b')
        b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
        return b.getElementsByTagName('i').length === 1
    }

    
        
});