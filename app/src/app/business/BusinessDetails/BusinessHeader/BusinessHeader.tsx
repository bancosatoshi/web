import clsx from "clsx";

import { BusinessHeaderProps } from "./BusinessHeader.types";
import styles from "./BusinessHeader.module.scss";

export const BusinessHeader: React.FC<BusinessHeaderProps> = ({ className }) => (
  <section className={clsx(styles["business-header"], className)}>
    <div className={styles["business-header__cover-image"]} style={{ backgroundImage: `url(something)` }} />
  </section>
);
