import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('https://portfolio-shruti-obkv.vercel.app/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.status === 201) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      alert('Failed to send the message. Please try again.');
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      title: "Connect on LinkedIn",
      icon: <FaLinkedin className="text-4xl" />,
      url: "#",
      external: true
    },
    {
      title: "Check repos on Github",
      icon: <FaGithub className="text-4xl" />,
      url: "#",
      external: true
    },
    {
      title: "Follow on Instagram",
      icon: <FaInstagram className="text-4xl" />,
      url: "#",
      external: true
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      text: "pratikdjadhav16@gmail.com",
      copyable: true
    },
    {
      icon: <FaPhone className="text-2xl transform rotate-90" />,
      text: "+91 7620094762",
      copyable: true
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      text: "Currently in Pune, India",
      external: true
    }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          Where to find me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className="card flex items-center justify-between p-8 hover:bg-[#222] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.icon}
              <span className="text-lg">{link.title} ↗</span>
            </motion.a>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          Get in touch now
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="card flex items-center gap-4 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => info.copyable && handleCopy(info.text)}
              style={{ cursor: info.copyable ? 'pointer' : 'default' }}
            >
              <span className="flex-shrink-0">{info.icon}</span>
              <span className="text-lg">
                {info.text} {info.copyable && "📋"}
                {info.external && "↗"}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-4 bg-[#111] border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-4 bg-[#111] border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full p-4 bg-[#111] border border-gray-800 rounded-lg focus:outline-none focus:border-accent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] hover:opacity-90 text-white py-4 rounded-lg font-semibold transition-all duration-300"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
