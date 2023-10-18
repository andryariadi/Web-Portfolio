import React from "react";

import { ImLinkedin } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <>
      <section className="py-16 lg:section" id="contact">
        <div className="container mx-auto mb-24">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 mb-5 lg:mb-0">
              <div>
                <h2 className="h2 text-gradient font-semibold tracking-wide mb-3">Get In Touch</h2>
                <p className="lg:pe-48 leading-[23px]">I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <div className="flex mt-5 gap-x-3">
                  <a href="https://www.linkedin.com/in/andry-ariadi/" target="_blank">
                    <ImLinkedin size={30} />
                  </a>
                  <a href="https://drive.google.com/file/d/1im6GpOdoidbCYveX-znWDvLpt_crkZWH/view?usp=share_link" target="_blank">
                    <IoLogoWhatsapp size={30} />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.form variants={fadeIn("left", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 itmes-start">
              <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all duration-500" type="text" placeholder="Your Email" />
              <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all duration-500" type="text" placeholder="Your Name" />
              <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all duration-500 mb-5" placeholder="Your Message" cols="30" rows="5"></textarea>
              <button className="btn btn-sm">Send Message</button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
