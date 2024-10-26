import { Mail } from "lucide-react";
import Link from "next/link";
import {
  BsFacebook,
  BsLinkedin,
  BsPhone,
  BsPinMap,
  BsSkype,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import { siteConfig } from "@/config/site";

const SiteFooter = () => {
  return (
    <footer className="bg-[#2e343d] text-white space-y-8 pb-8">
      <div className="bg-white max-w-7xl h-full flex justify-evenly p-8 rounded-b-xl border-t-2 text-black mx-auto">
        {siteConfig.footerMenu.map((footerGroup) => {
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
