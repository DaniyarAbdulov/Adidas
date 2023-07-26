"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [view, setView] = useState<number>(0);

  function handleChangeView(v: number) {
    setView(v);
  }

  function renderView() {
    switch (view) {
      case 0:
        // Pictures DownTown
        return (
          <div className="box-border mt-20">
            <div className="flex justify-center ml-14 mr-14 gap-5">
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c8493efffb944bbf92be3ce020fb3908_9366/Messi_10_Inter_Miami_CF_22-23_Home_Authentic_Jersey_Pink_JE9705_02_laydown.jpg"
                  />
                  <div className="absolute bottom-0 left-0  bg-white p-1">
                    <span>$ 160</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">
                      Messi #10 Inter Miami CF 22/23 Home Authentic Jersey
                    </p>
                    <p className=" font-extralight">Men's Soccer</p>
                    <p className=" font-light">pre-order</p>
                  </Link>
                </div>
              </div>
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3392fdd77ebc49b68f12afce011dbe15_9366/Adicolor_Classics_Trefoil_Tank_Top_Grey_IM2082_21_model.jpg"
                  />
                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 25</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">
                      Adicolor Classics Trefoil Tank Top
                    </p>
                    <p className=" font-extralight">Men's Originals</p>
                    <p className=" font-light">code: savings</p>
                  </Link>
                </div>
              </div>

              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/646a2ea3313940cc84c0af1c0101a534_9366/Train_Essentials_Pique_3-Stripes_Training_Shorts_Black_IB8111_21_model.jpg"
                  />

                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 35</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">
                      Train Essentials Piqué 3-Stripes Training Shorts
                    </p>
                    <p className=" font-extralight">Men's Gym & Training</p>
                    <p className=" font-light">code: savings</p>
                  </Link>
                </div>
              </div>

              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/7d319d172e4c45bfb753afb60150c40f_9366/Half_Split_Tee_White_IL4711_21_model.jpg"
                  />

                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 45</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">Half Split Tee</p>
                    <p className=" font-extralight">Men's Originals</p>
                    <p className=" font-light">code: savings</p>
                  </Link>
                </div>
              </div>
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/61073697d4e341a982b7afc201147a3a_9366/Adicolor_3-Stripes_Shorts_Green_IK6580_21_model.jpg"
                  />

                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 35</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">Adicolor 3-Stripes Shorts</p>
                    <p className=" font-extralight">Women's Originals</p>
                    <p className=" font-light">new</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="box-border mt-20">
            <div className="flex justify-center items-center ml-14 mr-14 gap-5">
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/676aa9adf439493ea6b9ada800c6ffa1_9366/H58593_21_model.jpg"
                  />
                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 35</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">Own the Run Shorts</p>
                    <p className=" font-extralight">Perfomance</p>
                  </Link>
                </div>
              </div>
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/61073697d4e341a982b7afc201147a3a_9366/IK6580_21_model.jpg"
                  />
                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 35</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">Adicolor 3-Stripes Shorts</p>
                    <p className=" font-extralight">Originals</p>
                  </Link>
                </div>
              </div>

              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/646a2ea3313940cc84c0af1c0101a534_9366/Train_Essentials_Pique_3-Stripes_Training_Shorts_Black_IB8111_21_model.jpg"
                  />

                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 35</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">
                      Train Essentials Piqué 3-Stripes Training Shorts
                    </p>
                    <p className=" font-extralight">Perfomance</p>
                  </Link>
                </div>
              </div>

              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/B75806_01_standard.jpg"
                  />

                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 100</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">Samba OG Shoes</p>
                    <p className=" font-extralight">Originals</p>
                  </Link>
                </div>
              </div>
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c70105150234ac4b948a8bf01187e0c_9366/B75807_01_standard.jpg"
                  />

                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 100</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">Samba OG Shoes</p>
                    <p className=" font-extralight">Originals</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="box-border mt-20">
            <div className="flex justify-center items-center ml-14 mr-14 gap-5">
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3af71b07e8134ebaa400afb900e3b8ce_9366/Made_to_be_Remade_Running_Shorts_Blue_HY8443_21_model.jpg"
                  />
                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 29</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">
                      Made to be Remade Running Shorts
                    </p>
                    <p className=" font-extralight">Women's Running</p>
                    <p className=" font-light">Members only</p>
                  </Link>
                </div>
              </div>
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/bd51a9cf414c4ba38aafafb7008918bc_9366/TERREX_SWIFT_R3_GTX_x_NATGEO_Purple_HQ8826_HM1.jpg"
                  />
                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 112</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">TERREX SWIFT R3 GTX x NATGEO</p>
                    <p className=" font-extralight">Men's TERREX</p>
                    <p className=" font-light">Members only</p>
                  </Link>
                </div>
              </div>

              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b3a6f396b755429a8a96af9f0045d3e7_9366/Lift_Your_Mind_PowerReact_Medium-Support_Bra_Blue_IP1811_HM1.jpg"
                  />

                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 25</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">
                      Lift Your Mind PowerReact Medium-Support Bra
                    </p>
                    <p className=" font-extralight">Women's Gym & Training</p>
                    <p className=" font-light">Members only</p>
                  </Link>
                </div>
              </div>

              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/9e94c8c2986c473e83c4b86e79e05015_9366/Lift_Your_Mind_Cargo_Skirt_Green_IP3725_HM1.jpg"
                  />

                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 65</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">Lift Your Mind Cargo Skirt</p>
                    <p className=" font-extralight">Women's Sportswear</p>
                    <p className=" font-light">Members only</p>
                  </Link>
                </div>
              </div>
              <div className="box-border w-72 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <div className="relative">
                  <img
                    className="w-full h-full"
                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/784629394b394a1ca3ee02115ffcc383_9366/adidas_Z.N.E._Tee_Pink_IM4915_HM2.jpg"
                  />

                  <div className="absolute bottom-0 left-0 bg-white p-1">
                    <span>$ 40</span>
                  </div>
                </div>
                <div className=" font-sans">
                  <Link href="/**">
                    <p className=" font-light">adidas Z.N.E. Tee</p>
                    <p className=" font-extralight">Women's Sportswear</p>
                    <p className=" font-light">new</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Not Found</div>;
    }
  }
  return (
    <div className="flex flex-col">
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
      <div className="flex flex-row ml-5 mr-5 gap-5 mt-20 font-sans text-xl font-thin">
        <button
          className={view === 0 ? "font-bold" : ""}
          onClick={() => handleChangeView(0)}
        >
          New arrivals
        </button>
        <button
          className={view === 1 ? "font-bold" : ""}
          onClick={() => handleChangeView(1)}
        >
          What's Trending
        </button>
        <button
          className={view === 2 ? "font-bold" : ""}
          onClick={() => handleChangeView(2)}
        >
          Member Exclusives
        </button>
      </div>
      {renderView()}

      <div className="box-border mt-40 ml-5 mr-5">
        <div className="flex justify-center gap-5">
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
      </div>
      <div className="box-border mt-40 ml-5 mr-5">
        <h1 className="uppercase text-xl font-bold">
          more from adidas stories
        </h1>
        <div className="flex justify-between box-border gap-10 mt-5">
          <div className="flex flex-col box-border">
            <img className="w-full h-full"
            src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/what-are-soccer-penalty-kicks-blog-thumbnail-d_221-952992.jpg"/>
            <p className=" flex flex-col">
              <span className="box-border bg-slate-300 uppercase font-bold">What Is A Penalty Kick In Soccer</span>
              <span className="box-border font-light">Are you curious about what a penalty kick is, when it happens  and what the rules are? Read about what they are and when  they happen with adi...</span>
            </p>
          </div>
          <div className="flex flex-col box-border ">
            <img className="w-full h-full"
            src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/soccer-offside-rules-blog-thumbnail-d_221-953959.jpg"/>
            <p className=" flex flex-col">
              <span className="box-border bg-slate-300 uppercase font-bold">Offsides In Soccer: Explained</span>
              <span className="box-border font-light">Watching a match? Get the scoop on the rules of the game, starting with the offside soccer rule, explained by adidas.</span>
            </p>
          </div>
          <div className="flex flex-col box-border ">
            <img className=" w-full h-full"
            src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/history-of-the-adidas-logo-blog-thumbnail-d_221-932543.jpg"/>
            <p className=" flex flex-col">
              <span className="box-border bg-slate-300 uppercase font-bold">adidas Logos: History and Meaning</span>
              <span className="box-border font-light">Ever wondered how the adidas logos came to be? Discover the history of adidas logos and the purpose behind each design evolution, from 1949 ...</span>
            </p>
          </div>
          <div className="flex flex-col box-border ">
            <img className="w-full h-full"
            src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/what-shoes-to-wear-to-the-gym-thumbnail-d_221-927751.jpg"/>
            <p className=" flex flex-col ">
              <span className="box-border bg-slate-300 uppercase font-bold text-base">What Shoes Should You Wear to the Gym</span>
              <span className="box-border font-light">Get the right support for your training session. Find out the best workout shoes for the gym with adidas’ top picks and advice.</span>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
