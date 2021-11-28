import clsx from 'clsx';
import { SwitchProps } from './Switch.types';
import styles from './Switch.module.scss';

export const Switch: React.FC<SwitchProps> = ({ children, className }) => {
  return (
    <div className={clsx(styles['switch'], className)}>
      {children}
    </div>
  );
};
