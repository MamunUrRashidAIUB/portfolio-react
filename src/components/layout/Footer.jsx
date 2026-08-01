const Footer = () => {
  return (
    <footer>
      {" "}
      <div className="border border-l-0 border-r-0 border-cyan-100 p-10 font-bold text-cyan-300">
        <div className="flex flex-col items-center justify-center">
          <span>
            Email:
            <a href="mailto:md.mamun.ur.rashid.cse@gmail.com">
              md.mamun.ur.rashid.cse@gmail.com
            </a>
          </span>
          <p>Phone: +880 1880 299 555</p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved. | Developed
            by Rashid
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
