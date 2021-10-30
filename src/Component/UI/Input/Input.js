import React from "react";
import classes from './input.module.css';
const Input = props => { 
    return( 
        <div className={`${classes.login} ${props.className}`}> 
             <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={props.value}
           
          />
        </div>
    )
}

export default Input;