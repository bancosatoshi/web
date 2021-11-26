import clsx from "clsx";
import { AccountWidgetProps } from "./AccountWidget.types";
import styles from "./AccountWidget.module.scss";
import { Dropdown } from "ui/dropdown/Dropdown";
import { Icon } from "ui/icon/Icon";
import { Typography } from "ui/typography/Typography";
import { useToggle } from "hooks/useToggle/useToggle";
import { useTimeout } from "hooks/useTimeout/useTimeout";
import { useAuthContext } from "hooks/useAuthContext/useAuthContext";
import { Session } from "@supabase/gotrue-js";

export const AccountWidget: React.FC<AccountWidgetProps> = ({ className }) => {
  const { isOpen, close: closeMenu, open: openMenu } = useToggle(false);
  const { session } = useAuthContext();

  const getUserNickname = (currentSession: Session | null) => {
    const userEmail = currentSession?.user?.email;
    const userNickname = userEmail?.slice(0, 2).toUpperCase();

    return userNickname;
  };

  useTimeout(
    () => {
      closeMenu();
    },
    [isOpen],
    6000,
  );

  return (
    <Dropdown>
      <Dropdown.Toogle onMouseEnter={() => openMenu()}>
        <div className={styles["account-widget__menu-toggle"]}>{getUserNickname(session)}</div>
      </Dropdown.Toogle>
      <Dropdown.Menu className={styles["account-widget__menu"]} open={isOpen}>
        <Dropdown.Item>
          <Icon name="icon-exit" className={styles["account-widget__icon"]} />
          <Typography.Text className={styles["account-widget__label"]}>Salir</Typography.Text>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
