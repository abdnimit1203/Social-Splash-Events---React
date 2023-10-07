import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaVimeoV,
  FaTwitter,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-slate-800 text-white rounded">
        <div>
            <img src="/darkLogo.png" alt="logo dark" className="w-52"/>
        </div>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms and conditions</a>
      
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <FaFacebookF className="hover:text-[#1b74e4]" />
            <FaInstagram className="hover:text-rose-600" />
            <FaTwitter className="hover:text-blue-400" />
            <FaVimeoV className="hover:text-blue-400" />
            <FaYoutube className="hover:text-red-600" />
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by <a href="https://github.com/abdnimit1203" target="_blank" rel="noreferrer" className="text-primary font-semibold font-main">ABD NIMIT</a>  -SOCIAL SPLASH EVENTS</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
