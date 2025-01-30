"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import vcPic from "../../../../public/FacultyPic/VC_PIC.jpg";

function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 px-36">
      <div className="font-bold text-3xl text-blue-700">
        Faculty Information
      </div>
      <div className="w-full bg-blue-300 py-0.5 my-4"></div>

      <div className="w-full grid grid-rows-12">
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={vcPic}
              className="w-56 h-64 flex flex-col justify-center items-center"
              alt=""
            ></Image>
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Prof. N.C. Shahi
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (PhD GBPUAT Pantnagar)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Professor</p>
              <p>Department of Process and Food Engineering</p>
              <Link href="" className="underline text-blue-600">Visit Profile</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={vcPic}
              className="w-56 h-64 flex flex-col justify-center items-center"
              alt=""
            ></Image>
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Prof. N.C. Shahi
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (PhD GBPUAT Pantnagar)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Professor</p>
              <p>Department of Process and Food Engineering</p>
              <Link href="" className="underline text-blue-600">Visit Profile</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={vcPic}
              className="w-56 h-64 flex flex-col justify-center items-center"
              alt=""
            ></Image>
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Prof. N.C. Shahi
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (PhD GBPUAT Pantnagar)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Professor</p>
              <p>Department of Process and Food Engineering</p>
              <Link href="" className="underline text-blue-600">Visit Profile</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={vcPic}
              className="w-56 h-64 flex flex-col justify-center items-center"
              alt=""
            ></Image>
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Prof. N.C. Shahi
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (PhD GBPUAT Pantnagar)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Professor</p>
              <p>Department of Process and Food Engineering</p>
              <Link href="" className="underline text-blue-600">Visit Profile</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={vcPic}
              className="w-56 h-64 flex flex-col justify-center items-center"
              alt=""
            ></Image>
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Prof. N.C. Shahi
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (PhD GBPUAT Pantnagar)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Professor</p>
              <p>Department of Process and Food Engineering</p>
              <Link href="" className="underline text-blue-600">Visit Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
