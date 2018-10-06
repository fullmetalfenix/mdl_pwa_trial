

# Gmdl_pwa_trial
Google Material Design Lite Service Worker / PWA Starter Trial 


## About this project:
**Goal:** this project has been done to help further my understanding of the practical application and utilization of service workers on a website for aiding in the betterment of the user experience while offline or on spotty connections (lie-fi) to the internet. This work was done while taking part in Udacity's Grow with Google Challenge.

**Background:** Some time ago around when Google had first released the specifications for material design it came to my attention that frameworks that utilizes these design specs where popping up and I, as a developer who is definitely not a designer, decided it may be beneficial to try my hand at one of these frameworks. The two front runners for me where GMDL and Materialize so to help me chose between the two I built two small projects in both to test. While I liked the elements of both I eventually chose to work in materialize because I felt that the syntax was a little easier to understand as well as more performant at the time. Please note that some of this GMDL project was just me copying and pasting components to see how they looked, some was me seeing how much I could edit them so I really don't remember how much was boilerplate and how much is my own. Now here I was with this project in GMDL that was not being used and when I started thinking of a trial project for this course I decided to take a waist not want not approach and see if I can recycle this project and squeeze more knowledge out if by outfitting it with a service worker - Here were my goals:

1. Operational Service worker that caches local resources
2. Caches url resources
3. As an extra little challenge - serve up 404 content if a resource is not found ( I saw it on the course and want to try something similar). 

This project did not go off without a hitch but rather than present you with revisionist history I have not gone back and corrected the code in the different branches, but rather commented on mistakes in the file or here in the read me as I remember them. Also, each step has a corisponding branch that goes along with it that can be checked out by copying and pasting the step title. So without further aude:


### 1. git checkout starting-out

This is the initial code I started out with - its a fake coffee house site, I was just seeing what I could add and playing around with the components that MDL had to offer. Some of it may be boiler plate, there may be artifacts from code past in it I honestly don't know -I haven’t really checked it since beginning this phase of the project so hopefully nothing embarrassing but who knows (edit: I worried myself and checked – should be good), I’m just concerned with adding the service worker. _One note_: there is a space for a google map embed - if you want this up and running just add your own key where the comments indicate, and it should work fine.  

### 2. git checkout manafest-added

I know its not required, but I used a google workshop on PWA's to supplement the material in this course and this was the first step - I could have left it out but honestly I really wanted to see the effect that having a manifest would have on the lighthouse audit score. You can check it out yourself here by comparing [the initial site](https://fullmetalfenix.github.io/gmdl-initial/) to [the final version](https://fullmetalfenix.github.io/gmdl-with-sw/) _Note:_ I know I spelled manifest wrong in the branch name, it was late in the day

### 3. git checkout would-you-like-to-register

Here’s where the fun starts - I added sw.js which contained the skeletal structure of the service worker. I also added the code in the header of index.html test for service worker support and registers the service worker, along with providing the scope and a little error handling. *_Note:_* you don't need the scope, or you can re-define it here if you want to try it out locally and want to change the name of the folder it’s in

### 4. git checkout arrrr-hi-jack-requests

Now we start to fill out sw.js! Here we intercept the fetch request from the browser and tell it what to respond with. Right now it is just checking if it’s a 404 (resource not found) error but it’s being set up to check if the resource is cached.

### 5. git checkout setting-up-the-cache

OK, I’m sure the branch name gave it away but here we set up the cache. We open a cache on fetch (this will be changed to install nest but I found it was still working with the fetch event listener so I found it easier to leave it for this step). This step caches all the resources hosted locally in the cache "coffee-4". Whys it coffee-4? Well its a coffee site and I burned through the names coffee-1 - 3 while debugging. Really it could be called just about anything. 

### 6. git checkout cached-offline---done-zo

Done, service worker up and running! the main thing to remember is to change the event listener over to "install" at this point for the cache and fetch for handling the response to a fetch event. What’s going on in the fetch event listener? Its checking to see if the resource being requested is in ANY of the current caches and if it is responding with using the cache. If not, it is then checking the status of the response and if the status is 404 displaying a go back link (try it out by tacking something on to the url in the browser) . If the response does not have a 404 status it returns the response (not from the cache, but its fetched).  _Note:_ This 404 page thing was a "Can I" not "Should I" type of thing - I have not thought about the consequences of what would cause a 404 error to return from a resource request AT ALL while making this project so if you want you can just leave that bit out by deleting the tacked on .then() on line 33 of sw.js

And there we have it! It took some time to figure a few things out as far as streamlining a good way to debug this properly while I was going along (with bumping the cache version and forcing the install on reload etc.) and reconfiguring the 404 thing but overall I feel that mixing some academic knowledge with a real world (though still academic I guess) project has given me a much better understanding of the practical use of service workers so I consider it a success! Really, thank you if you took the time to read this and I’m open to any suggestions on how it could be better. 

Thats all folks!
