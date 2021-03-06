import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import flower from '../pink-flower.jpg'

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == 'project']{
                title,
                date,
                company,
                description,
                projectType,
                github,
                demo,
                tags,
            }
        `).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);
    
    return (
        <main className='bg-container'>
        <img src={flower} alt='clouded tan background' className='absolute object-cover w-cover h-cover'/>
            <section className='mx-auto absolute justify-center min-h-screen pt-5 lg:pt-16 px-16'>
                <h1 className='text-5xl flex justify-center cursive featured-posts'>My Projects</h1>
                <h2 className='text-lg flex justify-center mb-24 featured-posts-sub'>Welcome to my projects page!</h2>
            
            <section className='grid grid-cols-3 gap-12'>
                {projectData && projectData.map((project, index) => (
                <article className='relative rounded-lg shadow-xl bg-green-100 bg-opacity-50 p-6'>
                    <h3 className='featured-posts text-3xl font-blod mb-2 hover:underline hover:featured-posts'>
                        <a href={project.demo} alt={project.title} target='_blank' rel='noopener noreferrer'>{project.title}</a>
                    </h3>
                    <div className='featured-posts-sub text-xs space-x-4' key={index}>
                        <span>
                            <strong className='font-bold'>Completed</strong>:{' '}
                            {new Date(project.date).toLocaleDateString()}
                        </span>
                        <span>
                            <strong className='font-bold'>Company</strong>:{' '}
                            {project.company}
                        </span>
                        <span>
                            <strong className='font-bold'>Type</strong>:{' '}
                            {project.projectType}
                        </span>
                        <p className='my-6 text-sm featured-posts leading-snug'>{project.description}</p>
                        <a href={project.demo} rel='noopener noreferrer' target='_blank' className='featured-posts font-bold hover:underline hover:featured-posts text-xl'>
                            Project Demo
                        </a><br/>
                        <a href={project.github} rel='noopener noreferrer' target='_blank' className='featured-posts font-bold hover:underline hover:featured-posts text-xl'>
                            Project Code
                        </a>
                    </div>
                </article>
                ))}
                </section>
            </section>
        </main>
    );
}
