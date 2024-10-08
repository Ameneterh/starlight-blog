import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import { MdAddCall } from "react-icons/md";

export default function FooterCom() {
  return (
    <Footer container className="border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 flex flex-col gap-4">
            <Link
              to="/"
              className="whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Starlight
              </span>{" "}
              Blog
            </Link>
            <div className="hidden md:flex md:flex-col h-full gap-2 px-2 py-4 w-96">
              <h2 className="text-lg font-semibold">
                Daniel 12:3{" "}
                <span className="text-sm text-slate-400">Amplified</span>
              </h2>
              <p className="text-sm text-slate-800 dark:text-slate-300">
                "Men and women who have lived wisely and well will shine
                brilliantly, like the cloudless, star-strewn night skies. And
                those who put others on the right path to life will glow like
                stars forever"
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about#motivation">
                  The Motivation
                </Footer.Link>
                <Footer.Link href="/about#mission">Mission</Footer.Link>
                <Footer.Link href="/about#vision">Vision</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Follow Starlight" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">WhatsApp</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
                <Footer.Link href="/terms-of-use">Terms of Use</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Amene Ter'Hemen"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/amenest"
              icon={BsFacebook}
            />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon
              href="https://www.twitter.com/ameneterh"
              icon={BsTwitter}
            />
            <Footer.Icon href="https://github.com/Ameneterh" icon={BsGithub} />
            <Footer.Icon href="https://wa.me/2348154230654" icon={BsWhatsapp} />
            <Footer.Icon href="tel:+2348154230654" icon={MdAddCall} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
