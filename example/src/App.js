import React, { useState } from 'react'
import Grid from 'react-fluid-aspect-ratio-grid'
import 'react-fluid-aspect-ratio-grid/dist/index.css'

function App() {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems([...items, {}])
  }

  const removeItem = () => {
    const newItems = [...items]
    newItems.pop()
    setItems(newItems)
  }

  return (
    <>
      <main>
        <header>
          <h1>react-fluid-aspect-ratio-grid example</h1>
          <p>
            <a
              href='https://github.com/DavideDeFeudis/react-fluid-aspect-ratio-grid'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub repo
            </a>
          </p>
          <p>
            <a
              href='https://www.npmjs.com/package/react-fluid-aspect-ratio-grid'
              target='_blank'
              rel='noopener noreferrer'
            >
              Npm package
            </a>
          </p>
          <p>
            Add/remove items and resize the window. The grid's children won't
            exceed the specified max aspect-ratio (2.2 in this example).
          </p>
          <button onClick={addItem}>Add item</button>
          <button onClick={removeItem}>Remove item</button>
        </header>
        <section>
          <Grid maxAspectRatio={2.2} gap='1rem'>
            {items.map((item, i) => (
              <div className='grid-item' key={i}></div>
            ))}
          </Grid>
        </section>
      </main>
    </>
  )
}

export default App
