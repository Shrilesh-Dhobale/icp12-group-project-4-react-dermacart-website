const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Derma<span className="text-green-300">Cart</span>
          </h2>
          <p className="text-sm text-green-100 mt-3">
            Dermatologist-approved skincare products made with safe,
            natural ingredients for healthy skin.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-green-100 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Skin Care</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-green-100 text-sm">
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p>
              Email:
          <a 
          href="mailto:nikitachormale4242@gmail.com"
          className="text-sm text-green-100">
           
            nikitachormale4242@gmail.com
            </a>
          </p>
          <p>
            Phone:
            <a
            href="tel:+9860737643"
             className="text-sm text-green-100 mt-1">
             +91 9860737643
             </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-green-700 text-center py-4 text-sm text-green-200">
        © {new Date().getFullYear()} DermaCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;