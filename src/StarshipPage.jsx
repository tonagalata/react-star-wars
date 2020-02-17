import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import styles from './StarshipPage.module.css'


class StarshipPage extends Component{
  render(){
    return (
      <div className={styles.shipHub}>
        {(this.props.starships.length !== 0) ? (
        <div className={styles.ships}>
            <div className={styles.shipKeys}>
              <div>
                Name:
              </div>
              <div>
                Model:
              </div>
              <Link to='/'>Return</Link>
            </div>
          <div className={styles.shipValues}>
            <div>
              {this.props.starships[this.props.match.params.id].name}
            </div>
            <div>
              {this.props.starships[this.props.match.params.id].model}
            </div>
              {console.log(this.props.starships[this.props.match.params.id])}
          </div>
        </div>) : <h2>Loading...</h2>}
      </div>
    )
  }
}

export default StarshipPage;