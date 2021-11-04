import clsx from "clsx";

import { TextInputProps } from "./TextInput.types";
import styles from "./TextInput.module.scss";

export const TextInput: React.FC<TextInputProps> = ({ className, id, labelProps, ...props }) => (
  <div className={clsx(styles["text-input"], className, "input-field")}>
    <input id={id} type="text" className={clsx(styles["text-input"], className, "validate")} {...props} />
    {props.label && <label htmlFor={id}>{props.label}</label>}
  </div>
);
