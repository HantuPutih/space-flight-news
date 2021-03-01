// import logo from './logo.svg';
import './App.css';
import Flight from './components/Flight'
import Details from './components/Details'
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flightNews: [],
      detailsId: null,
      newsDetails: {}
    }
  }
  setId(id) {
    // console.log(id,"dari set id");
    this.setState({ 
      detailsId: id
    })
  }
  componentDidMount() {
    // console.log(this.detailsId, 'dari mounted');
    fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=12')
      .then(res => res.json())
      .then(data => 
        this.setState({flightNews:data})
      )
    fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/60004b1770fbb1001cbfe171`) //60004b1770fbb1001cbfe171 //${this.detailsId}
      .then(res => res.json())
      .then(data => 
        this.setState({newsDetails:data})
        // console.log(this.newsDetails);
      )
  }
  
  render() {
    // console.log(this.flightNews, 'news');
    return (
    <div className="container">
      <br/>
      <h1>Flight News</h1>
      <br/>
      <div>
      {/* <Details details={this.state.newsDetails}></Details>  */}
        {
        this.state.newsDetails ? <Details details={this.state.newsDetails}></Details> : <h1>loading</h1>
        }
      </div>
    <br/>
    <div className="App">
      <div className="container">
        <div className="row">
          {this.state.flightNews.map((news) => (
          <Flight news={news} key={news.id} getDetails={(id) => this.setId(id)}/>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
  }

  
}

export default App;
