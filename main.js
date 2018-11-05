// console.log($().jquery) // check the version of jQuery being used

(function($){
    // console.log('inside the iife');
    // $("#results").html(`<pre>${JSON.stringify(o,null,2)}</pre>`)

    $('#get-all').on('click', function(e){
        $.get('http://jsonplaceholder.typicode.com/posts', function(data){
            // console.log(data);
            $("#results").html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        });
    });

    $('#get-10').on('click', function(e){
        $.get('http://jsonplaceholder.typicode.com/posts/10', function(data){
            // console.log(data);
            $("#results").html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        });
    });

    $('#get-comments').on('click', function(e){
        $.get('http://jsonplaceholder.typicode.com/posts/12/comments', function(data){
            // console.log(data);
            $("#results").html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        });
    });

    $('#get-all-post-2').on('click', function(e){
        $.get('http://jsonplaceholder.typicode.com/user/2/posts', function(data){
            // console.log(data);
            $("#results").html('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
        });
    });





})(jQuery);