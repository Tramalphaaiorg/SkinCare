import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='relativex bg-black text-white pb-8'>
      <div className='w-4/5 mx-auto'>
        <section className='relative top-[-3rem] bg-themeblue rounded-xl mb-8 px-14 pt-10 pb-7 mx-auto' aria-label='subscribe for newsletter section'>
          <div>
            <h2 className="text-6xl font-semibold w-[21ch] mb-6">
            SUBSCRIBE TO GET OUR 
            NEWS LETTER AND STAY ON THE KNOW
            </h2>

            <div className="flex gap-16">
              <input className='grow bg-transparent border-2 rounded-full py-2 px-6' type="text" placeholder='Your Email' />
              <button className='text-black bg-white rounded-full py-3.5 px-6'>subscribe</button>
            </div>
          </div>
        </section>

        <section>
          <ul className="flex justify-between mb-6">
            <li>
              <ul>
                <li className="text-lg">Alpha AI</li>
                <li>info@alphaai.com</li>
                <li>(+234)000090909</li>
                <li>Rivers port Harcourt</li>
              </ul>
            </li>
            <li>
              <ul>
              <li className="text-lg">Services</li>
              <li>info@alphaai.com</li>
              <li>(+234)000090909</li>
              <li>Rivers port Harcourt</li>
              </ul>
            </li>
            <li>
              <ul>
              <li className="text-lg">custome</li>
              <li>info@alphaai.com</li>
              <li>(+234)000090909</li>
              <li>Rivers port Harcourt</li>
              </ul>
            </li>
            <li>
              <ul>
              <li className="text-lg">Alpha AI</li>
              <li>info@alphaai.com</li>
              <li>(+234)000090909</li>
              <li>Rivers port Harcourt</li>
              </ul>
            </li>
          </ul>

        </section>

        <section className="flex gap-4 mb-8" aria-label='contact us via our social platforms'>
          <div className='bg-themegrey rounded-full p-[6px]'>
            <Image className="w-full" src={"/icons/fb-ic.svg"} alt="brown skin lady" width={78} height={45} />
          </div>
          <div className='bg-themegrey rounded-full p-[8px_7px]'>
            <Image className="w-full" src={"/icons/youtube-ic.svg"} alt="brown skin lady" width={78} height={45} />
          </div>
          <div className='bg-themegrey rounded-full p-[6px]'>
            <Image className="w-full" src={"/icons/linkin-ic.svg"} alt="brown skin lady" width={78} height={45} />
          </div>
          <div className='bg-themegrey rounded-full p-[8px_6px]'>
            <Image className="w-full" src={"/icons/twit-ic.svg"} alt="brown skin lady" width={78} height={45} />
          </div>
          <div className='bg-themegrey rounded-full p-[6px]'>
            <Image className="w-full" src={"/icons/insta-ic.svg"} alt="brown skin lady" width={78} height={45} />
          </div>  
        </section>

        <div className="text-center text-themedpurple mb-3">
          <a className="text-white" href="">Careers</a> |
          <a className="text-white" href="">Privacy Policy</a> |
          <a className="text-white" href="">Terms & Conditions</a>
        </div>

        <div className="text-center" rel="license">&copy; 2023 Alpha AI </div>
      </div>
    </footer>
  )
}

export default Footer