"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";


const ContactForm = () => {
  const [submitMessage, setSubmitMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_ynmht55",
        "template_huw5nud",
        data,
        "Xy9Ly3iMlL0H1stj8"
      );
      setSubmitMessage({ type: "success", text: "Email sent successfully" });
      reset();
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Failed to send email. Please try again later.",
      });
      console.error("Failed to send email:", error);
    }
  };

  const validationOptions = {
    name: { required: "Name is required" },
    phone: { required: "Phone number is required" },
    email: { required: "Email is required" },
    message: { required: "Message is required" },
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      className="flex p-5 md:p-10 space-y-5 flex-col w-full bg-gradient-to-br from-tertiary to-primary  border-b-primary hover:bg-gradient-to-tl"
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
              {...register("name", validationOptions.name)}
              className="bg-[#810def] rounded-lg p-2"
              type="text"
              placeholder="Name"
              id="name"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
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
              {...register("phone", validationOptions.phone)}
              className="bg-[#810def] rounded-lg p-2"
              type="text"
              placeholder="+1 xx xxxx xxx"
              id="phone"
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
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
              {...register("email", validationOptions.email)}
              className="p-2 bg-[#810def] rounded-lg"
              type="email"
              placeholder="example@gmail.com"
              id="email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
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
              className="bg-[#810def] rounded-lg p-2"
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
          {...register("message", validationOptions.message)}
          className="bg-[#810def] w-full rounded-lg p-2"
          rows="5"
          placeholder="Your Message Here"
          id="message"
        ></textarea>
        {errors.message && (
          <span className="text-red-500">{errors.message.message}</span>
        )}
      </div>

      {/* Success or error message */}
      {submitMessage && (
        <div
          className={`${
            submitMessage.type === "success" ? "text-green-500" : "text-red-500"
          } text-center font-semibold mt-4`}
        >
          {submitMessage.text}
        </div>
      )}

      <Button className="text-center flex justify-center" type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;