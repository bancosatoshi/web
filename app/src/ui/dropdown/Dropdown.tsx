import React from "react";
import clsx from "clsx";
import styles from "./Dropdown.module.scss";

import { Grid } from "ui/grid/Grid";
import { Container } from "react-grid-system";
import { DropdownProps, MenuProps, ItemProps, ToggleProps } from "./Dropdown.types";

export const Dropdown: React.FC<DropdownProps> & {
  Toogle: React.FC<ToggleProps>;
  Menu: React.FC<MenuProps>;
  Item: React.FC<ItemProps>;
} = ({ children, className }) => {
  return <div className={clsx(styles["dropdown"], className)}>{children}</div>;
};

const Toggle: React.FC<ToggleProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const Menu: React.FC<MenuProps> = ({ children, open, className, ...props }) => {
  return (
    <>
      {open && (
        <div className={clsx(styles["dropdown__menu"], className)} {...props}>
          <Container {...props}>{children}</Container>
        </div>
      )}
    </>
  );
};

const Item: React.FC<ItemProps> = ({ children, className, ...props }) => {
  return (
    <Grid.Row>
      <Grid.Col className={clsx(styles["dropdown__item"], className)} {...props}>
        {children}
      </Grid.Col>
    </Grid.Row>
  );
};

Dropdown.Toogle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
