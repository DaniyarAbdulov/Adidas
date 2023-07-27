import React from 'react'
import Link from "next/link";

const Block2 = () => {
  return (
    <div>
        <div className="box-border mt-10">
        <h1 className="text-4xl font-bold font-sans ml-5">Still Interested?</h1>
        <div className="box-border mt-10">
          <div className="flex justify-center gap-5">
            <div className="box-border">
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/a636e80d7eda4ede9f5caf0300a203c3_9366/3-Stripes_Shorts_Black_IB7426_01_laydown.jpg"
                  />
                  <div className="absolute top-64 ml-2 bg-white p-1">
                    <span>$ 32</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">3-Stripes Shorts</p>
                    <p className=" font-extralight">Originals</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="box-border">
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/2839603e7fda434c8a62afc2010aa317_9366/Adicolor_3-Stripes_Shorts_Pink_II0720_01_laydown.jpg"
                  />
                  <div className="absolute top-64 ml-2 bg-white p-1">
                    <span>$ 32</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">Adicolor 3-Stripes Shorts</p>
                    <p className=" font-extralight">Originals</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="box-border">
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/004848554d2d4e3c8d28afc300d0ccb1_9366/Pacer_3-Stripes_Knit_Shorts_Pink_HY1801_01_laydown.jpg"
                  />
                  <div className="absolute top-64 ml-2 bg-white p-1">
                    <span>$ 25</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">Pacer 3-Stripes Knit Shorts</p>
                    <p className=" font-extralight">Perfomance</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="box-border">
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3b11eae2033647e0a7d6afcd002a2d1c_9366/Adicolor_Classics_3-Stripes_Short_Tank_Top_Green_IK6586_01_laydown.jpg"
                  />
                  <div className="absolute top-64 ml-2 bg-white p-1">
                    <span>$ 35</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">
                      Adicolor Classics 3-Stripes Short Tank Top
                    </p>
                    <p className=" font-extralight">Originals</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="box-border">
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/42b741181e06485b9568e9a801b19644_9366/Adicolor_Essentials_French_Terry_Shorts_Green_IJ7801_01_laydown.jpg"
                  />
                  <div className="absolute top-64 ml-2 bg-white p-1">
                    <span>$ 35</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">
                      Adicolor Essentials French Terry Shorts
                    </p>
                    <p className=" font-extralight">Originals</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block2