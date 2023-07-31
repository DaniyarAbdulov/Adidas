import Link from "next/link";
import React from "react";

const Block6 = () => {
  return (
    <div>
      <div className="box-border mt-40 ml-5 mr-5">
        <h1 className="uppercase text-xl font-bold">
          more from adidas stories
        </h1>
        <div className="flex justify-between box-border gap-10 mt-5 mb-10">
          <div className="flex flex-col box-border">
            <img
              className="w-full h-full"
              src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/what-are-soccer-penalty-kicks-blog-thumbnail-d_221-952992.jpg"
            />
            <div>
              <Link href='/$' className=" flex flex-col">
                <span className="box-border  uppercase font-bold bg-slate-300">
                  What Is A Penalty Kick In Soccer
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col box-border ">
            <img
              className="w-full h-full"
              src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/soccer-offside-rules-blog-thumbnail-d_221-953959.jpg"
            />
            <div>
              <Link href='/$' className=" flex flex-col">
                <span className="box-border uppercase bg-slate-300 font-bold">
                  Offsides In Soccer: Explained
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col box-border ">
            <img
              className=" w-full h-full"
              src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/history-of-the-adidas-logo-blog-thumbnail-d_221-932543.jpg"
            />
            <div>
              <Link href='/$' className=" flex flex-col">
                <span className="box-border  uppercase bg-slate-300 font-bold">
                  adidas Logos: History and Meaning
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col box-border ">
            <img
              className="w-full h-full"
              src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/what-shoes-to-wear-to-the-gym-thumbnail-d_221-927751.jpg"
            />
            <div>
              <Link href='/$' className=" flex flex-col ">
                <span className="box-border uppercase bg-slate-300 font-bold text-base">
                  What Shoes Should You Wear
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block6;
