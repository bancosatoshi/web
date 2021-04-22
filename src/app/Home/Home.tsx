import clsx from "clsx";
import styles from "./Home.module.scss";
import { HomeProps } from "./Home.types";
import { Intro } from "./Intro/Intro";

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className={clsx(styles["home"])}>
      <Intro />
    </div>
  );
};
