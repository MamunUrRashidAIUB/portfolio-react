import Button from "./Button";
import { renderAnimatedText } from "./TextAnimation";
const Contact = () => {
  const text1 = "Contact";
  const text2 = "Me";

  return (
    <section id="contact" className="bg-black text-white p-6 sm:p-12">
      <div className="flex flex-col md:flex-row">
        <div className="contact-form bg-black  p-6 rounded-lg shadow-lg md:w-1/2 md:mr-4">
          <h2 className="text-4xl  text-cyan-400 sm:text-6xl md:text-8xl lg:text-6xl font-bold pb-5">
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
              className="w-full p-2 mb-4 border border-cyan-600 rounded bg-black text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your mobile number"
              required
              className="w-full p-2 mb-4 border border-cyan-600 rounded bg-black text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email id"
              required
              className="w-full p-2 mb-4 border border-cyan-600 rounded bg-black text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />

            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              required
              className="w-full p-2 mb-4 border border-cyan-600 rounded bg-black text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            ></textarea>

           <Button text="Send"/>
          </form>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          {/* Replace the iframe src with your Google Maps link */}
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0680670846795!2d-122.41941568468124!3d37.77492977975947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815efb7f8a93%3A0x4c50d8d281c60d92!2s77%20Massachusetts%20Ave%2C%20Cambridge%2C%20MA%2002139%2C%20USA!5e0!3m2!1sen!2sbd!4v1688505500205!5m2!1sen!2sbd"
            width="100%"
            height="400"
            className="rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
