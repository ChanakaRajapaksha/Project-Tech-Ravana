import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
    return (
        <a
            href="https://wa.me/94715264449?text=Hello!%20I%20need%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 flex items-center space-x-2 p-3 bg-gray-700 bg-opacity-50 rounded-full hover:shadow-2xl transition-shadow duration-200"
        >
            {/* WhatsApp Icon */}
            <div className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center">
                <FaWhatsapp size={24} />
            </div>
            {/* Chat Text */}
            <span className="text-white font-medium hidden sm:inline">
                Need Help? Chat with us
            </span>
        </a>
    );
};

export default Whatsapp;