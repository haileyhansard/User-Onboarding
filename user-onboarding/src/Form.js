//Start creating Form here

import React, {useState} from 'react'


export default function Form (props) {
    const{
        values,
        onInputChange,
        onCheckboxChange,
        disabled,
        onSubmit,
        error 
    } = props

    return(
        <form onSubmit={onSubmit}>
            <div>
                <h2>User Onboarding</h2>
                <button disabled={disabled}>Submit Form Here!</button>
            </div>
            {
                error && <p>{error}</p>
            }
            <div>
                <h3>Please fill out the following information:</h3>
                <label>Name:
                    <input
                    id="name"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onInputChange}
                    maxLength="100"
                    />
                </label>
                <label htmlFor='emailInput'>Email:
                    <input
                        id='emailInput'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>
                <label htmlFor="passwordInput">Password:
                    <input 
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onInputChange}
                    maxLength="12"
                    />
                </label>
                <label htmlFor="terms">
                    <input
                    type="checkbox"
                    name="terms"
                    checked={false} 
                    />
                    I Accept Terms & Conditions
                </label>
            </div>
        </form>
    )
};