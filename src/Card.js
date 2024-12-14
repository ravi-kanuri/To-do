import React from 'react';
import './App.css';

const Card = ({ props,ondelete }) => {
  return (
    <div id='card'>
      <p>{props.task}</p>
      <div className="con">
      <div className="tags">
        {props?.tech?.map((tech, index) => {
          return (
            <div className="tag" key={index} id={tech}>
              {tech}
            </div>
          );
        })}
        
      </div>
      <i className="fa-regular fa-trash-can" onClick={()=>ondelete(props.id)}></i>
      </div>
    </div>
  );
}

export default Card;
