import React from "react";
import Input from "./Input";

export default {
  title: 'Input',
  component: Input
};

export const Medium = () => (
  <Input size='inputMedium' placeholder='Enter text'/>
);

export const Large = () => (
  <Input size='inputLarge' placeholder='Enter text'/>
);

export const Small = () => (
  <Input size='inputSmall' placeholder='Enter text'/>
);

