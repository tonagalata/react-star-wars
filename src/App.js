import React, { Component } from 'react';
import { getAllStarships } from './services/sw-api'
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import StarshipPage from './StarshipPage';

class App extends Component {

  state = {
    starships: []
  }

  async componentDidMount() {
    const starships = await getAllStarships()
    // await console.log(starships.results)
    await this.setState({
      starships: starships.results
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
        <div className='App-shipHub'>
          {this.state.starships.map((ship, idx) => 
            <Link to={`/starships/${idx}`}>
              <div key={idx} className='App-ships'>
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
            starships={this.state.starships}
        />  
        }/>
        </Switch>
      </div>
    );
  }
}

export default App;
