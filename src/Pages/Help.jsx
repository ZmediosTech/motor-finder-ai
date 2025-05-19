import { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import * as React from "react";
import { Tabs } from "radix-ui";
import { Accordion } from "radix-ui";
import swiperImg from "../../src/assets/swiper.png";

import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";
import appleStore from "../assets/download_apple.png";
import playStore from "../assets/download_play.png";
import huwaiStore from "../assets/download_huawei.png";

// import { AccordionContent } from "@redix/accordion";

// import classNames from "classnames";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
// import "./styles.css";
const Help = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleAccordion = () => setIsOpen(!isOpen);
  const [accordionStates, setAccordionStates] = useState({
    "item-1": false,
    "item-2": false,
    "item-3": false,
    "item-4": false,
    "item-5": false,
    "item-6": false,
    "item-7": false,
    "item-8": false,
    "item-9": false,
    "item-10": false,
    "item-11": false,
    "item-12": false,
    "item-13": false,
    "item-14": false,
  });

  const toggleAccordion = (itemId) => {
    setAccordionStates((prevStates) => ({
      [itemId]: !prevStates[itemId],
    }));
  };
  return (
    <>
      <div className="w-full md:p-14 p-8">
        <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-normal pt-10 text-white mb-[52px]">
          Help Center
        </h1>
        <div className="grid grid-cols-1 xl:gap-6 gap-4 md:grid-cols-2 2xl:gap-12 border-b border-[#F800C0] pb-20">
          <div className="flex xl:gap-7 lg:gap-4 gap-4 items-center p-4 xl:p-8 lg:p-6 border border-[#5B42FF] rounded-3xl card-gradient box-shadow">
            <div className="shrink-0 rounded-full xl:size-[130px] lg:size-[90px] size-[75px] p-2 sm:p-4 flex justify-center items-center icon-gradient border border-[#5B42FF] box-shadow">
              <img
                src="../../src/assets/email.png"
                alt="email"
                className="w-7 lg:w-10 xl:w-auto"
              />
            </div>
            <div className="flex flex-col xl:gap-6 gap-3">
              <p className="xl:text-2xl lg:text-xl  text-sm font-light text-white">
                Email Support
              </p>
              <Link
                className="text-white xl:text-2xl lg:text-xl text-sm font-[350]"
                to="mailto:support@motorsfinder.ai"
              >
                support@motorsfinder.ai
 
              </Link>
            </div>
          </div>

          <div className="flex xl:gap-7 lg:gap-4 gap-4 items-center p-4 xl:p-8 lg:p-6 border border-[#5B42FF] rounded-3xl  card-gradient box-shadow">
            <div className="shrink-0 rounded-full xl:size-[130px] lg:size-[90px] size-[75px] p-4 flex justify-center items-center icon-gradient border border-[#5B42FF] box-shadow">
              <img
                src="../../src/assets/whatsapp.png"
                alt="email"
                className="w-7 lg:w-10 xl:w-auto"
              />
            </div>
            <div className="flex flex-col xl:gap-6 gap-3">
              <p className="xl:text-2xl lg:text-xl  text-sm font-light text-white">
                WhatsApp Support
              </p>
              <Link
                className="text-white xl:text-2xl lg:text-xl  text-sm font-[350]"
                to="tel:+971555955102
 "
              >
                +971 55 5955102
 
              </Link>
            </div>
          </div>
          <div className="flex xl:gap-7 lg:gap-4 gap-4 items-center p-4 xl:p-8 lg:p-6 border border-[#5B42FF] rounded-3xl card-gradient box-shadow">
            {/* Icon Section */}
            <div className="shrink-0 rounded-full xl:size-[130px] lg:size-[90px] size-[75px] p-4 flex justify-center items-center icon-gradient border border-[#5B42FF] box-shadow">
              <img
                src="../../src/assets/contact.png"
                alt="email"
                className="w-7 lg:w-10 xl:w-auto max-w-full max-h-full"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col xl:gap-6 gap-3">
              <p className="xl:text-2xl lg:text-xl text-sm font-light text-white">
                Help us make your experience better.
              </p>
              <p className="xl:text-2xl lg:text-xl text-sm text-white font-[350]">
                Leave Feedback
              </p>
            </div>
          </div>

          <div className="flex xl:gap-7 lg:gap-4 gap-4 items-center p-4 xl:p-8 lg:p-6 border border-[#5B42FF] rounded-3xl  card-gradient box-shadow">
            <div className="shrink-0 rounded-full xl:size-[130px] lg:size-[90px] size-[75px] p-4 flex justify-center items-center icon-gradient border border-[#5B42FF] box-shadow">
              <img
                src="../../src/assets/form.png"
                alt="email"
                className="w-7 lg:w-10 xl:w-auto"
              />
            </div>
            <div className="flex flex-col xl:gap-6 gap-3">
              <p className="xl:text-2xl lg:text-xl  text-sm font-light text-white">
                Fill a Form
              </p>
              <p className="xl:text-2xl lg:text-xl text-sm text-white font-[350]">
                Get Quick Solution
              </p>
            </div>
          </div>
        </div>
        {/* vido  */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-15 md:gap-5 pb-20 border-b-2 border-b-[#F800C0] mb-16">
          <div className="card">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-normal pt-10  text-white lg:mb-[30px] mb-3">
              How to Buy
            </h2>
            <div className="aspect-video w-full rounded-[20px] overflow-hidden border-2 border-[#4C45FF]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/M6z7_u9i7b0?rel=0&modestbranding=1"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>

          </div>
          <div className="card">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-normal pt-10  text-white lg:mb-[30px] mb-3">
              How to Sell
            </h2>
            <div className="aspect-video w-full rounded-[20px] overflow-hidden border-2 border-[#4C45FF]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/M6z7_u9i7b0?rel=0&modestbranding=1"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="card">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-normal pt-10 text-white lg:mb-[30px] mb-3">
              How to Rent
            </h2>
            <div className="aspect-video w-full rounded-[20px] overflow-hidden border-2 border-[#4C45FF]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/M6z7_u9i7b0?rel=0&modestbranding=1"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <div className="faq-wrapper relative">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-normal  text-white mb-[52px]">
              FAQ
            </h2>
            <div className="tabbing  ">
              <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <div className=" p-5 sm:p-0 sm:absolute sm:top-0 sm:right-0 flex gap-10 bg-transparent">
                  <Tabs.List
                    className="TabsList"
                    aria-label="Manage your account"
                  >
                    <div className="flex gap-10 text-white bg">
                      <Tabs.Trigger
                        className="TabsTrigger data-[state=active]:tab-active"
                        value="tab1"
                      >
                        <span className="2xl:text-3xl lg:text-2xl text-lg font-[400]">
                          Buy
                        </span>
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        className="TabsTrigger data-[state=active]:tab-active"
                        value="tab2"
                      >
                        <span className="2xl:text-3xl lg:text-2xl text-lg font-[400]">
                          Sell
                        </span>
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        className="TabsTrigger data-[state=active]:tab-active"
                        value="tab3"
                      >
                        <span className="2xl:text-3xl lg:text-2xl text-lg font-[400]">
                          Rent
                        </span>
                      </Tabs.Trigger>
                    </div>
                  </Tabs.List>
                </div>
                <Tabs.Content className="TabsContent" value="tab1">
                  <Accordion.Root
                    className="AccordionRoot flex flex-col sm:gap-8 gap-5"
                    type="single"
                    collapsible
                  >
                    <Accordion.Item
                      className="AccordionItem card-gradient rounded-3xl border border-[#7670FF]"
                      value="item-1"
                    >
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full"
                        onClick={() => toggleAccordion("item-1")}
                      >
                        How much does it cost to sell on MyFinder?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          {/* Show - sign if open, + sign if closed */}
                          <path
                            d={
                              accordionStates["item-1"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          />
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-2")}
                      >
                        What’s the best way to send my item?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-2"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between text-start items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-3")}
                      >
                        Can I offer collection in person as an option for
                        buyers?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-3"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-4")}
                      >
                        How much will it cost to post my item?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-4"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-5")}
                      >
                        How will the buyer pay for my item?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-5"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-6")}
                      >
                        How should I choose my listing price?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-6"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-7")}
                      >
                        How does MyFinder protect sellers?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-7"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-8")}
                      >
                        What can I sell on MyFinder?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-8"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                    className="AccordionRoot flex flex-col sm:gap-8 gap-5"
                    type="single"
                    collapsible
                  >
                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-9"
                    >
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full"
                        onClick={() => toggleAccordion("item-9")}
                      >
                        How much does it cost to sell on MyFinder?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          {/* Show - sign if open, + sign if closed */}
                          <path
                            d={
                              accordionStates["item-9"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          />
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      value="item-10"
                    >
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-10")}
                      >
                        What’s the best way to send my item?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-10"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      value="item-11"
                    >
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-11")}
                      >
                        Can I offer collection in person as an option for
                        buyers?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-11"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                    className="AccordionRoot flex flex-col sm:gap-8 gap-5"
                    type="single"
                    collapsible
                  >
                    <Accordion.Item
                      className="AccordionItem card-gradient  rounded-3xl border border-[#7670FF]"
                      value="item-12"
                    >
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-12")}
                      >
                        How much does it cost to sell on MyFinder?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-12"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      value="item-13"
                    >
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-13")}
                      >
                        What’s the best way to send my item?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-13"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      value="item-14"
                    >
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-14")}
                      >
                        Can I offer collection in person as an option for
                        buyers?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-14"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
                      value="item-15"
                    >
                      <AccordionTrigger
                        className="text-start sm:text-xl text-sm flex justify-between items-center text-white font-[350] sm:p-8 p-5 w-full "
                        onClick={() => toggleAccordion("item-15")}
                      >
                        How will the buyer pay for my item?
                        <svg
                          height={30}
                          width={30}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d={
                              accordionStates["item-5"]
                                ? "M5 12H19V14H5V12Z"
                                : "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                            }
                          ></path>
                        </svg>
                      </AccordionTrigger>
                      <AccordionContent className="sm:text-lg text-sm text-white leading-[150%] font-light sm:p-8 p-5 pt-0">
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
        <div className="flex flex-col my-6 py-2">
          <div className="text-white">
            <Swiper
              pagination={true}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide className="text-white flex">
                              <img src={swiperImg} alt="swiper" />
                
                {/* <img src="../../src/assets/swiper.png" alt="swiper" /> */}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                {/* <img src="../../src/assets/swiper.png" alt="swiper" />
                 */}
                               <img src={swiperImg} alt="swiper" />
                 
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                {/* <img src="../../src/assets/swiper.png" alt="swiper" /> */}
                           <img src={swiperImg} alt="swiper" />
             
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="sm:my-6 m-3 sm:mx-8 flex justify-center">
            <div className="flex space-x-5 md:space-x-8 lg:space-x-10">
              <img src={appleStore} alt="Apple Store" className="h-5 md:h-6 lg:h-auto" />
              <img src={playStore} alt="Play Store" className="h-5 md:h-6 lg:h-auto" />
              <img src={huwaiStore} alt="Huawei Store" className="h-5 md:h-6 lg:h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
