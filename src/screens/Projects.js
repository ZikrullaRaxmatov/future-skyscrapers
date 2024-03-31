import React from 'react';
import pro1 from '../assets/pro1.avif'
import pro2 from '../assets/pro2.avif'
import pro3 from '../assets/pro3.avif'
import pro4 from '../assets/pro4.avif'
import pro5 from '../assets/pro5.avif'
import pro6 from '../assets/pro6.avif'

function Projects() {
    return (
        <div class="projects" id='projects'>
            <div class="container">
                <div class="project-items">
                    <h1>Our Projects</h1>
                    <div class="raw">
                        <div class="project-info col-12 col-md-8 p-2">
                            <img src={pro1} alt='pro1' />
                            {/* <h1>BIG street</h1>
                            <p class="mt-5">The Big Street is a 1942 American drama film starring Henry Fonda and Lucille Ball, based on the 1940 short story "Little Pinks" by Damon Runyon</p> */}
                        </div>
                        <div class="col-12 col-md-4 p-2">
                            <img src={pro2} alt='pro2' />
                        </div>
                    </div>
                    <div class="raw">
                        <div class="project-info col-12 col-md-4 p-2">
                            <img src={pro3} alt='pro1' />
                            {/* <h1>BIG street</h1>
                            <p class="mt-5">The Big Street is a 1942 American drama film starring Henry Fonda and Lucille Ball, based on the 1940 short story "Little Pinks" by Damon Runyon</p> */}
                        </div>
                        <div class="col-12 col-md-8 p-2">
                            <img src={pro4} alt='pro2' />
                        </div>
                    </div>
                    <div class="raw">
                        <div class="project-info col-12 col-md-6 p-2">
                            <img src={pro5} alt='pro1' />
                            {/* <h1>BIG street</h1>
                            <p class="mt-5">The Big Street is a 1942 American drama film starring Henry Fonda and Lucille Ball, based on the 1940 short story "Little Pinks" by Damon Runyon</p> */}
                        </div>
                        <div class="col-12 col-md-6 p-2">
                            <img src={pro6} alt='pro2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;