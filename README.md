# react-fluid-aspect-ratio-grid

> A grid container that adapts the number of columns to limit the aspect ratio of its children.

[![NPM](https://img.shields.io/npm/v/react-fluid-aspect-ratio-grid.svg)](https://www.npmjs.com/package/react-fluid-aspect-ratio-grid)

## Example

https://davidedefeudis.github.io/react-fluid-aspect-ratio-grid/

## Install

```bash
npm i react-fluid-aspect-ratio-grid
```

## Usage

```jsx
import React from 'react'
import Grid from 'react-fluid-aspect-ratio-grid'
import 'react-fluid-aspect-ratio-grid/dist/index.css'

function App() {
  return (
    <Grid maxAspectRatio={2.2} gap='1rem'>
      <div className='grid-item'></div>
      <div className='grid-item'></div>
      <div className='grid-item'></div>
      <div className='grid-item'></div>
    </Grid>
  )
}
```

## Props

| Prop           | Type   | Description                                                |
| -------------- | ------ | ---------------------------------------------------------- |
| maxAspectRatio | number | The aspect ratio that must not be exceeded by the chilren. |
| gap            | string | The grid gap.                                              |

## License

MIT © [Davide De Feudis](https://github.com/DavideDeFeudis)
