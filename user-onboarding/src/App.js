import React, {useState, useEffect} from 'react';
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
  terms: false,
}
const initialErrors = {
  ...initialFormValues,
  terms: ''
}
const initialDisabled = false

export default function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  useEffect(() => {
    formSchema
    .isValid(formValues)
    .then(valid => {
      setDisabled(!valid);
    })
  },[formValues])
  
  const updateUsers = user => {
    setUsers(users => [...users, user]);
  }

const createUser = (user) => {
  axios.post("https://reqres.in/api/users", user)
    .then(response => {
      console.log("response", response.data)
      updateUsers(response.data)
    })
    .catch(err => {
      console.log('Error:', err)
    })
}

  const onInputChange = evt => {
    evt.persist();
    const {name, value, checked} = evt.target;
    
    Yup
    .reach(formSchema, name)
    .validate(name === 'terms'? checked : value)
    .then(valid => {
      setErrors(errors => ({
        ...errors, 
        [name]:""
      }));
    })
    .catch(err => {
      setErrors(errors => ({
         ...errors, 
         [name]: err.errors[0]
      }));
    });

    setFormValues(formValues => ({
      ...formValues,
      [name]: name === 'terms' ? checked : value,
    }));
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    createUser(newUser)
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
        onSubmit={onSubmit}
        disabled={disabled}
        errors={errors}
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


