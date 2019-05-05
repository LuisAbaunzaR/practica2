import React, { Component } from 'react'


class Users extends Component{
    render(){
        const {users, userMovies} = this.props

        
        if (!userMovies || userMovies.length ===0) {
            return <p>None of the current users liked this movie.</p>;
        }

        const usuarios = userMovies.map(peliId => {
            return <li>{users[peliId].name}</li>
               
            
        })
        console.log(usuarios)

        return (
            <React.Fragment>
            <p>Liked By:</p>
            {usuarios}
            </React.Fragment>
        )
    }
}

export default Users




