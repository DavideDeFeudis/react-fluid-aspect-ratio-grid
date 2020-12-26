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
          <p>Try adding/removing items and resizing the window.</p>
          <button onClick={addItem}>Add item</button>
          <button onClick={removeItem}>Remove item</button>
        </header>
        <section>
          <Grid maxAspectRatio='2.2' gap='1rem'>
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
