//Start creating Form here

import React, {useState} from 'react'

export default function Form (props) {
    const{
        values,
        onInputChange,
        disabled,
        onSubmit,
        errors
    } = props

    return(
        <form onSubmit={onSubmit}>
            <div class="Form">
                <h2>User Onboarding</h2>
            </div>
            <div>
                <h3>Please fill out the following information:</h3>
                <div class="FormChildren">
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
                {
                    errors.name.length > 0 && (<p>{errors.name}</p>)
                }
                <label htmlFor='emailInput'>Email:
                    <input
                        id='emailInput'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>
                {
                    errors.email.length > 0 && (<p>{errors.email}</p>)
                }
                <label htmlFor="passwordInput">Password:
                    <input 
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onInputChange}
                    maxLength="12"
                    />
                </label>
                {
                    errors.password.length > 0 && (<p>{errors.password}</p>)
                }
                <label htmlFor="terms">
                    <input
                    name="terms"
                    type="checkbox"
                    onChange={onInputChange}
                    checked={values.terms} 
                    />
                    I Accept Terms & Conditions
                </label>
                {
                    errors.terms.length > 0 && (<p>{errors.terms}</p>)
                }
                <div>
                    <button disabled={disabled}>
                        Submit Form Here!
                    </button>
                </div>
            </div>
            </div>
        </form>
    )
};