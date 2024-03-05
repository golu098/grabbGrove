import React from "react";
import footer from "../footer/footer";
export default function Home() {
    return (
        <>
        <div className="bg-[#ffa600a7]">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 flex flex-col items-start justify px-4 py-16">
                    <div className="mb-2 text-sm font-bold tracking-widest justify-start text-black uppercase">Accessories Women</div>
                    <h1 className="mb-4 text-5xl font-extrabold leading-tight text-white">
                        GREAT STYLE YOU <br className="md:hidden" /> CAN TRUST
                    </h1>
                    <button className="mb-8  bg-black text-white px-1  hover:bg-gray-800 transition duration-300">Disfity collection</button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        alt="Fashion model"
                        className="pr-2 pl-3 w-full object-cover h-auto max-w-none"
                        src="/hero-img.png"
                        style={{
                            padding: "2rem"
                        }}
                    />
                </div>
            </div>
        </div>
        <div className="flex justify-center py-8">
      <div className="flex flex-col items-center px-4">
        <img src="/icons8-coin-50.png" alt="i2" className="h-12 w-12" />
        <p className="mt-4 text-center text-sm">Securely pay with your credit card, debit card, or PayPal</p>
      </div>
      <div className="flex flex-col items-center px-4">
        < img src='/icons8-delivery-50.png'alt="i2"
        className="h-12 w-12" />
        <p className="mt-4 text-center text-sm">Shop in style, delivered fast & free. Hassle-free returns too!
</p>
      </div>
      <div className="flex flex-col items-center px-4">
        < img src='/icons8-return-80.png'alt="i2" className="h-12 w-12" />
        <p className="mt-4 text-center text-sm">Find your perfect fit, risk-free! Free shipping & easy returns.
</p>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a href="#a"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg" loading="lazy" alt="Pham" class="absolute inset-0 h-full w-full object-fit object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span> */}
            </a>

            <a href="#as"
                class="group relative flex h-18 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://img.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709424000&semt=ais"
                 loading="lazy" alt="ikn" class="absolute inset-0 h-full w-full object-fit object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

            </a>
            <a href="#as"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://img.freepik.com/premium-photo/indian-woman-carrying-shopping-bags_9083-12062.jpg" loading="lazy" alt="i03" class="absolute inset-0 h-full w-full object-fit object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </a>
            <a href="#as"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://img.freepik.com/free-photo/happy-young-man-going-shopping-holding-bags-looking-excited-standing-orange-sweater-standing-against-turquoise-wall_1258-23904.jpg" loading="lazy" alt="i-3" className="absolute inset-0 h-full w-full object-fit object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

            </a>
        </div>
    </div>
</div>

{/* trending Products */}
<div className="flex justify-center items-center pt-5">
<h1 className="text-center font-extrabold pt-4 font-weight-300 text-2xl mx-auto">Trending Products</h1>
</div>
<div class="p-1 flex flex-wrap items-center justify-center">

    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
           style={{transform: "scale(1.5)", opacity:" 0.1"}}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2"}}>
            </div>
            <img class="relative w-40" src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt="product-img"/>
        </div>
        <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Women</span>
            <div class="flex justify-between">
                <span class="block font-semibold text-xl">Bangle</span>
                <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$695.00</span>
            </div>
        </div>
    </div>
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
            style={{transform: "scale(1.5)", opacity: "0.1"}}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2"}}>
            </div>
            <img class="relative w-40" src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="p-2"/>
        </div>
        <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Devices</span>
            <div class="flex justify-between">
                <span class="block font-semibold text-xl">SanDisk</span>
                <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$109.00</span>
            </div>
        </div>
    </div>
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
            style={{transform: "scale(1.5)", opacity: "0.1"}}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1", opacity: "0.2"}}>
            </div>
            <img class="relative w-40" src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="p-3"/>
        </div>
        <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">TV</span>
            <div class="flex justify-between">
                <span class="block font-semibold text-xl">Samsung TV</span>
                <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$999.99</span>
            </div>
        </div>
    </div>

    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
            style={{transform: "scale(1.5)", opacity: "0.1"}}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2"}}>
            </div>
            <img class="relative w-40" src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="p-7"/>
        </div>
        <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Women</span>
            <div class="flex justify-between">
                <span class="block font-semibold text-xl">T=shirt </span>
                <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$12.99</span>
            </div>
        </div>
    </div>

    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
            style={{transform: "scale(1.5)", opacity: "0.1"}}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity:"0.2"}}>
            </div>
            <img class="relative w-40" src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" alt="p-34"/>
        </div>
        <div class="relative text-white px-6 pb-6 mt-6">
            <span class="block opacity-75 -mb-1">Women</span>
            <div class="flex justify-between">
                <span class="block font-semibold text-xl">Rain Jacket </span>
                <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$39.99</span>
            </div>
        </div>
    </div>
    </div>
    {/* subscribe */}
    <div class="relative bg-violet-600">
    <div class="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white" preserveAspectRatio="none">
            <path
                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
            </path>
        </svg>
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 class="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Subscribe to our newsletter
            </h2>
            <p class="mb-6 text-base text-indigo-200 md:text-lg">Subscribe to our newsletter for exclusive updates on new arrivals, promotions, and fashion trends!

            </p>
            <form class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                <input
          placeholder="Email"
          required=""
          type="text"
          class="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
        />
                <a href="/"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none">
                    Subscribe
                </a>
            </form>
            <p class="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
            Stay ahead of the fashion game by subscribing to our newsletter. Get notified about the latest collections and special offers.



</p>
            <a href="/" aria-label="Scroll down"
                class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path
                        d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
                    </path>
                </svg>
            </a>
        </div>
    </div>

</div>
<footer/>
        </>
    );
}
