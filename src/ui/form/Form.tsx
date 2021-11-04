import clsx from "clsx";
import "materialize-css";

import { FormProps } from "./Form.types";
import styles from "./Form.module.scss";
import { TextInput } from "./text-input/TextInput";

export const Form = ({ children, className }: FormProps) => (
  <div className={clsx(styles.form, className, "form")}>{children}</div>
);

Form.TextInput = TextInput;
