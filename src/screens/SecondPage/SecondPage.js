import React from 'react'

const SecondPage = ({fullpageApi}) => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-red-200 secondPage">
        <button
          className="text-3xl font-bold underline"
          onClick={() => fullpageApi.moveSectionUp()}
        >
          Second Page!
        </button>
      </div>
    </>
  );
}

export default SecondPage