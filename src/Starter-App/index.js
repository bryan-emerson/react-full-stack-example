import '../App/App.css'
import React from 'react'

export default class StarterApp extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    //fetch methods ('/') - GET
    //fetch method ('/') - CREATE
    //fetch methods ('/:id') - GET
    //fetch methods ('/:id') - UPDATE
    //fetch method ('/:id') - DELETE

    //fetch Template 
    // const data = { username: 'example' };

    // fetch('https://example.com/profile', {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
    
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    render() {
        return(<div>This is working?</div>)
    }
}