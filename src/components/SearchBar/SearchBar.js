import React, { useState } from 'react';

const SearchBar = ({ onInputSubmit }) => {
  const [text, setText] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    onInputSubmit(text);
  };

  return( 
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="search-input">Video Search</label>
          <input 
          value={text} 
          className="search-input" 
          type="text" 
          placeholder="search"
          onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );

};

export default SearchBar;