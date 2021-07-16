import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
    return (
        <header className='navbar-color '>
            <div className='mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink 
                        to='/' 
                        activeClassName='text-green-800'
                        exact className='inline-flex items-center py-6 px-3 mr-4 text-green-800 hover:text-white text-4xl font-bold cursive tracking-narrowest'
                    >
                        Cassandra
                    </NavLink>
                    <NavLink 
                        to='/project'
                        activeClassName='text-green-800 bg-white bg-opacity-50' 
                        className='inline-flex items-center sans py-3 px-3 my-6 rounded text-white hover:text-green-800'
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to='/post'
                        activeClassName='text-green-800 bg-white bg-opacity-50'
                        className='inline-flex items-center sans py-3 px-3 my-6 rounded text-white hover:text-green-800'
                    >
                        Featured Posts
                    </NavLink>
                    <NavLink 
                        to='/about'
                        activeClassName='text-green-800 bg-white bg-opacity-50'
                        className='inline-flex items-center sans py-3 px-3 my-6 rounded text-white hover:text-green-800'
                    >
                        About Me
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon url='https://www.linkedin.com/in/cassandra-parisi/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/>
                    <SocialIcon url='https://github.com/cparisi1290' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/>
                    <SocialIcon url='https://twitter.com/CParisiDev' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}

export default NavBar
