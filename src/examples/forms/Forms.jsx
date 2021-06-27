import React, { useEffect, useState } from "react";

const InputError = {
    ILLEGAL: 'This first name is illegal',
    REQUIRED: 'You must enter a first name'
}

export const Forms = () => {

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');

    useEffect(() => {
        if (firstName === 'wrong') {
            setFirstNameError(InputError.ILLEGAL);
        }
        else if (firstName === '') {
            setFirstNameError(InputError.REQUIRED);
        }
        else {
            setFirstNameError('');
        }
    }, [firstName]);

    return (
        <div className='col-sm-6'>
            <h2>Forms</h2>
            <article>
                <p className='lead'>
                    When developing forms, there are some special considerations to be made in order to make an accessible solution.
                </p>
            </article>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='has-validation'>
                    <label className={'form-label'} htmlFor={'given-name'}>
                        First name
                    </label>
                    <input
                        className={`form-control ${firstNameError ? 'is-invalid' : ''}`}
                        id={'given-name'}
                        name={'given-name'}
                        aria-autocomplete={"inline"}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <div className='invalid-feedback' role='alert' aria-live={'polite'}>{firstNameError}</div>
                </div>
                <div>
                    <label className={'col-form-label'} htmlFor={'family-name'}>
                        Last name
                    </label>
                    <input className={'form-control'} id={'family-name'} name={'family-name'}
                           aria-autocomplete={"inline"}/>
                </div>
                <button type={'submit'} className='btn btn-primary mt-4'>
                    Submit
                </button>
            </form>
        </div>
    );
}