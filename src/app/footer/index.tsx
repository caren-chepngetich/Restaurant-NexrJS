import Link from "next/link";

const Footer = ()=>{
    return(
        <div>
            <footer className="bg-black text-white pt-12 pb-6 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           
            <div>
              <h2 className="text-2xl font-bold mb-4">FoodHouse.</h2>
              <p className="mb-4">
                Best cooks and best delivery guys all at your service. Hot tasty
                food will reach you in 60 minutes.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="bg-white p-2 rounded-full">
                  <img
                    src="/facebook-icon.png"
                    width={24}
                    height={24}
                    alt="Facebook"
                  />
                </Link>
                <Link
                  href="https://x.com/536342379"
                  className="bg-white p-2 rounded-full"
                >
                  <img
                    src="/twitter-icon.png"
                    width={24}
                    height={24}
                    alt="Twitter"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/61ba312b2/"
                  className="bg-white p-2 rounded-full"
                >
                  <img
                    src="/linkedin-icon.png"
                    width={24}
                    height={24}
                    alt="LinkedIn"
                  />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2">

                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Career
                  </span>
                </li>
                <li>
                  About{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Blog
                  </span>
                </li>
                <li>
                  Press{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Info
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Features
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Fudo</h3>
              <ul className="space-y-2">

                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Why Fudo
                  </span>
                </li>
                <li>
                  How it works{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Why Choose Us
                  </span>
                </li>
                <li>
                  Client side{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Info
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Gallery
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Menu</h3>
              <ul className="space-y-2">
         
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Breakfast
                  </span>
                </li>
                <li>
                  Lunch{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Dinner
                  </span>
                </li>
                <li>
                  Fast Foods{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Info
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Drinks
                  </span>
                </li>
              </ul>
            </div>
          
            <div className="mt-129 pt-2 border-t border-gray-10000 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">
                Copyright 2021 Besnik All Right Reserved
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )
}
export default Footer;