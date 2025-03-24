import React from 'react'

export default function About() {
    return (
        <>
        <div className="py-8 flex bg-gray-200 flex-wrap justify-around">
            <img alt="logos" src="./CAPCITI-LOGO-V3-1020x550.jpg" className='h-40 w-40'/>
            <img alt="logosCode" src="./codespaceza_logo.jpeg" className='h-40 w-40' />
        </div>
        <div className="flex flex-wrap justify-around mt-20">
        <div>
        <img alt="me" src="./meWalk.jpg" className='w-100 h-150' />
        </div>
        <div className='border border-solid-red p-6'>
            <h1 className="font-bold text-4xl mb-6">Answer me this...</h1>
            <h3>Are you tired of websites that goes nowhere?</h3>
            <h3>Are you tired of always getting rejection letters from potential employers?</h3>        
            <h3>Are you tired of being the only one not picked?</h3>
            <br></br>
            <h1 className="font-bold text-4xl mb-6">Have you ever asked yourself...</h1>        
            <h3>How can I earn enough money freelancing?</h3>
            <h3>How can I let the employers see my worth?</h3>
            <h3>Am I really good enough?</h3>
            <br></br>
            <h1 className='font-bold text-4xl mb-6'>Here's what to expect</h1>
            <h3>Collaborative work on mobile development</h3>
            <h3>Web development to have potential customers and clients to visit</h3>
            <h3>Analyzing content for Search engine optimization</h3>
            <h3>Copywriting to make sure you sell your brand through the written word</h3>
        </div>
        </div>
        <div className="flex flex-wrap justify-center mt-24 p-20">
            <h1 className='text-4xl bg-gray-500'>About me</h1>
            <p>Du-wayne spent years since 2019 levelling up his social skills and professional skills yet keep getting better
                He decided at the year 2023 to take a massive leap of faith to further his future by studying software development at 
                Codespace Academy where he learnt skills which equiped him to be good enough to develop websites and web apps. Looking for a 
                job, he found Capaciti where he relearned skills taught at Codespace Academy and collaborative skills to work in a team 
                with ease. Now he's still looking to grow in every area of his life, fitness, financial and socially. This is million dollar mindset if he keeps
                it up.
            </p>
        </div>
        </>
    )
}