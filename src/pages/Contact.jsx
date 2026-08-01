import ConnectWithMe from "../sections/Connectwithme";
import Footer from "../components/layout/Footer";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="p-1 text-white sm:px-12"
      >
        <ConnectWithMe />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
