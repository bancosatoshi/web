import React from "react";

export type TextInputProps = React.HTMLProps<HTMLInputElement> & {
  labelProps?: {
    text: string;
  };
};
