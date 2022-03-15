# Simon_Game

I used an 'index.html' and 'styles.css' files provided by Angela [Yu]'s Web Dev Bootcamp on Udemy. I added Javascript, initially following the tutorial, 
but then I decided to strike out on my own and do most of it just reasoning out what I needed. I had a lot of trouble with the asynchronous aspect (use
of the 'setTimeout' function) and with layering new 'click' event listeners perpetually. Looking at the Bootcamp's solution code, I'm not sure how it
prevents this. I had to use the 'off' method to remove the click event listener after 'gameOver' to prevent a second, then third, etc. listener from 
duplicating / triplicating each click (which resulted in new game over instantly in most cases). 
