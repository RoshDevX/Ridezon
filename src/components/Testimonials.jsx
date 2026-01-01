import React from "react";
import Title from "./Title";
import { assets } from "../assets/data";

const Testimonials = () => {
  return (
    <section className="max-padd-container py-16 xl:py-32">
      <Title
        title1={"What People Says"}
        title2={"Don't just take our words"}
        titleStyles={"mb-10"}
        para={
          "Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review."
        }
      />
      {/* Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm">
          <div className="flexBetween">
            <div className="flex gap-1">
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
            </div>
            <p>12 Sept 2025</p>
          </div>
          <p>“I rented a car for a 3-day trip, and everything went flawlessly — great mileage and easy return process.”</p>
          <div className="flex items-center gap-2">
            <img src={assets.user1} alt="userImg" className="h-8 w-8 rounded-full" />
            <p className="text-gray-800 font-medium">Charlotte Bennett</p>
          </div>
        </div>

         <div className="bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm">
          <div className="flexBetween">
            <div className="flex gap-1">
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
            </div>
            <p>18 Sept 2025</p>
          </div>
          <p>“The car was spotless and ready on time. Highly recommend for anyone looking for reliable rentals.”</p>
          <div className="flex items-center gap-2">
            <img src={assets.user2} alt="userImg" className="h-8 w-8 rounded-full" />
            <p className="text-gray-800 font-medium">Liam Parker</p>
          </div>
        </div>

         <div className="bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm">
          <div className="flexBetween">
            <div className="flex gap-1">
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
            </div>
            <p>25 Sept 2025</p>
          </div>
          <p>“My car broke down late at night — I rented one instantly and was back on the road in 20 minutes.”</p>
          <div className="flex items-center gap-2">
            <img src={assets.user3} alt="userImg" className="h-8 w-8 rounded-full" />
            <p className="text-gray-800 font-medium">Mason Blake</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
