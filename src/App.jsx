import { useState } from 'react';
import GroceryItem from './components/GroceryItem';
import './App.css';

function App() {
  // 1. State for the list and the input field
  const [items, setItems] = useState([
    { id: 1, name: 'Milk' },
    { id: 2, name: 'Eggs' }
  ]);
  const [inputValue, setInputValue] = useState('');

  // 2. Add function
  const addItem = () => {
    if (inputValue.trim() === '') return;
    const newItem = {
      id: Date.now(), // Unique ID using timestamp
      name: inputValue
    };
    setItems([...items, newItem]); // Adding to array
    setInputValue(''); // Clear input
  };

  // 3. Delete function (using filter)
  const deleteItem = (id) => {
    const updatedList = items.filter(item => item.id !== id);
    setItems(updatedList);
  };

  // 4. Update function (using map)
  const updateItem = (id) => {
    const newName = prompt("Enter new name:");
    if (newName) {
      const updatedList = items.map(item => 
        item.id === id ? { ...item, name: newName } : item
      );
      setItems(updatedList);
    }
  };

  return (
    <div className="app-container" style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>My Grocery List</h1>
      
      <div className="input-section">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Add an item..."
        />
        <button onClick={addItem}>Add</button>
      </div>

      <ul style={{ padding: 0 }}>
        {/* Using .map() to display the list */}
        {items.map((item) => (
          <GroceryItem 
            key={item.id} 
            item={item} 
            onDelete={deleteItem} 
            onUpdate={updateItem} 
          />
        ))}
      </ul>

      {items.length === 0 && <p>Your list is empty!</p>}
    </div>
  );
}

export default App;
