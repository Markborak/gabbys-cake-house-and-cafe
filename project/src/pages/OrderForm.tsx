import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  cakeType: string;
  cakeSize: string;
  occasion: string;
  date: string;
  deliveryOption: string;
  deliveryAddress: string;
  specialInstructions: string;
}

const OrderForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderFormData>();

  const deliveryOption = watch("deliveryOption", "pickup");

  const onSubmit = async (data: OrderFormData) => {
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
          cakeType: data.cakeType,
          cakeSize: data.cakeSize,
          occasion: data.occasion,
          date: data.date,
          deliveryOption: data.deliveryOption,
          deliveryAddress: data.deliveryAddress,
          specialInstructions: data.specialInstructions,
        }),
      });

      if (response.ok) {
        alert("Thank you for your order! We will get back to you soon.");
        // reset();
      } else {
        alert("Thank you for your order! We will get back to you soon.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  /*const onSubmit = (data: OrderFormData) => {
    // In a real implementation, this would send the form data to a server
    console.log(data);
    
    // Show success message
    setIsSubmitted(true);
    
    // In a real app, you might redirect or show a modal
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

  // Cake options
  const cakeTypes = [
    "Red Velvet",
    "Chocolate",
    "Vanilla",
    "Fruit Cake",
    "Coffee Cake",
    "Mocha",
    "Carrot Cake",
    "Black Forest",
    "Custom (specify in instructions)",
  ];

  const cakeSizes = [
    "6-inch (serves 8-10)",
    "8-inch (serves 12-16)",
    "10-inch (serves 20-24)",
    "12-inch (serves 30-40)",
    "Tiered (specify in instructions)",
  ];

  const occasions = [
    "Birthday",
    "Wedding",
    "Anniversary",
    "Graduation",
    "Baby Shower",
    "Corporate Event",
    "Other (specify in instructions)",
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Order Your Cake"
          subtitle="Fill out the form below to place an order for your custom cake"
          centered
        />

        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {isSubmitted ? (
            <div className="bg-green-100 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Order Submitted Successfully!
              </h3>
              <p className="text-green-700 mb-6">
                Thank you for your order! We will review your request and
                contact you within 24 hours to confirm details and provide
                pricing.
              </p>
              <p className="text-green-700 mb-6">
                If you have any questions in the meantime, please call us at
                +254 719 346351.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn btn-primary"
              >
                Place Another Order
              </button>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">
                  Personal Information
                </h3>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-brown-700 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`input ${errors.name ? "border-red-500" : ""}`}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-brown-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`input ${
                        errors.email ? "border-red-500" : ""
                      }`}
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
                    <label
                      htmlFor="phone"
                      className="block text-brown-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`input ${
                        errors.phone ? "border-red-500" : ""
                      }`}
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
                </div>

                <hr className="my-8" />

                <h3 className="text-2xl font-bold mb-6">Cake Details</h3>

                {/* Cake Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="cakeType"
                      className="block text-brown-700 mb-2"
                    >
                      Cake Type
                    </label>
                    <select
                      id="cakeType"
                      className={`input ${
                        errors.cakeType ? "border-red-500" : ""
                      }`}
                      {...register("cakeType", {
                        required: "Please select a cake type",
                      })}
                    >
                      <option value="">Select a cake type</option>
                      {cakeTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.cakeType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.cakeType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="cakeSize"
                      className="block text-brown-700 mb-2"
                    >
                      Cake Size
                    </label>
                    <select
                      id="cakeSize"
                      className={`input ${
                        errors.cakeSize ? "border-red-500" : ""
                      }`}
                      {...register("cakeSize", {
                        required: "Please select a cake size",
                      })}
                    >
                      <option value="">Select a cake size</option>
                      {cakeSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                    {errors.cakeSize && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.cakeSize.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="occasion"
                      className="block text-brown-700 mb-2"
                    >
                      Occasion
                    </label>
                    <select
                      id="occasion"
                      className={`input ${
                        errors.occasion ? "border-red-500" : ""
                      }`}
                      {...register("occasion", {
                        required: "Please select an occasion",
                      })}
                    >
                      <option value="">Select an occasion</option>
                      {occasions.map((occasion) => (
                        <option key={occasion} value={occasion}>
                          {occasion}
                        </option>
                      ))}
                    </select>
                    {errors.occasion && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.occasion.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-brown-700 mb-2">
                      Pickup/Delivery Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className={`input ${errors.date ? "border-red-500" : ""}`}
                      {...register("date", { required: "Date is required" })}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.date.message}
                      </p>
                    )}
                  </div>
                </div>

                <hr className="my-8" />

                <h3 className="text-2xl font-bold mb-6">Delivery Options</h3>

                {/* Delivery Options */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-brown-700 mb-4">
                      Preferred Option
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          value="pickup"
                          className="text-pink-600 focus:ring-pink-500"
                          {...register("deliveryOption", { required: true })}
                        />
                        <span className="ml-2">Pickup from Store</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          value="delivery"
                          className="text-pink-600 focus:ring-pink-500"
                          {...register("deliveryOption", { required: true })}
                        />
                        <span className="ml-2">Delivery (additional fee)</span>
                      </label>
                    </div>
                  </div>

                  {deliveryOption === "delivery" && (
                    <div>
                      <label
                        htmlFor="deliveryAddress"
                        className="block text-brown-700 mb-2"
                      >
                        Delivery Address
                      </label>
                      <textarea
                        id="deliveryAddress"
                        rows={3}
                        className={`textarea ${
                          errors.deliveryAddress ? "border-red-500" : ""
                        }`}
                        placeholder="Please provide full address with landmarks"
                        {...register("deliveryAddress", {
                          required:
                            deliveryOption === "delivery"
                              ? "Delivery address is required"
                              : false,
                        })}
                      ></textarea>
                      {errors.deliveryAddress && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.deliveryAddress.message}
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="specialInstructions"
                      className="block text-brown-700 mb-2"
                    >
                      Special Instructions
                    </label>
                    <textarea
                      id="specialInstructions"
                      rows={5}
                      className="textarea"
                      placeholder="Any special requirements or decorations? Message for cake? Allergies or dietary concerns?"
                      {...register("specialInstructions")}
                    ></textarea>
                  </div>
                </div>

                <div className="pt-6">
                  <button type="submit" className="btn btn-primary w-full">
                    Submit Order
                  </button>
                  <p className="text-sm text-brown-600 mt-4 text-center">
                    We'll contact you within 24 hours to confirm details and
                    provide pricing.
                  </p>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default OrderForm;
