import React from "react";
import { apple, bill, google, workshop } from "../assets/assets";
import styles, { layout } from "../styles";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={workshop}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[2] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      <div className="absolute z-[1] -left-1/2 bottom-0 w-[100%] h-[80%] rounded-full white__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Fast & efficient <br className="sm:block hidden" />
        solution workshops.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The milkFloat initiative is intended to give our customers the ability
        to accelerate tough challenges or problem statements through our
        innovative offerings. These offerings are all in the form of 1 week
        sprints and therefore mean the team can be readily available for all our
        SHARP customers and start to work quickly as and when an opportunity
        arises.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 ">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer sm:hidden hidden"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer sm:hidden hidden"
        />
      </div>
    </div>
  </section>
);
export default Billing;
