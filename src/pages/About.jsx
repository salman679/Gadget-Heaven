import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          About GadgetHeaven
        </h1>
        <p className="text-lg mb-6">
          Welcome to <span className="font-bold">GadgetHeaven</span> — your
          go-to destination for discovering the latest and greatest gadgets. We
          are passionate about bringing you the most innovative and high-quality
          tech products on the market, from the newest smartphones to
          cutting-edge smartwatches, chargers, and more.
        </p>

        <h2 className="text-2xl font-semibold text-purple-500 mb-3">
          Our Mission
        </h2>
        <p className="mb-6">
          Our mission is to connect tech enthusiasts with gadgets that enhance
          their lives and make technology more accessible. We carefully curate a
          diverse selection of products that suit a range of lifestyles, needs,
          and budgets. At GadgetHeaven, we believe that technology should be
          functional, reliable, and accessible to everyone.
        </p>

        <h2 className="text-2xl font-semibold text-purple-500 mb-3">
          What We Offer
        </h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            Curated selections of the latest gadgets, from trusted brands.
          </li>
          <li>
            Comprehensive product categories like computers, phones, and
            accessories.
          </li>
          <li>
            User-friendly interface with easy navigation and filtering options.
          </li>
          <li>
            A seamless shopping experience, including a wishlist and shopping
            cart.
          </li>
          <li>Secure checkout and fast delivery options.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-purple-500 mb-3">
          Why Choose Us
        </h2>
        <p className="mb-6">
          GadgetHeaven is more than just an e-commerce site. We are a community
          of gadget lovers who believe in quality, value, and customer
          satisfaction. Our knowledgeable team is always here to provide support
          and advice to help you find the perfect gadget for your needs.
        </p>

        <h2 className="text-2xl font-semibold text-purple-500 mb-3">
          Our Commitment
        </h2>
        <p className="mb-6">
          We’re committed to bringing you the best shopping experience, with
          accurate product details, fair pricing, and timely service.
          GadgetHeaven aims to stay ahead in the tech world, constantly updating
          our product list with the latest releases and ensuring you have access
          to top-notch gadgets.
        </p>

        <h2 className="text-2xl font-semibold text-purple-500 mb-3">
          Join Our Community
        </h2>
        <p className="mb-6">
          Thank you for choosing GadgetHeaven. We’re excited to help you explore
          and enjoy the world of tech. Be sure to sign up for our newsletter,
          follow us on social media, and join our community of gadget
          enthusiasts!
        </p>
      </div>
    </>
  );
}
