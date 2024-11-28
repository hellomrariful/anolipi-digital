"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Prevent multiple submissions
    if (isSubmitting) return;
    setIsSubmitting(true);

    const toastId = toast.loading("Progress...", { duration: 1000 });

    try {
      // Prepare email data
      const emailData = {
        from_name: data.name || "N/A",
        from_email: data.email || "N/A",
        phone: data.phone || "N/A",
        company_name: data.company || "N/A",
        message: data.message || "",
      };

      // Send email
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        emailData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Success handling
      toast.success("Thanks for reaching out, we'll get back to you shortly.", {
        id: toastId,
        duration: 3000,
      });
      reset();
    } catch (error) {
      // Error handling
      console.error("Email send error:", error);
      toast.error(`Send failed: ${error.message || "Unknown error"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex p-5 md:p-10 space-y-5 flex-col w-full bg-gradient-to-br from-tertiary to-primary border-b-primary hover:bg-gradient-to-tl"
      >
        <div className="md:flex justify-between gap-10">
          <div className="md:w-1/2 md:space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="font-semibold text-white text-xl pb-1"
              >
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                className="bg-[#810def] rounded-lg p-2 text-white"
                type="text"
                placeholder="Name"
                id="name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="font-semibold text-white text-xl pb-1"
              >
                Phone
              </label>
              <input
                {...register("phone")}
                className="bg-[#810def] rounded-lg p-2 text-white"
                type="text"
                placeholder="+1 xx xxxx xxx"
                id="phone"
              />
            </div>
          </div>

          <div className="md:w-1/2 md:space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-semibold text-white text-xl pb-1"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Invalid email format",
                  },
                })}
                className="p-2 bg-[#810def] rounded-lg text-white"
                type="email"
                placeholder="example@gmail.com"
                id="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="company"
                className="font-semibold text-white text-xl pb-1"
              >
                Company
              </label>
              <input
                {...register("company")}
                className="bg-[#810def] rounded-lg p-2 text-white"
                type="text"
                placeholder="Anolipi Digital LLC"
                id="company"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="font-semibold text-white text-xl pb-1"
          >
            Leave us a message:
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="bg-[#810def] w-full rounded-lg p-2 text-white"
            rows="5"
            placeholder="Your Message Here"
            id="message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-center rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background h-[50px] px-6 py-4 items-center gap-2 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 flex justify-center"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      <Toaster position="top-center"></Toaster>
    </>
  );
};

export default ContactForm;
