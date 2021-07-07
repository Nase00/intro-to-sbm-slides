import React from "react";
import PropTypes from "prop-types";
import { Heading } from "spectacle";

const Comparison = ({ leftHeading, rightHeading, children }) => (
  <div
    style={{
      position: "relative",
      minHeight: "550px",
      minWidth: "1000px",
      margin: "0 0 0 -40px"
    }}
  >
    <div
      style={{
        position: "absolute",
        padding: "20px",
        top: "0",
        left: "0",
        width: "50%",
        height: "100%"
      }}
    >
      <Heading size={6} textColor="red" caps>
        {leftHeading}
      </Heading>
      {children[0]}
    </div>
    <div
      style={{
        position: "absolute",
        padding: "20px",
        top: "0",
        right: "0",
        width: "50%",
        height: "100%",
        borderLeft: "6px solid #1F2022"
      }}
    >
      <Heading size={6} textColor="tertiary" caps>
        {rightHeading}
      </Heading>
      {children[1]}
    </div>
  </div>
);

Comparison.propTypes = {
  children: PropTypes.node.isRequired,
  leftHeading: PropTypes.string.isRequired,
  rightHeading: PropTypes.string.isRequired
};

export default Comparison;
