import React, { useState } from "react";
import Title from '../layouts/Title';
import { FaCopy, FaDownload, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const emailAddress = "waseemaziz106@gmail.com";
  const phoneNumber = "+92-3066991687";
  const whatsappNumber = "923066991687";
  const cvUrl = `${import.meta.env.BASE_URL}Waseem_Aziz_CV.pdf`;

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore clipboard failures (e.g., insecure context)
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex justify-center">
          <div className="w-full lgl:w-[70%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-10 rounded-lg shadow-shadowOne">
            <div className="w-full flex flex-col gap-6 py-2 lgl:py-5">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white">Let’s build something great</h3>
                <p className="text-base text-gray-400 leading-6">
                  I’m open to full-time roles and freelance work. If you have a project in mind or want to
                  collaborate, the fastest way to reach me is email or WhatsApp.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black bg-opacity-20 rounded-lg p-5 shadow-shadowOne">
                  <p className="text-sm uppercase tracking-wide text-gray-400">Email</p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <a
                      className="text-lightText hover:text-white duration-300 break-all"
                      href={`mailto:${emailAddress}`}
                    >
                      {emailAddress}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="w-10 h-10 rounded-full bg-black bg-opacity-30 inline-flex items-center justify-center text-gray-300 hover:text-designColor duration-300"
                      aria-label="Copy email"
                    >
                      <FaCopy />
                    </button>
                  </div>
                  {copied && (
                    <p className="mt-2 text-sm text-designColor">Copied!</p>
                  )}
                </div>

                <div className="bg-black bg-opacity-20 rounded-lg p-5 shadow-shadowOne">
                  <p className="text-sm uppercase tracking-wide text-gray-400">Phone</p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <a
                      className="text-lightText hover:text-white duration-300"
                      href={`tel:${phoneNumber}`}
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a
                  className="w-full min-w-0 inline-flex items-center justify-center gap-3 px-4 md:px-6 h-12 rounded-lg bg-[#141518] text-sm md:text-base text-gray-300 hover:text-white duration-300 hover:border-[1px] hover:border-designColor border border-transparent"
                  href={`mailto:${emailAddress}?subject=${encodeURIComponent("Portfolio Inquiry")}`}
                >
                  <FaEnvelope />
                  Email Me
                </a>
                <a
                  className="w-full min-w-0 inline-flex items-center justify-center gap-3 px-4 md:px-6 h-12 rounded-lg bg-[#141518] text-sm md:text-base text-gray-300 hover:text-white duration-300 hover:border-[1px] hover:border-designColor border border-transparent"
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Waseem, I saw your portfolio and want to discuss a project.")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
                <a
                  className="w-full min-w-0 inline-flex items-center justify-center gap-3 px-4 md:px-6 h-12 rounded-lg bg-[#141518] text-sm md:text-base text-gray-300 hover:text-white duration-300 hover:border-[1px] hover:border-designColor border border-transparent"
                  href={`tel:${phoneNumber}`}
                >
                  <FaPhoneAlt />
                  Call
                </a>
                <a
                  className="w-full min-w-0 inline-flex items-center justify-center gap-3 px-4 md:px-6 h-12 rounded-lg bg-[#141518] text-sm md:text-base text-gray-300 hover:text-white duration-300 hover:border-[1px] hover:border-designColor border border-transparent"
                  href={cvUrl}
                  download
                >
                  <FaDownload />
                  CV
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact