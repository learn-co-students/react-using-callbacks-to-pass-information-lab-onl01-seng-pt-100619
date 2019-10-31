# React Using Callbacks to Pass Information Lab

## Objectives

1.  Practice using state, props, and events
2.  Practice using callbacks to effect change up and down the component tree

## Introduction

Go ahead and open this lab using `npm start` (you might need to do `npm install`) first. You should see our good friend, ChromeBoi. We are going to build an application that allows the user to select any of the 9 colored squares at the top of the page by clicking on it.
Then, the user can click on any of the cells that make up our ChromeBoi image to change the background color to the color that they last selected. The end result is that the user will be able to 'paint' over ChromeBoi.

<p align="center">
  <img src="https://curriculum-content.s3.amazonaws.com/react/completed-example.gif" />
</p>


For this lab, we have three components:

```
└── Matrix
    ├── ColorSelector
    └── Cell (x10000)
```

The `ColorSelector` component is where the user sets one of the 9 colors as the current selected color. We are going to need some state to keep track of this current selected color. Now, we could put this state in our `ColorSelector` component, but there's one caveat. When a `Cell` component is clicked, its background color should become the current selected color. So we need _some way_ for `Cell` to know about the currently selected color.

But passing information directly between children components is not possible in React, (i.e.
passing information between `ColorSelector` and a `Cell`).

We can put our state in the the parent component, `Matrix`. With this approach two things are possible:
 - `ColorSelector` has a way to set some 'selected color' in `Matrix` when a user selects a color
 - `Cell` has a way to know what the current selected color is when it is clicked

 Using callbacks and props, we can do both of these things pretty easily!

## Deliverables

**Note:** This lab involves rendering 100,000 `Cell` components, and may cause performance issues for older Macbooks. For a more performant lab experience, in `src/index.js`, replace:

```js
ReactDOM.render(<Matrix values={chromeBoi} />, document.getElementById('root'));
```

..with this:

```js
ReactDOM.render(
	<Matrix values={chromeBoi.slice(0, 10)} />,
	document.getElementById('root')
);
```

This will reduce the amount of `Cell` components that will render when you've
got your code fully working.

#### `Matrix`

- Create state in `Matrix` to keep track of the current selected color
- Write a method that takes in a single argument of a hex color string (i.e.
  '#FFF') and sets the selected color to that
- Consider what should be done with that method once it is written. Who needs it?
  How can we get it to them? Use the skills you already have with React to solve
  this.

#### `ColorSelector`

- Update `makeColorSwatches` to provide the `<div>`s it is rendering with _some
  way_ to fire off that method we wrote for Matrix (hint: consider using an event
  listener and controlling the argument when an event handler is fired)

#### `Cell`

- find a way to access the currently selected color from `Matrix`'s state
  _without_ passing the value explicitly as a prop. (Consider passing a method
  from `Matrix` to `Cell` instead. You will want to create an additional method in
  Matrix to do this.)
- implement a `handleClick` method that that updates the `Cell`'s state with the
  current selected color

### Once Finished

**Assert the following behavior**:

You should see 100x100 cells rendering with a color selection `<div>` at the top
of the screen. When any of the color swatches in the color selection `<div>` are
clicked, subsequently selected cells should change to that color.


## Resources

<p class='util--hide'>View <a href='https://learn.co/lessons/react-using-callbacks-to-pass-information-lab'>React Using Callbacks to Pass Information Lab</a> on Learn.co and start learning to code for free.</p>
