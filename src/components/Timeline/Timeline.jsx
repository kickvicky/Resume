import React from 'react'
import './style.css'

function Timeline() {
    return (
        <section className='Timeline'>
            <div className='timeline'>
                <h1 class="time-h1">My Timeline</h1>
                <div class="container">
                    <div class="timeline-block timeline-block-right">
                        <div class="marker"></div>
                        <div class="timeline-content">
                            <h3>Grade 11</h3>
                            <span>Introduction to C++ </span>
                            <p>The first place where i could see the wonders a few lines of code could do and all the magic's like loops, recursions, pointers made me fall in love with this domain and helped in finding the problem solver in me </p>
                        </div>
                    </div>

                    <div class="timeline-block timeline-block-left">
                        <div class="marker"></div>
                        <div class="timeline-content">
                            <h3>First Year</h3>
                            <span>Python 101 </span>
                            <p>Python helped me realise there is lot more one can do than just write functions to check for prime numbers or to find whether a number is a palindrome, it helped me grasp
                                the vastness of this field from basic visualization of data  to analysing and predicting future outcomes with past data to building complex games to creating full fleged web applications</p>
                        </div>
                    </div>

                    <div class="timeline-block timeline-block-right">
                        <div class="marker"></div>
                        <div class="timeline-content">
                            <h3>Quarentine - 1</h3>
                            <span>Web Development </span>
                            <p>Ventured into the field of web Development and learnt all the wonders putting HTML,CSS & vanila JS could do together<br />
                                Tourella - A Tourist travel booking website tailored towards single,couple,family oriented trip packages with locations around the world with varies pricing options</p>
                        </div>
                    </div>

                    <div class="timeline-block timeline-block-left">
                        <div class="marker"></div>
                        <div class="timeline-content">
                            <h3>Second Year</h3>
                            <span>AI/ML </span>
                            <p>The Buzz of AI/ML was too huge to ignore, started with some basic regression and classification and got intriged by the idea of a machine making decision on its own and went on to do multiple projects with different algorithms
                                <br />GAN - Using a Generative Adveserial Network trained a dataset with 60,000 anime faces and generated completely new images which have never existed
                            </p>
                        </div>
                    </div>

                    <div class="timeline-block timeline-block-right">
                        <div class="marker"></div>
                        <div class="timeline-content">
                            <h3>Third Year</h3>
                            <span>Android Development </span>
                            <p>A full java based semester made by intrests dwindle towards making an android app with java, learnt a lot from styling to having make different layouts for different orientations to changing text with language<br />
                                AnimeList - An app catered towards organizing your anime into watchlist, completed, favourites, re-watch catalogs
                            </p>
                        </div>
                    </div>

                    <div class="timeline-block timeline-block-left">
                        <div class="marker"></div>
                        <div class="timeline-content">
                            <h3>Bloomscope</h3>
                            <span>Research Intern </span>
                            <p>
                                Bloomscope is an Ed-Tech platform, Researched and Developed at IIT
                                bombay under the guidance of Prof.Snehal Awate, we as a part of the
                                Research team worked from the start of UI skecth to the end of hosting the product
                                in a domain name server, assisted in Developement of frontend using <code>react.js</code>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Timeline
