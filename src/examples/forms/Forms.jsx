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
        <div className='col-sm-6 pt-5 pb-5'>
            <h2>Forms</h2>
            <article>
                <p className='lead'>
                    When developing forms, there are some special considerations to be made in order to make an accessible solution.
                </p>
                <p>
                    Grouping semantically connected input components into "fieldsets" will enable users with screen readers
                    to grasp the context, which might be obvious for users without visual impairments
                </p>
            </article>
            <form onSubmit={(e) => e.preventDefault()}>
                <fieldset>
                    <legend className='visually-hidden'>Personal information</legend>
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
                </fieldset>
                <fieldset className='border border-1 p-4 mt-5 bg-light'>
                    <legend>Contact information</legend>
                    <p >
                        It's fairly obvious for the seeing users that this is a different input group than the one above,
                        but for a screen reader this can be explicitly stated with "fieldsets".
                    </p>
                    <div className='has-validation'>
                        <label className='form-label' htmlFor={'email'}>
                            Email
                        </label>
                        <input
                            className='form-control'
                            id={'email'}
                            name={'email'}
                            type={'text'}
                            required
                            aria-required
                            aria-autocomplete={"inline"}
                        />
                    </div>
                    <div className='has-validation'>
                        <label className={'form-label'} htmlFor={'phone'}>
                            Phone
                        </label>
                        <input
                            className='form-control'
                            id={'phone'}
                            name={'phone'}
                            required
                            aria-required
                            aria-autocomplete={"inline"}
                        />
                    </div>
                </fieldset>
                <fieldset className='mt-4'>
                    <legend>Consents</legend>
                    <div className='form-check'>
                        <label htmlFor={'consent-true'}>Yes</label>
                        <input type={'radio'} name={'consent'} className='form-check-input' id={'consent-true'} value={'true'}/>
                    </div>
                    <div className='form-check'>
                        <label htmlFor={'consent-false'}>No</label>
                        <input type={'radio'} name={'consent'} className='form-check-input' id={'consent-false'} value={'false'}/>
                    </div>
                </fieldset>

                <button type={'submit'} className='btn btn-primary mt-4'>
                    Submit
                </button>
            </form>
        </div>
    );
}