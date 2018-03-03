self.addEventListener('fetch', function(event){
// Hi-jack the requst! 
event.respondWith(
     new Response('<h1>Hello World</h1>', {
         headers: {'Content-Type': "text/html"}
     })
 );
 // want only .jpg's?
 //if(event,request.url.endsWith('.jpg')){
 //    event.respondWith(
 //        fetch('/imgs/dr-evil.gif')
 //    );
 // }
});