import Image from 'next/image'
import logoLight from '../../assets/logo.svg'
import logoDark from '../../assets/logo_dark.svg'
import NewsletterForm from './NewsletterForm'

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

                <NewsletterForm />
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
