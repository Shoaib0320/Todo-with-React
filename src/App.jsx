// import React, { useState } from 'react';
// import './Todo.css';
// import './Todo-Light.css';
// import ItemForm from './components/ItemForm';
// import ItemList from './components/ItemList';

// function App() {
//   const [items, setItems] = useState([]);
//   const [currentItem, setCurrentItem] = useState({ id: null, name: '' });
//   const [isEditing, setIsEditing] = useState(false);
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const addItem = (item) => {
//     item.id = items.length + 1;
//     setItems([...items, item]);
//   };

//   const deleteItem = (id) => {
//     setItems(items.filter(item => item.id !== id));
//   };

//   const editItem = (item) => {
//     setIsEditing(true);
//     setCurrentItem(item);
//   };

//   const updateItem = (updatedItem) => {
//     setIsEditing(false);
//     setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
//   };

//   const toggleTheme = () => {
//     setIsDarkTheme(prevTheme => !prevTheme);
//   };

//   return (
//     <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
//       <div className='todo-container'>
//         <h1>React TODO Application</h1>
//         <button onClick={toggleTheme}>
//           {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
//         </button>
//         <center>
//           <ItemForm 
//             addItem={addItem} 
//             currentItem={currentItem} 
//             isEditing={isEditing} 
//             updateItem={updateItem}
//           />
//         </center>
//         <ItemList
//           items={items} 
//           deleteItem={deleteItem} 
//           editItem={editItem}
//         />
//       </div>
//       <br />
//       <br />
//     </div>
//   );
// }

// export default App;







import React, { useState } from 'react';
import './Todo.css';
import './Todo-Light.css';
import'./Toogle.css';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ id: null, name: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const addItem = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
  };

  const updateItem = (updatedItem) => {
    setIsEditing(false);
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className='todo-container'>
      <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
        <center><h1>React TODO Application</h1></center>
          {/* Toggle Switch Button */}
          <label className="theme-switch">
            <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
      </div>
        <center>
          <ItemForm 
            addItem={addItem} 
            currentItem={currentItem} 
            isEditing={isEditing} 
            updateItem={updateItem}
          />
        </center>
        <ItemList
          items={items} 
          deleteItem={deleteItem} 
          editItem={editItem}
        />
      </div>
      <br />
      <br />
    </div>
  );
}

export default App;
