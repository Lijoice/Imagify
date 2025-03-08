import React from 'react';
import { testimonialsData } from '../assets/assets';
import rating_star from '../assets/rating_star.svg'; // Ensure this path is correct
import {motion} from 'framer-motion'
const Testimonials = () => {
  console.log('Testimonials Data:', testimonialsData);

  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className="flex flex-col items-center justify-center my-20 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer Testimonials</h1>
      <p className="text-gray-500 mb-12">What Our Users Are Saying</p>

      {/* Grid container for testimonials */}
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        }}
      >
        {testimonialsData?.length ? (
          testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}`}
                className="rounded-full w-16 h-16 mb-4"
              />
              <h2 className="text-lg font-semibold mt-2">{testimonial.name}</h2>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
              <div className="flex my-3">
                {Array(testimonial.stars)
                  .fill(0)
                  .map((_, idx) => (
                    <img
                      key={idx}
                      src={rating_star}
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
              </div>
              <p className="text-center text-sm text-gray-600 p-5">{testimonial.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No testimonials available at the moment.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Testimonials;
