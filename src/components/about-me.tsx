import React from 'react'
import { Tilte } from './shared/tilte'
import { dataAboutMe } from '../../data'

const About = () => {
  return (
    <div className='p-6 md:px-12 md:py-30 max-w-5xl mx-auto' id='about-me' >
        <Tilte title="Sobre mi" subtitle='Conoceme' />
        <div className='grid md:grid-cols-2' >  
            <div className='py-2 md:py-0 flex items-center justify-center' >

            </div>
            <div className='grid md:grid-cols-3 mt-7 gap-4' >
                {
                    dataAboutMe.map((data) => (
                        <div key={data.id} className='border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800' >
                            {data.icon}
                            <p className='my-2' >{data.name}</p>
                            <p className='text-gray-400' >{data.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default About