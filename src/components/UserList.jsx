import React, {useEffect, useState} from 'react';
import EditUser from './EditUser';

function UserList(props) {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getData() {
      const resp = await JSON.parse(window.localStorage.getItem('users'));
      setUsers(resp);
      console.log(resp);
    }

    getData();
  }, []);

  const editOn = user => {
    setEdit(!edit);
    setUser(user);
  };

  const onDeleteUser = deleteUser => {
    let changedUsers = users.filter(user => {
      if (user.id === deleteUser.id) {
        return false;
      } else {
        return true;
      }
    });

    setUsers(changedUsers);
  };

  const updateChanges = changedUser => {
    let changedUsers = users.map(user => {
      if (user.id === changedUser.id) {
        return Object.assign({}, user, changedUser);
      } else {
        return user;
      }
    });

    setUsers(changedUsers);
    setEdit(!edit);
  };
  return (
    <div className="">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Class</th>
            <th scope="col">Year</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.firstName + ' ' + user.lastName}</td>
                <td>{user.email}</td>
                <td>{'mba'}</td>
                <td>{user.year}</td>
                <td>{user.city}</td>
                <td>{user.country}</td>
                <td>
                  <button
                    className="btn-sm btn-secondary"
                    onClick={() => editOn(user)}>
                    edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn-sm btn-danger"
                    onClick={() => onDeleteUser(user)}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {edit ? <EditUser {...user} updateChanges={updateChanges} /> : ''}
    </div>
  );
}

export default UserList;
