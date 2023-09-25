# React State Exercises
This exercise gives you some practice working with props, defaultProps, state, and simple click events in React.

You’ll also get more experience setting state and binding event handlers. Really important stuff!

For each exercise: make a new React project with create-react-app.

## Part 1: Coin Flip
For this part, create a coin flipping counter.

The user should be able to click on a button to flip a coin. Every time the user clicks, the coin gets flipped again. The app should also keep track of how many times heads and tails have shown up.

Before building anything, think about the structure of your React app. Don’t build this application with a single component: think about how to break your app up into at least two separate components!

Here’s some inspiration:

![ezgif com-crop (1)](https://github.com/Avishek-kr/flip-coin-react/assets/23341110/6de300d4-c464-4a54-9c3c-caedc0c674f7)

If you’d like, get creative and come up with your own coin faces! If you want to use the same coin as I did, you can find the images here:

Heads:”https://tinyurl.com/react-coin-heads-jpg” Tails: “https://tinyurl.com/react-coin-tail-jpg”


## Part 2: Color Boxes
For this part, you should show a series of 16 boxes (a box is just square div with a background color).

Initially, each box should have a background color chosen from a random list of colors.

When you click any box:

it should change its color to a different random color.
Here’s some inspiration:

![colors](https://github.com/Avishek-kr/flipcoin-and-colobox-react/assets/23341110/06c6a977-0ccc-49ba-9e81-292ed5494110)

**Downward Data Flow?**

For this exercise, you might need to violate the “children are dumber than their parents” rule of thumb, since each box will probably need to have its own color state, while the parent container doesn’t really need to be smart.

One of the further study points is to see if you can design the app to make the container smarter than the child boxes. This is quite advanced though, so be careful if you go down this path!

### Further Study
Default Properties
For both parts, there are opportunities to move some things into default properties:

the list of possible colors for boxes
the number of boxes (so it doesn’t always have to be 16!)
the sides and images for the coin being flipped

### Color Boxes Data Flow
Try to make the parent container of color boxes hold all the state. It’s a little tricky with what we know now. We’ll cover it soon, once we talk about react events in detail. Don’t sweat it if you get stuck!
