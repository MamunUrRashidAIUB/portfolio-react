const Footer = () => {
  return (
    <div>
      {" "}
      <div className="border-cyan-400 bg-slate-900 p-10 font-bold text-white">
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
    </div>
  );
};

export default Footer;
