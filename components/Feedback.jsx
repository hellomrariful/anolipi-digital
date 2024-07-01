"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
import { FaStar } from "react-icons/fa";


const Feedback = () => {

  const dateFormatterOptions = { year: 'numeric', month: 'short', day: 'numeric' };

  // Static data for demonstration purposes
  const reviews = [
    {
      _id: 1,
      photo: "https://img6.arthub.ai/657c01b7-938a.webp",
      reviewerName: "Alice Johnson",
      rating: 4,
      timestamp:  "Jun 20, 2024",
      feedback: "Anolipi Digital LLC transformed our online presence with their amazing web design and development services. Our website is now visually stunning and user-friendly."
    },
    {
      _id: 2,
      photo: "https://t4.ftcdn.net/jpg/02/69/98/97/360_F_269989795_HAzM8epvYDsKF4GZoVgB2RjFP5ilTRdb.jpg",
      reviewerName: "Michael Smith",
      rating: 4,
      timestamp:  "Jun 21, 2024",
      feedback: "Thanks to Anolipi's SEO expertise, our search rankings have significantly improved, leading to increased traffic and sales. Highly recommend their services!"
    },
    {
      _id: 3,
      photo: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
      reviewerName: "Sophia Brown",
      rating: 5,
      timestamp:  "Jun 24, 2024",
      feedback: "The team at Anolipi Digital LLC did an exceptional job with our social media advertising. Our brand engagement has soared thanks to their targeted campaigns."
    },
    {
      _id: 4,
      photo: "https://sb.kaleidousercontent.com/67418/1672x1018/6463a5af0d/screenshot-2022-05-24-at-15-22-28.png",
      reviewerName: "James Wilson",
      rating: 5,
      timestamp: "Jun 28, 2024",
      feedback: "Anolipi Digital LLC's e-commerce solutions have streamlined our operations and boosted our online store's efficiency. Their dropshipping services are top-notch."
    },
    {
      _id: 5,
      photo: "https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-600nw-1433809418.jpg",
      reviewerName: "Emma Davis",
      rating: 5,
      timestamp:  "Jun 26, 2024",
      feedback: "Building our brand online was seamless with Anolipi Digital LLC. They took our concept and turned it into a powerful digital presence that resonates with our audience."
    },
    {
      _id: 6,
      photo: "https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg",
      reviewerName: "Olivier Martinez",
      rating: 4,
      timestamp:  "Jun 27, 2024",
      feedback: "The insights and strategies provided by Anolipi Digital LLC have been invaluable. Their expertise has driven targeted traffic to our site, boosting our engagement and sales."
    },
    {
      _id: 7,
      photo: "https://www.corporatephotographerslondon.com/wp-content/uploads/2016/07/approachable-professional-headshots-London.jpg",
      reviewerName: "Liam Garcia",
      rating: 5,
      timestamp:  "Jun 22, 2024",
      feedback: "Anolipi's team is incredibly professional and knowledgeable. Their SEO strategies have improved our online visibility, making us stand out in a competitive market."
    },
    {
      _id: 8,
      photo: "https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
      reviewerName: "Anderson Smith",
      rating: 5,
      timestamp:  "Jun 21, 2024",
      feedback: "Our social media engagement has never been better, thanks to Anolipi Digital LLC. Their advertising campaigns are creative and effective, driving real results."
    },
    {
      _id: 9,
      photo: "https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg",
      reviewerName: "Ethan Thomas",
      rating: 4,
      timestamp:  "Jun 25, 2024",
      feedback: "The web development services from Anolipi Digital LLC exceeded our expectations. They delivered a website that not only looks great but also functions perfectly."
    },
    {
      _id: 10,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bZ0RMEKQwFWNcBftAWomZ3b_jqW4TjDBI9t_eMgVojqDXA8DGrFdeqYRxHey8ItOLh0&usqp=CAU",
      reviewerName: "Ava White",
      rating: 5,
      timestamp:  "Jun 20, 2024",
      feedback: "Anolipi Digital LLC has been a game-changer for our online business. Their comprehensive digital marketing services have driven growth and enhanced our brand's presence."
    }
  ];
  

  return (
    <div className="lg:mt-32 mt-20">
        <div>
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-zinc-100 pb-3">
        Client Success Stories
        </h1>
        <h3 className="text-center text-[#d5d7dd] font-medium mb-8 md:mx-20">
        Hear directly from our satisfied clients. Discover what our clients have to say.
        </h3>
      </div>
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
        modules={[Autoplay]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="min-h-52 bg-gradient-to-b  border border-b-white border-white flex gap-3 rounded-xl shadow hover:shadow-2xl p-5 my-10 transition-all hover:-translate-y-[6px] duration-500 ease-in-out">
              <Image
                className="w-12 h-12 rounded-full"
                src={review.photo}
                alt="avatar"
                width={50}
                height={50}
              />
              <div className="w-full">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-white font-medium mb-1 text-xl mt-2">
                    {review.reviewerName}
                  </h3>
                  {/* <Rating
                    style={{ maxWidth: 90 }}
                    value={review.rating}
                    readOnly
                  /> */}
                  <div className="flex gap-1 text-secondary text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  </div>
                </div>
                <p className="text-xs">{review.timestamp}</p>
                <p className="text-[#d5d7dd] font-medium mt-3" style={{ textAlign: 'justify' }}>{review.feedback} </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
