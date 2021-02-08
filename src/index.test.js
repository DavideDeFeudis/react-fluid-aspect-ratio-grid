import React from 'react'
import Grid from '.'
import { shallow } from 'enzyme'

// const setup = () => shallow(<Grid />)

describe('Grid', () => {
  const grid = setup()
  it('is truthy', () => {
    expect(grid).toBeTruthy()
  })
})
