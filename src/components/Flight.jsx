import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // detailId: this.props.id
    }
  }
  getDetails = (id) => {
    // console.log(id)
    this.props.getDetails(id)
  }
  render() {
    // console.log(this.props.news);
    let { news } = this.props
      return (
        this.props.news && 
        <div className="col">
          <Card style={{ width: '18rem', minheight: '27rem'}} key={news.id}>
            <Card.Img variant="top" src={news.imageUrl}/>
            <Card.Body>
              <Card.Title>{news.title}</Card.Title>
              <Card.Text>
                date: {news.updatedAt.split('T')[0]}
              </Card.Text>
              <Button variant="primary" onClick={() => this.getDetails(news.id)}>news Details</Button>
            </Card.Body>
          </Card>
        </div>
      )
  }
}
