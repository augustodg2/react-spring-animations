import React from 'react'
import { Spring } from 'react-spring/renderprops'

const Component2 = ({ toggle }) => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 500, duration: 1000 }}
    >
      { props => (
        <div style={props}>
          <div style={c2Style}>
            <h1>Component 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora libero, rerum ipsam adipisci, veniam cumque doloribus magnam explicabo pariatur deleniti. Ducimus, odio? Impedit perspiciatis quibusdam accusamus ratione id corrupti!</p>
            <button style={btn} onClick={toggle}>
              Toggle Component3
            </button>
          </div>
        </div>
      )}
    </Spring>
  )
}

const c2Style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem'
}

const btn = {
  background: '#333',
  color: '#fff',
  padding: '1rem 2rem',
  border: 'none',
  textTransform: 'uppercase',
  margin: '1rem 0'
}

export default Component2
