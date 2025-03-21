import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <div className='flex text-white bg-black'>
        <div>
        <img alt="logo" src="/random-logos-not-tied-to-anything-just-having-fun-making-v0-pq0tt984gdrc1.png" className="w-20 h-20 border border-black mr-100 rounded-full"/>
        </div>
        <div>
            <ul className='flex flex-row flex-wrap justify-between'>
                <Link to="/"> <li className='mx-10 my-6 z-10'>Start here</li> </Link>
              <Link to="/projects"> <li className='mx-10 my-6 z-10'>Projects</li> </Link>
              <Link to="/about"><li className='mx-10 my-6 z-10'>About</li></Link>
            </ul>
        </div>
        </div>
    )
}

{/*Start Here
 
Blog
 
YouTube
 
Books
 
Recommended
 
Contact*/}