import React, { Component } from 'react'
import Users from './users'

class Movie extends Component {
    render(){
        const {movies, userMovies, users} = this.props
       

        return(
            <React.Fragment>
               <h2>{movies.name}</h2> 
                
                    <ul>
                    <Users userMovies={userMovies} users={users}/>
                    </ul>
            </React.Fragment>



        )
    }
}

export default Movie