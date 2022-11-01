import React from "react";
import styles, { layout } from "../styles";
import { card } from "../assets/assets";
import { success } from "../assets/assets";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find out about our successes <br className="sm:block hidden" /> it's
        only a click away.
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Here you will be able to find out about our successes and how we have
        been able to help our customers. We have a number of case studies that
        we can share with you.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={success} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
