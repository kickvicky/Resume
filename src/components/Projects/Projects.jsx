import React from 'react'
import './projects.css'

function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='allProjects'>
                <div className='project-card project-1'>
                    <time>HTML,CSS & JS</time>
                    <h2>Tourella</h2>
                    <p>A 5 page Tour booking catalog website with a variety of packages at all price points from where a user can choose the
                        best suitable one for their needs, packages ranging from Solo Voyages, duo  packs, family tours</p>
                </div>
                <div className='project-card project-2'>
                    <time>Python & PyTorch</time>
                    <h2>GAN</h2>
                    <p>A model trained with 60,000 anime face images using a sequence of Convolutional Neural Networks and multiple optimization parameters
                        to generate real like completely new images, the generated images are 1 of 1 in the real world</p>
                </div>
                <div className='project-card project-3'>
                    <time>Java, XML</time>
                    <h2>Anime List</h2>
                    <p>Anime List app helps one in organizing his anime collection into watchlist, completed, favourites, Currently watching catalogs, so it is
                        easy to re-visit and continue watching or start a new show from the watchlist or to see all of your favourites</p>
                    {/* or start a new show from the watchlist or to see all of your favourites */}
                </div>
                <div className='project-card project-4'>
                    <time>React & Node</time>
                    <h2>Conuct</h2>
                    <p>A commitment less video conferencing app made with react helps in facilitating a minimalistic Video conferencing
                        experience with a live Speech to text feature which can be converted into Minutes of the Meet at downloaded at the end of the meet</p>
                </div>
                <div className='project-card project-5'>
                    <time>Kotlin</time>
                    <h2>gRu</h2>
                    <p>An augmented reality based educational visualization tool helps in remote visualization of complex engineering models by rendering
                        the assets on plain surface using surface detection algorithms and anchor it for a 360° visualization</p>
                </div>
            </div>
            <div className='spacer layer-1'></div>
        </div>
    )
}

export default Projects