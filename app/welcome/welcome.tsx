import HeroSection from "~/components/heroSection";
import ArrowSvg from "~/icons/ArrowRight.svg";
import ArrowLeftSvg from "~/icons/ArrowLeft.svg";
import BugSvg from "~/icons/Bug.svg";
import DatabaseSvg from "~/icons/Database.svg";
import PackageSvg from "~/icons/Package.svg";
import PenNIbStraightSvg from "~/icons/PenNibStraight.svg";
import ProjectPhoto1 from "~/image/Project_Photo1.png";
import ProjectPhoto2 from "~/image/Project_Photo2.png";
import ProjectPhoto3 from "~/image/Project_Photo3.png";
import ProjectPhoto4 from "~/image/Project_Photo4.png";
import TrophySvg from "~/icons/Trophy.svg";
import SmileSvg from "~/icons/Smiley.svg";
import UserSvg from "~/icons/Users.svg";
import BriefcaseSvg from "~/icons/Briefcase.svg";
import StarSvg from "~/icons/star.svg"
import HumanPhoto from "~/image/Invisible.png";
import NineSvg from "~/icons/nine.svg";





export function Welcome() {
  return (
    <main className="no-scrollbar overflow-y-auto">
      <HeroSection />
      {/* explore section */}
      <section className="bg-black/95 p-3  place-items-center   lg:flex lg:justify-center" >
        <div className="max-w-110 text-white space-y-8 mt-5 mb-10 lg:mt-30  mr-20">
          <h1>Hello</h1>
          <h1 className="text-3xl md:text-5xl font-semibold">Explore our Gilio team services.</h1>

          <p className="text-sm text-gray-200">Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex. </p>

          <button className="bg-primary rounded-lg flex justify-around gap-3 px-5 py-2">
            <p>Schedule Meeting</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-7 h-6">
              <path fill-rule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <div className=" sm:flex sm:gap-4">
          <div className="space-y-4 mb-4">
            <div className="max-w-65 bg-white p-5 rounded-xl  space-y-4">
              <div className="bg-sky-200/30 size-12 place-content-center place-items-center rounded-lg">
                <img src={PenNIbStraightSvg} alt="" className="size-6.5" />
              </div>
              <h1 className="text-sm font-semibold text-primary-950">UI/UX Design</h1>
              <p className="text-xs text-gray-500">Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
              <div className="flex">
                <p className="text-xs text-primary">Learn More</p>
                <img src={ArrowSvg} alt="" />
              </div>
            </div>

            <div className="max-w-65 bg-white p-5 rounded-xl  space-y-4">
              <div className="bg-sky-200/30 size-12 place-content-center place-items-center rounded-lg">
                <img src={BugSvg} alt="" className="size-6.5" />
              </div>
              <h1 className="text-sm font-semibold text-primary-950">Front-end Development</h1>
              <p className="text-xs text-gray-500">Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
              <div className="flex">
                <p className="text-xs text-primary">Learn More</p>
                <img src={ArrowSvg} alt="" />
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:mt-8">
            <div className="max-w-65 bg-white p-5 rounded-xl  space-y-4">
              <div className="bg-primary size-12 place-content-center place-items-center rounded-lg">
                <img src={DatabaseSvg} alt="" className="size-6.5" />
              </div>
              <h1 className="text-sm font-semibold text-primary-950">Back-end Development</h1>
              <p className="text-xs text-gray-500">Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
              <div className="flex">
                <p className="text-xs text-primary">Learn More</p>
                <img src={ArrowSvg} alt="" />
              </div>
            </div>

            <div className="max-w-65 bg-white p-5 rounded-xl  space-y-4">
              <div className="bg-sky-200/30 size-12 place-content-center place-items-center rounded-lg">
                <img src={PackageSvg} alt="" className="size-6.5" />
              </div>
              <h1 className="text-sm font-semibold text-primary-950">Project Delivery</h1>
              <p className="text-xs text-gray-500">Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
              <div className="flex">
                <p className="text-xs text-primary">Learn More</p>
                <img src={ArrowSvg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* portfolio section */}
      <section className="bg-black/95 place-items-center py-30 lg:space-y-15 p-5 sm:space-y-10 space-y-7">
        <div className="md:flex justify-between max-w-265 md:gap-50 lg:gap-100 lg:space-y-6 space-y-5">
          <div>
            <h1 className="text-primary text-3xl md:text-5xl font-semibold md:mb-6 mb-2">Our portfolio</h1>
            <p className="text-gray-200 text-sm">Cras imperdiet est eget nulla fringilla, sit amet volutpat sem tristique.</p>
            <p className="text-gray-200 text-sm">Pellentesque quis augue ac mauris posuere vehicula.</p>
          </div>
          <div className="place-content-center">
            <button className="flex items-center justify-center rounded-lg border-1 border-solid  border-primary w-50 h-10 text-primary">
              <p className="text-sm">View All Portfolio</p>
              <img src={ArrowSvg} alt="" className="w-10 h-5" />
            </button>
          </div>
        </div>

        <div className="lg:max-w-265 md:max-w-200 grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-2 lg:gap-15   md:gap-8 ">
          <div className="lg:w-127 md:w-90  sm:w-100 w-86">
            <img src={ProjectPhoto1} alt="" />
            <div className="bg-white p-5">
              <h1 className="text-lg sm:text-xl font-semibold mb-2">E-tutor - Education & Online LMS</h1>
              <p className="text-xs sm:text-sm text-gray-500 mb-5">Branding, Design, Product, Development</p>
              <div className="flex text-blue-500 items-center ">
                <p className="text-xs sm:text-sm">View Case Study</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-10 h-5 ">
                  <path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="lg:w-127 md:w-90  sm:w-100 w-86">
            <img src={ProjectPhoto2} alt="" />
            <div className="bg-white p-5">
              <h1 className="text-lg sm:text-xl font-semibold mb-2">E-tutor - Education & Online LMS</h1>
              <p className="text-xs sm:text-sm text-gray-500 mb-5">Mobile, Design, Branding</p>
              <div className="flex text-blue-500 items-center ">
                <p className="text-xs sm:text-sm">View Case Study</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-10 h-5 ">
                  <path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="lg:w-127 md:w-90  sm:w-100 w-86">
            <img src={ProjectPhoto3} alt="" />
            <div className="bg-white p-5">
              <h1 className="text-lg sm:text-xl font-semibold mb-2">E-tutor - Education & Online LMS</h1>
              <p className="text-xs sm:text-sm text-gray-500 mb-5">Web, Development, Product</p>
              <div className="flex text-blue-500 items-center ">
                <p className="text-xs sm:text-sm">View Case Study</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-10 h-5 ">
                  <path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="lg:w-127 md:w-90  sm:w-100 w-86">
            <img src={ProjectPhoto4} alt="" />
            <div className="bg-white p-5">
              <h1 className="text-lg sm:text-xl font-semibold mb-2">E-tutor - Education & Online LMS</h1>
              <p className="text-xs sm:text-sm text-gray-500 mb-5">Design, Development, Product</p>
              <div className="flex text-blue-500 items-center ">
                <p className="text-xs sm:text-sm">View Case Study</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-10 h-5 ">
                  <path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* feedback section */}
      <section className="bg-black/95 py-20 px-5 md:flex justify-center items-center place-items-center space-y-5">
        <div className="max-w-100">
          <h1 className="text-gray-200 text-3xl lg:text-5xl font-semibold mb-8">What our client says about our services.</h1>
          <div className="flex gap-3">
            <div className="bg-gray-200 size-12 place-items-center place-content-center rounded-md">
              <img src={ArrowLeftSvg} alt="" className="size-6"/>
            </div>
            <div className="bg-gray-200 size-12 place-items-center place-content-center rounded-md">
              <img src={ArrowSvg} alt="" className="size-6"/>
            </div>
          </div>
        </div>

        <div className="bg-white border-13 border-solid border-orange-50 rounded-3xl lg:max-w-160 md:max-w-130 max-w-100 p-10">
          <div className="flex gap-3 mb-5">
            <img src={StarSvg} alt="" className="size-8"/>
            <img src={StarSvg} alt="" className="size-8"/>
            <img src={StarSvg} alt="" className="size-8"/>
            <img src={StarSvg} alt="" className="size-8"/>
            <img src={StarSvg} alt="" className="size-8"/>
          </div>
          <p className="mb-5 text-md md:text-lg ">Mixed feelings but adequate results. Pros: technical skills & Intuition about colors, fonts, & layout styles. Cons: Communication, English, Detail Orientation, Creativity, Following the Brief (Style guide, sample website, text requested). Off the mark 2 day delivery, and 5-days of revision for one landing (good) page.</p>

          <div className="flex items-center gap-3">
            <img src={HumanPhoto} alt="" className="size-10"/>
            <div >
              <p className="text-xs font-semibold mb-1">Arlene McCoy</p>
              <p className="text-xs text-gray-500">Gilio</p>
            </div>
          </div>

          <div className="flex justify-between place-items-baseline">
            <div className="flex gap-3">
              <div className="size-2.5 rounded-full bg-blue-300"></div>
              <div className="size-2.5 rounded-full bg-blue-300"></div>
              <div className="bg-blue-600 w-7 h-2.5 rounded-3xl"></div>
              <div className="size-2.5 rounded-full bg-blue-300"></div>
              <div className="size-2.5 rounded-full bg-blue-300"></div>
            </div>

            <div className="flex gap-1.5">
              <img src={NineSvg} alt="" className="w-8 h-14"/>
              <img src={NineSvg} alt="" className="w-8 h-14"/>

            </div>
          </div>
        </div>


      </section>

      {/* let's work together */}
      <section className="bg-black/95 lg:flex justify-center gap-25 p-5 place-items-center space-y-5">

        <div className="max-w-110 space-y-6 ">
          <h1 className="text-primary text-3xl md:text-5xl font-semibold">Let's work together</h1>
          <p className="text-gray-200 text-sm">Cras at pellentesque eros. Nullam vitae sapien et felis eleifend luctus. Nam ac dui cursus, efficitur ante sed, tempor sapien. Praesent nec mattis enim. Mauris a laoreet purus.</p>

          <button className="bg-primary text-gray-200 rounded-lg flex justify-around gap-3 px-5 py-2">
            <p>Request A Quote</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-7 h-6">
              <path fill-rule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="sm:flex justify-center gap-4">
          <div className="space-y-4">
            <div className="bg-purple-100 max-w-70 flex items-center gap-4 p-4 rounded-xl">
              <img src={TrophySvg} alt="" className="" />
              <div className="space-y-1.5">
                <p className="text-xl font-semibold">17+</p>
                <p className="text-gray-600 text-xs">AWARDS REWARDED</p>
              </div>
            </div>

            <div className="bg-amber-50 w-70 flex items-center gap-4 p-4  rounded-xl">
              <img src={SmileSvg} alt="" className="" />
              <div className="space-y-1.5">
                <p className="text-xl font-semibold">183+</p>
                <p className="text-gray-600 text-xs">HAPPY CLIENTS</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-4 sm:mt-0 md:mt-0 lg:mt-6">
            <div className="bg-green-50 w-70 flex items-center gap-4 p-4 rounded-xl">
              <img src={UserSvg} alt="" className="" />
              <div className="space-y-1.5">
                <p className="text-xl font-semibold">23+</p>
                <p className="text-gray-600 text-xs">YEAR OF EXPERIENCE</p>
              </div>
            </div>

            <div className="bg-pink-50 w-70 flex items-center gap-4 p-4 rounded-xl">
              <img src={BriefcaseSvg} alt="" className="" />
              <div className="space-y-1.5">
                <p className="text-xl font-semibold">315+</p>
                <p className="text-gray-600 text-xs">COMPLETE PROJECT</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      
      

    </main>
  );
}

