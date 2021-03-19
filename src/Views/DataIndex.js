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

handleUsersFetch = (data) => {
    let newData = [...data]
    //make fetch call here 
    //run setState inside of then() return from DB fetch
    this.setState({ users: newData })
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