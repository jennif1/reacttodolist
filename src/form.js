import React, { Component } from "react"
import { render } from "@testing-library/react";

class App extends Component {

    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
    }
     
    render(){
        return(
            <main>
                <form>
                    <input placeholder="First Name"></input>
                    <br/>
                    <input placeholder ="Last Name"></input>
                    <br/>
                    <button>Submit</button>
                </form>
            </main>
        )
    }


}