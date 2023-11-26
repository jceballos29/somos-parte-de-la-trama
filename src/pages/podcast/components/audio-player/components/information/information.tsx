
import React from 'react'

export interface InformationProps {
  title?: string;
  cover?: string;
}

const Information: React.FC<InformationProps> = ({cover, title}) => {

  return (
    <section className='w-full'>
      <figure className='w-full aspect-square bg-slate-100 rounded-lg mb-6 drop-shadow-md overflow-hidden'>
        <img
          src={cover}
          alt={title}
          className='w-full object-cover'
        />
      </figure>
      <h2 className='text-slate-800 font-bold text-center leading-none text-2xl h-16 drop-shadow-lg'>
        {title}
      </h2>
    </section>
  )
}

export default Information