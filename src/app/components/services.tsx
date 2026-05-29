import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faRectangleAd,
  faBullhorn,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <section className="py-24">
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 mb-12">
        <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Services
        </div>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
          What We Offer to Grow Your Brand
        </h2>
        <p className="mt-5 text-gray-600 max-w-2xl">
          We offer a range of digital services designed to grow your business
          online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-12 lg:px-24 xl:px-40">
        {/* Card 1 */}
        <div className="bg-blue-50 rounded-3xl p-6 shadow-lg border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faGlobe} className="text-blue-600 text-xl" />
            </div>

            <h4 className="text-md font-bold text-gray-800">Website Development</h4>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            We build fast, scalable websites with clean architecture and
            responsive layouts so your audience has a seamless experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-green-50 rounded-3xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faRectangleAd} className="text-green-600 text-xl" />
            </div>

            <h4 className="text-md font-bold text-gray-800">SEO Optimization Expert</h4>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            We improve organic search performance with on-page SEO, keyword
            research, and technical fixes that boost visibility.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-purple-50 rounded-3xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faBullhorn} className="text-purple-600 text-xl" />
            </div>

            <h4 className="text-md font-bold text-gray-800">ONLINE Ads</h4>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            We launch high-converting online advertising campaigns that increase
            reach, clicks, and qualified lead flow.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-violet-50 rounded-3xl p-6 shadow-lg border border-violet-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faPaintBrush} className="text-violet-600 text-xl" />
            </div>

            <h4 className="text-md font-bold text-gray-800">Graphic Design</h4>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Our design team creates memorable brand identities, digital graphics,
            and marketing assets that make your business stand out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

