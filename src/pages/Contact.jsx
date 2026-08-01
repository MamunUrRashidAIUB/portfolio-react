import ConnectWithMe from "../sections/Connectwithme";
import Footer from "../components/layout/Footer";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="flex min-h-screen flex-col items-center justify-center p-1 text-white sm:p-12"
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
