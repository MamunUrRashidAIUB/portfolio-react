import Button from "./Button";

import { renderAnimatedText } from "./TextAnimation";

const Contact = () => {
  const text1 = "Contact";
  const text2 = "Me";

  return (
    <section
      id="contact"
      className="min-h-screen bg-black p-1 text-white sm:p-12"
    >
      <div className="flex flex-col md:flex-row">
        <div className="contact-form rounded-lg bg-black p-6 shadow-lg md:mr-4 md:w-1/2">
          <h2 className="pb-5 text-4xl font-bold uppercase text-cyan-400 sm:text-6xl md:text-4xl lg:text-6xl">
            {renderAnimatedText(text1)}
            <span className="mx-2"></span>
            {renderAnimatedText(text2)}
          </h2>
          <form action="#" method="post">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="mb-4 w-full rounded border border-cyan-600 bg-black p-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your mobile number"
              required
              className="mb-4 w-full rounded border border-cyan-600 bg-black p-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email id"
              required
              className="mb-4 w-full rounded border border-cyan-600 bg-black p-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            />

            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              required
              className="mb-4 w-full rounded border border-cyan-600 bg-black p-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
            ></textarea>
            <div className="p-6 pl-10">
              <Button className="" text="Send" />
            </div>
          </form>
        </div>

        <div className="relative mt-6 md:mt-0 md:w-1/2">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d228.12584481935707!2d90.42585535289044!3d23.818118371682413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sbd!4v1729632050154!5m2!1sen!2sbd"
            width="100%"
            height="400"
            className="rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          {/* Location Details Overlay */}
          <div className="absolute left-4 top-4 rounded-lg bg-cyan-400 bg-opacity-80 p-4 text-sm text-black shadow-md sm:left-4 sm:top-4 sm:text-base">
            <p>
              <strong>Location:</strong>Bashundhora , Dhaka ,Bangladesh
            </p>
            <p>
              <strong>Phone:</strong>+880 1880299555
            </p>
            <p>
              <strong>Email:</strong>md.mamun.ur.rashid.cse@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
