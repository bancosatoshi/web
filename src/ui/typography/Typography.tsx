import clsx from "clsx";
import styles from "./Typography.module.scss";
import { TypographyProps } from "./Typography.types";

export const Typography: React.FC<TypographyProps> = ({ children, className }) => {
  return <div className={clsx(styles["typography"], className)}>{children}</div>;
};

const Headline1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={clsx(styles["typography__headline1"], className)}>{children}</h1>
);

const Headline2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={clsx(styles["typography__headline2"], className)}>{children}</h2>
);

const Headline3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={clsx(styles["typography__headline3"], className)}>{children}</h3>
);

const Headline4: React.FC<TypographyProps> = ({ children, className }) => (
  <h4 className={clsx(styles["typography__headline4"], className)}>{children}</h4>
);

const Headline5: React.FC<TypographyProps> = ({ children, className }) => (
  <h5 className={clsx(styles["typography__headline5"], className)}>{children}</h5>
);

const Headline6: React.FC<TypographyProps> = ({ children, className }) => (
  <h6 className={clsx(styles["typography__headline6"], className)}>{children}</h6>
);

const Text: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={clsx(styles["typography__text"], className)}>{children}</p>
);

const TextBold: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={clsx(styles["typography__text-bold"], className)}>{children}</p>
);

const Subtitle: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={clsx(styles["typography__subtitle"], className)}>{children}</p>
);

const ButtonLabel: React.FC<TypographyProps> = ({ children, className }) => (
  <span className={clsx(styles["typography__button-label"], className)}>{children}</span>
);

const MiniButtonLabel: React.FC<TypographyProps> = ({ children, className }) => (
  <span className={clsx(styles["typography__mini-button-label"], className)}>{children}</span>
);

const Description: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={clsx(styles["typography__description"], className)}>{children}</p>
);

const MiniDescription: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={clsx(styles["typography__mini-description"], className)}>{children}</p>
);

Typography.Headline1 = Headline1;
Typography.Headline2 = Headline2;
Typography.Headline3 = Headline3;
Typography.Headline4 = Headline4;
Typography.Headline5 = Headline5;
Typography.Headline6 = Headline6;
Typography.Text = Text;
Typography.TextBold = TextBold;
Typography.Subtitle = Subtitle;
Typography.ButtonLabel = ButtonLabel;
Typography.MiniButtonLabel = MiniButtonLabel;
Typography.Description = Description;
Typography.MiniDescription = MiniDescription;
