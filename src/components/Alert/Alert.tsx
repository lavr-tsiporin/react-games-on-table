import React, { FC } from "react";
import "./Alert.css";

interface AlertProps {
  win: boolean;
}

export const Alert: FC<AlertProps> = ({ win }) => {
  return (
    <React.Fragment>
      <div className={["overlay", win ? "visible" : ""].join(" ")}>
        <div className="alert">Winner</div>
      </div>
    </React.Fragment>
  );
};
