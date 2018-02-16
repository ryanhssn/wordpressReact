import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import keys from './config/keys';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pages: [],
      dataRoute: `${keys.ROOT_URL}/pages`
    }
  }

componentDidMount(){
  fetch(this.state.dataRoute)
    .then(res => res.json())
    .then(pages => this.setState((prevState, props) => {
      return { pages: pages.map(this.mapPages)};
    }))
}

mapPages(page){
  return{
    id: page.id,
    title: page.title.rendered,
    slug: page.slug
  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          T get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="pages">
          {this.state.pages.map((page) => 
            <div className="page" key={`page-${page.id}`}>
                <h2>{ page.title }</h2>
            </div>


          )}
        </div>

      </div>
    );
  }
}

export default App;
