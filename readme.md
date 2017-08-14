#Thinx

The challenge was to create a page similar to the one found on ssense. 

At first glance, I was thinking in my head how do I do this in the easiest way possible. 

I broke it down into steps. I knew I had done some of the front end features before, such as the black to be always on, and quantity, but having the image almost feel like a paralax was something new to me.

I read up more about positioning, and figured out that the image can be constantly scrolling while everything stays in place, which to me had a very direct feel, and I defintely want to use that in the next front end project I do.

After getting the left static text in place, along with the images, the right text took a bit longer, styling wise and just getting the jquery features correctly. 

The last step was positioning the bottom images with corresponding links. 

Finally was making it mobile. A good tip to remember is always check your meta tags. I thought I had it mobile responsive, until realizing I was missing one meta tag. 

Making it mobile responsive was the most challenging to me. I had to change the 'sticky' images to become a carousel. My initial thought was I'm going to use a front end library flickity.
Using flickity made it so much easier, but flickity still has it flaws, Even though there is a css break, Flickity at times will not respond to adding a class in jquery, so my option of 
`if($(window).width() >= 414){
  $('.main').addClass('.main-carousel')
 }
 `
wouldn't work.

I would have to hard code it and using css when the dimensions hit 414px the 'sticky' photos wouldn't be rendered and the flickity carousel would. 

It was an unorthodox way of getting around and making ends to a means.

This challenge was particularly really fun for me. I would be at work writing down notes on how to get certain features working, and after work I would rush home to get it done. If a day at Thinx, is like this, I'd do my best to make the site look amazing. 

Thank you for the opportunity. 










