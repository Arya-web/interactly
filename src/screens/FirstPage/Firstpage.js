import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./FirstPage.css";
import PlayLogo from "../../images/play-button-svg.svg";
import PauseLogo from "../../images/pause-svg.svg";
import FullScreen from "../../images/full-screen-svg.svg";
import screenfull from "screenfull";

const Firstpage = ({ fullpageApi }) => {
  const [Playing, setPlaying] = useState(true);
  const [PlayingLogo, setPlayingLogo] = useState(true);
  const [Visible, setVisible] = useState(true);
  const [Progress, setProgress] = useState(0);
  const [Played, setPlayed] = useState(0);
  const [Total, setTotal] = useState(0);
  const [playbackRate, setplaybackRate] = useState(2);

  const handleProgress = (state) => {
    if (isNaN(state.played)) return;
    setProgress(Math.ceil(state.played * 100));
    setPlayed(Math.floor(state.playedSeconds));
    setTotal(Math.floor(state.loadedSeconds * (1 / state.loaded)));
  };

  const handlePlayBackRate = () => {
    let playback = playbackRate;
    if (playback === 2) setplaybackRate(1);
    else setplaybackRate(playback + 0.5);
  };

  const handleFullScreen = () => {
    const element = document.getElementById("player");
    if (screenfull.isEnabled) {
      screenfull.toggle(element);
    }
  };

  const handlePageNav = (video, title) => {
    console.log(video+title);
  };

  return (
    <>
      <div className="h-screen flex justify-between items-center firstPage">
        <div
          className="w-[50%] h-screen player-box cursor-pointer"
          id="player"
          onClick={() => setPlaying(!Playing)}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="seekBar bg-zinc-400 h-2 w-full">
            <div
              className={`bg-purple-600 h-full`}
              style={{ width: `${Progress}%` }}
            ></div>
          </div>
          <div className="absolute right-10 top-12 flex space-x-4 justify-center items-center">
            <div className="text-white text-lg">
              {Math.floor(Played / 60) < 10
                ? "0" + Math.floor(Played / 60)
                : Math.floor(Played / 60)}
              :{Played < 10 ? "0" + Played : Played} /{" "}
              {Math.floor(Total / 60) < 10
                ? "0" + Math.floor(Total / 60)
                : Math.floor(Total / 60)}
              :{Total < 10 ? "0" + Total : Total}
            </div>
            <div
              className="text-md z-20 cursor-pointer font-bold"
              onClick={handlePlayBackRate}
            >
              <div
                className={
                  `px-2 border-white border rounded ` +
                  `${
                    playbackRate === 1
                      ? `bg-zinc-800 text-white`
                      : `text-zinc-800 bg-white`
                  }`
                }
              >
                {playbackRate}x
              </div>
            </div>
            <div
              className="text-md z-20 cursor-pointer font-semibold"
              onClick={handleFullScreen}
            >
              <div
                className={`px-2 py-1 border-white border rounded text-zinc-800 bg-white`}
              >
                <img src={FullScreen} alt="React Logo" className="fullscreen" />
              </div>
            </div>
          </div>
          {Visible && (
            <div className="play-btn flex justify-center items-center">
              <button type="button">
                {!PlayingLogo ? (
                  <img src={PauseLogo} alt="React Logo" className="pause" />
                ) : (
                  <img src={PlayLogo} alt="React Logo" className="play" />
                )}
              </button>
            </div>
          )}
          <ReactPlayer
            url="videos/opening.mp4"
            controls={false}
            width="100%"
            height="100%"
            playing={Playing}
            progressInterval={100}
            playbackRate={playbackRate}
            onPlay={() => setPlayingLogo(false)}
            onPause={() => setPlayingLogo(true)}
            onEnded={() => setPlayingLogo(true)}
            onProgress={(state) => {
              handleProgress(state);
            }}
            className="player"
          />
        </div>

        <div className="flex justify-center items-center w-[50%] ">
          <div className="space-y-4">
            <button
              className="text-3xl font-bold underline mb-5"
              onClick={() => fullpageApi.moveSectionDown()}
            >
              {/* First Page! */}
            </button>
            <div
              className="flex justify-start items-center space-x-4 p-2 px-4 font-semibold bg-zinc-200 w-80 rounded-full border hover:border-purple-600 cursor-pointer"
              onClick={() => handlePageNav(
                "campaign",
                'Download "Campus Structure Guide"'
              )}
            >
              <div className="text-lg flex justify-center items-center px-2 bg-purple-500 text-white rounded-full mt-1">
                <span>A</span>
              </div>
              <div className="text-xl flex justify-center items-center py-1">
                <span>Lorem Ipsum</span>
              </div>
            </div>
            <div
              className="flex justify-start items-center space-x-4 p-2 px-4 font-semibold bg-zinc-200 w-80 rounded-full border hover:border-purple-600 cursor-pointer"
              onClick={() => handlePageNav("facebook", "Signup for free webinar")}
            >
              <div className="text-lg flex justify-center items-center px-2 bg-purple-500 text-white rounded-full mt-1">
                <span>B</span>
              </div>
              <div className="text-xl flex justify-center items-center py-1">
                <span>Lorem Ipsum</span>
              </div>
            </div>
            <div
              className="flex justify-start items-center space-x-4 p-2 px-4 font-semibold bg-zinc-200 w-80 rounded-full border hover:border-purple-600 cursor-pointer"
              onClick={() => handlePageNav(
                "campaign",
                'Download "Campus Structure Guide"'
              )}
            >
              <div className="text-lg flex justify-center items-center px-2 bg-purple-500 text-white rounded-full mt-1">
                <span>C</span>
              </div>
              <div className="text-xl flex justify-center items-center py-1">
                <span>Lorem Ipsum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Firstpage;
