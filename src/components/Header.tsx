
import { BsCart4 } from "react-icons/bs";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";
import CurrentDate from "./CurrentDate";
import { Suspense } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-3 sm:px-5 lg:px-7">
      <nav className="container mx-auto py-3.5">

        {/* Main Header: Desktop and Mobile */}
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="min-w-0">
            <div className="flex items-center gap-2">
              <BsCart4 className="shrink-0 text-4xl cursor-pointer bg-green-700 rounded-sm p-1.5 text-white" />

              <div className="min-w-0">
                <h4 className="font-bold text-lg sm:text-xl">
                  বাজার দর
                </h4>

                <div className="text-xs sm:text-sm">
                  <Suspense
                    fallback={<h6>তারিখ লোড হচ্ছে...</h6>}
                  >
                    <CurrentDate />
                  </Suspense>
                </div>
              </div>
            </div>
          </Link>

          <div className="shrink-0">
            <UserInfo />
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <Suspense
            fallback={<div>পণ্য লোড হচ্ছে...</div>}
          >
            <NavLinks />
          </Suspense>
        </div>

        {/* Separate Mobile Navbar */}
        <div className="md:hidden mt-2 -mx-3 border-t border-gray-200">
          <Suspense
            fallback={
              <div className="px-4 py-3 text-sm text-gray-500">
                ক্যাটাগরি লোড হচ্ছে...
              </div>
            }
          >
            <NavLinks />
          </Suspense>
        </div>

      </nav>
    </header>
  );
};

export default Header;