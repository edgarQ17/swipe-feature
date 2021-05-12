import React, {Component} from 'react'
import './App.css'

function FunctionClick() {
    function clickHandler(){
        console.log('hi')
    }
    return (
      <div>
        <button className="left-button" onClick={clickHandler}>
            click
        </button>
        <button className="next-button" onClick={clickHandler}>
            click
        </button>
      </div>
    )
    
  }

  export default FunctionClick; 