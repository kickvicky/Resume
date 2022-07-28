import React from 'react'
import './home.css'
import { Link } from 'react-scroll'
// import moon from "./moon.png"
// import asteroids from "./asteroid.png"
import ReactTypingEffect from 'react-typing-effect';

function Home() {

    return (
        <div className='homeContent'>
            {/* <img src={moon} alt="Moon" className='moonImg' /> */}
            {/* <img src={asteroids} alt="asteroids" className='asteroidImg' /> */}
            <div className='v'>
                <h1>V</h1>
            </div>
            <div className='textBox'>
                {/* <h1>Hello</h1> */}
                {/* <h1 ><i>Wannabe Programmer</i></h1> */}
                <ReactTypingEffect
                    text={["Hello !!!", "This is Vicky :)", "I am currently a Senior at MIT", "I am Looking for exciting Intership oppertunites", "Let's get Connected "]}
                    cursorRenderer={cursor => <h1>{cursor}</h1>}
                    displayTextRenderer={(text, i) => {
                        return (
                            <h1>
                                {text.split('').map((char, i) => {
                                    const key = `${i}`;
                                    return (
                                        <span
                                            key={key}
                                        // style={i % 4 === 0 ? { color: 'white' } : {}}
                                        >{char}</span>
                                    );
                                })}
                            </h1>
                        );
                    }}
                    speed={100}
                    eraseSpeed={50}
                    eraseDelay={250}
                    cursor={"|"}
                />
            </div>
        </div>
    )
}

export default Home
