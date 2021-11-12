import clsx from "clsx";
import { Container } from "react-grid-system";

import { Grid } from "ui/grid/Grid";

import { BusinessDetailsProps } from "./BusinessDetails.types";
import styles from "./BusinessDetails.module.scss";
import { BusinessContent } from "./BusinessContent/BusinessContent";

export const BusinessDetails: React.FC<BusinessDetailsProps> = ({ content }) => (
  <div className={clsx(styles["business-details"])}>
    <Container>
      <Grid.Row>
        <Grid.Col lg={6}>
          <BusinessContent content={content} />
        </Grid.Col>
      </Grid.Row>
    </Container>
  </div>
);
