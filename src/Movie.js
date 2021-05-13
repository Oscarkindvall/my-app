import React from 'react';

function GetStars(grade) {
  const stars = []
  for(let i=0; i<grade; i++){
    stars.push(<img src="./star.png" alt="" />)
  }
  return stars
}

export default function Movie(props){

  return (

      <li className="list-group-item">
        { props.item.title }



      <button className="btn btn-sm btn-danger float-end" onClick={() => {props.DeleteItem(props.item.id)}}>X</button>
      {GetStars(props.item.grade)}
      </li>

  );
}
