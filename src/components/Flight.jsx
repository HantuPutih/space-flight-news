import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // detailId: this.props.id
    }
    // this.props.getDetails('2')
  }
  getDetails = (id) => {
    console.log(id)
    // this.props.details(this.state.detailId)
  }
  render() {
    console.log(this.props.news);
    let { news } = this.props
    if (news) {
      return (
      <Card style={{ width: '18rem'}} key={news.id}>
        <Card.Img variant="top" src={news.imageUrl}/>
        <Card.Body>
          <Card.Title>{news.title}</Card.Title>
          <Card.Text>
            date: {news.updatedAt.split('T')[0]}
          </Card.Text>
          <Button variant="primary" onClick={this.getDetails(news.id)}>news Details</Button>
        </Card.Body>
      </Card>
      )
    } else {
      <h1>loading news</h1>
    }
    
  }
}
