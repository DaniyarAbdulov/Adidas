import React from 'react'
import Link from 'next/link'

const Block5 = () => {
  return (
    
    <div className="flex justify-center gap-5 mt-40">
      <div className="box-border">
        <div className="box-border">
          <img
            className="w-72 "
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/originals-fw23-t-toe-global-launch-dotcom-hp-teaser-carousel-d_tcm221-1036748.jpg"
          />
        </div>

        <Link href="/**">
          <p className=" uppercase font-extrabold">always in style</p>
          <p className=" font-light text-xs mt-1">
            Wear everywhere, every day.
          </p>
        </Link>
        <div className="mt-5">
          <Link
            href="/*"
            className="uppercase font-bold text-base underline hover:bg-black hover:text-white"
          >
            <span>shop now</span>
          </Link>
        </div>
      </div>

      <div className="box-border">
        <div className="box-border">
          <img
            className="w-72 "
            src="https://brand.assets.adidas.com/image/upload/q_auto,f_auto:video/enUS/Images/Teaser-Card_Motion_1050px1400px_tcm221-1042955.jpg"
          />
        </div>

        <Link href="/**">
          <p className=" uppercase font-extrabold">
            ULTRABOOST 1.0 COLLEGE PACK
          </p>
          <p className=" font-light text-xs">
            The College Pack is back! Featuring your <br /> favorite
            school’s official logo, colors, and details.
          </p>
        </Link>
        <div className="mt-2">
          <Link
            href="/*"
            className="uppercase font-bold text-base underline hover:bg-black hover:text-white"
          >
            <span>shop now</span>
          </Link>
        </div>
      </div>
      <div className="box-border">
        <div className="box-border">
          <img
            className="w-72 "
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/sp129-ss23-wwc-crazy-fast-tcc_tcm221-1042954.jpg"
          />
        </div>

        <Link href="/**">
          <p className=" uppercase font-extrabold">your world cup cleats</p>
          <p className=" font-light text-xs mt-1">Engineered for speed.</p>
        </Link>
        <div className="mt-5">
          <Link
            href="/*"
            className="uppercase font-bold text-base underline hover:bg-black hover:text-white"
          >
            <span>shop now</span>
          </Link>
        </div>
      </div>
      <div className="box-border">
        <div className="box-border">
          <img
            className="w-72 "
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/hc184-fw23-bts-july-essentials-onsite-glp-tcc-m_tcm221-1042943.png"
          />
        </div>

        <Link href="/**">
          <p className=" uppercase font-extrabold">BACK TO SCHOOL STYLES</p>
          <p className=" font-light text-xs mt-1">
            Kick-start your fall wardrobe with tees, shorts and <br />{" "}
            sneakers to mix and match.
          </p>
        </Link>
        <div className="mt-1">
          <Link
            href="/*"
            className="uppercase font-bold text-base underline hover:bg-black hover:text-white"
          >
            <span>shop now</span>
          </Link>
        </div>
      </div>
    </div>
  
  )
}

export default Block5