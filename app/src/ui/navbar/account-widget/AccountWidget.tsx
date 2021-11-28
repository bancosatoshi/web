import { AccountWidgetProps } from "./AccountWidget.types";
import styles from "./AccountWidget.module.scss";
import { Dropdown } from "ui/dropdown/Dropdown";
import { Icon } from "ui/icon/Icon";
import { Typography } from "ui/typography/Typography";
import { useToggle } from "hooks/useToggle/useToggle";
import { useAuthContext } from "hooks/useAuthContext/useAuthContext";
import { Session } from "@supabase/gotrue-js";

export const AccountWidget: React.FC<AccountWidgetProps> = ({ ...props }) => {
  const { isVisible, toggle } = useToggle();
  const { session, handleLogout } = useAuthContext();

  const getUserNickname = (currentSession: Session | null) => {
    const userEmail = currentSession?.user?.email;
    const userNickname = userEmail?.slice(0, 2).toUpperCase();

    return userNickname;
  };

  return (
    <Dropdown {...props}>
      <Dropdown.Toggle onMouseEnter={toggle}>
        <div className={styles["account-widget__menu-toggle"]}>{getUserNickname(session)}</div>
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles["account-widget__menu"]} isVisible={isVisible} onClose={toggle}>
        <Dropdown.Item onClick={handleLogout}>
          <Icon name="icon-home" className={styles["account-widget__icon"]} />
          <Typography.Subtitle className={styles["account-widget__label"]}>Panel de Control</Typography.Subtitle>
        </Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>{""}</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>
          <Icon name="icon-sun" className={styles["account-widget__icon"]} />
          <Typography.Text>{"  "}</Typography.Text>
          <Icon name="icon-moon" />
        </Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>
          <Icon name="icon-exit" className={styles["account-widget__icon"]} />
          <Typography.Subtitle className={styles["account-widget__label"]}>Cerrar Sesión</Typography.Subtitle>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
