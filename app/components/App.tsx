'use client'
import React from 'react'
import Navbar from './Navbar';

interface Props {
    children: any
}

const App = ({children}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function toggleMenu() {
    setIsMenuOpen(prev => !prev);
  }
  return (
    <div className='relative'>        
    {isMenuOpen && (
        <div className="z-10 absolute w-full h-full bg-black bg-opacity-50 flex items-start justify-center">
          <div className="  bg-white w-full transition-transform ease-in-out duration-300 p-10">
            <div className=" flex justify-end">
              <button onClick={toggleMenu} className=" bg-white text-black">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height={30}
                  
                  
                >
                  <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
                  <path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between gap-20">
              <div className="  text-black uppercase mt-10 font-bold">
                score up 60% off
                <div className=" font-sans font-thin text-sm mt-5">
                  Use code SAVINGS for 30% off sale and full price styles.
                </div>
                <div>
                  <div>
                    <button className="border-b-4 border-r-4 flex uppercase text-white text-sm bg-black py-3 px-2.5 mt-5">
                      shop now{" "}
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
                  <div>
                    <button className="border-b-4 border-r-4 flex uppercase text-white text-sm bg-black py-3 px-2.5">
                      details{" "}
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
              <div className="text-black uppercase mt-10 font-bold">
                FREE STANDARD SHIPPING & RETURNS
                <div className=" font-sans font-thin text-sm mt-5">
                  Sign up for adiClub to get free standard shipping and start
                  earning points on every order. Want it faster? Choose Express
                  Shipping at checkout.
                </div>
                <div>
                  <button className="border-b-4 border-r-4 flex uppercase text-white text-sm bg-black py-3 px-2.5 mt-5">
                    join adiclub for free{" "}
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
        </div>
      )}
        <Navbar setIsMenuOpen={setIsMenuOpen}/>
        {children}
        
    </div>
  )
}

export default App