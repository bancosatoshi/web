import { InvestmentNavItemProps } from "./InvestmentNavItem.types";
import styles from "./InvestmentNavItem.module.scss";
import { Dropdown } from "ui/dropdown/Dropdown";
import { Icon } from "ui/icon/Icon";
import { Typography } from "ui/typography/Typography";
import { useTimeout } from "hooks/useTimeout/useTimeout";
import { useToggle } from "hooks/useToggle/useToggle";
import { useRoutes } from "hooks/useRoutes/useRoutes";
import { useRouter } from "next/router";

export const InvestmentNavItem: React.FC<InvestmentNavItemProps> = ({ className }) => {
  const routes = useRoutes();
  const router = useRouter();

  const redirect = (route: string) => router.push(route);

  const { isOpen, close: closeMenu, open: openMenu } = useToggle(false);

  useTimeout(
    () => {
      closeMenu();
    },
    [isOpen],
    5000,
  );

  return (
    <Dropdown>
      <Dropdown.Toogle onMouseEnter={openMenu}>
        <Typography.Text>
          Sala de Inversión <Icon name="icon-chevron-down" />
        </Typography.Text>
      </Dropdown.Toogle>
      <Dropdown.Menu className={styles["investment-nav-item__menu"]} open={isOpen}>
        <Dropdown.Item onClick={() => redirect(routes.invest.grid)}>
          <Icon name="icon-grid" className={styles["investment-nav-item__icon"]} />
          <Typography.Text className={styles["investment-nav-item__label"]}>Galería</Typography.Text>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => redirect(routes.invest.map)}>
          <Icon name="icon-map" className={styles["investment-nav-item__icon"]} />
          <Typography.Text className={styles["investment-nav-item__label"]}>Mapa</Typography.Text>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => redirect(routes.invest.data)}>
          <Icon name="icon-database" className={styles["investment-nav-item__icon"]} />
          <Typography.Text className={styles["investment-nav-item__label"]}>Datos</Typography.Text>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
