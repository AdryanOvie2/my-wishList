// import { useState } from 'react'
import { useState } from 'react';
import bagLogo from '/bag.svg'

import './App.css'

export default function App() {

  const author = '<AdryCode/>';
  
  const [listItems, setListItems] = useState([]); // Estado para almacenar los elementos de la lista
  const [checkedIndexes, setCheckedIndexes] = useState([]); // Estado para almacenar los índices de los checkboxes marcados
  const [newItemText, setNewItemText] = useState(''); // Estado para almacenar el texto ingresado en el input

  const handleButtonClick = () => {
    // Agregar un nuevo elemento a la lista
    setListItems(prevListItems => [...prevListItems, newItemText]);
    // Limpiar el contenido del input
    setNewItemText('');
  };

  const handleCheckboxChange = (index) => {
    // Actualizar los índices de los checkboxes marcados
    setCheckedIndexes(prevIndexes => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter(i => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  const handleInputChange = (event) => {
    // Actualizar el estado del input a medida que se ingresa texto
    setNewItemText(event.target.value);
  };
  

  return (
    <>
      <header>
        <img className='logo bag' src={bagLogo} alt="Bgag logo" />
        <h1>My WishList</h1>
      </header>
      <div className="card">
        <h3>New wish</h3>
        <input 
          id='wish' 
          type="text" 
          placeholder='Enter your wish here' 
          value={newItemText}
          onChange={handleInputChange}
          />
      </div>
      <hr className='divider' />
      <div className="content">
        <ul id='list'>
          {listItems.map((item, index) => (
            <li key={index}>
              <input 
                checked={checkedIndexes.includes(index)}
                onChange={() => handleCheckboxChange(index)}
                type="checkbox" 
                id="" 
                />
              <label className={checkedIndexes.includes(index) ? 'checked' : ''}>{item}</label>
            </li>
          ))}
        </ul>
        <button onClick={handleButtonClick} className='done'>Create wish!</button>
      </div>  
      <p className="read-the-docs">
        Desarrollado por {author}
      </p>
    </>
  )
}