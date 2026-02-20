import React from 'react';

const GroceryItem = ({ item, onDelete, onUpdate }) => {
  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '10px', 
      borderBottom: '1px solid #ddd',
      listStyle: 'none' 
    }}>
      <span>{item.name}</span>
      <div>
        <button onClick={() => onUpdate(item.id)} style={{ marginRight: '5px' }}>Edit</button>
        <button onClick={() => onDelete(item.id)} style={{ backgroundColor: '#ff4d4d', color: 'white' }}>Delete</button>
      </div>
    </li>
  );
};

export default GroceryItem;