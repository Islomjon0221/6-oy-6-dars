import './App.css'
import { useState, useEffect } from 'react';
function App() {

  let [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://auth-rg69.onrender.com/api/products/all")
      .then(res => res.json())
      .then(des => {setData(des)
      console.log(des);})
      .catch(err => {
        console.log(err);
      })
  }, [])

  function handleDelete(id) {
    let del = confirm("Malumot ochib ketadi")
    if (del) {

      fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        })
    }
    console.log(data);
  }

  return (
    <table className="form_wrapper">
        <thead>
      <tr>
        <th>№</th>
        <th>Nomi</th>
        <th>Narxi</th>
        <th>Izohi</th>
        <th>Amallar</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map((des, index) => {
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{des.name}</td>
          <td>{des.price}</td>
          <td>{des.description}</td>
          <td><button onClick={() => { handleDelete(des.id) }}>Delete</button></td>
        </tr>})}
        </tbody>
    </table>
  )
}

export default App

