import React from "react";
import clsx from "clsx";
import styles from "./Dropdown.module.scss";

import { Grid } from "ui/grid/Grid";
import { Container } from "react-grid-system";
import { DropdownProps, MenuProps, ItemProps, ToggleProps } from "./Dropdown.types";

export const Dropdown: React.FC<DropdownProps> & {
  Toggle: React.FC<ToggleProps>;
  Menu: React.FC<MenuProps>;
  Item: React.FC<ItemProps>;
} = ({ children, className, ...props }) => (
  <div className={clsx(styles["dropdown"], className)} {...props}>
    {children}
  </div>
);

const Toggle: React.FC<ToggleProps> = ({ children, ...props }) => <div {...props}>{children}</div>;

const Menu: React.FC<MenuProps> = ({ children, isVisible, onClose, className, ...props }) => {
  return (
    <>
      {isVisible && (
        <>
          <div className={styles["dropdown__menu--backdrop"]} onClick={onClose} />
          <div className={clsx(styles["dropdown__menu"], className)} {...props}>
            <Container {...props}>{children}</Container>
          </div>
        </>
      )}
    </>
  );
};

const Item: React.FC<ItemProps> = ({ children, className, ...props }) => (
  <Grid.Row>
    <Grid.Col className={clsx(styles["dropdown__item"], className)} {...props}>
      {children}
    </Grid.Col>
  </Grid.Row>
);

Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
