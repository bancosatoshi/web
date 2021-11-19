import React from "react";
import clsx from "clsx";
import styles from "./Dropdown.module.scss";

import { Grid } from "ui/grid/Grid";
import { Container } from "react-grid-system";
import { useToggleContext } from "hooks/useToggleContext/useToggleContext";
import { ToggleContextController } from "context/toggle/ToggleContextController";
import { DropdownProps, MenuProps, ItemProps, ToggleProps } from "./Dropdown.types";

export const Dropdown: React.FC<DropdownProps> & {
  Toogle: React.FC<ToggleProps>;
  Menu: React.FC<MenuProps>;
  Item: React.FC<ItemProps>;
} = ({ children, className }) => {
  return (
    <div className={clsx(styles["dropdown"], className)}>
      <ToggleContextController>{children}</ToggleContextController>
    </div>
  );
};

const Toggle: React.FC<ToggleProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const Menu: React.FC<MenuProps> = ({ children, className, ...props }) => {
  const { display } = useToggleContext();

  return (
    <>
      {display && (
        <div className={clsx(styles["dropdown__menu"], className)}>
          <Container {...props}>{children}</Container>
        </div>
      )}
    </>
  );
};

const Item: React.FC<ItemProps> = ({ children, className, ...props }) => {
  return (
    <Grid.Row>
      <Grid.Col {...props}>{children}</Grid.Col>
    </Grid.Row>
  );
};

Dropdown.Toogle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
