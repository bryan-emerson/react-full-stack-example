import React from 'react'
//Styling
import './App.css'
//Component Imports
import { Route, Switch } from 'react-router-dom'
import Navigation from '../Components/Navigation'
import Dropdown from '../Components/Dropdown'
import DataIndex from '../Views/DataIndex'
import Detail from '../Views/Detail'
import Home from '../Views/Home'
//Content Imports
const posts = require('../data/posts.json')
const users = require('../data/users.json')
const menu = {
  heading: "selected-posts",
  headingUrl: "/posts",
  headingIsLink: true,
  links: [
    { text: "dropdown-link-1", url: "/posts/1", classList: "nav-dropdown" },
    { text: "dropdown-link-2", url: "/posts/2", classList: "nav-dropdown" },
    { text: "dropdown-link-3", url: "/posts/3", classList: "nav-dropdown" },
  ],
}
export default class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      users,
      posts,
      openMenu: "",
      detailCard: {},
      detailId: null
    }
  }

  componentDidMount() {
    let newData = []
    this.setState({ yourState: newData })
  }

  // componentDidUpdate() {
  // }

  // componentWillUnmount() {
  // }

  handleDropdownToggle = (openMenu) => this.setState({ openMenu: this.state.openMenu === openMenu ? "" : openMenu });

  handleSetDetailCard = (id) => {
    console.log(id, 'inside app')
    this.setState({detailId: id})
  }
  render() {
    return (<div className="App">
      <Navigation>
        <Dropdown toggle={this.handleDropdownToggle} isOpen={this.state.openMenu === menu.heading} {...menu} />
      </Navigation>
      <div className="view-wrapper">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home/>
            }
          />
          <Route
            exact
            path="/posts/:id"
            render={routerProps => <Detail detailId={this.state.detailId} {...routerProps}/>}
          />
          <Route
            exact
            path="/posts/"
            render={routerProps => <DataIndex setDetailCard={this.handleSetDetailCard} {...routerProps}/>}
          />
          <Route
            path="*"
            render={() => {
              return <div>404</div>;
            }}
          />
        </Switch>
      </div>
    </div>)
  }
}

