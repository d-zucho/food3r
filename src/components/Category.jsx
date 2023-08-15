import { categories } from '../data/data.js'
import { useState } from 'react'

function Category() {
  console.log(categories)

  return (
    <section className='max-w-[1640px] px-4 py-12' id='top-rated-items'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Items
      </h1>
      <div className='grid grid-cols-2 gap-6 md:grid-cols-4 mx-auto py-6 text-center'>
        {categories.map((item) => (
          <div
            className='mx-auto bg-gray-100 rounded-lg flex justify-between items-center w-full px-4'
            key={item.id}
          >
            <h2 className='font-bold sm:font-2xl'>{item.name}</h2>
            <img className='w-20' src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Category
