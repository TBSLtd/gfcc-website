import { 
    FaMapMarkerAlt, 
    FaPhone, 
    FaEnvelope, 
    FaArrowRight,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter
  } from 'react-icons/fa';
  import Link from 'next/link';
  
  const Footer = () => {
    const socialLinks = [
      {
        name: 'Facebook',
        icon: <FaFacebook className="text-xl" />,
        url: 'https://www.facebook.com/gracecommissionoutreach',
        color: 'hover:text-blue-600'
      },
      {
        name: 'Instagram',
        icon: <FaInstagram className="text-xl" />,
        url: 'https://instagram.com/gracefamilyoutreach',
        color: 'hover:text-pink-600'
      },
      {
        name: 'YouTube',
        icon: <FaYoutube className="text-xl" />,
        url: 'https://www.youtube.com/@GraceFamilyOutreach',
        color: 'hover:text-red-600'
      },
      {
        name: 'Twitter',
        icon: <FaTwitter className="text-xl" />,
        url: 'https://x.com/GraceFamilyout',
        color: 'hover:text-blue-400'
      }
    ];
    const year = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            {/* About Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">About The Grace Family Outreach</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.<br />
                Voluptatibus et dolor blanditis consequuntur ex<br />
                voluptates perspicisit omnis urnde minima expedita.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/sermons" className="hover:text-white flex items-center transition-colors">
                    <FaArrowRight className="mr-2 text-blue-400 text-xs" />
                    Sermons
                  </Link>
                </li>
                <li>
                  <Link href="/ministries" className="hover:text-white flex items-center transition-colors">
                    <FaArrowRight className="mr-2 text-blue-400 text-xs" />
                    Ministries
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white flex items-center transition-colors">
                    <FaArrowRight className="mr-2 text-blue-400 text-xs" />
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white flex items-center transition-colors">
                    <FaArrowRight className="mr-2 text-blue-400 text-xs" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400" />
                  <span>Goshen, KM 14, Nwaniba Rd, Ekamba Nsukara, Uyo, Nigeria</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-3 text-blue-400" />
                  <span>+234 (0)913-117-0904</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-blue-400" />
                  <span>info@gracefamilyoutreach.com</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center text-gray-500">
            <p>
              Copyright ©{year} All rights reserved 
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;