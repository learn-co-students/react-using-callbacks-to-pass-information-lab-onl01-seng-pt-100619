# React Using Callbacks to Pass Information Lab

## Objectives

1.  Practice using state, props, and events
2.  Practice using callbacks to effect change up and down the component tree

## Introduction

In React, **props** are used to pass information _down_ the component tree, from
parents to children. In order to propagate information in the opposite
direction, we can use callback functions that are passed from parent components
to children.

This allows the callback to be _owned_ by a different component than the one
invoking it. Once invoked, the callback can effect change in the component that
owns it, instead of the component that called it.

For this lab, we have three components:

```
└── Matrix
    ├── ColorSelector
    └── Cell (x10000)
```

We would like to implement the following behavior: when a `Cell` is clicked, its
background color becomes the current selected color. With our `ColorSelector`
component providing the user interface to select a specific color, we need _some
way_ for `Cell` to know about the currently selected color. To do this, we will
have the parent component, `Matrix`, keep track of the current selected color.

Because passing information between children components is taboo in React, (i.e.
passing information between `ColorSelector` and a `Cell`), we need to make sure
that the following is implemented:

- `ColorSelector` has a way to set some 'selected color' in `Matrix` when a user selects a color
- `Cell` has a way to know what the current selected color is when it is clicked

Using callbacks, we can do both of these things pretty easily!

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

- provide a way for `Matrix` to keep track of the selected color (think state!)
- write a method that takes in a single argument of a hex color string (i.e.
  '#fff') and sets the selected color to that
- consider what should be done with that method once it is written. Who needs it?
  How can we get it to them? Use the skills you already have with React to solve
  this

#### `ColorSelector`

- update `makeColorSwatches` to provide the `<div>`s it is rendering with _some
  way_ to fire off that method we wrote for Matrix (hint: consider using an event
  listener and controlling the argument when an event handler is fired)

#### `Cell`

- find a way to access the currently selected color from `Matrix`'s state
  _without_ passing the value explicitly as a prop. (Consider passing a method
  from `Matrix` to `Cell` instead. You will want to create an additional method in
  Matrix to do this.)
- implement a `handleClick` method that that updates the `Cell`'s state with the
  current selected color

#### Once Finished

**Assert the following behavior**:

You should see 100x100 cells rendering with a color selection `<div>` at the top
of the screen. When any of the color swatches in the color selection `<div>` are
clicked, subsequently selected cells should change to that color.

<p align="center">
  <img src="https://curriculum-content.s3.amazonaws.com/react/completed-example.gif" />
</p>

## Resources

<p class='util--hide'>View <a href='https://learn.co/lessons/react-using-callbacks-to-pass-information-lab'>React Using Callbacks to Pass Information Lab</a> on Learn.co and start learning to code for free.</p>
