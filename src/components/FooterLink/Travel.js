import React from 'react';
import Menu from '../Menu';
import StoriesList from '../StoriesList';
const Travel = () => (
  <div style={{ textAlign: 'center' }}>
    <Menu />
    <StoriesList title="Travel News" queryText="travel" />
  </div>
);

export default Travel;
