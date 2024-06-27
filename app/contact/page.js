import React from "react";
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: "Contact Us | Anolipi",
  description: "Contact Us Anolipi",
};

const Contact = () => {
  return (
    <div>
      <div className="pt-16">
        <div>
          <h1 className="text-3xl md:text-4xl text-center font-semibold text-zinc-100 pb-3">
            Get in touch
          </h1>
          <p className="text-center text-[18px] text-[#d5d7dd] font-medium mb-8 lg:mx-20">
            Feel free to reach out to us with any inquiries or feedback. Our
            dedicated team is here to assist you. Use the form below or send us an
            email with short description.
          </p>

        </div>

      </div>
      <div className="mx-auto  3xl:mx-24 bg-[#1d2334] rounded my-10">
        {/* contact form */}
        <ContactForm />
      </div>

      {/* Lower part */}
      <div className="mt-5 3xl:mx-24 border-2 border-gray-500 p-6 hover:border-secondary text-darkGray rounded py-10 mb-10">
        <div className="flex flex-col md:flex-row justify-center gap-10 py-10">
          <a href='mailto:digital@anolipi.com' className="2xl:flex border p-10 items-center gap-7 shadow-md lg:p-5 rounded-lg ">
            <div className=" bg-secondary text-white rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>

            </div>
           
            <div  className=" flex-1 text-white">
              <p className="mt-2 font-semibold">Email:</p>
              <h1 className="  text-lg">digital@anolipi.com</h1>
            </div>
          </a>
          <a href='tel:+15055090709' className="2xl:flex p-10 items-center text-white gap-7 shadow-md border lg:p-5 rounded-lg">
  <div className="bg-secondary rounded-full w-16 h-16 flex justify-center items-center lg:mb-0 mb-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
    </svg>
  </div>
  <div className="flex-1 text-white">
    <p className="mt-2 font-semibold">Phone:</p>
    <h1 className="font-bold text-lg">+1 (505) 509-0709</h1>
  </div>
</a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
