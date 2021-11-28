import { InvestmentNavItemProps } from "./InvestmentNavItem.types";
import styles from "./InvestmentNavItem.module.scss";
import { Dropdown } from "ui/dropdown/Dropdown";
import { Icon } from "ui/icon/Icon";
import { Typography } from "ui/typography/Typography";
import { useToggle } from "hooks/useToggle/useToggle";
import { useRoutes } from "hooks/useRoutes/useRoutes";
import { useRouter } from "next/router";

export const InvestmentNavItem: React.FC<InvestmentNavItemProps> = ({ ...props }) => {
  const routes = useRoutes();
  const router = useRouter();
  const { isVisible, toggle } = useToggle();

  return (
    <Dropdown {...props}>
      <Dropdown.Toggle onMouseEnter={toggle}>
        <Typography.Text>
          Sala de Inversión {"  "}
          {isVisible ? <Icon name="icon-chevron-up" /> : <Icon name="icon-chevron-down" />}
        </Typography.Text>
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles["investment-nav-item__menu"]} onClose={toggle} isVisible={isVisible}>
        <Dropdown.Item onClick={() => router.push(routes.invest.grid)}>
          <Icon name="icon-grid" className={styles["investment-nav-item__icon"]} />
          <div className={styles["investment-nav-item__info"]}>
            <Typography.TextBold>Galería </Typography.TextBold>
            <Typography.MiniDescription>Navega por las campañas de inversión activas</Typography.MiniDescription>
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => router.push(routes.invest.map)}>
          <Icon name="icon-map2" className={styles["investment-nav-item__icon"]} />
          <div className={styles["investment-nav-item__info"]}>
            <Typography.TextBold>Mapa</Typography.TextBold>
            <Typography.MiniDescription>Descubre negocios cerca de ti</Typography.MiniDescription>
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => router.push(routes.invest.data)}>
          <Icon name="icon-file-stats" className={styles["investment-nav-item__icon"]} />
          <div className={styles["investment-nav-item__info"]}>
            <Typography.TextBold>Datos</Typography.TextBold>
            <Typography.MiniDescription>
              Analiza y compara todas las oportunidades de inversión disponibles
            </Typography.MiniDescription>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
