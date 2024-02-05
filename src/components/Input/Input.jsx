import { useState } from 'react';
import styles from './Input.module.css'

export default function Input() {
  const [name, setName] = useState('');
    
  function handleName(e) {
    setName(e.target.value);
  }
  
  function handleClick(e) {
  e.preventDefault();
    console.log(name);
    let data = getData()
    data.push(name);
    localStorage.setItem('user', JSON.stringify(data));

  }

  function getData() {
      let data = [];
      if(localStorage.getItem('user')) {
          data = JSON.parse(localStorage.getItem('user'))
      }
  
      return data
  }

  return (
    <>
        <form className={styles.form}>
          <input type="text" placeholder='Enter your todo...' value = {name} onChange={handleName}/>

          <button onClick={handleClick}>Saqlash</button>
        </form>
        
    </>
  )
}