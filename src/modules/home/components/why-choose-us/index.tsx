import Image from "next/image"

export default function WhyChooseUs() {
  return (
    // <section className="bg-white h-[50vh]">
    //   <div className="max-w-screen-xl mx-auto px-4">
    //     {/* Top Branding */}
    //     {/* <div className="text-center"> */}
    //       {/* Replace with an <Image> tag or your actual logo if you prefer */}
    //       {/* <h1 className="text-2xl font-bold tracking-wide">ANHAA. INDUSTRIES</h1>
    //       <p className="text-gray-700">http://anhaa.com</p>
    //     </div> */}

    //     {/* Circles Layout */}
    //     <div className="flex justify-center items-center">
    //       <div className="relative h-[600px] mt-10">
    //         {/* Top Circle */}
    //         <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-48 h-48 rounded-full bg-gray-800 text-white text-center p-4">
    //           <span className="px-2">
    //             High-quality<br />craftsmanship
    //           </span>
    //         </div>

    //         {/* Left Circle */}
    //         <div className="absolute bottom-[30%] left-0 flex items-center justify-center w-48 h-48 rounded-full bg-gray-800 text-white text-center p-4 ml-[2px]">
    //           <span className="px-2">
    //             Long-standing<br />
    //             excellence in the industry
    //           </span>
    //         </div>

    //         {/* Right Circle */}
    //         <div className="absolute bottom-[30%] right-0 flex items-center justify-center w-48 h-48 rounded-full bg-gray-800 text-white text-center p-4 mr-[2px]">
    //           <span className="px-2">
    //             customized<br />
    //             as per your requirements
    //           </span>
    //         </div>

    //         {/* Center (Overlapping) Circle */}
    //         <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-32 h-32 rounded-full bg-amber-600 text-white text-center p-4 shadow-lg">
    //           <span className="font-semibold">Why<br />Choose Us?</span>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Footer / Contact Info */}
    //     {/* <div className="text-center mt-8">
    //       <p className="text-gray-700">@ANHAA.INDUSTRIES</p>
    //       <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
    //         <p className="text-gray-700">+92 301 0707327</p> */}

    //         {/* Replace with your real QR code */}
    //         {/* <div className="h-16 w-16 bg-gray-300 flex items-center justify-center"> */}
    //           {/* Example using Next.js Image if you have a real file:
    //               <Image
    //                 src="/my-qr-code.png"
    //                 alt="QR Code"
    //                 width={64}
    //                 height={64}
    //               />
    //           */}
    //           {/* <span className="text-sm text-gray-600">QR Code</span>
    //         </div> */}

    //         {/* <p className="text-gray-700">anhaa.industry@gmail.com</p> */}
    //       {/* </div> */}
    //     {/* </div> */}
    //   </div>
    // </section>
    <main className="relative w-full h-[30rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/why choose us Welding gloves.png')` }}
      >
        {/* Overlay (Optional): Slight dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-5xl mx-auto px-4">
          {/* Heading */}
          <h1 className="text-white text-4xl font-bold mb-6">
            WHY CHOOSE US?
          </h1>

          {/* Bullet List */}
          <ul className="space-y-3 text-white text-lg">
            <li className="flex items-start">
              <span className="mr-2 text-xl">➜</span>
              <span>No Minimum Quantity</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-xl">➜</span>
              <span>Direct From Factory</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-xl">➜</span>
              <span>Rush Orders Available</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-xl">➜</span>
              <span>Free Artwork Designing</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-xl">➜</span>
              <span>Multiple Fabric Options</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-xl">➜</span>
              <span>Fast Door To Door Delivery</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-xl">➜</span>
              <span>Customized design as per your requirements</span>
            </li>
          </ul>
        </div>
      </main>
  )
}
