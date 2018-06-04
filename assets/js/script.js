$( document ).ready(function() {

                $("#about_scroll").fadeOut();
                $("#profile_scroll").fadeOut();
                $("#works_scroll").fadeOut();
                $("#blog_scroll").fadeOut();
                $("#contact_scroll").fadeOut();

                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#profile").click(function(){
                    $("#index").fadeOut();
                    $("#profile_scroll").fadeIn();
                    $('#profile_left').addClass('animated slideInLeft');
                    $('#profile_right').addClass('animated slideInRight');
                    });
                $("#works").click(function(){
                    $("#index").fadeOut();
                    $("#works_scroll").fadeIn();
                    $('#works_left').addClass('animated slideInLeft');
                    $('#works_right').addClass('animated slideInRight');
                    });
                $("#blog").click(function(){
                    $("#index").fadeOut();
                    $("#blog_scroll").fadeIn();
                    $('#blog_left').addClass('animated slideInLeft');
                    $('#blog_right').addClass('animated slideInRight');
                    });
                $("#contact").click(function(){
                    $("#index").fadeOut();
                    $("#contact_scroll").fadeIn();
                    $('#contact_left').addClass('animated slideInLeft');
                    $('#contact_right').addClass('animated slideInRight');
                    });

                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });

		});
