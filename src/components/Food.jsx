import { useState } from 'react'
import { data } from '../data/data'

function Food() {
  const [foods, setFoods] = useState(data)

  // Filter Tyoe: Burgers, Pizza, Salads, Chicken
  const filterType = (type) => {
    setFoods(
      data.filter((item) => {
        return type === item.category
      })
    )
  }

  // Filter Price: $, $$, $$$, $$$$
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return price === item.price
      })
    )
  }

  return (
    <section id='filter-foods' className='max-width-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
          <p className='font-bold my-4 text-gray-700'>Filter Type</p>
          <div className='flex justify-between flex-wrap lg:gap-2'>
            <button
              onClick={() => setFoods(data)}
              className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold my-4 text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full lg:gap-2'>
            <button
              onClick={() => filterPrice('$')}
              className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <section
        id='food-items'
        className='grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4'
      >
        {foods.map((item, index) => (
          <div
            key={index}
            className='border rounded-lg shadow-lg hover:scale-105 duration-300 pb-2'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='px-2 flex justify-between py-2'>
              <p className='font-bold'>{item.name}</p>
              <span className='bg-orange-600 text-white p-1 rounded-full'>
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Food
