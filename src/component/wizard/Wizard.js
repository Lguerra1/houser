import React from 'react';
import { Link } from 'react-router-dom'

export default class Wizard extends React.Component{
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0

        }

        this.addName = this.addName.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    addName(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleOnClick(){
        console.log(`submitting ${this.state.name}`)
    }




    render(){
        return(
            <div>
            
            <input
            value ={this.state.name}
            onChange={this.addName}
            placeholder=" Property Name" />

            <input
            value ={this.state.address}
            placeholder="Address" />

            <input
            value ={this.state.city}
            placeholder="City" />

            <input
            value ={this.state.state}
            placeholder="State" />

            <input
            value ={this.state.zip}
            placeholder="Zip" />

            <button
            onClick={this.handleOnClick}
            >Complete</button>




            
            
           
           
            <Link to='/Dashboard'><button >Cancel</button></Link>


            </div>
        )
    }
}
