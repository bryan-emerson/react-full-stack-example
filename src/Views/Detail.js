import React from 'react'
import Container from '../Components/Container'
const users = require('../data/users.json')
//Component Imports
export default class DetailView extends React.Component {
    constructor(props) {
        super()
        this.state = {
            user: users[0],
            errorUser: {
                error: "Error: User Not Found"
            }
        }
    }

    handleGetCard = (data) => {
        return (
            <> {
                !data.error ? <div>
                    < h1 > {data.name}</h1 >
                    <h3>Username: {data.username}</h3>
                    <h2>Info</h2>
                    <p>{data.address.street} {data.address.suite} {data.address.city} {data.address.zipcode}</p>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                    <p>{data.name}</p>
                    <ul>
                        <h3>Company</h3>
                        <li>Name: {data.company.name}</li>
                        <li>Tags: {data.company.bs}</li>
                        <li>Slogan: {data.company.catchPhrase}</li>
                    </ul>
                </div > : <div><h1>{data.error}</h1></div>}</>)
    }

    handleUserFetch = (id) => {
        console.log(id, "in fetch")
        const foundUser = users.find(user=>user.id===id);
        this.setState({ user: foundUser ? foundUser: this.state.errorUser})
    }
    componentDidMount() {
        const userId = parseInt(this.props.match.params.id)
        this.handleUserFetch(userId)
    }
    componentDidUpdate() {
        const userId = parseInt(this.props.detailId)
        const param = parseInt(this.props.match.params.id)
        const valid = !!userId ? true : false
        if(param !== this.state.user.id){
            this.handleUserFetch(param)
        }
        else if(valid && userId !==this.state.user.id){
            this.handleUserFetch(userId)
        }
    }
    componentWillUnmount() {
    }
    render() {
        const card = this.handleGetCard(this.state.user)
        return (<Container>{card}</Container>)
    }
}