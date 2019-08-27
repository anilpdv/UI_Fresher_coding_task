import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {validateEmail, generateUUID} from '../utils/validators';

import './Register.css';

let users;
function Register(props) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setmiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('bangalore');
  const [country, setCountry] = useState('india');
  const [year, setYear] = useState('2019');
  const [error, setError] = useState('');

  const onEnterDetails = async e => {
    e.preventDefault();
    if (
      email === '' ||
      firstName === '' ||
      lastName === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      setError('Enter All details');
    } else if (!validateEmail(email)) {
      setError('enter valid email address');
    } else if (password !== confirmPassword) {
      setError('Password and Confirm Password should match');
    } else {
      let user = {
        id: generateUUID(),
        firstName,
        middleName,
        lastName,
        mobileNumber,
        password,
        email,
        city,
        country,
        year,
      };
      try {
        users = await JSON.parse(window.localStorage.getItem('users'));
        await window.localStorage.setItem(
          'users',
          JSON.stringify([...users, user]),
        );
        props.history.push('/');
      } catch (e) {
        console.log(e);
        users = [];
        window.localStorage.setItem(
          'users',
          JSON.stringify([user]),
          props.history.push('/dashboard'),
        );
      }
      console.log(users);
    }
  };
  return (
    <div className="Login">
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        ''
      )}
      <form className="form-group" onSubmit={onEnterDetails}>
        <lable for="firstName-label">First Name</lable>
        <input
          className="form-control mb-3"
          id="First Name-label"
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={e => setFirstName(e.target.value)}
        />

        <lable for="middleName-label">middle Name</lable>
        <input
          className="form-control mb-3"
          id="middleName-label"
          type="text"
          name="middleName"
          value={middleName}
          placeholder="middle Name"
          onChange={e => setmiddleName(e.target.value)}
        />
        <lable for="lastName-label">Last Name</lable>
        <input
          className="form-control mb-3"
          id="lastName-label"
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={e => setLastName(e.target.value)}
        />

        <lable for="email-label">Email</lable>
        <input
          className="form-control mb-3"
          id="email-label"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <lable for="mobile-label">mobile Number</lable>
        <input
          className="form-control mb-3"
          id="mobile-label"
          type="number"
          name="mobileNumber"
          value={mobileNumber}
          placeholder="mobile Number"
          onChange={e => setmobileNumber(e.target.value)}
        />

        <lable for="year-label">Enroll Year</lable>
        <input
          className="form-control mb-3"
          id="year-label"
          type="number"
          name="year"
          value={year}
          placeholder="year"
          onChange={e => setYear(e.target.value)}
        />

        <lable for="city-label">City</lable>
        <input
          className="form-control mb-3"
          id="city-label"
          type="text"
          name="city"
          value={city}
          placeholder="City"
          onChange={e => setCity(e.target.value)}
        />

        <lable for="Country-label">Country</lable>
        <input
          className="form-control mb-3"
          id="Country-label"
          type="text"
          name="country"
          value={country}
          placeholder="Country"
          onChange={e => setCountry(e.target.value)}
        />

        <lable for="password-label">Password</lable>
        <input
          className="form-control mb-3"
          id="password-label"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <lable for="confirmPassword-label">Confirm Password</lable>
        <input
          className="form-control mb-3"
          id="confirmPassword-label"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button class="btn btn-primary mt-3">submit</button>
        <span className="Login-link">
          <Link to="/">Already have an accout then login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
