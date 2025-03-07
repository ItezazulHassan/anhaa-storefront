// import { listCategories } from "@lib/data/categories"
// import { listCollections } from "@lib/data/collections"
// import { Text, clx } from "@medusajs/ui"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import MedusaCTA from "@modules/layout/components/medusa-cta"
// import Image from "next/image"
// import { FaWhatsapp, FaInstagram, FaEnvelope, FaLink, FaLocationArrow } from "react-icons/fa"

// export default async function Footer() {
//   const { collections } = await listCollections({
//     fields: "*products",
//   })
//   const productCategories = await listCategories()

//   return (
//     <footer className="border-t border-ui-border-base w-full">
//       <div className="content-container flex flex-col w-full">
//         <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
//           <div>
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
//             >
//               <Image
//                 src={'/logo.svg'}
//                 alt={'Anhaa logo'}
//                 width={160}
//                 height={40}  
//               />
//             </LocalizedClientLink>
//           </div>
//           <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
//             {productCategories && productCategories?.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Categories
//                 </span>
//                 <ul
//                   className="grid grid-cols-1 gap-2"
//                   data-testid="footer-categories"
//                 >
//                   {productCategories?.slice(0, 6).map((c) => {
//                     if (c.parent_category) {
//                       return
//                     }

//                     const children =
//                       c.category_children?.map((child) => ({
//                         name: child.name,
//                         handle: child.handle,
//                         id: child.id,
//                       })) || null

//                     return (
//                       <li
//                         className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
//                         key={c.id}
//                       >
//                         <LocalizedClientLink
//                           className={clx(
//                             "hover:text-ui-fg-base",
//                             children && "txt-small-plus"
//                           )}
//                           href={`/categories/${c.handle}`}
//                           data-testid="category-link"
//                         >
//                           {c.name}
//                         </LocalizedClientLink>
//                         {children && (
//                           <ul className="grid grid-cols-1 ml-3 gap-2">
//                             {children &&
//                               children.map((child) => (
//                                 <li key={child.id}>
//                                   <LocalizedClientLink
//                                     className="hover:text-ui-fg-base"
//                                     href={`/categories/${child.handle}`}
//                                     data-testid="category-link"
//                                   >
//                                     {child.name}
//                                   </LocalizedClientLink>
//                                 </li>
//                               ))}
//                           </ul>
//                         )}
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>
//             )}
//             {collections && collections.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Collections
//                 </span>
//                 <ul
//                   className={clx(
//                     "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
//                     {
//                       "grid-cols-2": (collections?.length || 0) > 3,
//                     }
//                   )}
//                 >
//                   {collections?.slice(0, 6).map((c) => (
//                     <li key={c.id}>
//                       <LocalizedClientLink
//                         className="hover:text-ui-fg-base"
//                         href={`/collections/${c.handle}`}
//                       >
//                         {c.title}
//                       </LocalizedClientLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base">Anhaa Social Links</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
//                 <li>
//                   <a
//                     href="https://wa.me/+923010707327"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     <div className="flex items-center gap-2">
//                       <FaWhatsapp className="w-6 h-6" /> Whatsapp
//                     </div>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://instagram.com/anhaaindustry.gloves"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     <div className="flex items-center gap-2">
//                       <FaInstagram className="w-6 h-6" /> Instagram
//                     </div>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="mailto:anhaa.industry@gmail.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     <div className="flex items-center gap-2">
//                       <FaEnvelope className="w-6 h-6" /> Gmail
//                     </div>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://beauty.anhaaa.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     <div className="flex items-center gap-2">
//                       <FaLink className="w-6 h-6" /> Anhaa Beauty Store
//                     </div>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href=""
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     <div className="flex items-center gap-2">
//                       <FaLocationArrow className="w-6 h-6" /> Adjacent Ajmal Clinic, Sada-e-Sehar Road Small Industrial Estate Sialkot
//                     </div>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
//           <Text className="txt-compact-small">
//             © {new Date().getFullYear()} Anhaa Store. All rights reserved.
//           </Text>
//           {/* <MedusaCTA /> */}
//         </div>
//       </div>
//     </footer>
//   )
// }
import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Image from "next/image"
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaLink,
  FaLocationArrow,
} from "react-icons/fa"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="w-full bg-black text-white">
      {/* Remove or override the top border if you don't want it visible */}
      {/* If you'd like a visible border, change border-t to e.g. border-t border-gray-700 */}
      <div className="content-container flex flex-col w-full py-16">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between mb-10">
          <div className="mr-4">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus uppercase hover:text-gray-200"
            >
              <Image
                src={"/logo.svg"}
                alt={"Anhaa logo"}
                width={160}
                height={40}
              />
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-white">Categories</span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-gray-300 txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-gray-200",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-gray-200"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-white">Collections</span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-gray-300 txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-gray-200"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-white">Anhaa Social Links</span>
              <ul className="grid grid-cols-1 gap-y-2 text-gray-300 txt-small">
                <li>
                  <a
                    href="https://wa.me/+923010707327"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-200"
                  >
                    <div className="flex items-center gap-2">
                      <FaWhatsapp className="w-6 h-6" /> Whatsapp
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/anhaaindustry.gloves"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-200"
                  >
                    <div className="flex items-center gap-2">
                      <FaInstagram className="w-6 h-6" /> Instagram
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:anhaa.industry@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-200"
                  >
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="w-6 h-6" /> Gmail
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://beauty.anhaaa.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-200"
                  >
                    <div className="flex items-center gap-2">
                      <FaLink className="w-6 h-6" /> Anhaa Beauty Store
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-200"
                  >
                    <div className="flex items-center gap-2">
                      <FaLocationArrow className="w-6 h-6" /> Adjacent Ajmal
                      Clinic, Sada-e-Sehar Road Small Industrial Estate Sialkot
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between text-gray-400">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Anhaa Store. All rights reserved.
          </Text>
          {/* <MedusaCTA /> */}
        </div>
      </div>
    </footer>
  )
}

