import { motion } from 'framer-motion';
import { Code, Sparkles, Zap, Smartphone, Globe, Shield } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered Development",
    description: "Describe what you want to build, and our AI will generate the code for you in seconds."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Build and deploy production-ready apps in minutes, not days or weeks."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Full-Stack Support",
    description: "From frontend to backend, databases to APIs, we've got you covered."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile & Web",
    description: "Build for any platform - web apps, mobile apps, or both at the same time."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Instant Deployment",
    description: "One-click deployment to share your app with the world immediately."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Ready",
    description: "Secure, scalable, and compliant with enterprise requirements."
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
        {feature.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Everything you need to build amazing apps
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Blink combines the power of AI with a complete development platform to help you build faster than ever before.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;