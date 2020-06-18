//Start creating Form here

import React, {useState} from 'react'

export default function Form (props) {
    const{
        values,
        onInputChange,
        onSubmit,
        error 
    } = props

    return(
        <form onSubmit={onSubmit}>
            <div>
                <h2>User Onboarding</h2>
                <button>Submit Form Here!</button>
            </div>
            {
                error && <p>{error}</p>
            }
            <div>
                <h3>Please fill out the following information:</h3>
                <label>Name:
                    <input
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
            </div>
        </form>
    )
};