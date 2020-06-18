import React, {useState} from 'react';
import './App.css';
import Form from './Form'
import User from './User'

const initialMembers = []
const initialFormValues = {
  name: '',
  email: '',
}


export default function App() {
  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [error, setError] = useState('')

  const onInputChange = evt => {
    const {name, value} = evt.target;
    setFormValues(formValues => ({
      ...formValues,
      [name]:value,
    }));
  }

  const onSubmit = evt => {
    evt.preventDefault()
    if (!formValues.name || !formValues.email){
      setError("Oops, please fill out all information.");
    } else{
      const newMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim()
      }
      setMembers(members => {
        return [...members, newMember];
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
        onSubmit={onSubmit}
        error={error}
        />
        {members.map(member => {
          return(
            <User key={member.name} details={member} />
          )
        })
        }
      </div>
    </div>
  );
}


