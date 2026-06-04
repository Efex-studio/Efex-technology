import Image from 'next/image'
import logoLight from '../../assets/logo.svg'
import logoDark from '../../assets/logo_dark.svg'

const Footer = () => {
  return (
    <footer className="dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Footer Top */}
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
            <div className="w-1/2 lg:w-1/4">
              <a href="/" className="relative">
                <Image width={140} height={104} src={logoLight} alt="Logo" className="dark:hidden" />
                <Image width={140} height={104} src={logoDark} alt="Logo" className="hidden dark:block" />
              </a>

              <p className="mb-10 mt-5">we build digital experiences that drive results</p>

              <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">Send Email</p>
              <a href="mailto:aninwezeemekafelix@gmail.com" className="text-itemtitle font-medium text-black dark:text-white">aninwezeemekafelix@gmail.com</a>
            </div>

            <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
              <div>
                <h4 className="mb-9 text-itemtitle2 font-medium text-blue-600 dark:text-white">Quick Links</h4>

                <ul>
                  <li><a href="/" className="mb-3 inline-block hover:text-primary">Home</a></li>
                  <li><a href="/services" className="mb-3 inline-block hover:text-primary">Services</a></li>
                  <li><a href="/projects" className="mb-3 inline-block hover:text-primary">Projects</a></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-9 text-itemtitle2 font-medium text-blue-600 dark:text-white">Support</h4>

                <ul>
                  <li><a href="/about" className="mb-3 inline-block hover:text-primary">About</a></li>
                  <li><a href="/portfolio" className="mb-3 inline-block hover:text-primary">Portfolio</a></li>
                  <li><a href="/contact" className="mb-3 inline-block hover:text-primary">Contact Us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-9 text-itemtitle2 font-medium text-blue-600 dark:text-white">Newsletter</h4>
                <p className="mb-4 w-[90%]">Subscribe to receive future updates</p>

                <form action="#">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="w-full rounded-full border border-stroke bg-blue-600 px-6 py-3 text-white placeholder:text-white shadow-solid-11 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-blue-600 dark:text-white dark:placeholder:text-white dark:shadow-none dark:focus:border-primary"
                    />

                    <button aria-label="signup to newsletter" className="absolute right-0 p-4">
                      <svg className="fill-white hover:fill-primary dark:fill-white" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_48_1487)"><path d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z" fill=""/></g><defs><clipPath id="clip0_48_1487"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
          <div>
            <p>&copy; {new Date().getFullYear()} Efex Technology. All rights reserved</p>
          </div>
        </div>
        {/* Footer Bottom */}
      </div>
    </footer>
  )
}

export default Footer
