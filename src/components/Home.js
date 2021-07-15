import React from 'react'
import image from '../pink-flower.jpg'

const Home = () => {
    return (
        <div className='w-full overscroll-y-contain overflow-auto'>
            <img src={image} alt='pink flower on branch' className='absolute object-cover w-full h-full'/>
            <section className='relative justify-items-center leading-none ls:leading-snug grid grid-col-1 gap-4 p-2 pt-5 lg:pt-20 px-8'>
                <h1 className='text-6xl featured-posts font-bold cursive leading-none ls:leading-snug home-name'>Cassandra Parisi</h1><br/>
                <h1 className='text-6xl featured-posts-sub font-bold sans leading-none ls:leading-snug home-title '>Fullstack Software Engineer</h1>
            </section>
        </div>
    )
}

export default Home
