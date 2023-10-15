import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Header />

      <section className="flex items-center justify-center bg-white w-3/4x mx-autox pt-10 mb-10">
        <div>
          <h1 className="text-5xl font-bold w-[17ch] mb-2">Use Alpha AI now to get recommended skin care routie</h1>
          <p className="w-[58ch] mb-8">
            Experience cutting-edge AI technology that swiftly detects skin
            conditions to prescribe tailored product recommendations and
            skincare routines
          </p>

          <div className="flex gap-8">
            <a href="" className="inline-block text-white bg-themeColor rounded-full py-4 px-10">Take a picture</a>
            <a href="" className="inline-block border-2 border-themeColor rounded-full py-4 px-10">Upload from file</a>
          </div>
        </div>

        <div>          
          <Image src={"/img/brown-skin-lady.png"} alt="brown skin lady" className="w-full" width={360} height={1000}/>
        </div>
      </section>

      <section className="bg-white pt-16 pb-28">
        <h2 className="text-2xl text-center font-bold mb-10">Introductions</h2>

        <ul className="flex w-[88%] mx-auto justify-between px-10">
          <li className="relative basis-[18%] shadow-lg rounded px-3.5 pt-2 pb-36 test1">
            <h3 className="inline-block text-xs bg-themeLBlue rounded-full px-3 pt-px mb-3">head</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className="relative basis-[18%] shadow-lg rounded px-3.5 pt-2 pb-36 test1">
            <h3 className="inline-block text-xs bg-themeLBlue rounded-full px-3 pt-px mb-3">head</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className="relative basis-[18%] shadow-lg rounded px-3.5 pt-2 pb-36 test1">
            <h3 className="inline-block text-xs bg-themeLBlue rounded-full px-3 pt-px mb-3">head</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li className="relative basis-[18%] shadow-lg rounded px-3.5 pt-2 pb-36 test1">
            <h3 className="inline-block text-xs bg-themeLBlue rounded-full px-3 pt-px mb-3">head</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          </li>         
          
        </ul>
      </section>

      <section className="bg-themeGrey2 pt-14 pb-10">
        <h2 className="text-2xl text-center font-bold mb-20">Device and browser compatibility</h2>

        <ul className="flex w-[88%] mx-auto justify-between px-10 mb-8">
          <li className="basis-1/5 text-xs bg-white px-4 pb-12">
            <div className="mb-10 -mt-8">
              <Image src={"/img/ios_logo.png"} alt="ios brand logo" className="w-full" width={530} height={380} />
            </div>
            <h3 className="text-themeColor mb-2">Android</h3>
            <p className="mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab?</p>
            <Link href="" className="block bg-themeColor text-white max-w-max rounded-full ml-auto py-1 px-5">Read more</Link>
          </li>
          <li className="basis-1/5 text-xs bg-white px-4 pb-12">
            <div className="mb-10 -mt-8">
              <Image src={"/img/android-os-logo.png"} alt="android brand logo" className="w-full" width={530} height={380} />
            </div>
            <h3 className="text-themeColor mb-2">Android</h3>
            <p className="mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab?</p>
            <Link href="" className="block bg-themeColor text-white max-w-max rounded-full ml-auto py-1 px-5">Read more</Link>
          </li>
          <li className="basis-1/5 text-xs bg-white px-4 pb-12">
            <div className="mb-10 -mt-8">
              <Image src={"/img/chrome-browser-logo.png"} alt="chrome brand logo" className="w-full" width={530} height={380} />
            </div>
            <h3 className="text-themeColor mb-2">Android</h3>
            <p className="mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab?</p>
            <Link href="" className="block bg-themeColor text-white max-w-max rounded-full ml-auto py-1 px-5">Read more</Link>
          </li>
          <li className="basis-1/5 text-xs bg-white px-4 pb-12">
            <div className="mb-10 -mt-8">
              <Image src={"/img/safari-browser-logo.png"} alt="safari brand logo" className="w-full" width={530} height={380} />
            </div>
            <h3 className="text-themeColor mb-2">Android</h3>
            <p className="mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab?</p>
            <Link href="" className="block bg-themeColor text-white max-w-max rounded-full ml-auto py-1 px-5">Read more</Link>
          </li>
        </ul>
        <Link href="" className="block max-w-max rounded-full border border-black mx-auto py-2 px-5">view more</Link>
      </section>

      <section className="bg-white pt-14 pb-44">
        <h2 className="relative text-2xl text-center font-bold mb-14 scrollh-btn">Device and browser compatibility</h2>

        <ul className="overflow-scroll flex w-[91%] ml-auto gap-10 pl-10 mb-10">
          <li className="basis-[28%] shrink-0 grow flex items-center bg-themeColor text-2xl text-white font-medium rounded-xl px-20">
            <p>Open camera or upload image for analyzing</p>
          </li>
          
          <li className="basis-[28%] shrink-0 grow text-sm rounded-xl border px-4 pt-4 pb-7">
            <div className="mb-10">
              <Image src={"/img/confident-teacher-explaining-lesson-pupils 2.png"} alt="Android brand logo" className="w-full" width={530} height={380} />
            </div>
            <div className="ml-4">
              <h3 className="font-bold mb-2">Analyze image with Alpha AI</h3>
              {/* <h3 className="font-bold mb-2">See result from the scan</h3> */}
              {/* <h3 className="font-bold mb-2">Get recommendations</h3> */}
              <Link href="" className="text-themeGrey3">See more</Link>
            </div>
          </li>
          <li className="basis-[28%] shrink-0 grow text-sm rounded-xl border px-4 pt-4 pb-7">
            <div className="mb-10">
              <Image src={"/img/confident-teacher-explaining-lesson-pupils 2.png"} alt="Android brand logo" className="w-full" width={530} height={380} />
            </div>
            <div className="ml-4">
              <h3 className="font-bold mb-2">See result from the scan</h3>
              <Link href="" className="text-themeGrey3">See more</Link>
            </div>
          </li>
          <li className="basis-[28%] shrink-0 grow text-sm rounded-xl border px-4 pt-4 pb-7">
            <div className="mb-10">
              <Image src={"/img/confident-teacher-explaining-lesson-pupils 2.png"} alt="Android brand logo" className="w-full" width={530} height={380} />
            </div>
            <div className="ml-4">
              {/* <h3 className="font-bold mb-2">See result from the scan</h3> */}
              <h3 className="font-bold mb-2">Get recommendations</h3>
              <Link href="" className="text-themeGrey3">See more</Link>
            </div>
          </li>
          <li className="basis-[28%] shrink-0 grow text-sm rounded-xl border px-4 pt-4 pb-7">
            <div className="mb-10">
              <Image src={"/img/confident-teacher-explaining-lesson-pupils 2.png"} alt="Android brand logo" className="w-full" width={530} height={380} />
            </div>
            <div className="ml-4">
              {/* <h3 className="font-bold mb-2">See result from the scan</h3> */}
              <h3 className="font-bold mb-2">Get recommendations</h3>
              <Link href="" className="text-themeGrey3">See more</Link>
            </div>
          </li>
        </ul>
      </section>

      <Footer/>
    </>
  );
}

