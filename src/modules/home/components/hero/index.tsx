import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const imageMap = {
  "Cycling Gloves": "/cycling-gloves.svg",
  "Motorcycle Gloves": "/motocycle-gloves.svg",
  "Driving Gloves": "/driving-gloves.svg",
  "Dress Gloves": "/dress-gloves.svg",
  "Skiing Gloves": "/skiing-gloves.svg",
  "Mechanical Gloves": "/mechanical-gloves.svg",
  "Working Gloves": "/working-gloves.svg",
  "Weightlifting Gloves": "/weightlifting-gloves.svg",
  "Winter Gloves": "/winter-gloves.svg",
} as const

type GloveItem = keyof typeof imageMap

const gloveItems: GloveItem[] = [
  "Cycling Gloves",
  "Motorcycle Gloves",
  "Driving Gloves",
  "Dress Gloves",
  "Skiing Gloves",
  "Mechanical Gloves",
  "Working Gloves",
  "Weightlifting Gloves",
  "Winter Gloves",
]

const Hero = () => {
  return (
    // <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
    //   <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
    //     <span>
    //       <Heading
    //         level="h1"
    //         className="text-3xl leading-10 text-ui-fg-base font-normal"
    //       >
    //         Ecommerce Starter Template
    //       </Heading>
    //       <Heading
    //         level="h2"
    //         className="text-3xl leading-10 text-ui-fg-subtle font-normal"
    //       >
    //         Powered by Medusa and Next.js
    //       </Heading>
    //     </span>
    //     <a
    //       href="https://github.com/medusajs/nextjs-starter-medusa"
    //       target="_blank"
    //     >
    //       <Button variant="secondary">
    //         View on GitHub
    //         <Github />
    //       </Button>
    //     </a>
    //   </div>
    // </div>
    <>
      <main className="bg-gray-100 py-10">
        <section className="max-w-screen-xl mx-auto px-4">
          {/* Top Heading */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#b87333]">
              At Anhaaa Industries
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-amber-600 font-semibold">
              our expertise as a <span className="uppercase">leading manufacturer and exporter</span>
            </p>
            <p className="mt-2 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
              ensures premium gloves and sports products
            </p>
          </div>

          {/* Product Categories */}
          <div className="mt-10">
            <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Our diverse range includes:
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {Object.keys(imageMap).map((item) => (
                <LocalizedClientLink
                  href={`/categories/${item}`}
                  data-testid="categories-link"
                  key={item}
                >
                  <div
                    key={item}
                    className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition h-60"
                  >
                  
                    <Image
                      src={imageMap[item as keyof typeof imageMap]}
                      alt={item}
                      width={80}
                      height={80}
                    />
                    <p className="mt-2 text-center text-gray-800 font-medium">{item}</p>
                  </div>
                </LocalizedClientLink>
              ))}
            </div>
            <p className="mt-6 text-center text-gray-700 text-l">
              ...and more, tailored and fully customized to your requirements!
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Hero
