import React from "react";

import BG from "../../assets/bg.webp";
import VI from "../../assets/vi.png";
import TCS from "../../assets/tcs.png";
import BharatPay from "../../assets/bharat-pay.png";
import NFG from "../../assets/nfg.png";
const Client = [NFG, BharatPay, VI, TCS];

const HomeHead = () => {
  return (
    <div className="h-screen grid grid-cols-2 items-center px-20">
      <div>
        <p className="font-bold text-6xl leading-tight">
          Experience <br /> Digital{" "}
          <span className="text-cyan-400">Transformation</span> <br /> To Drive
          Success
        </p>
        <p className="font-medium w-3/5 mt-5">
          Accelerating growth for brands like you with technology, experience &
          innovation for a decade.
        </p>
        <button className="my-10 py-2">Let's Build Together</button>
        <div>
          <p className="uppercase font-bold text-slate-500">Clients</p>
        </div>
        <div className="flex items-center">
          <p className="font-bold text-4xl mr-3">100+</p>
          {Client.map((item, index) => (
            <img src={item} className="h-10 mx-2" alt="" />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <img src={BG} alt="" className="w-4/5" />
      </div>
    </div>
  );
};

export default HomeHead;