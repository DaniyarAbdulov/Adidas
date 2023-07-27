import React from 'react'
import Link from 'next/link'

const Block3 = () => {
  return (
    <div>
        <div className=" flex justify-evenly mt-24">
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
    </div>
  )
}

export default Block3