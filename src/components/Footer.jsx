
const Footer = () => {
  return (
    <div>
      {" "}
      <div className="bg-slate-900   border-cyan-400  font-bold text-white p-5">
        
        <div className="flex flex-col justify-center items-center">
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
