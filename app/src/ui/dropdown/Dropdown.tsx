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
    <div className={clsx(styles["dropdown-menu"], className)}>
      <ToggleContextController>{children}</ToggleContextController>
    </div>
  );
};

const Toggle: React.FC<ToggleProps> = ({ children }) => {
  return <>{children}</>;
};

const Menu: React.FC<MenuProps> = ({ children }) => {
  const { display } = useToggleContext();

  return (
    <>
      {display && (
        <div>
          <Container>{children}</Container>
        </div>
      )}
    </>
  );
};

const Item: React.FC<ItemProps> = ({ children }) => {
  return (
    <Grid.Row>
      <Grid.Col>{children}</Grid.Col>
    </Grid.Row>
  );
};

Dropdown.Toogle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
