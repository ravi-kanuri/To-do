import React, { useState } from 'react';
import './App.css';
import  { useContext } from 'react';
import { DataContext } from './App';

const Header = () => {
  const {setData} = useContext(DataContext);
  
  const [formData, setFormData] = useState({
    task: '',
    category: '',
    tech: [],
    id: Date.now() 
  });

  const handletechClick = (techName) => {
    setFormData((prevData) => ({
      ...prevData,
      tech: prevData.tech.includes(techName)
        ? prevData.tech.filter((t) => t !== techName)
        : [...prevData.tech, techName]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((prevData) => [...prevData, formData]);
    // console.log('Form Data:', formData);
    setFormData({
      task: '',
      category: '',
      tech: []
    });
  };
  

  return (
    <div id='container-head'>
      <form onSubmit={handleSubmit}>
        <div id='search'>
          <input
            type="search"
            id='bar'
            placeholder=' Enter your task'
            value={formData.task}
            onChange={(e) => setFormData({ ...formData, task: e.target.value })}
          />
        </div>
        <div id='cleek'>
          <button
            type='button'
            onClick={() => handletechClick('HTML')}
            id={formData.tech.includes('HTML') ? 'HTML' : ''}
          >
            HTML
          </button>
          <button
            type='button'
            onClick={() => handletechClick('CSS')}
            id={formData.tech.includes('CSS') ? 'CSS' : ''}
          >
            CSS
          </button>
          <button
            type='button'
            onClick={() => handletechClick('JavaScript')}
            id={formData.tech.includes('JavaScript') ? 'JavaScript' : ''}
          >
            JavaScript
          </button>
          <button
            type='button'
            onClick={() => handletechClick('React')}
            id={formData.tech.includes('React') ? 'React' : ''}
          >
            React
          </button>

          <div id='space'>sbsnsj</div>

          <select
            name="task"
            id="seleted"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Status</option>
            <option value="To-Do">To-Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>

          <button type='submit' id='butn'>+Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default Header;
