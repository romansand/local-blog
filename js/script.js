(function(){
    if (window.localStorage !== undefined) {
        

        $('.post-btn').click(function() {
            var inputTitle = $('.input-title').val(), 
                inputContent = $('.input-content').val();
            post(inputTitle, inputContent);
            $('#addBlog').modal('toggle'); 
        });

        $('.delete-all-btn').click(function() {
            localStorage.clear();
            $('#deleteAll').modal('toggle');
            loadBlog();
        });

        $('.not-delete').click(function() {
            $('#deleteAll').modal('toggle');
        });

        function post(title, content) {
            if (title !== '' || content !== '') {
                var index = localStorage.length + 1,
                    obj = {title: title, content: content};
                localStorage.setItem(index, JSON.stringify(obj));
                updateBlog(index);
                //clearing form fields
                $('.input-title').val(''),
                $('.input-content').val('');
            }
        }

        function updateBlog(i) {
            $('.post').append(
                '<div class="blog-title"><h3>'
                    + JSON.parse(localStorage.getItem(i)).title + '</h3></div>' +
                '<div class="blog-content"><p>'
                    + JSON.parse(localStorage.getItem(i)).content +'</p></div>');
        }

        function loadBlog() {
            if (localStorage.length > 0) {
                for (var key in localStorage) {
                    $('.post').append(
                        '<div class="blog-title"><h3>'
                            + JSON.parse(localStorage.getItem(key)).title + '</h3></div>' +
                        '<div class="blog-content"><p>'
                            + JSON.parse(localStorage.getItem(key)).content +'</p></div>');
                }
            } else $('.post').empty();
        }

    loadBlog();
    } 
    else {
        $('button').hide();
        console.log('Not supported!')
        $('.not-support').html('<h4>Sorry, your browser is not supported</h4>');
    }
    
})();