import React from 'react'

export default function Navbar(){
    return(
        <div className='flex text-white bg-black'>
        <div>
        <img alt="logo" src="./public/random-logos-not-tied-to-anything-just-having-fun-making-v0-pq0tt984gdrc1.png" className="w-20 h-20 border border-black mr-100"/>
        </div>
        <div>
            <ul className='flex flex-row flex-wrap justify-between'>
                <li className='mx-10 my-6'><a>Start here</a></li>
                <li className='mx-10 my-6'><a>Blog</a></li>
                <li className='mx-10 my-6'><a>YouTube</a></li>
                <li className='mx-10 my-6'><a>Books</a></li>
                <li className='mx-10 my-6'><a>Recommended</a></li>
                <li className='mx-10 my-6'><a>Contact</a></li>
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