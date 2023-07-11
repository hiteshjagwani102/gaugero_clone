import React from 'react'


const Landing = () => (
    <section className='bg-[#1c1c3a] p-10 rounded-b-2xl'>
        <div className='flex flex-row flex-wrap justify-center items-center'>
            <div>
            <img src="https://ik.imagekit.io/aq3ybtarw/landing/mobile-landing.webp?updatedAt=1680626119244" alt='a man smiling'></img>
            </div>
            <div className='gap-3 lg:w-[50%] w-[100%] flex flex-col justify-center items-center text-center'>
                <p className='mt-6 text-4xl md:text-5xl font-semibold text-white'>Gauge Water Purifier <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'>Puts An End</span> To RO Service Pain</p>
                <p className='mt-4 text-md text-gray-500'>Fully automatic water purifier provides the highest water savings while ensuring a seamless service experience.</p>
                <button className='mt-4 px-4 py-1 bg-[#3b82f6] rounded-3xl text-white'>Take a product Tour</button>
                <p className='mt-4 mb-4 text-sm text-gray-300'>Experience Convenience Like Never Before With Our Smart Water Purifier

</p>
            </div>
        </div>
    </section>
  )

export default Landing