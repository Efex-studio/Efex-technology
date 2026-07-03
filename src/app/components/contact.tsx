'use client';

import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
  consent: false,
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const detail = data.detail ? ` ${data.detail}` : "";
        throw new Error(`${data.message || "Unable to send your message right now."}${detail}`);
      }

      setStatus("success");
      setFeedback("Your message has been sent successfully.");
      setFormData(initialFormState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0">
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-transparent to-[#dee7ff47] dark:bg-linear-to-t dark:to-[#252A42]"></div>

        <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          <div className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15">
            <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">Send a message</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <div className="mb-11.5 flex">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                ></textarea>
              </div>

              <div className="flex flex-wrap gap-4 xl:justify-between">
                <div className="mb-4 flex items-start md:mb-0">
                  <input
                    id="default-checkbox"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-2 h-5 w-5 cursor-pointer rounded-sm border border-stroke bg-white accent-blue-600 dark:border-strokedark dark:bg-black"
                  />
                  <label htmlFor="default-checkbox" className="flex max-w-[425px] cursor-pointer select-none pl-5">
                    By clicking Checkbox, you agree to use our “Form” terms And consent cookie usage in browser.
                  </label>
                </div>

                <button
                  type="submit"
                  aria-label="send message"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho disabled:cursor-not-allowed disabled:opacity-70 dark:bg-btndark"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  <svg className="fill-white" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" fill=""/></svg>
                </button>
              </div>

              {feedback ? (
                <p
                  className={`mt-4 text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}
                  aria-live="polite"
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </div>

          <div className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15">
            <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">Find us</h2>

            <div className="5 mb-7">
              <h3 className="mb-4 text-metatitle3 font-medium text-blue-700 dark:text-white">Our Loaction</h3>
              <p>Asaba Delta State, Nigeria</p>
            </div>
            <div className="5 mb-7">
              <h3 className="mb-4 text-metatitle3 font-medium text-blue-700 dark:text-white">Email Address</h3>
              <p><a href="mailto:aninwezeemekafelix@gmail.com">aninwezeemekafelix@gmail.com</a></p>
            </div>
            <div>
              <h4 className="mb-4 text-metatitle3 font-medium text-blue-700 dark:text-white">Phone Number</h4>
              <p><a href="tel:+2348169910462">+2348169910462</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
