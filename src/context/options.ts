import React from "react";

export interface Options {
  maxLetter: number;
}

export const options: Options = {
  maxLetter: 15
}

export const OptionsContext = React.createContext({});