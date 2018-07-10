# React Using Callbacks to Pass Information Lab


## Objectives

1. Practice setting initial state
2. Practice deriving initial state from props
3. Practice updating state with event listeners/handlers


## Introduction

Let's jump right into working with state. For this lab, we are going to render a
matrix, or grid, of squares. Each square will have only a background color. When
clicked, the square will change colors. 

Our component tree consists of a `Matrix`, which renders many `Cells` (squares).
Our job is to finish implementing `Matrix` so that it renders the appropriate
amount of cells, with the appropriate amount of values.


## Deliverables

#### `Matrix`

`Matrix` uses a prop, `values`, to determine the cell colors. This is a 10 x 10
array (essentially making 10 rows, with 10 values in each row). Because we are
responsible React developers, we want to make sure we have a default grid in
case no `values` prop is passed.

1. Make a default `values` prop for `Matrix`, which is a 10x10 array filled with the values '#F00' (red). For inspiration, take a look at `src/data.js`.
2. Once you have made your `<Cell />` component, replace the return value in `genRow`'s map to: `<Cell value={val} />`

#### `Cell`

Create a new component in `src/` called `Cell`. The `Cell` component will give
us our first chance to use `state`. We want each `Cell` to keep track of a
single `state` value: `color`, (which will be a 3 digit hex value i.e. '#FFF'). 

1. Define a `constructor` method in `Cell`, which sets an initial state key of `color` to the `value` prop which is passed from its parent component. Remember to call `super()` on the first line of the constructor (this is required in React components if we are to use `this` in the constructor). Additionally, for props to be accessible within the constructor, we need to pass `props` to both the constructor _as well as_ `super`. Ultimately, our constructor should look something like this:

```js
constructor(props) {
  super(props)
  // ...define initial state with a key of 'color' set to the 'value' prop
}
```

2. `Cell` should render a single `<div>` with a className of `cell`
3. In render, the cell should set the background color in-line for the `<div>` by adding the following attribute: `style={{backgroundColor: '#FFF'}}` ('#FFF' is just used as an example value here - the value should be state's color)
4. Create a click listener which, when activated, updates the state to the following hex value: '#333'

#### Once Finished

`npm start` and assert the following:

1. The application displays 100 cells in a 10x10 format
2. If no `values` prop is passed to `Matrix` in `src/index.js`, then all the cells are red
3. If `pattern1` is passed to `Matrix` in `src/index.js`, then the cells are alternating red-blue
4. When you click on any given cell, that cell's color changes to dark gray


## Resources

<p class='util--hide'>View <a href='https://learn.co/lessons/react-simple-state-lab'>React Simple State Lab</a> on Learn.co and start learning to code for free.</p>
