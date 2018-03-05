
self.addEventListener('fetch', function(event){ //still on fetch so it updates more often (personal preference when debugging this part, should be install really)
    event.waitUntil(
        caches.open('coffee-4').then(function(cache){
            return cache.addAll([
              'index.html',
              '5.jpg',
              '6.jpg',
              '7.jpg',
              '10.jpg',
              '14.jpg',
              '16.jpg',
              '21.jpg',
              '22.jpg',
              'coffee.jpg',
              'index.html',
              'styles.css',
              'bower_components/jquery/dist/jquery.min.js',
              'bower_components/material-design-lite/material.min.css',
              'SVG/barista-icons_coffee-shop-sign.svg'
            ])
        })
    );

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
   


