"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isDpActive = pathname === "/" || pathname === "/dp";
  const isColorActive = pathname === "/color";
  const isContactActive = pathname === "/contact";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-40 flex items-center h-[200px] pt-[50px] pb-0 pl-[3.5%] pr-[9.5%] max-[932px]:h-[120px] max-[932px]:pt-[38px] max-[932px]:px-[5%] max-[540px]:h-[100px] max-[540px]:pt-[30px] pointer-events-none">
        {/* Navigation Links - Left Aligned */}
        <nav className="flex items-center pointer-events-auto max-[932px]:hidden">
          <div>
            <Link
              href="/dp"
              className={`text-[14px] leading-[19px] uppercase tracking-[0.05em] transition-colors duration-200 ${isDpActive
                ? "text-white font-normal"
                : "text-[#D1D5D7] hover:text-white font-normal"
                }`}
            >
              DP
            </Link>
          </div>
          <div className="pl-[20px]">
            <Link
              href="/color"
              className={`text-[14px] leading-[19px] uppercase tracking-[0.05em] transition-colors duration-200 ${isColorActive
                ? "text-white font-normal"
                : "text-[#D1D5D7] hover:text-white font-normal"
                }`}
            >
              Color
            </Link>
          </div>
          <div className="pl-[20px]">
            <Link
              href="/contact"
              className={`text-[14px] leading-[16px] uppercase tracking-[0.05em] transition-colors duration-200 ${isContactActive
                ? "text-white font-normal"
                : "text-[#D1D5D7] hover:text-white font-normal"
                }`}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Center Title / Logo */}
        <div className="flex-1 text-center pointer-events-auto max-[932px]:text-center">
          <div className="inline-block text-[#D1D5D7] hover:text-white text-[42px] font-extralight tracking-[0.38em] uppercase leading-[53px] transition-colors duration-200 max-[932px]:text-[24px] max-[932px]:leading-[25px] max-[932px]:tracking-[0.25em] max-[540px]:text-[18px] max-[540px]:tracking-[0.2em] -mr-[0.38em]">
            <Link href="/dp">
              VIKRAM KUMPATI
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div
          onClick={() => setMobileMenuOpen(true)}
          className="hidden max-[932px]:flex items-center absolute right-[5%] top-1/2 -translate-y-1/2 cursor-pointer p-3 pointer-events-auto"
          aria-label="Open menu"
        >
          <div className="w-[24px] flex flex-col justify-between h-[14px]">
            <span className="block w-full h-[2px] bg-[#E1E4E5]" />
            <span className="block w-full h-[2px] bg-[#E1E4E5]" />
            <span className="block w-full h-[2px] bg-[#E1E4E5]" />
          </div>
        </div>
      </header>

      {/* Mobile Responsive Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-[#111111] z-[99999] flex flex-col justify-center items-center px-[5%] transition-all duration-300 ${mobileMenuOpen
          ? "opacity-100 visible pointer-events-auto"
          : "opacity-0 invisible pointer-events-none"
          }`}
      >
        {/* Close Button */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-[30px] right-[5%] cursor-pointer p-4"
          aria-label="Close menu"
        >
          <div className="relative w-[20px] h-[20px]">
            <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#E1E4E5] rotate-45 -translate-y-1/2" />
            <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#E1E4E5] -rotate-45 -translate-y-1/2" />
          </div>
        </div>

        {/* Nav Links */}
        <nav className="w-full text-center flex flex-col space-y-[30px]">
          <div>
            <Link
              href="/dp"
              className={`text-[22px] leading-[32px] uppercase tracking-wider transition-colors duration-200 ${isDpActive ? "text-white" : "text-[#D1D5D7] hover:text-white"
                }`}
            >
              DP
            </Link>
          </div>
          <div>
            <Link
              href="/color"
              className={`text-[22px] leading-[32px] uppercase tracking-wider transition-colors duration-200 ${isColorActive ? "text-white" : "text-[#D1D5D7] hover:text-white"
                }`}
            >
              Color
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className={`text-[22px] leading-[32px] uppercase tracking-wider transition-colors duration-200 ${isContactActive ? "text-white" : "text-[#D1D5D7] hover:text-white"
                }`}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Social Icons in Mobile Overlay */}
        <div className="fixed bottom-0 left-0 w-full min-h-[80px] p-[5%] flex justify-center items-center border-t border-black/10 bg-[#111111]">
          <ul className="flex items-center space-x-[20px]">
            <li>
              <a
                href="https://www.instagram.com/tyler_the.colorist/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="block text-[#D1D5D7] hover:text-white transition-opacity duration-200"
              >
                <svg
                  className="w-[28px] h-[24px] fill-current"
                  viewBox="0 0 30 24"
                >
                  <g>
                    <path d="M15,5.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9 c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9c-0.3,0.3-0.5,0.5-0.9,0.6 c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3c-0.4-0.1-0.6-0.3-0.9-0.6 c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9 c0.3-0.3,0.5-0.5,0.9-0.6c0.3-0.1,0.7-0.2,1.5-0.3C12.6,5.4,12.9,5.4,15,5.4 M15,4c-2.2,0-2.4,0-3.3,0c-0.9,0-1.4,0.2-1.9,0.4 c-0.5,0.2-1,0.5-1.4,0.9C7.9,5.8,7.6,6.2,7.4,6.8C7.2,7.3,7.1,7.9,7,8.7C7,9.6,7,9.8,7,12s0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9 c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4c0.9,0,1.1,0,3.3,0s2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4 c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3s0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9 c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C17.4,4,17.2,4,15,4L15,4L15,4z" />
                    <path d="M15,7.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S17.3,7.9,15,7.9L15,7.9z M15,14.7c-1.5,0-2.7-1.2-2.7-2.7 c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C17.7,13.5,16.5,14.7,15,14.7L15,14.7z" />
                    <path d="M20.2,7.7c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20.2,7.2,20.2,7.7L20.2,7.7z" />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://vimeo.com/user108524258"
                target="_blank"
                rel="noreferrer"
                className="block text-[#D1D5D7] hover:text-white transition-opacity duration-200"
              >
                <svg
                  className="w-[28px] h-[24px] fill-current"
                  viewBox="0 0 30 24"
                >
                  <path d="M23.99 7.7c-0.08 1.8-1.3 4.27-3.67 7.4c-2.45 3.27-4.52 4.9-6.21 4.9c-1.05 0-1.94-0.99-2.66-2.99 c-0.48-1.82-0.97-3.65-1.45-5.48C9.46 9.6 8.9 8.6 8.3 8.55c-0.13 0-0.61 0.29-1.41 0.87L6 8.3C6.89 7.5 7.8 6.7 8.6 5.9 c1.18-1.05 2.07-1.61 2.67-1.66c1.4-0.14 2.3 0.8 2.6 2.95c0.35 2.3 0.6 3.7 0.7 4.24c0.4 1.9 0.8 2.8 1.3 2.8 c0.38 0 0.94-0.61 1.7-1.84c0.75-1.22 1.16-2.16 1.21-2.79c0.11-1.06-0.3-1.59-1.21-1.59c-0.43 0-0.88 0.1-1.33 0.3 c0.88-2.98 2.58-4.43 5.07-4.34C23.23 4.1 24.1 5.3 24 7.7z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
