import { useEffect, useState } from "react";
import styles from "./todo.module.css";

export default function Todo() {

  let [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://auth-rg69.onrender.com/api/products/all")
      .then(res => res.json())
      .then(data => {setData(data)
      console.log(data);})
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
    <table className={styles.form_wrapper}>
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
        data.map((phone, index) => {
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{phone.name}</td>
          <td>{phone.price}</td>
          <td>{phone.description}</td>
          <td><button onClick={() => { handleDelete(phone.id) }}>Delete</button></td>
        </tr>})}
        </tbody>
    </table>
  )
}
