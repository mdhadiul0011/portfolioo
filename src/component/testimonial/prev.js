import React from 'react'

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "inline-block",  position: "absolute", left: '49%', transform: 'translateX(-49%)', top: '370px', }}
        onClick={onClick}
      />
    );
  }

  export default SamplePrevArrow