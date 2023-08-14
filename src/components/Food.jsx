import { data } from '../data/data'

function Food() {
  console.log(data)
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
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              All
            </button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              Burgers
            </button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              Pizza
            </button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              Salads
            </button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold my-4 text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full lg:gap-2'>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              $
            </button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              $$
            </button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              $$$
            </button>
            <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              $$$$
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Food
