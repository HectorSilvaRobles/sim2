import React, {Component} from 'react'
import House from '../House/House'
import {Redirect} from 'react-router-dom'

export default class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state ={
            redirect: false,
            houses: []
        }

    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    goToWizard = () => {
        if(this.state.redirect){
            return <Redirect to='/wizard' />
        }
    }

    render(){
        const {houses} = this.state
        mappedHousesList = houses.map(val => console.log(val))
        
        return (
            <div>
                <h1>Dashboard</h1>
                {this.goToWizard()}
                <button onClick={this.setRedirect}>Add New Property</button>
                <House />
            </div>
        )
    }
}