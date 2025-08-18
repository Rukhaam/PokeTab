import React from 'react';

import '../search-box/searchbox.css';

export const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder='search your pokemon'
    onChange={props.onSearchChange}
  />
);