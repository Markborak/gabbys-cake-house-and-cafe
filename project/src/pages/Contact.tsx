import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Instagram,
  ExternalLink,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/xqaqavew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      if (response.ok) {
        alert("Thank you for your message! We will get back to you soon.");
        reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  /*const onSubmit = (data: ContactFormData) => {
    // In a real implementation, this would send the form data to a server
    console.log(data);
    
    // Show success message and reset form
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };*/

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Contact Us"
          subtitle="We'd love to hear from you! Reach out for questions, orders, or just to say hello"
          centered
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-brown-700 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`input ${errors.name ? "border-red-500" : ""}`}
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-brown-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`input ${errors.email ? "border-red-500" : ""}`}
                    placeholder="john@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-brown-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={`input ${errors.phone ? "border-red-500" : ""}`}
                    placeholder="+254 7XX XXX XXX"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-brown-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`textarea ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="How can we help you?"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Our Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-pink-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Location</h4>
                    <p className="text-brown-700">
                      Moi Avenue, Naivasha, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-pink-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-brown-700">+254 719 346351</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-pink-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-brown-700">
                      hello@gabbyscakehouse.co.ke
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-pink-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Opening Hours</h4>
                    <div className="grid grid-cols-2 gap-2 text-brown-700">
                      <span>Monday - Friday:</span>
                      <span>8:30 AM - 7:00 PM</span>
                      <span>Saturday:</span>
                      <span>8:30 AM - 6:00 PM</span>
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.instagram.com/gabbyscakehouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-600 hover:text-pink-700"
                  >
                    <Instagram className="h-6 w-6 mr-2" />
                    <span>@gabbyscakehouse</span>
                  </a>
                </div>
                <div className="mt-4">
                  <a
                    href="https://wanderlog.com/profile/share/gabbyscakehouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-600 hover:text-pink-700"
                  >
                    <ExternalLink className="h-6 w-6 mr-2" />
                    <span>View on Wanderlog</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-4 rounded-lg shadow-md h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6735897184406!2d36.4315!3d-0.7177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182918439defac27%3A0x40b65b6ad0e18e95!2sMoi%20Ave%2C%20Naivasha!5e0!3m2!1sen!2sus!4v1632914426404!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Gabby's Cake House & Café Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
