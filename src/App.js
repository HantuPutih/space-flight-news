// import logo from './logo.svg';
import './App.css';
import Flight from './components/Flight'
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flightNews: [],
      detailId: null
    }
  }
  componentDidMount() {
    console.log('mounted');
    fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=10')
      .then(res => res.json())
      .then(data => 
        this.setState({flightNews:data})
      )
  }
  componentDidUpdate() {
    fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/${this.detailId}`)
      .then(res => res.json())
      .then(data => {console.log(data)})
  }
  
  render() {
    return (
    <div className="App">
      {/*map*/}
      <div className="card-container m-3">
        {this.state.flightNews.map((news) => (
          <Flight news={news} key={news.id}getDetails={(id) => console.log(id)}/>
        ))}
        
      </div>
    </div>
  );
  }

  
}

export default App;
