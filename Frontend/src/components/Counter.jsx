import React, { useEffect, useRef } from "react";

const Counter = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const animateCounter = (counter) => {
      const updateCount = () => {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });
  }, []);

  return (
    <div
      className="counter-section d-flex text-center justify-content-center align-item-center"
      style={{
        color: "white",
        background: "#245FAB",
        // padding: "40px",
        textAlign: "center",
      }}
    >
      <div className="row">
        <h1 className="align-self-center">Customers We Have Served - And Counting...</h1>
        <div className="col">
          <div>
            <h1
              className="counter"
              data-target="113"
              ref={(el) => (countersRef.current[0] = el)}
            >
              0
            </h1>
            <p className="fs-3 fw-bold">Schools</p>
          </div>
        </div>
        <div className="col">
          <div>
            <h1
              className="counter"
              data-target="89"
              ref={(el) => (countersRef.current[1] = el)}
            >
              0
            </h1>
            <p className="fs-3 fw-bold">Hospitals</p>
          </div>
        </div>
        <div className="col">
          <div>
            <h1
              className="counter"
              data-target="150"
              ref={(el) => (countersRef.current[2] = el)}
            >
              0
            </h1>
            <p className="fs-3 fw-bold">Businesses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
