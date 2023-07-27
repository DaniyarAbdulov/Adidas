import React from 'react'

const Block9 = () => {
  return (
    <div className='box-border bg-yellow-300'>
        <div className=' flex justify-center'>
            <div className=' flex box-border'>
                <div className='flex flex-row gap-5 mt-14 mb-10'>
                <h1 className=' uppercase font-sans font-bold text-2xl'>
                join our adiclub & get 15% off
                </h1>
                <button className="p-3 border-b-4 border-r-4 flex uppercase text-white text-sm bg-black">
                sign up for free
                <svg
                  className="w-5 h-5 ml-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Block9