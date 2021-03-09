import React, { Component } from 'react';
import axios from 'axios'
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap'

export default class SearchMovie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.match.params.movie,
            Id: '',
            year: '',
            rating: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.editMovie = this.editMovie.bind(this)
    }

    componentDidMount() {
        //debugger
        axios.get('http://localhost:4000/movies/searchOne', { name: this.state.name })
            .then(json => {
                const movie = json.data[0]
                this.setState({
                    name: movie.name,
                    id: movie.id,
                    year: movie.year,
                    rating: movie.rating
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    editMovie = () => {
        axios.post('http://localhost:4000/movies/edit', this.state)
            .then(res => {
                //console.log(res)
                this.props.history.push('/list')
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <Container className='App'>
                <h1 className='display-4'>Edit Movie</h1>
                <br />
                <Form className='form-group w-50'>
                    <Col>
                        <FormGroup row>
                            <Label for='name'>Name</Label>
                            <Input type='text' className='form-control' name='name' value={this.state.name}
                                onChange={this.handleInputChange} placeholder='Enter movie name' />
                        </FormGroup>
                        <FormGroup row>
                            <Label for='name'>Id</Label>
                            <Input type='text' className='form-control' name='id' value={this.state.id}
                                onChange={this.handleInputChange} placeholder='Enter movie id' />
                        </FormGroup>
                        <FormGroup row>
                            <Label for='name'>Year</Label>
                            <Input type='text' className='form-control' name='year' value={this.state.year}
                                onChange={this.handleInputChange} placeholder='Enter year' />
                        </FormGroup>
                        <FormGroup row>
                            <Label for='name'>Rating</Label>
                            <Input type='text' className='form-control' name='rating' value={this.state.rating}
                                onChange={this.handleInputChange} placeholder='Enter rating' />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <button type='button' onClick={this.editMovie} className='btn btn-outline-primary'>Edit</button>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}