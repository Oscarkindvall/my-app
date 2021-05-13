import React, { useState, useRef } from 'react';
import Movie from './Movie';

export default function MovieList(){
  const[movies, setMovies] = useState([]);

  const inputRef = useRef();
  const refGrade = useRef();

  function AddMovie(event) {

    if(inputRef.current.value == ""){
      alert("Du måste fylla i titel!")

    }else if(refGrade.current.value == 0){
      alert("Du måste ge ett betyg!")

    }else{
      const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;



      setMovies([...movies, {
        id: newId,
        title: inputRef.current.value,
        grade: refGrade.current.value
      }]);

      inputRef.current.value = "";
      refGrade.current.value = "";
    }

  }





  function DeleteItem(id) {
    setMovies(movies.filter((item) => item.id !== id));
  }

  function SortByTitle(){
    console.log("hej")
    movies.sort((a, b) => a.title.localeCompare(b.title))
    setMovies([...movies]);
  }

  function SortByGrade(){
    movies.sort((a, b) => b.grade - a.grade)
    setMovies([...movies]);

  }

  return (
    <div>
      <input className="form-control" placeholder="Add new movie" ref={inputRef}/>

      <label for="grade">Betyg:</label>

               <select type="text" id="grade" class="form-control" ref={refGrade}>
                   <option value="0">Välj betyg här...</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
               </select>
               <button type="submit" className="btn btn-success mt-3" onClick={() => {AddMovie()}}>Add movie</button>


      <ul className="list-group">
        { movies.map(movie => <Movie key={movie.id} item={movie} grade={refGrade} DeleteItem={DeleteItem}/>) }
      </ul>
      <button type="submit" className="btn btn-success mt-3" onClick={() => {SortByTitle()}}>Sort by title</button>
      <button type="submit" className="btn btn-success mt-3" onClick={() => {SortByGrade()}}>Sort by grade</button>
    </div>
  );
}
