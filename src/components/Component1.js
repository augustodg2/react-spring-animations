import React from 'react'
import { Spring } from 'react-spring/renderprops'

const Component1 = () => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0}}
    >
      { props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora libero, rerum ipsam adipisci, veniam cumque doloribus magnam explicabo pariatur deleniti. Ducimus, odio? Impedit perspiciatis quibusdam accusamus ratione id corrupti!</p>
          </div>
          <Spring
              from={{ number: 0 }}
              to={{ number: 20 }}
              config={{ duration: 10000 }}
            >
              { props => (
                <div style={props}>
                  <h2 style={counter}>
                    { props.number.toFixed() }
                  </h2>
                </div>
              )}
            </Spring>
        </div>
      )}
    </Spring>
    
  )
}

const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
}

const counter = {
  textAlign: 'center',
  background: '#365790',
  padding: '1rem',
  color: 'white'
}

export default Component1
