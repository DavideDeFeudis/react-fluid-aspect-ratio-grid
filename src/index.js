import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const getColumns = (size, numOfItems, maxAspectRatio) => {
  const { width, height } = size
  let columns = 1
  for (let i = 0; i < numOfItems; i++) {
    const rows = Math.ceil(numOfItems / columns)
    const itemHeight = height / rows
    const itemAspectRatio = width / columns / itemHeight
    if (itemAspectRatio < maxAspectRatio || columns === numOfItems) break
    columns++
  }
  return columns
}

export default function Grid({ children, maxAspectRatio, gap }) {
  const gridRef = useRef()
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [columns, setColumns] = useState(1)

  useEffect(() => {
    const observer = createResizeObserver()
    observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  useLayoutEffect(() => {
    setColumns(getColumns(size, React.Children.count(children), maxAspectRatio))
  }, [size, React.Children.count(children)])

  const createResizeObserver = () => {
    return new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      setSize({ width, height })
    })
  }

  return (
    <div
      ref={gridRef}
      style={{
        display: 'grid',
        height: '100%',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridGap: `${gap}`
      }}
    >
      {children}
    </div>
  )
}

Grid.propTypes = {
  maxAspectRatio: PropTypes.number,
  gap: PropTypes.string,
  children: PropTypes.node
}
