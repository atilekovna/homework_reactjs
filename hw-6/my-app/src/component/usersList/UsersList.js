import React, { useState } from 'react';
import './UsersList.css'

function UsersList({userList}) {

  const [userData, setUser] = useState({})

  const getOneUserInfo = (event) => {

    const id = event.target.dataset.id

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }


  return (
    <ul>
      {userData.name ?
        <div className={"user-info"}>
          <h3>User information</h3>
          <p><span>name: </span>{userData.name}</p>
          <p><span>username:</span> {userData.username}</p>
          <p><span>phone: </span>{userData.phone}</p>
          <p><span>email:</span> {userData.email}</p>
          <p><span>website:</span> {userData.website}</p>
          <p><span>company name:</span> {userData.company.name}</p>
          <p><span>Address</span></p>
          <p><span>city:</span> {userData.address.city}</p>
          <p><span>street:</span>{userData.address.street}</p>
          <br/>
        </div> : ''
      }
      {
        userList.map(user =>
          <li key={user.id}>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>username: {user.username}</p>
            <button data-id={user.id} onClick={getOneUserInfo}>get information</button>
            <p>-------------------------</p>
          </li>)
      }
    </ul>
  );
}

export default UsersList;