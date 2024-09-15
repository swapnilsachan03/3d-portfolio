import React from "react";
import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <section className="c-space py-20">
      <h3 className="head-text">Hear from my clients</h3>

      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => {
          return (
            <article key={id} className="client-review">
              <div>
                <p className="text-white font-light"> {review} </p>
                <div className="client-content">
                  <div className="flex gap-3">
                    <img
                      src={img}
                      alt={name}
                      className="w-12 h-12 rounded-full"
                    />

                    <div className="flex flex-col">
                      <h4 className="font-semibold text-white-800">{name}</h4>
                      <p className="font-light text-white-600 md:text-base text-xs">
                        {position}
                      </p>
                    </div>
                  </div>

                  <div className="flex self-end items-center gap-2">
                    {Array.from({ length: 5 }, (_, index) => {
                      return (
                        <img
                          key={index}
                          src="assets/star.png"
                          className="w-5 h-5"
                        ></img>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
