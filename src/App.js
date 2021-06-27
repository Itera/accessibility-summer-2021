import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { Forms } from "./examples/forms/Forms";
import { Images } from "./examples/images/Images";
import { Semantic } from "./examples/semantic/Semantic";

function App() {
    return (
        <>
            <header className=" mb-5">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">

                        <ul className="navbar-nav">
                            <li className='nav-item'>
                                <a className="navbar-brand" href="/" aria-label={'Tilbake til forsiden'}>
                                    <img src="./dummy/itera-logo-blue.jpg" alt="" width="30" height="34"
                                         className="d-inline-block align-text-top" />
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#semantic">Semantic HTML</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#forms">Forms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#images">Images</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main id={'main'} className='container'>
                <h1>Accessibility Course - Summer 2021</h1>
                <p className='lead col-sm-6'>
                    This application contains a set of examples of both "good" and "bad" accessibility. Please <b>do not copy</b> or use
                    any of the code here for other purpose than education, as this is
                    used during a course where context is provided
                </p>
                <p className='lead mt-5 fw-bold'>Some relevant links for accessibility implementation:</p>
                <div className='list-group col-sm-6'>
                    <a className='list-group-item  list-group-item-action' target={'_blank'} href={'https://www.uutilsynet.no/'}>UU-Tilsynets hjemmesider</a>
                    <a className='list-group-item  list-group-item-action' target={'_blank'} href={'https://www.w3.org/TR/WCAG21/'}>WCAG 2.1 Spesifikasjon (Tunglest)</a>
                </div>
                <section id='semantic' className='mb-5'>
                    <Semantic />
                </section>
                <section id='forms' className='mb-5'>
                    <Forms />
                </section>
                <section id='images' className='mb-5'>
                    <Images />
                </section>
            </main>
            <footer className='bg-dark mt-5'>
                <div className='container pt-5 pb-5 align-items-center'>
                    <a className='link-light' href={'#main'}>
                        <img
                            src="./dummy/itera-logo-blue.jpg"
                            alt=""
                            width="30"
                            height="34"
                            className="mx-2 d-inline-block"
                        />
                            Back to top
                        </a>
                </div>
            </footer>
        </>
    );
}

export default App;
