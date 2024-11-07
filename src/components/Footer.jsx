export default function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto px-40 py-24 bg-white text-center">
      <h4 className="font-bold text-3xl mb-2">Gadget Heaven</h4>
      <p className="text-gray-600">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <hr className="my-7" />
      <div className="flex gap-40 justify-center">
        <ul>
          <h4 className="font-bold mb-3">Services</h4>
          <li>
            <a className="text-gray-600" href="#">
              Order Tracking
            </a>
          </li>
          <li>
            <a className="text-gray-600" href="#">
              {" "}
              Product Support{" "}
            </a>
          </li>
          <li>
            <a className="text-gray-600" href="#">
              Shipping & Delivery
            </a>
          </li>
          <li>
            <a className="text-gray-600" href="#">
              Returns
            </a>
          </li>
        </ul>
        <ul>
          <h4 className="font-bold mb-3">Company</h4>
          <li>
            <a className="text-gray-600" href="#">
              {" "}
              About Us{" "}
            </a>
          </li>
          <li>
            <a className="text-gray-600" href="#">
              Careers
            </a>
          </li>
          <li>
            <a className="text-gray-600" href="#">
              Contact
            </a>
          </li>
        </ul>
        <ul>
          <h4 className="font-bold mb-3">Legal</h4>
          <li>
            <a className="text-gray-600" href="#">
              {" "}
              Terms of Service{" "}
            </a>
          </li>
          <li>
            <a className="text-gray-600" href="#">
              Privacy Policy{" "}
            </a>
          </li>
          <li>
            <a className="text-gray-600" href="#">
              Cookie Policy{" "}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
