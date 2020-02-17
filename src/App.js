import React, { Component } from 'react';
import { getAllStarships } from './services/sw-api'
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import StarshipPage from './StarshipPage';

class App extends Component {

  state = {
    results: []
  }

  async componentDidMount() {
    const starships = await getAllStarships()
    // await console.log(starships.results)
    await this.setState({
      results: starships.results
    })
  }

  render(){
    return (
      <div className="App">
        <header className='App-header'>
          Star Wars Starships
        </header>
        <Switch>
        <Route 
        exact path='/' 
        
        render={() => 
        <div className='shipHub'>
          {this.state.results.map((ship, idx) => 
            <Link to={`/starships/${idx}`}>
              <div key={idx} className='ships'>
                {ship.name}
              </div>
            </Link>
          )}
        </div>
        }
        />
        <Route 
          exact path='/starships/:id' 
          render={(props) =>
            <StarshipPage 
            {...props} 
          results={this.state.results}
        />  
        }/>
        </Switch>
      </div>
    );
  }
}

export default App;
