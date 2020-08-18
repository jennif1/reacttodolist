import React from "react"

function Item(props){

    return(
        
        <div>
            <input type="checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)}
            ></input>
            <p>{props.item.text}</p>
        </div>
    )
}

export default Item