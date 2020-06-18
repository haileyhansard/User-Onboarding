import React, {useState} from 'react';
import './App.css';
import Form from './Form'
import User from './User'
import formSchema from './formSchema'
import axios from 'axios'
import * as Yup from 'yup'


const initialUsers = []
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: '',
}
const initialDisabled = false

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [error, setError] = useState('')
  const [disabled, setDisabled] = useState(initialDisabled)

  const onInputChange = evt => {
    const {name, value} = evt.target;
    setFormValues(formValues => ({
      ...formValues,
      [name]:value,
    }));
  }

  // const onCheckboxChange = evt => {
  //   const {name, checked } = evt.target;
  //   setFormValues({
  //     ...formValues,
  //     terms:
  //   })
  // }

  const onSubmit = evt => {
    evt.preventDefault()
    if (!formValues.name || !formValues.email || !formValues.password)
    {
      setError("Oops, please fill out all information.");
    } 
    else{
      const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim()
      }
      setUsers(users => {
        return [...users, newUser];
      });
      setError('');
      setFormValues(initialFormValues);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Team! 
        </p>
      </header>
      <div>
        <Form 
        values={formValues}
        onInputChange={onInputChange}
        // onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        error={error}
        />
        {users.map(user => {
          return(
            <User key={user.name} details={user} />
          )
        })
        }
      </div>
    </div>
  );
}


