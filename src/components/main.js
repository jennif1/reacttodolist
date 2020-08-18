import React from "react"
import todoData from "./todoitem.js"
import Item from "./item.js"


class Main extends React.Component{

    constructor(){
        super()
        this.state = {
            todo: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(id){
       
        this.setState(prevState =>{
            const updatedTodos = prevState.todo.map(todo =>{
                if (todo.id === id){
                    todo.completed  = !todo.completed
                }
                return todo
            })
            return {
                todo: updatedTodos
            }
        })

    }


    render(){
    
    const mytodoList = this.state.todo.map(item => <Item key={item.id} item={item} handleChange={this.handleChange} />)

    return(
        <main className="main-content">
            <div>
                <h3>To Do List Using React</h3>
                {mytodoList}
            </div>
        </main>
    )
}
}


export default Main