"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";

const Feedback = () => {

  const dateFormatterOptions = { year: 'numeric', month: 'short', day: 'numeric' };

  // Static data for demonstration purposes
  const staticData = [
    {
      _id: 1,
      photo: "https://i.postimg.cc/4x12v2cB/triangle-top.png",
      reviewerName: "John Doe",
      rating: 4,
      timestamp: new Date(),
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum nec justo vel vestibulum."
    },
    {
      _id: 2,
      photo: "https://i.postimg.cc/4x12v2cB/triangle-top.png",
      reviewerName: "Jane Smith",
      rating: 5,
      timestamp: new Date(),
      feedback: "Suspendisse potenti. Sed sit amet interdum nisl. Vivamus euismod erat et orci eleifend, vitae suscipit mauris aliquam."
    }
  ];

  return (
    <div className="py-10">
      <h1>Traders Testimonial</h1>
      <h3>
        Hear from traders who've found success with us. Dive into their stories and see how our platform has helped them thrive in the markets.
      </h3>
      <Swiper
        slidesPerView={20}
        spaceBetween={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {staticData.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="min-h-52 bg-gradient-to-b from-darkOne to-darkTwo  border border-b-transparent border-darkThree flex gap-3 rounded-xl shadow hover:shadow-2xl p-5 my-10 transition-all hover:-translate-y-[6px] duration-500 ease-in-out">
              <Image
                className="w-12 h-12 rounded-full"
                src={review.photo}
                alt="avatar"
                width={50}
                height={50}
              />
              <div className="w-full">
                <div className="w-full flex justify-between items-center">
                  <h3 className="font-semibold text-primary">
                    {review.reviewerName}
                  </h3>
                  {/* <Rating
                    style={{ maxWidth: 90 }}
                    value={review.rating}
                    readOnly
                  /> */}
                </div>
                <p className="text-xs">{review.timestamp ? new Date(review.timestamp).toLocaleString('en-US', dateFormatterOptions) : 'No timestamp'}</p>
                <p className="text-sm mt-3" style={{ textAlign: 'justify' }}>{review.feedback} </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;