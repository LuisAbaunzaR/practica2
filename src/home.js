import React, { Component } from 'react'

import Movie from './movies';


class Home extends Component{



    render(){
        const {users, movies, userMovies} = this.props
              
           const movie= Object.keys(movies).map(id => (
              
             <Movie key={id} movies = {movies[id]} userMovies={userMovies[id]} users={users} />
           ))
           
           return (
              <ul>{movie}</ul>
                
           )
        
        
    }
}

export default Home