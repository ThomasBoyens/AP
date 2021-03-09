import React, { Component } from 'react'
import SearchMovie from './movie/SearchMovie.js'
import AddMovie from './movie/AddMovie.js'
import EditMovie from './movie/EditMovie.js'
import ListMovie from './movie/ListMovie.js'
import DeleteMovie from './movie/DeleteMovie.js'
import Login from './auth/Login'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { athenticated: false }
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem('user')) {
      let user = JSON.parse(localStorage.getItem('user'))
      this.setState({ authenticated: user.authenticated })
    }
  }

  logout() {
    localStorage.removeItem('user')
    window.location.reload()
  }

  render() {
    if (this.state.authenticated === true) {
      return (
        <div className='container'>
          <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link to={'/list'} className='nav-link'>List</Link>
                  </li>
                  <li className="nav-item active">
                    <Link to={'/add'} className='nav-link'>Add</Link>
                  </li>
                  <li className="nav-item active">
                    <Link to={'/search'} className='nav-link'>Search</Link>
                  </li>
                  <li className="nav-item active">
                    <Link to={'/delete'} className='nav-link'>Delete</Link>
                  </li>
                  <li className="nav-item active">
                    <Link to={''} onClick={this.logout} className='nav-link'>Logout</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br /><br />
            <Switch>
              <Route exact path='/list'><ListMovie /></Route>
              <Route exact path='/add'><AddMovie /></Route>
              <Route exact path='/edit/:movie' component={EditMovie} />
              <Route exact path='/search'><SearchMovie /></Route>
              <Route path='/delete/:movie' component={DeleteMovie} />
              <Route path='/delete'><DeleteMovie /></Route>
              <Route exact path='/login' component={Login} />
              <Route path='*'><ListMovie /></Route>
            </Switch>
          </BrowserRouter>
        </div>
      )
    }
    else {
      return (
        <BrowserRouter>
          <Route path='*' component={Login} />
        </BrowserRouter>
      )
    }
  }
}

// => component={} gebruiken wanneer je het match object nodig hebt 

export default App;