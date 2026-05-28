
const services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 py-24">
  
  {/* Card 1 */}
  <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
    
    {/* Title + Icon */}
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
        🌐
      </div>

      <h3 className="text-xl font-bold text-gray-800">
        Web Development
      </h3>
    </div>

    {/* Description */}
    <p className="text-gray-600 leading-relaxed mb-6">
      We build fast, scalable and modern websites tailored to your
      business needs using modern technologies.
    </p>

    {/* Button */}
    <button className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-500 transition">
      Read More
    </button>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
    
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
        🎨
      </div>

      <h3 className="text-xl font-bold text-gray-800">
        UI/UX Design
      </h3>
    </div>

    <p className="text-gray-600 leading-relaxed mb-6">
      Clean and user-friendly interfaces designed to improve customer
      experience and engagement.
    </p>

    <button className="bg-green-600 text-white px-5 py-3 rounded-full hover:bg-green-500 transition">
      Read More
    </button>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
    
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
        📱
      </div>

      <h3 className="text-xl font-bold text-gray-800">
        Mobile Apps
      </h3>
    </div>

    <p className="text-gray-600 leading-relaxed mb-6">
      Cross-platform mobile applications for Android and iOS with smooth
      performance and modern UI.
    </p>

    <button className="bg-purple-600 text-white px-5 py-3 rounded-full hover:bg-purple-500 transition">
      Read More
    </button>
  </div>

</div>
  )
}

export default services
