import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import * as React from "react";
import { Tabs } from "radix-ui";
import { Accordion } from "radix-ui";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";
// import { AccordionContent } from "@redix/accordion";

// import classNames from "classnames";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
// import "./styles.css";
const Help = () => {
  return (
    <>
      <div className="w-[98%] p-4 lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px] m-auto">
        <h1 className="text-5xl font-normal pt-24 text-white mb-[52px]">
          Help Center
        </h1>
        <div className="grid grid-cols-1 gap-6  xl:grid-cols-2 2xl:gap-14 mb-32">
          <div className="flex gap-7 p-8 border border-[#5B42FF] rounded-3xl  card-gradient ">
            <div
              className="rounded-full h-[100px] w-[100px] p-2
             sm:p-4 flex justify-center items-center icon-gradient border border-[#5B42FF] shadow shadow-[#4B4CFF]"
            >
              <img
                src="../../src/assets/email.png"
                alt="email"
                height={35}
                width={35}
              />
            </div>
            <div className="flex flex-col gap-6 ">
              <p className="text-2xl font-light leading-[150%] text-white">
                Email Support
              </p>
              <Link
                className="text-white text-3xl font-[350] leading-[125%]"
                to="mailto:arihant@zmediostech.com"
              >
                arihant@zmediostech.com
              </Link>
            </div>
          </div>

          <div className="flex gap-7 p-8 border border-[#5B42FF] rounded-3xl  card-gradient ">
            <div className="rounded-full h-[100px] w-[100px] p-4 flex justify-center items-center icon-gradient border border-[#5B42FF] shadow shadow-[#4B4CFF]">
              <img
                src="../../src/assets/whatsapp.png"
                alt="email"
                height={35}
                width={35}
              />
            </div>
            <div className="flex flex-col gap-6 ">
              <p className="text-2xl font-light leading-[150%] text-white">
                WhatsApp Support
              </p>
              <Link
                className="text-white text-3xl font-[350] leading-[125%]"
                to="tel:+918561073404"
              >
                +91 8561073404
              </Link>
            </div>
          </div>
          <div className="flex gap-7 p-8 border border-[#5B42FF] rounded-3xl  card-gradient ">
            <div className="rounded-full h-[100px] w-[100px] p-4 flex justify-center items-center icon-gradient border border-[#5B42FF] shadow shadow-[#4B4CFF]">
              <img
                src="../../src/assets/contact.png"
                alt="email"
                height={35}
                width={35}
              />
            </div>
            <div className="flex flex-col gap-6 ">
              <p className="text-2xl font-light leading-[150%] text-white">
                Help us make your experience better.
              </p>
              <p className="text-3xl text-white font-[350]">Leave Feedback</p>
            </div>
          </div>
          <div className="flex gap-7 p-8 border border-[#5B42FF] rounded-3xl  card-gradient ">
            <div className="rounded-full h-[100px] w-[100px] p-4 flex justify-center items-center icon-gradient border border-[#5B42FF] shadow shadow-[#4B4CFF]">
              <img
                src="../../src/assets/form.png"
                alt="email"
                height={35}
                width={35}
              />
            </div>
            <div className="flex flex-col gap-6 ">
              <p className="text-2xl font-light leading-[150%] text-white">
                Fill a Form
              </p>
              <p className="text-3xl text-white font-[350]">
                Get Quick Solution
              </p>
            </div>
          </div>
        </div>
        {/* vido  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-5  pb-20 border-b-2 border-b-[#F800C0] mb-16">
          <div className="card">
            <h2 className="text-5xl font-normal pt-24 text-white mb-[52px]">
              How to Buy
            </h2>
            <div className="lg:w-[90%] xl:w-[380px] w-[98%] h-[348px] border-2 border-[#4C45FF]  rounded-[21px]    ">
              <iframe
                className="h-full w-full  rounded-[21px]"
                src="https://www.youtube.com/embed/M6z7_u9i7b0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="card">
            <h2 className="text-5xl font-normal pt-24 text-white mb-[52px]">
              How to Sell
            </h2>
            <div className="lg:w-[90%] xl:w-[380px] w-[98%] h-[348px] border-2 border-[#4C45FF]  rounded-[21px]   ">
              {" "}
              <iframe
                className="h-full w-full  rounded-[21px]"
                src="https://www.youtube.com/embed/M6z7_u9i7b0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="card">
            <h2 className="text-5xl font-normal pt-24 text-white mb-[52px]">
              How to Rent
            </h2>
            <div className="xl:w-[380px] lg:w-[90%] w-[98%] h-[348px] border-2 border-[#4C45FF]  rounded-[21px]   ">
              {" "}
              <iframe
                className="h-full w-full  rounded-[21px]"
                src="https://www.youtube.com/embed/M6z7_u9i7b0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <div className="faq-wrapper relative">
            <h2 className="text-5xl font-normal  text-white mb-[52px]">FAQ</h2>
            <div className="tabbing  ">
              <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <div className="absolute top-0 right-0 flex gap-10 bg-transparent">
                  <Tabs.List
                    className="TabsList"
                    aria-label="Manage your account"
                  >
                    <div className="flex gap-10 text-white bg">
                      <Tabs.Trigger
                        className="TabsTrigger data-[state=active]:tab-active"
                        value="tab1"
                      >
                        <span className="text-3xl font-[400]">Buy</span>
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        className="TabsTrigger data-[state=active]:tab-active"
                        value="tab2"
                      >
                        <span className="text-3xl font-[400]">Sell</span>
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        className="TabsTrigger data-[state=active]:tab-active"
                        value="tab3"
                      >
                        <span className="text-3xl font-[400]">Rent</span>
                      </Tabs.Trigger>
                    </div>
                  </Tabs.List>
                </div>
                <Tabs.Content className="TabsContent" value="tab1">
                  <Accordion.Root
                    className="AccordionRoot flex flex-col gap-12"
                    type="single"
                    defaultValue="item-1"
                    collapsible
                  >
                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-1"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        How much does it cost to sell on MyFinder?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-2"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        What’s the best way to send my item?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-3"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        Can I offer collection in person as an option for
                        buyers?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-4"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        How much will it cost to post my item?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-5"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        How will the buyer pay for my item?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-6"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        How should I choose my listing price?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-7"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        How does MyFinder protect sellers?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-8"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        What can I sell on MyFinder?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>
                  </Accordion.Root>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab2">
                  <Accordion.Root
                    className="AccordionRoot flex flex-col gap-12"
                    type="single"
                    defaultValue="item-1"
                    collapsible
                  >
                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-1"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        How much does it cost to sell on MyFinder?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-2"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        What’s the best way to send my item?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-3"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        Can I offer collection in person as an option for
                        buyers?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>
                  </Accordion.Root>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab3">
                  <Accordion.Root
                    className="AccordionRoot flex flex-col gap-12"
                    type="single"
                    defaultValue="item-1"
                    collapsible
                  >
                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-1"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        How much does it cost to sell on MyFinder?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-2"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        What’s the best way to send my item?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-3"
                    >
                      <AccordionTrigger className="text-xl flex justify-between items-center text-white font-[350] p-8 w-full ">
                        Can I offer collection in person as an option for
                        buyers?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="text-lg text-white leading-[150%] font-light p-8 pt-0">
                        <p>
                          {" "}
                          Starting Oct 1, 2024, it is free to sell for UK-based
                          private sellers. Sellers do not pay transaction fees
                          when the item sells. This applies to all categories,
                          except motors (Cars, Motorcycles & Vehicles listings).{" "}
                        </p>
                        <p>
                          {" "}
                          You can list up to 300 items for free each month;
                          after that, you'll pay 35p per listing. You may incur
                          additional fees if you add optional upgrades to your
                          listing, or if an item sells or ships to a buyer in a
                          different country. Learn more about fees.
                        </p>
                      </AccordionContent>
                    </Accordion.Item>
                  </Accordion.Root>
                </Tabs.Content>
              </Tabs.Root>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="text-white">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="text-white flex">
                <img src="../../src/assets/swiper.png" alt="swiper" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="../../src/assets/swiper.png" alt="swiper" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="../../src/assets/swiper.png" alt="swiper" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-wrap  gap-16 justify-center py-10">
            <img
              src="../../src/assets/download_apple.png"
              alt="apple"
              className="h-5 md:h-6 lg:h-auto"
            />
            <img
              src="../../src/assets/download_play.png"
              alt="play"
              className="h-5 md:h-6 lg:h-auto"
            />
            <img
              src="../../src/assets/download_huawei.png"
              alt="huawei"
              className="h-5 md:h-6 lg:h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
