import clsx from 'clsx';
import { NotFoundProps } from './NotFound.types';
import styles from './NotFound.module.scss';
import { Typography } from 'ui/typography/Typography';
import { useTranslation } from 'react-i18next';

export const NotFound: React.FC<NotFoundProps> = ({ className }) => {
  const { t }= useTranslation("nf");


  return (
    <div className={clsx(styles['not-found'], className)}>    
      <img  src="/brand/404.svg" alt="Not Found" />
      <Typography.Headline1>
        {t("notfound.page.title")}
      </Typography.Headline1>
    </div>
  );
};
