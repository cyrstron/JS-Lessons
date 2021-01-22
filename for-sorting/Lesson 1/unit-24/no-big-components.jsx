import React from 'react';

const UserForm = () => {
    return (
        <form>
            <div>
                <label>
                    First name: 
                    <input name='first-name' />
                </label>
            </div>
            <div>
                <label>
                    Last name: 
                    <input name='last-name' />
                </label>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
}

import React from 'react';

const Field = ({label, name}) => {
    return (
        <div>
            <label>
                {label}
                <input name={name} />
            </label>
        </div>
    );
}

const UserForm = () => {
    return (
        <form>            
            <Field 
                label='First name:'
                name='first-name'
            />     
            <Field 
                label='Last name:'
                name='last-name'
            />
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
}
