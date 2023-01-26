import React from "react";
import Firstpage from "../FirstPage/Firstpage";
import SecondPage from "../SecondPage/SecondPage";
import ReactFullpage from "@fullpage/react-fullpage";

const Landing = () => {
  return (
    <>
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          if (fullpageApi) {
            fullpageApi.setAllowScrolling(false);
            fullpageApi.setKeyboardScrolling(false);
          }
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Firstpage fullpageApi={fullpageApi} />
              </div>
              <div className="section">
                <SecondPage fullpageApi={fullpageApi} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Landing;
