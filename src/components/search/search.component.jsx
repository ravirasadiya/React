import React from 'react';

export const Search = ({ placeholder, handleChange }) => (
  <div>
    <input
      type='search'
      className='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
