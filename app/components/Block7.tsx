import Link from "next/link";
import React from "react";

const Block7 = () => {
  return (
    <div className="ml-5 mr-5 mt-10">
      <h1 className="uppercase text-xl font-extrabold">Popular right now</h1>
      <div className="box-border mt-14">
        <div className="flex justify-evenly">
          <Link href='/*'>
            <p className=" underline hover:scale-110 hover:border-t-4 hover:border-black font-sans font-black text-4xl">ultraboost</p>
          </Link>
          <Link href='/*'>
            <p className="underline hover:scale-110 hover:border-t-4 hover:border-black font-sans font-black text-4xl">nmd</p>
          </Link>
          <Link href='/*'>
            <p className="underline hover:scale-110 hover:border-t-4 hover:border-black font-sans font-black text-4xl">backpacks</p>
          </Link>
        </div>
        <div className="flex justify-evenly mt-14">
        <Link href='/*'>
            <p className="underline hover:scale-110 hover:border-t-4 hover:border-black font-sans font-black text-4xl">cleats</p>
          </Link>
          <Link href='/*'>
            <p className="underline hover:scale-110 hover:border-t-4 hover:border-black font-sans font-black text-4xl">stan smith</p>
          </Link>
          <Link href='/*'>
            <p className="underline hover:scale-110 hover:border-t-4 hover:border-black font-sans font-black text-4xl">samba</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Block7;
