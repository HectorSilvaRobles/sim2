import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

export default class Wizard extends Component{
    constructor(props){
        super(props)

        this.state = {
            backToDashboard: false,
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    setBackToDashboard = () => {
        this.setState({
            backToDashboard: true
        })
    }

    gotToDashboard = () => {
        if(this.state.backToDashboard){
            return <Redirect to='/' />
        }
    }

    updateAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    updateCity = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    updateState = (event) => {
        this.setState({
            state: event.target.value
        })
    }

    updateZip = (event) => {
        this.setState({
            zipcode: event.target.value
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <h1>Wizard</h1>
                <form>
                    Address: <input type="text" value={this.state.address} onChange={this.updateAddress}/>
                    City: <input type="text" value={this.state.city} onChange={this.updateCity} />
                    State: <input type="text" value={this.state.state} onChange={this.updateState} />
                    Zipcode: <input type="text" value={this.state.zipcode} onChange={this.updateZip} />
                </form>
                {this.gotToDashboard()}
                <button onClick={this.setBackToDashboard}>Cancel</button>
            </div>
        )
    }
}