
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
            <li className="hover:text-white cursor-pointer">
               <a className="hover:text-blue-500 hover:scale-125 transition"
            href="https://www.linkedin.com/company/dermacart/"
          >Linkedin </a></li>
            <li className="hover:text-white cursor-pointer">
             <a 
             className="hover:text-blue-500 hover:scale-125 transition"
             href="https://www.instagram.com/DERMACART_USERNAME"
          >Instragram </a>
            </li>
            <li className="hover:text-white cursor-pointer">
            <a 
           className="hover:text-blue-500 hover:scale-125 transition"
            href="https://www.facebook.com/DERMACART_PAGE"
            >Facebook </a></li>
          </ul>
        </div>
       

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-green-100 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">FAQs</li>
            <li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-500 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-blue-500 cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p>
              Email:
          <a   className="text-sm text-green-100 hover:text-blue-500 cursor-pointer"
          href="mailto:nikitachormale4242@gmail.com">
          nikitachormale4242@gmail.com
            </a>
          </p>
          <p>
            Phone:
            <a
            href="tel:+9860737643"
             className="text-sm text-green-100 mt-1  hover:text-blue-500 cursor-pointer" >
             +91 9860737643
             </a>
          </p>
          <p className="text-sm text-green-100 mt-2">
             Pune, Maharashtra
          </p>
         
        </div>
{/* Google Map */}
        <div className="w-full h-[200px] rounded-lg overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8892532260597!2d73.8113804741687!3d18.48867497014982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfdcd9011159%3A0xd00528b6bacd9491!2sKarvenagar%20Flyover%2C%20Karvenagar%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1767696250087!5m2!1sen!2sin"
              width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
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

