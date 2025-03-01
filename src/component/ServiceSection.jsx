export default function ServicesSection() {
    const services = [
        {
            title: "Green space & sustainable landscape design",
            description:
                "We develop innovative and sustainable green space designs for urban spaces, housing estates and business centers.",
            img: "/path-to-image",
        },
        {
            title: "Engineering and construction of solar power systems",
            description:
                "We specialize in the design and construction of solar power systems for residential and commercial buildings.",
            img: "/path-to-image",
        },
        {
            title: "Innovative architectural and structural design",
            description:
                "Our team of architects and engineers develops innovative projects that combine modern design and cutting-edge technology.",
            img: "/path-to-image",
        },
        {
            title: "Smart home and automation technologies",
            description:
                "We integrate advanced smart home technologies to improve the comfort and energy efficiency of residential and commercial properties.",
            img: "/path-to-image",
        },
        {
            title: "Consulting and certification of sustainable projects",
            description:
                "We provide consulting services and certify projects related to sustainable development and energy efficiency.",
            img: "/path-to-image",
        },
    ];

    return (
        <div className="relative w-full my-2 py-2.5  min-h-screen flex items-center justify-center bg- p-10">
            {/* Centered Title */}
            <h1 className="absolute text-[10rem] italic font-bold text-[#000] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                Services
            </h1>

            {/* Grid Container */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-2xl shadow-lg text-center flex flex-col items-center transition duration-300 ease-in-out hover:shadow-xl 
    ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`}
                    >
                        {/* Service Image */}
                        <div className="w-10 h-10 bg-gray-300 rounded-full mb-4 overflow-hidden">
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Service Content */}
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-700 mt-2">{service.description}</p>

                        {/* Read More Button */}
                        <button className="mt-4 px-4 py-2 border border-gray-700 rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition">
                            Read More
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
}
