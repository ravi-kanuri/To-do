import React, { useContext } from 'react';
import { DataContext } from './App';
import Card from './Card';

const Body = () => {
  const { data,setData } = useContext(DataContext);

  const getFilteredTasks = (category) => {
    if (Array.isArray(data)) {
      return data.filter(task => task.category === category);
    }
    
  };
  
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter(task => task.id !== id));
  };
  
  return (
    <div id="container-body">
      <div  className='section'>
        <div className='title'>To-Do</div>
        {getFilteredTasks('To-Do').map((data, index) => (
          <Card key={index} props={data} ondelete={handleDelete} />
        ))}
      </div>
      <div  className='section'>
        <div className='title'>Doing</div>
        {getFilteredTasks('Doing').map((task, index) => (
          <Card key={index} props={task} ondelete={handleDelete} />
        ))}
      </div>
      <div  className='section'>
        <div className='title'>Done</div>
        {getFilteredTasks('Done').map((task, index) => (
          <Card key={index} props={task} ondelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Body;
