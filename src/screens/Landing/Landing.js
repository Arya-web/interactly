import React, { useState } from "react";
import Firstpage from "../FirstPage/Firstpage";
import SecondPage from "../SecondPage/SecondPage";
import ReactFullpage from "@fullpage/react-fullpage";

const Landing = () => {
  const [Video, setVideo] = useState("campaign");
  const [Title, setTitle] = useState('Download "Campus Structure Guide"');

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
                <Firstpage
                  fullpageApi={fullpageApi}
                  setVideo={setVideo}
                  setTitle={setTitle}
                />
              </div>
              <div className="section">
                <SecondPage
                  fullpageApi={fullpageApi}
                  Video={Video}
                  Title={Title}
                />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Landing;
