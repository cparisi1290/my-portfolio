import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';
import image from '../blurred.jpg'
import flower from '../pink-flower.jpg'


export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
                title,
                slug,
                mainImage{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className='bg-scroll bg-contain overflow-auto w-cover h-cover'>
        <img src={flower} alt='clouded tan background' className='absolute object-cover w-cover h-cover'/>
        <section className='container mx-auto absolute justify-center min-h-screen pt-5 lg:pt-8 px-8'>
            <h1 className='text-5xl flex justify-center cursive featured-posts'>
                Featured Blog Posts
            </h1>
            <h2 className='text-lg flex justify-center mb-12 featured-posts-sub'>
                Welcome to my page of blog posts
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {postData &&
                postData.map((post, index) => (
                    <article>
                    <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                        <span
                        className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-800'
                        key={index}
                        >
                        {post.mainImage && post.mainImage.asset && (
                        <img
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt}
                            className='w-full h-full rounded-r object-cover absolute'
                        />)}
                            <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                                <h3 className='text-gray-800 text-lg sans px-3 py-4 bg-green-800 text-green-100 bg-opacity-75 rounded'>
                                {post.title}
                                </h3>
                            </span>
                        </span>
                    </Link>
                    </article>
                ))}
            </div>
        </section>
    </main>
  );
}