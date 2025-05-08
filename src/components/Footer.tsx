import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-primary-600">blink.new</span>
            </div>
            <p className="text-gray-600 mb-4">
              Build beautiful apps with AI. The world's fastest way to go from idea to production.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Changelog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Blink.new. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;