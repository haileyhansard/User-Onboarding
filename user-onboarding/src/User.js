import React from 'react'

export default function Users(props) {
    const {details} = props
    if (!details){
        return <h3>Working on fetching user details...</h3>
    }

    return(
        <div>
            <h2>New User: {details.name}</h2>
            <h4>Email: {details.email}</h4>
        </div>
    )
}