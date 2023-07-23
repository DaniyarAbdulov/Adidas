import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <img
        className="w-full h-full"
        src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/miami-messi-jersey-mh-lg-mw-july21-d_tcm221-1045758.jpg"
        alt="Adidas Miami Messi Jersey"
      />
      <div className="absolute mt-80 left-10 ">
        <h2 className="text-white text-5xl font-bold uppercase">
          the future is soccer
        </h2>
        <h3 className="text-white">
          Pre-order Lionel Messi’s new Inter Miami CF authentic jersey.
          <br />
          Available exclusively in the adidas app.
        </h3>
        <button className="uppercase border-b-4 border-r-4 flex text-black text-sm bg-white py-3 px-2.5 mt-5">
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
      <div className="flex">
        <img
        className="w-full h-74"
        src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/promo-fw23-july-60off-small-en-mh-d_tcm221-1044761.jpg"/>
      <div className="absolute mt-28 left-10">
      <h2 className="text-white text-5xl font-bold uppercase">
          summer sale
        </h2>
      <h3 className="text-white mt-5">
      Stock up on warm weather essentials with code SAVINGS.
      </h3>
      <button className="uppercase border-b-4 border-r-4 flex text-black text-sm bg-white py-3 px-2.5 mt-5">
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
  );
}
