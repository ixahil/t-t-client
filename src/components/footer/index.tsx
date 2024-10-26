import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsMailbox,
  BsPhone,
  BsPhoneLandscapeFill,
  BsPinMap,
  BsSkype,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { HiPhone } from "react-icons/hi";

const footerMenu = [
  {
    label: "Company",
    children: [
      { label: "About", href: "/about" },
      { label: "Career", href: "/career" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    label: "Property Type",
    children: [
      { label: "Hostels in India", href: "/hostels-india" },
      { label: "Beach Resorts", href: "/beach-resorts" },
      { label: "Wildlife", href: "/wildlife" },
      { label: "Heritage", href: "/heritage" },
      { label: "Luxury", href: "/luxury" },
    ],
  },
  {
    label: "Legal Policy",
    children: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Share Your Travel Experience", href: "/share" },
    ],
  },
  {
    label: "Other Services",
    children: [
      { label: "Destination Weddings", href: "/weddings" },
      { label: "MICE", href: "/mice" },
      { label: "Medical Tourism", href: "/medical" },
    ],
  },
];

const SiteFooter = () => {
  return (
    <footer className="bg-[#2e343d] text-white space-y-8 pb-8">
      <div className="bg-white max-w-7xl h-full flex justify-evenly p-8 rounded-b-xl border-t-2 text-black mx-auto">
        {footerMenu.map((footerGroup) => {
          return (
            <div key={footerGroup.label} className="flex flex-col gap-4">
              <h6 className="font-medium uppercase text-lg">
                {footerGroup.label}
              </h6>
              {footerGroup.children.map((link) => (
                <Link href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          );
        })}
      </div>
      <hr />
      <div className="flex items-center gap-8 justify-center">
        <div className="flex gap-4">
          <BsPinMap size={24} />
          <span>C - 81C, Sector - 8, Noida - 201301</span>
        </div>
        <div className="flex gap-4">
          <BsPhone size={24} />
          <span>+91-120-4052615 - 99 (85 hunting lines are available)</span>
        </div>
        <div className="flex gap-4">
          <HiPhone size={24} />
          <span>+91-120-4052699</span>
        </div>
        <div className="flex gap-4">
          <Mail size={24} />
          <span>info@tourmyindia.com</span>
        </div>
        <div className="flex gap-4">
          <BsWhatsapp size={24} />
          <span>+91-9212777225 (Only for Whatsapp)</span>
        </div>
        <div className="flex gap-4">
          <BsSkype size={24} />
          <span>tourmyindiadelhi</span>
        </div>
      </div>
      <hr />
      <div className="flex items-center gap-8 justify-center">
        <BsTwitter size={60} className="border-2 rounded-full p-4" />
        <BsFacebook size={60} className="border-2 rounded-full p-4" />
        <BsLinkedin size={60} className="border-2 rounded-full p-4" />
        <BsYoutube size={60} className="border-2 rounded-full p-4" />
      </div>
      <div className="text-center">
        <span>CopyRight©2024</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
