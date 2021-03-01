import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

export default class Details extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     details: {}
  //   }
  // }
  // componentDidMount() {
  //   console.log(this.props.id, 'ini id');
  //   fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/60004b1770fbb1001cbfe171`) //60004b1770fbb1001cbfe171 //${this.detailsId}
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data, 'dari mounted details');
  //       this.setState({
  //         details: data
  //       })
  //     })
  // }
  render() {
    let { details } = this.props
    console.log(details, "dari render detials");
    return (
      <div>
        <Card className="text-center">
          <Card.Header>news Details</Card.Header>
          <Card.Img variant="top" src={details.imageUrl}/>
          <Card.Body>
            <Card.Title>{this.details.title}</Card.Title>
            <Card.Text>
              {details.summary}
            </Card.Text>
            <Button href={this.details.url} variant="primary">read full news</Button>
          </Card.Body>
          <Card.Footer className="text-muted">{details.updatedAt}</Card.Footer>
        </Card>
      </div>
    )
  }
}
