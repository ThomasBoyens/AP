import React, { Component } from 'react'
import axios from 'axios'
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap'

export default class DeleteMovie extends Component {

  constructor(props) {
    super(props)
    // get movie name from url (/delete/name)
    //const movieName = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    //this.state = { name: movieName }
    if (this.props.match) {
      this.state = { name: this.props.match.params.movie}
    }
    else {
      this.state = { name: ''}
    }

    this.deleteMovie = this.deleteMovie.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  deleteMovie() {
    axios.delete('http://localhost:4000/movies/delete/' + this.state.name)
      .then(res => {
        console.log(res)
        this.props.history.push('/list')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <Container className='App'>
        <h1 className='display-4'>Delete Movie</h1>
        <br />
        <Form className='form-group w-50'>
          <Col>
            <FormGroup row>
              <Label for='name'>Name</Label>
              <Input type='text' className='form-control' name='name' value={this.state.name}
                onChange={this.handleInputChange} placeholder='Enter movie name' />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <button type='button' onClick={this.deleteMovie} className='btn btn-outline-primary'>Delete</button>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    )
  }
}