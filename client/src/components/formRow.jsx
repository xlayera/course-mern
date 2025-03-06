import React from 'react'

const formRow = ({ type, name, labelText, defaultValue }) => {
    return (
        <div className='form-now'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                defaultValue={defaultValue || ''}
                className='form-input'
                required />
        </div>

    )
}

export default formRow