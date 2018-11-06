/// <reference path="../_typings/jquery.d.ts" /> 

// var $ = "😈";

/**
 * Create IIFE (Immediately Invoked Function Expression). 
 * Now jQuery will be referenced as $ inside the function.
 * */ 
(function($){

    $('#get-all').on('click', function(e){
        $.get('https://jsonplaceholder.typicode.com/posts', function(data){
            // console.log(data);
            $("#results").html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        });
    });

    $('#get-10').on('click', function(e){
        $.get('https://jsonplaceholder.typicode.com/posts/10', function(data){
            // console.log(data);
            $("#results").html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        });
    });

    $('#get-comments').on('click', function(e){
        $.get('https://jsonplaceholder.typicode.com/posts/12/comments', function(data){
            // console.log(data);
            $("#results").html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        });
    });

    $('#get-all-post-2').on('click', function(e){
        $.get('https://jsonplaceholder.typicode.com/user/2/posts', function(data){
            // console.log(data);
            $("#results").html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        });
    });

})(jQuery);