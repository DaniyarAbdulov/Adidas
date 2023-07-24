'use client'
import Link from "next/link";
import React, {useState} from "react";

export default function Home() {
  const [view, setView] = useState<number>(0);

  


  function handleChangeView(v: number) {
    setView(v)
  }

  function renderView() {
    switch(view) {
      case 0:
        return <div>Render 0</div>
      case 1:
        return <div>Render 1</div>
      case 2:
        return <div>Render 2</div>
      default:
        return <div>Not Found</div>
    }
  }
  return (
    <div className="flex flex-col">
      <div className="w-full h-full">
        <div className="relative">
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/miami-messi-jersey-mh-lg-mw-july21-d_tcm221-1045758.jpg"
            alt="Adidas Miami Messi Jersey"
          />
          <div className="absolute top-60 ml-5">
            <h1 className="top-60 font-sans text-4xl font-bold uppercase text-white">
              the future is soccer
            </h1>
            <h2 className=" text-white font-sans font-light">
              Pre-order Lionel Messi’s new Inter Miami CF authentic jersey.
              <br />
              Available exclusively in the adidas app.
            </h2>
            <button className="border-b-4 border-r-4 flex uppercase text-black text-sm bg-white py-3.5 px-2.5 mt-5">
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
      <div className="w-full h-full">
        <div className="relative">
          <img
            className="w-full h-74"
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/promo-fw23-july-60off-small-en-mh-d_tcm221-1044761.jpg"
          />
          <div className="absolute top-16 ml-5">
            <h1 className="font-sans text-4xl font-bold uppercase text-white">
              summer sale
            </h1>
            <h2 className=" text-white font-sans font-light">
              Stock up on warm weather essentials with code SAVINGS.
            </h2>
            <button className="border-b-4 border-r-4 flex uppercase text-black text-sm bg-white py-3.5 px-2.5 mt-5">
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
      <div className=" flex justify-evenly items-center">
        <div className="box-border ml-4 mr-4 mt-5">
          <div className="relative bg-zinc-200 text-center">
            <img src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg" />
            <Link
              href="/*"
              className="uppercase font-bold text-base underline hover:bg-black hover:text-white"
            >
              <span>shoes</span>
            </Link>
          </div>
        </div>
        <div className="box-border ml-4 mr-4 mt-5">
          <div className="relative bg-zinc-200 text-center">
            <img src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/d4cedcccb0c143f3a0abafce011db59e_9366/adicolor-classics-trefoil-tank-top.jpg" />
            <Link
              href="/*"
              className="uppercase font-bold text-base underline hover:bg-black hover:text-white"
            >
              <span>clothing</span>
            </Link>
          </div>
        </div>
        <div className="box-border ml-4 mr-4 mt-5">
          <div className="relative bg-zinc-200 text-center">
            <img src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/ee99b4b9bde74f30a933a8bf011911ae_9366/samba-og-shoes.jpg" />
            <Link
              href="/*"
              className="uppercase font-bold text-base underline hover:bg-black hover:text-white"
            >
              <span>best sellers</span>
            </Link>
          </div>
        </div>
        <div className="box-border ml-4 mr-4 mt-5">
          <div className="relative bg-zinc-200 text-center">
            <img src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/c8493efffb944bbf92be3ce020fb3908_9366/messi-10-inter-miami-cf-22-23-home-authentic-jersey.jpg" />
            <Link
              href="/*"
              className="uppercase font-bold text-base underline hover:bg-black hover:text-white"
            >
              <span>new arrivals</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-5 mr-5 gap-5 mt-5 font-sans text-xl font-thin">
        <button className={view === 0 ? "font-bold" : ""} onClick={() => handleChangeView(0)}>New arrivals</button>
        <button className={view === 1 ? "font-bold" : ""} onClick={() => handleChangeView(1)}>What's Trending</button>
        <button className={view === 2 ? "font-bold" : ""} onClick={() => handleChangeView(2)}>Member Exclusives</button>
      </div>
      {renderView()}
    </div>
  );
}
