import React from 'react'
import Container from '../Components/Container'

//Component Imports
export default class HomeView extends React.Component {
    constructor(props) {
        super()
        this.state = {
            yourState: []
        }
    }
    //Helper Methods go here:
    // - fetch calls 
    // - methods that update state
    // - validation 
    
    componentDidMount() {
        //wll run immmediately after render processes (including all mounting for child components) is complete
        let newData = []
        this.setState({ yourState: newData })
    }
    componentDidUpdate() {
        //will only run if a component is React detects a change in the state for this component or props from parent
    }
    componentWillUnmount() {
        //will only run if a component is about to be removed from the dom by React
    }
    render() {
        return (<Container></Container>)
    }
}