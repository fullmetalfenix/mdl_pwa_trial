self.addEventListener('fetch', function(event){
    // Hi-jack the requst! 
    event.respondWith(
        fetch(event.request).then(function(response){
            if (response.status == 404) {
              return new Response("Not Found! <a href='index.html'>Go Back</a>", {
                headers: {'Content-Type': "text/html"}
                });
                //   Or erase that and respond with a proper 404 page:
                //   event.respondWith(
                //   fetch('404-page.html')
            }
            return response;
        }).catch(function(){
            return new Response("nope!")
        })
     );
    });