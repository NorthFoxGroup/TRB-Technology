import React from "react";

const ExcellentSolution = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:p-20 p-5 py-10">
        <p className="lg:text-4xl text-2xl font-medium">
          Excellent Solutions, Exceptional Performance
        </p>
        <p className="text font-medium mt-3 mb-5">
          We deliver clone applications built with cutting-edge technologies to
          help businesses
        </p>
        <p className="text-2xl text-cyan-400">Run, Grow & Scale.</p>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-5 my-10">
          <button className="rounded-full">Rideshare/Taxi App</button>
          <button className="rounded-full">Food Delivery</button>
          <button className="rounded-full">On-demand Delivery</button>
          <button className="rounded-full">Grocery Delivery</button>
          <button className="rounded-full">Multi-Services Marketplace</button>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-5">
          <button className="rounded-full">Rental Marketplace</button>
          <button className="rounded-full">Social Media & Dating App</button>
          <button className="rounded-full">Healthcare & Pharmacy App</button>
          <button className="rounded-full">E-commerce App</button>
          <button className="rounded-full">Freelance Marketplace</button>
        </div>
      </div>
    </>
  );
};

export default ExcellentSolution;
