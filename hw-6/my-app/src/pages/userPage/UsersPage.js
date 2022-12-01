import React, { useState } from 'react';
import UsersList from "../../component/usersList/UsersList";

function UsersPage(props) {

  const [users, setUsers] = useState([])


  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>  setUsers(data))
  }

  return (
    <>
      <h1>Users Page</h1>
      <button onClick={getUsers}>get user</button>
      <UsersList userList={users}/>
    </>
  );
}

export default UsersPage;
