import React, {useState, useEffect} from 'react';
import axios from "axios";


const UpdateMovieForm = props => {

    const [movie, setMovie] = useState({
        //id: Date.now(),
        title: "",
        director: "",
        metascore: 0,
        stars: []
    })

    console.log(props.movies)

    const handleChange = e => {
        e.persist();
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then(res => {
            console.log("GET",res)
            setMovie(res.data)
        })
        .catch(err => console.log(err.response))   
    }, [])

    console.log("yo", props)
    console.log(movie, setMovie)

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${props.match.params.id}`, movie)
            .then(res => {
                //console.log(res)
                props.history.push(`/movies/${props.match.params.id}`)
            })
            .catch(err => console.log(err.response))
    }

    return(
        <div>

            
            <form onSubmit={handleSubmit}>

                <input type="text" name="title" 
                //placeholder="Title" 
                onChange={handleChange} 
                value={movie.title}
                />

                <input type="text" name="director" placeholder="Director" onChange={handleChange} value={movie.director}/>

                <input type="text" name="metascore" placeholder="Score" onChange={handleChange} value={movie.metascore}/>

                <input type="text" name="stars" placeholder="Actors" onChange={handleChange} value={movie.stars}/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateMovieForm;