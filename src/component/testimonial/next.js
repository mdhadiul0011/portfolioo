import React from 'react'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "inline-block",  position: "absolute", left: '53%', transform: 'translateX(-53%)', top: '370px', }}
        onClick={onClick}
      />
    );
  }

export default SampleNextArrow
