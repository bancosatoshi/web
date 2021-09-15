import clsx from "clsx";
import { MainPanel } from "../../../../ui/mainpanel/MainPanel";
import { Typography } from "../../../../ui/typography/Typography";
import styles from "./Property.module.scss";
import { PropertyProps } from "./Property.types";

export const Property: React.FC<PropertyProps> = ({}) => {
  return (
    <main className={styles["property__main"]}>
      <MainPanel.Container className={styles["property__main-panel--container"]}>
        <Typography.Subtitle>Solana · Real Estate</Typography.Subtitle>
        <Typography.Headline1>Property Name</Typography.Headline1>
        <div className={clsx(styles["property__media"])}>
          <div className={clsx(styles["property__media--single-image"])}>
            <img src="https://i.pinimg.com/564x/fc/62/18/fc62180f74d38deb00a4f63a88eae76a.jpg" alt="property" />
          </div>
        </div>
        <div className={clsx(styles["property__details"])}>
          <section>
            <Typography.Headline3>Description</Typography.Headline3>
            <Typography.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt quasi ipsa nulla? Enim ad
              nobis officia ipsa. Exercitationem quos velit deserunt, perferendis perspiciatis doloribus quam. Repellat
              fugit dignissimos illum!
            </Typography.Text>
          </section>
          <section>
            <Typography.Headline5>Location</Typography.Headline5>
            <div
              className={styles["property__location--map"]}
              style={{
                backgroundImage: `url(https://bafybeiguy4ekrxh6aohstla5syhk557jzkvvbxib6p6ii4tllqw4llc47y.ipfs.infura-ipfs.io/Screen%20Shot%202021-09-15%20at%2014.13.35.png)`,
              }}
            />
            <Typography.Subtitle>Antigua, Guatemala</Typography.Subtitle>
            <Typography.Text>Villas de San Francisco, 33-D</Typography.Text>
          </section>
          <section>
            <Typography.Headline3>Attachments</Typography.Headline3>
          </section>
        </div>
      </MainPanel.Container>
      <div className={clsx(styles["property__sidebar"])}>
        <div>
          <Typography.Headline5>Identified by</Typography.Headline5>
          <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
        </div>
        <div>
          <Typography.Headline5>Verifiers</Typography.Headline5>
          <Typography.Description>Verifiers act as entities that back this property</Typography.Description>
        </div>
        <div>
          <Typography.Headline5>Owners</Typography.Headline5>
          <Typography.Description>Wallets (or programs) that hold a share of the property</Typography.Description>
        </div>
      </div>
    </main>
  );
};
