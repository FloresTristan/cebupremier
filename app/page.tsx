'use client';
import Image from "next/image";
// import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    // <Parallax speed={10} className="parallax-container">
      <div className="relative grid min-h-screen isolate overflow-hidden bg-gray-900 ">
        <div className="relative ">
          <Image
            alt=""
            src="/assets/hero.jpg"
            fill
            priority
            className="absolute inset-0 -z-10 object-cover object-right md:object-center bg-blend-multiply opacity-30"
          />
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div id="home" className="mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8 flex justify-center">
            <div className="mx-auto max-w-2xl lg:mx-0 text-center">
              <h2 className="text-5xl font-[family-name:var(--font-flatline)] font-semibold tracking-tight text-white sm:text-7xl">Your Dream Home Awaits</h2>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                Discover the best properties in Cebu with us. Whether you&apos;re looking for a cozy apartment or a luxurious villa, we have something for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* !---about---! */}
        <div id="about" className=" relative">
          <div className="mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-[family-name:var(--font-flatline)] font-semibold tracking-tight text-white sm:text-7xl">About Us.</h2>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                We are a dedicated team of real estate professionals committed to helping you find your dream home in Cebu. With years of experience and a passion for real estate, we strive to provide the best service possible.
              </p>
            </div>
          </div>
        </div>
        {/* !--- contact ---! */}
        <div id="contact" className=" relative">
          <div className="mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-[family-name:var(--font-flatline)] font-semibold tracking-tight text-white sm:text-7xl">Get in touch.</h2>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                We would love to hear from you! Whether you have questions about our properties or need assistance, feel free to reach out to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    // </Parallax>
  );
}
