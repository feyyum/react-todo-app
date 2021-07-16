import React, { useState } from 'react';

function Header({ save }) {

    const [input, setInput] = useState({ text: "", isCompleted: false });

    const inputChanged = (e) => {
        setInput({ ...input, text: e.target.value });
    }

    const submitInput = (e) => {
        e.preventDefault();
        save(input);
        setInput({ ...input, text: "" });
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={submitInput}>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus value={input.text} onChange={inputChanged} />
            </form>
        </header>
    )
}

export default Header;
