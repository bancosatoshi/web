import clsx from "clsx";
import { Container } from "react-grid-system";

import { Grid } from "ui/grid/Grid";

import { BusinessDetailsProps } from "./BusinessDetails.types";
import styles from "./BusinessDetails.module.scss";
import { BusinessContent } from "./BusinessContent/BusinessContent";
import { BusinessHeader } from "./BusinessHeader/BusinessHeader";

export const BusinessDetails: React.FC<BusinessDetailsProps> = ({ content, media }) => (
  <div className={clsx(styles["business-details"])}>
    <Container>
      <Grid.Row>
        <Grid.Col lg={8}>
          <BusinessHeader content={content} media={media} />
          <BusinessContent content={content} />
        </Grid.Col>
      </Grid.Row>
    </Container>
  </div>
);
