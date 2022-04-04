import styled from "styled-components";
import "./Demo.css";

const Demo = () => {
  //   let currentActive = 1;

  //   const update = () => {
  //     circles.forEach((circle, indx) => {
  //       if (indx < currentActive) {
  //         circle.classList.add("active");
  //       } else {
  //         circle.classList.remove("active");
  //       }
  //     });

  //     const actives = document.querySelectorAll(".active");
  //     progress.style.width =
  //       ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //     if (currentActive === 1) {
  //       prev.disabled = true;
  //     } else if (currentActive === circles.length) {
  //       next.disabled = true;
  //     } else {
  //       prev.disabled = false;
  //       next.disabled = false;
  //     }
  //   };

  //   const onNextClickHandler = () => {
  //     currentActive++;

  //     if (currentActive > circles.length) {
  //       currentActive = circles.length;
  //     }
  //     update();
  //   };

  //   next.addEventListener("click", onNextClickHandler);

  //   const onBackClickHandler = () => {
  //     if (currentActive < 1) {
  //       currentActive = 1;
  //     }
  //     update();
  //   };

  //   prev.addEventListener("click", onBackClickHandler);

  return (
    <Body>
      <div className="container">
        <div className="progress-container">
          <div className="progress" id="progress"></div>
          <div className="circle active">1</div>
          <div className="circle active">2</div>
          <div className="circle active">3</div>
        </div>
        <button className="btn" id="prev" disabled>
          Prev
        </button>
        <button className="btn" id="next">
          Next
        </button>
      </div>
    </Body>
  );
};

const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
`;

export default Demo;
