import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import styles from './StarshipPage.module.css'


class StarshipPage extends Component{
  render(){
    return (
      <div className={styles.shipHub}>
        {(this.props.results.length !== 0) ? (
        <div className={styles.ships}>
            <div>
              <div>
                Name:&nbsp;
              </div>
              <div>
                Model:&nbsp;
              </div>
              <div>
                <Link to='/'>Return</Link>
              </div>
            </div>
          <div>
            <div>
              {this.props.results[this.props.match.params.id].name}
            </div>
            <div>
              {this.props.results[this.props.match.params.id].model}
            </div>
        {console.log(this.props.results[this.props.match.params.id])}
          </div>
        </div>) : 'Loading...'}
      </div>
    )
  }
}

export default StarshipPage;