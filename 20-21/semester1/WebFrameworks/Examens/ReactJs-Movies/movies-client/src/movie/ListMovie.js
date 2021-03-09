import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'

export default class ListMovie extends Component {

  constructor(props) {
    super(props)
    this.state = { movies: [] }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:4000/movies')
      .then(response => {
        this.setState({ movies: response.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  tableRows() {
    return this.state.movies.map((row, i) => {
      return <TableRow obj={row} key={i} />
    })
  }

  render() {
    return (
      <div>
        <h1 className='display-4'>All movies</h1>
        <br /><br />
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
              <th>Year</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {this.tableRows()}
          </tbody>
        </table>
      </div>
    )
  }

}