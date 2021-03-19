import '../App/App.css'
import React from 'react'
import Users from '../data/users.json'
export default class StarterApp extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            userToEdit: {}
        }
    }
    //fetch methods ('/') - GET
    //fetch method ('/') - CREATE
    //fetch methods ('/:id') - GET
    //fetch methods ('/:id') - UPDATE
    //fetch method ('/:id') - DELETE
    getAllUsers = () => {
        console.log(Users)
        this.setState({ users: Users })
        // fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
        //     .then(response => response.json())
        //     .then(userData => {
        //         console.log('Success:', userData);
        //         this.setState({ users: userData })
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }
    displayAllUsers = (users) => {
        const userCards = users.map(user => <a className='user-card' href="#userToEdit" onClick={() => this.getUserToEdit(user.id)}> {user.name}</a>)
        return (userCards)
    }

    getUserToEdit = (id) => {
        const allUsers = [...this.state.users]
        const foundUser = allUsers.filter(user => user.id === id)[0]
        this.setState({ userToEdit: foundUser })
    }
    getUserToDelete = (id) => {
        const allUsers = [...this.state.users]
        const usersAfterDelete = allUsers.filter(user => user.id !== id);
        this.setState({users: usersAfterDelete, userToEdit: {}})
    }
    componentDidMount() {
        this.getAllUsers()
    }
    componentDidUpdate() {

    }

    render() {
        const userCards = this.displayAllUsers(this.state.users)

        return (
            <div>
                <h1>All Users</h1>
                {userCards}
                <h2>User to Edit</h2>
                <div id="userToEdit">
                    <h1>{this.state.userToEdit.name}</h1>
                    <button className="button" onClick={()=>{
                        this.getUserToDelete(this.state.userToEdit.id)
                    }}>Delete</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

 //fetch Template 
    // const data = { username: 'example' };


