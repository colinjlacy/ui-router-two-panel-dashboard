# UI Router Two-Panel Dashboard

This is a simple demo to match a mockup I was shown at work one day.  The idea was that on a small screen, only one column would show, and when clicked, an item in a list would open a different view with information about that item.  On larger screens, both the list, and the information view would be visible at the same time.  This was a great time to work with off-canvas layout matched with the Angular UI-Router and some pub/sub relationships to handle data.

## Demo

First of all, the demo lives here, [on Heroku](https://calm-bastion-9733.herokuapp.com/#/).

When you first open it, you'll see a list of Pearl Jam songs.  Depending on the size of your screen, it'll either be a single-column layout, or a two-column with a massive empty space asking you to click on a song.  

### On small screens:

When you click on a song, the viewport will shift as data is brought in over a mock REST call, populating the view model which, in this case, is the title and lyrics to the Pearl Jam song you picked.  Once that action is complete, the list will be off-canvas, and the lyrics panel will be in view.  When you click the *close* button, the controller will unset the active song, and will bring you back to the list of songs to choose from.
 
### On large screens:

Since you have a lot more real estate, you don't get the off-canvas action.  Instead, when you click a song, you'll see the lyrics panel appear with the corresponding lyrics to the song you picked.  If you click the close button, the panel will disappear; or if you click another song, the lyrics will be replaced.  
 
## The point

The goal was to demonstrate that one view could be used for both mobile and desktop dashboard functionality.  Instead of Pearl Jam songs and Pearl Jam lyrics, these corresponding child-views could be tasks to keep track off, events to plan, etc.   

## Points of improvement

I only gave myself a morning to do this, and am about an hour over as of the time of this writing.  So here are a few points of improvement that I'll admit were omitted, but can be implemented on an actual project bound for production:
* on larger screens, each column should scroll independently.
* the lyrics panel should be animated on load - probably a nice fade-in-up would do.
* the lyrics panel disappears as the close animation shifts the viewport on smaller screens.  Seems a bit jarring, so in the future it would probably be better to wait until the animation is complete before unsetting the `$scope.activeSong`.
* I've got a known bug in the router, where it's not being initialized at the domain root.  Instead, in order to get the router to catch, I have to route directly to the `/#/` path.  I've debugged before, and this time honestly just didn't have the patience.