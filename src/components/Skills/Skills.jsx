import React from 'react'
import './skills.css'
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import bootstrap from './images/bootstrap.png';
import react from './images/react.png';
import node from './images/nodejs.png';
import express from './images/express.png';
import sql from './images/mysql.png';
import mongo from './images/mongodb.png';
import c from './images/c++.png';
import python from './images/python.png';
import java from './images/java.png';
import ai from './images/ai.png';
import ml from './images/ml.png';
import app from './images/app.png';
import skills from './images/skills.png';

function Skills() {
    return (
        <div className='skill-div'>
            <div className='heading'>

                <p className='header'>Skills </p>
                <img src={skills} alt='Skills' />
            </div>
            <div className='domain-1'>
                <h1>Web Development</h1>
                <div className='skills'>
                    <div className='items'>
                        <img src={html} alt='html' />
                        <h2> HTML </h2>
                    </div>
                    <div className='items'>
                        <img src={css} alt='css' />
                        <h2> CSS </h2>
                    </div>
                    <div className='items'>
                        <img src={js} alt='js' />
                        <h2> JavaScript </h2>
                    </div>
                    <div className='items'>
                        <img src={bootstrap} alt='bootstrap' />
                        <h2> Bootstrap </h2>
                    </div>
                    <div className='items'>
                        <img src={react} alt='react' />
                        <h2> React </h2>
                    </div>
                    <div className='items'>
                        <img src={node} alt='node' />
                        <h2> Node Js </h2>
                    </div>
                    <div className='items'>
                        <img src={express} alt='express' />
                        <h2> Express Js </h2>
                    </div>
                </div>
            </div>
            <div className='domain'>
                <h1>Database</h1>
                <div className='skills'>
                    <div className='items'>
                        <img src={sql} alt='sql' />
                        <h2> MySql </h2>
                    </div>
                    <div className='items'>
                        <img src={mongo} alt='Mongo' />
                        <h2> MongoDB </h2>
                    </div>
                </div>
            </div>
            <div className='domain'>
                <h1>Languages</h1>
                <div className='skills'>
                    <div className='items'>
                        <img src={c} alt='c++' />
                        <h2> C++ </h2>
                    </div>
                    <div className='items'>
                        <img src={python} alt='python' />
                        <h2> Python </h2>
                    </div>
                    <div className='items'>
                        <img src={java} alt='java' />
                        <h2> Java </h2>
                    </div>
                </div>
            </div>
            <div className='domain'>
                <h1>Interests</h1>
                <div className='skills'>
                    <div className='items'>
                        <img src={ai} alt='ai' />
                        <h2> AI </h2>
                    </div>
                    <div className='items'>
                        <img src={ml} alt='ml' />
                        <h2> ML </h2>
                    </div>
                    <div className='items'>
                        <img src={app} alt='App-Dev' />
                        <h2> App Development </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skills