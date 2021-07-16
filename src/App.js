import './App.css';
import Header from './components/Header'; 
import List from './components/List';
import React, { useState } from 'react';

function App() {

  const [elements, setElements] = useState([]);
  const [filter, setFilter] = useState("all"); // There are three option -> all, active, completed

  const setElement = (element) => {
    setElements([...elements, element]);
  }

  const completeElement = (index) => {
    let array = [...elements];
    array[index].isCompleted = !array[index].isCompleted;
    setElements(array);
  }

  const deleteElement = (index) => {
    let array = [...elements];
    array.splice(index, 1);
    setElements(array);
  }

  const itemLeft = () => {
    const itemLeft = elements.filter((e) => !e.isCompleted) || [];
    return itemLeft;
  }

  const filteredElements = () => {
    if (filter === "all") {
      return elements;
    } else if (filter === "active") {
      const itemActive = elements.filter((e) => !e.isCompleted) || [];
      return itemActive;
    } else {
      const itemCompleted = elements.filter((e) => e.isCompleted) || [];
      return itemCompleted;
    }
  }

  const changeFilter = (filterName) => {
    setFilter(`${filterName}`);
  }

  const clearCompleted = (array) => {
    setElements(array);
  }

  return (
    <div className="todoapp">
      <Header save={setElement} />
      <List 
        elements={elements} 
        complete={completeElement} 
        remove={deleteElement} 
        itemLeft={itemLeft} 
        clearCompleted={clearCompleted}
        filtered={filteredElements}
        filter={changeFilter}
        filterName={filter}
      />
    </div>
  );
}

export default App;
