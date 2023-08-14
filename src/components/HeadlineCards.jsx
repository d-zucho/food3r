function HeadlineCards() {
  return (
    <section className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}

      {/* Card 1 */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 9/21</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[140px] md:max-h-[300px] rounded-xl object-cover w-full'
          src='https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Fries & Burger'
        />
      </div>

      {/* Card 2 */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
          <p className='px-2'>Added</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[140px] md:max-h-[200px] rounded-xl object-cover w-full'
          src='https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Fries & Burger'
        />
      </div>

      {/* Card 3 */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>
            We Deliver Desserts Too
          </p>
          <p className='px-2'>Tasty Treats</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[140px] md:max-h-[200px] rounded-xl object-cover w-full'
          src='https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Strawberry Cheesecake'
        />
      </div>
    </section>
  )
}

export default HeadlineCards
