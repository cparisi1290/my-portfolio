import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react'
import flower from '../PinkFlower.jpg';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
          }`
          )
          .then((data) => setAuthor(data[0]))
          .catch(console.error);
      }, []);

      if (!author) return <div>Loading...</div>;

    return (
        <main className='relative'>
            <img src={flower} alt='pink flower on branch' className='absolute object-cover w-cover h-cover'/>
            <div className='p-10 lg:pt-24 container mx-auto relative'>
                <section className='rounded-lg lg:flex p-10' >
                    <img src={urlFor(author.authorImage).url()} className='rounded w-auto h-32 lg:w-auto lg:h-64 lg:pt-6 mr-8' alt={author.name}/>
                    <div className='text-lg flex flex-col justify-center'>
                        <h1 className='cursive text-6xl featured-posts'>Hi there! I'm {author.name}.
                        </h1>
                        <div className='prose lg:prose-xl featured-posts'>
                            <BlockContent 
                                blocks={author.bio}
                                projectId="a6wykfht"
                                dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
