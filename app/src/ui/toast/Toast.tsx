import clsx from "clsx";

import { Icon } from "ui/icon/Icon";
import { Typography } from "ui/typography/Typography";

import { ToastProps } from "./Toast.types";
import styles from "./Toast.module.scss";

export const Toast = ({ title, actionText, children, className, style, variant, onClose }: ToastProps) => (
  <div
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    className={clsx(
      styles.toast,
      {
        [styles["toast--error"]]: variant === "error",
        [styles["toast--confirmation"]]: variant === "confirmation",
      },
      className,
    )}
    style={style}
  >
    <div className={styles.toast__icon}>
      {variant === "info" && <Icon name="icon-notification-circle" />}
      {variant === "confirmation" && <Icon name="icon-checkmark-circle" />}
      {variant === "error" && <Icon name="icon-warning" />}
    </div>
    <div>
      <Typography.Text className={styles.toast__title}>{title}</Typography.Text>
      {children}
    </div>
    <button type="button" className={styles["toast__close-button"]} aria-label="close" onClick={onClose}>
      {/* @TODO i18n */}
      {actionText || "Entendido"}
    </button>
  </div>
);
