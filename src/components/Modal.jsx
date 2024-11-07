import { FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Modal({ total, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successfully
        </h2>
        <p className="text-gray-600 mb-4">Thanks for purchasing.</p>
        <p className="text-gray-600 font-semibold mb-6">
          Total: ${total?.toFixed(2)}
        </p>
        <button
          onClick={onClose}
          className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-300 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  total: PropTypes.bool,
  onClose: PropTypes.bool,
};
