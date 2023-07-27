import React from 'react'

const Block1 = () => {
  return (
    <div>
        <div className="relative flex flex-col justify-stretchbox-border">
        <div className="flex box-border">
          <div className="flex flex-col">
            <div className="relative">
              <div className="flex">
              <img
                className="w-full h-full"
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/miami-messi-jersey-mh-lg-mw-july21-d_tcm221-1045758.jpg"
                alt="Adidas Miami Messi Jersey"
              />
              
              </div>
              
            </div>
            <div className="absolute flex flex-col left-5">
              <span className="font-sans text-4xl font-bold uppercase text-white">
                the future is soccer
              </span>
              <span className="text-white font-sans font-light">
                Pre-order Lionel Messi’s new Inter Miami CF authentic jersey.{" "}
                <br />
                Available exclusively in the adidas app.
              </span>
              <button className="p-4 w-40 border-b-4 border-r-4 flex uppercase text-black text-sm bg-white mt-5">
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
          </div>
        </div>
        <div className="flex box-border ">
          <div className="flex box-border ">
            <div className="flex flex-col">
              <div className="relative">
                <img
                  className="w-full h-full"
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/hc184-fw23-bts-july-essentials-onsite-mh-lg-m-d_tcm221-1047519.jpg"
                />
              </div>
              <div className="absolute flex flex-col mt-1 left-5">
                <span className="font-sans text-4xl font-bold uppercase text-white">
                  summer sale
                </span>
                <span className=" text-white font-sans font-light">
                  Stock up on warm weather essentials <br />
                  with code SAVINGS.
                </span>
                <button className="p-4 w-40 border-b-4 border-r-4 flex uppercase text-black text-sm bg-white mt-5">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block1