import React from 'react';
import House from '../house/House';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component{
    constructor(){
        super()
            this.state = {
                houses: []
            }        
    }
    
    render(){
        return(
            <div>
           
           
           <Link to='/Wizard'><button >Add New Property</button></Link>
            <House />
            </div>
        )
    }
}
