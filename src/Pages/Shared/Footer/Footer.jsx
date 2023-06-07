import Container from "../Container/Container";
import {
  FaGg,
  FaEdgeLegacy,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#571F9C] text-white">
      <Container>
        <div className="">
          <footer className="footer p-10  ">
            <div>
              <div className="flex items-center gap-3">
                <img
                  className=" "
                  src="https://dtdance.wpenginepowered.com/wp-content/uploads/2017/07/light-logo.png"
                  alt=""
                />
              </div>
              <p className="text-[14px]">
                Dance is a wordpress theme that is truly <br /> multi-purpose with our
                way of taking care your needs.
              </p>
              <p className="text-[14px]">
              The barrage of shortcodes that works in the pages, <br /> makes it the better choice for your business.
              </p>
              <div className="flex gap-2 text-[16px] items-center">
                <FaGg className="text-4xl text-[#FF6A98]  "></FaGg>
                <span>Addresss: 1800 Abbot Kinney Nebraska UK</span>
              </div>
              <div className="flex gap-[20px] text-[16px] items-center">
                <FaEdgeLegacy className="text-2xl  text-[#FF6A98]  "></FaEdgeLegacy>
                <span>Email: hello@example.com</span>
              </div>
              <div className="flex gap-[16px] text-[16px] items-center">
                <FaPhoneAlt className="text-2xl ml-1  text-[#FF6A98]  "></FaPhoneAlt>
                <span>Phone: (012) 345 6789</span>
              </div>
            </div>
            <div>
              <span className="footer-title text-xl">Quick Links</span>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">
                Help Center
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">
                Redeem Voucher
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">
                Contact Us
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">
                Policies & Rules
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">
                Check Offer List
              </a>
            </div>
            <div>
              <span className="footer-title text-xl">Information</span>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">
                Product Support
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">
                Checkout
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">
                License Policy
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">
                Affiliate
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] ">
                About Us
              </a>
            </div>
            <div>
              <span className="footer-title text-xl">Follow Us On</span>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] flex gap-2  ">
                <FaFacebook className="text-[#FF6A98] text-xl hover:text-[#32BDF2]  "></FaFacebook>
                Facebook
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] flex gap-2  ">
                <FaTwitter className="text-[#FF6A98] text-xl hover:text-[#32BDF2]  "></FaTwitter>
                Twitter
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] flex gap-2  ">
                <FaInstagram className="text-[#FF6A98] text-xl hover:text-[#32BDF2]  "></FaInstagram>
                Instagram
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] flex gap-2  ">
                <FaYoutube className="text-[#FF6A98] text-xl hover:text-[#32BDF2]  "></FaYoutube>
                Youtube
              </a>
              <a className="link link-hover hover:text-[#32BDF2] mb-3 text-[15px] flex gap-2  ">
                <FaPinterest className="text-[#FF6A98] text-xl hover:text-[#32BDF2]  "></FaPinterest>
                Pinterest
              </a>
            </div>
          </footer>
          <hr className="text-white" />
          <p className="text-center text-lg mt-2 font-semibold py-5">
            {" "}
            Copyright &copy;  2023. All rights reserved by, Dance School
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
