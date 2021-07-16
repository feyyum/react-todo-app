import React from 'react';

function List({ elements, complete, remove, itemLeft, clearCompleted, filtered, filter, filterName }) {

    const items = filtered();

    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {/* <li className="completed">
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>Learn JavaScript</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                    <li>
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>Learn React</label>
                            <button className="destroy"></button>
                        </div>
                    </li>*/}
                    {items.map((item, index) => {
                        const status = item.isCompleted ? "completed" : "";
                        return(
                            <li className={status}  key={index}>
                                <div className="view">
                                    <input className="toggle" checked={item.isCompleted} type="checkbox" onChange={() => {complete(index)}} />
                                    <label>{item.text}</label>
                                    <button className="destroy" onClick={() => {remove(index)}}></button>
                                </div>
                            </li> 
                        );
                    })}
                </ul>
            </section>
            <footer className="footer">

                <span className="todo-count">
                    <strong>{itemLeft().length} </strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <button className={filterName === "all" ? "selected" : ""} onClick={() => {filter("all")}}>All</button>  
                    </li>
                    <li>
                        <button className={filterName === "active" ? "selected" : ""} onClick={() => {filter("active")}}>Active</button>
                    </li>
                    <li>
                        <button className={filterName === "completed" ? "selected" : ""} onClick={() => {filter("completed")}}>Completed</button>
                    </li>
                </ul>

                <button className="clear-completed" onClick={() => clearCompleted(itemLeft())}>
                    Clear completed
                </button>
            </footer>
        </>
    )
}

export default List
