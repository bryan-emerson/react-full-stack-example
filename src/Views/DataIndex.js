import React from 'react'
import Container from '../Components/Container'
import {Link} from 'react-router-dom'
const users = require('../data/users.json')
//Component Imports
export default class DataIndex extends React.Component {
    constructor(props) {
        super()
        this.state = {
            users: []
        }
    }
    //Helper Methods go here:
    // - fetch calls 
    // - methods that update state
    // - validation 
    
    handleGetCards = (data) => {
        return (data && data?.map(d => (
            <div key={d.id}className="card" onClick={()=>{
                console.log(d.id)
                this.props.setDetailCard(d.id)
                }}>
                <h3>{d.name}</h3>
                <Link to={"/posts/"+d.id}>Learn More: {d.username}</Link>
            </div>)))
    }

handleUsersFetch = () => {

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET', // or 'PUT'
    })
    .then(response => response.json())
    .then(userData => {
      console.log('Success:', userData);
      this.setState({ users: userData })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
}
componentDidMount() {
    this.handleUsersFetch(users)
}
componentDidUpdate() {
}
componentWillUnmount() {
}
render() {
    const cards = this.handleGetCards(this.state.users)
    return (<Container><div className="card-list">{cards}</div></Container>)
}
}