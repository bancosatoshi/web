import clsx from "clsx";
import { useState } from "react";
import { Col, Row } from "react-grid-system";

import { Button } from "../../../../ui/button/Button";
import { Card } from "../../../../ui/card/Card";
import { CircularProgress } from "../../../../ui/circular-progress/CircularProgress";
import { Grid } from "../../../../ui/grid/Grid";
import { MainPanel } from "../../../../ui/mainpanel/MainPanel";
import { Modal } from "../../../../ui/modal/Modal";
import { Typography } from "../../../../ui/typography/Typography";

import styles from "./Property.module.scss";
import { PropertyProps } from "./Property.types";

export const Property: React.FC<PropertyProps> = ({}) => {
  const [isRegisterInterestModalOpen, setIsRegisterInterestModalOpen] = useState(false);
  const [isVerifyPropertyInfoModalOpen, setIsVerifyPropertyInfoModalOpen] = useState(false);
  const [isBuyOwnershipInfoModalOpen, setIsBuyOwnershipInfoModalOpen] = useState(false);

  return (
    <>
      <main className={styles.property__main}>
        <MainPanel.Container className={styles["property__main-panel--container"]}>
          <Typography.Subtitle>Solana · Real Estate</Typography.Subtitle>
          <Typography.Headline1>Property Name</Typography.Headline1>
          <div className={clsx(styles.property__media)}>
            <div className={clsx(styles["property__media--single-image"])}>
              <img src="https://i.pinimg.com/564x/fc/62/18/fc62180f74d38deb00a4f63a88eae76a.jpg" alt="property" />
            </div>
          </div>
          <div className={clsx(styles.property__details)}>
            <section>
              <Typography.Headline3>Description</Typography.Headline3>
              <Typography.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt quasi ipsa nulla? Enim ad
                nobis officia ipsa. Exercitationem quos velit deserunt, perferendis perspiciatis doloribus quam.
                Repellat fugit dignissimos illum!
              </Typography.Text>
            </section>
            <section>
              <Typography.Headline3>Location</Typography.Headline3>
              <div className={styles.property__location}>
                <div className={styles["property__attachments--overlay"]}>
                  <div>
                    <Typography.Text className={styles["property__attachments--overlay-text"]}>
                      Sensitive information is encrypted for security.
                    </Typography.Text>
                    <Button size="xs" variant="outlined" onClick={() => setIsRegisterInterestModalOpen(true)}>
                      Register Interest
                    </Button>
                  </div>
                </div>
                <div
                  className={styles["property__location--map"]}
                  style={{
                    backgroundImage: `url(https://bafybeiguy4ekrxh6aohstla5syhk557jzkvvbxib6p6ii4tllqw4llc47y.ipfs.infura-ipfs.io/Screen%20Shot%202021-09-15%20at%2014.13.35.png)`,
                  }}
                />
                <Typography.Subtitle>Antigua, Guatemala</Typography.Subtitle>
                <Typography.Text>Villas de San Francisco, 33-D</Typography.Text>
              </div>
            </section>
            <section>
              <Typography.Headline3>Attachments</Typography.Headline3>
              <div className={styles.property__attachments}>
                <div className={styles["property__attachments--overlay"]}>
                  <div>
                    <Typography.Text className={styles["property__attachments--overlay-text"]}>
                      Sensitive information is encrypted for security.
                    </Typography.Text>
                    <Button size="xs" variant="outlined" onClick={() => setIsRegisterInterestModalOpen(true)}>
                      Register Interest
                    </Button>
                  </div>
                </div>
                <Grid.Row>
                  <Grid.Col lg={6}>
                    <Card
                      className={styles["property__attachments--card"]}
                      backgroundImageUrl="https://img.flaticon.com/icons/png/512/337/337946.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                      onClick={() => null}
                    >
                      <Card.Content className={styles["property__attachments--content"]}>
                        <Typography.Text>Real Estate Contract</Typography.Text>
                      </Card.Content>
                    </Card>
                  </Grid.Col>
                  <Grid.Col lg={6}>
                    <Card
                      className={styles["property__attachments--card"]}
                      backgroundImageUrl="https://img.flaticon.com/icons/png/512/337/337946.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                      onClick={() => null}
                    >
                      <Card.Content className={styles["property__attachments--content"]}>
                        <Typography.Text>Bank Statement</Typography.Text>
                      </Card.Content>
                    </Card>
                  </Grid.Col>
                  <Grid.Col lg={6}>
                    <Card
                      className={styles["property__attachments--card"]}
                      backgroundImageUrl="https://img.flaticon.com/icons/png/512/337/337946.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                      onClick={() => null}
                    >
                      <Card.Content className={styles["property__attachments--content"]}>
                        <Typography.Text>Energy Bill</Typography.Text>
                      </Card.Content>
                    </Card>
                  </Grid.Col>
                  <Grid.Col lg={6}>
                    <Card
                      className={styles["property__attachments--card"]}
                      backgroundImageUrl="https://img.flaticon.com/icons/png/512/337/337946.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                      onClick={() => null}
                    >
                      <Card.Content className={styles["property__attachments--content"]}>
                        <Typography.Text>Rental Contract</Typography.Text>
                      </Card.Content>
                    </Card>
                  </Grid.Col>
                </Grid.Row>
              </div>
            </section>
          </div>
        </MainPanel.Container>
        <div className={clsx(styles.property__sidebar)}>
          <div>
            <Typography.Headline5 className={styles["property__sidebar--heading"]}>Identified by</Typography.Headline5>
            <div>
              <Card className={styles["property__ownership--card"]}>
                <Card.Content>
                  <Typography.Description>Token Metadata</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                </Card.Content>
              </Card>
              <Card className={styles["property__ownership--card"]}>
                <Card.Content>
                  <Typography.Description>SPL Token</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                </Card.Content>
              </Card>
              <Card className={styles["property__ownership--card"]}>
                <Card.Content>
                  <Typography.Description>Created By</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                </Card.Content>
              </Card>
            </div>
          </div>
          <div>
            <Row>
              <Col>
                <Typography.Headline5 className={styles["property__sidebar--heading"]}>Owners</Typography.Headline5>
                <Typography.Description>Wallets (or programs) that hold a share of the property</Typography.Description>
              </Col>
              <Grid.Col justifyContent="end">
                <Button
                  variant="outlined"
                  size="xs"
                  color="secondary"
                  onClick={() => setIsBuyOwnershipInfoModalOpen(true)}
                >
                  Buy Ownership
                </Button>
              </Grid.Col>
            </Row>
            <Card className={styles["property__ownership--card"]}>
              <Card.Content>
                <Grid.Row align="center">
                  <Grid.Col lg={3}>
                    <CircularProgress size={70} strokeWidth={5} percentage={80} />
                  </Grid.Col>
                  <Grid.Col>
                    <Typography.Description>Sold</Typography.Description>
                    <Typography.Text>SOL 345.02 of SOL 600.00</Typography.Text>
                    <Typography.MiniDescription>
                      USD 46,980.01 of USD 65,000.00 at{" "}
                      <Typography.Anchor href="#">1 SOL = 25.99 USD</Typography.Anchor>
                    </Typography.MiniDescription>
                  </Grid.Col>
                </Grid.Row>
              </Card.Content>
            </Card>
            <div>
              <Card className={styles["property__ownership--card"]}>
                <Card.Content>
                  <Typography.Description>23% Ownership</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                  <hr />
                  <Typography.Description>At Transaction</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                </Card.Content>
              </Card>
              <Card className={styles["property__ownership--card"]}>
                <Card.Content>
                  <Typography.Description>34% Ownership</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                  <hr />
                  <Typography.Description>At Transaction</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                </Card.Content>
              </Card>
            </div>
          </div>
          <div>
            <Row>
              <Col>
                <Typography.Headline5 className={styles["property__sidebar--heading"]}>Verifiers</Typography.Headline5>
                <Typography.Description>
                  Verifiers act as entities that back this property ownership
                </Typography.Description>
              </Col>
              <Grid.Col justifyContent="end">
                <Button
                  variant="outlined"
                  size="xs"
                  color="secondary"
                  onClick={() => setIsVerifyPropertyInfoModalOpen(true)}
                >
                  Verify Property
                </Button>
              </Grid.Col>
            </Row>
            <div>
              <Card className={styles["property__ownership--card"]}>
                <Card.Content>
                  <Typography.Description>Wallet Address</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                  <hr />
                  <Typography.Description>At Transaction</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {isBuyOwnershipInfoModalOpen && (
        <Modal isOpened onClose={() => null} aria-labelledby="Register Interest Modal Window">
          <Modal.Header>
            <Typography.Headline3 className={styles["property__register-interest-modal--header"]}>
              Buy Property Ownership
            </Typography.Headline3>
          </Modal.Header>
          <Modal.Content>
            <Typography.Text>
              Buying Solana Real Estate NFT properties' ownership is anonymous and as simple as transfering any amount
              of SOL (lower than the total, of course) to the Property Sale Program.
            </Typography.Text>
            <Typography.Headline5>Owner Entitlement Details</Typography.Headline5>
            <Typography.Description>365 days of the year = 100% of the property value</Typography.Description>
            <Typography.Text>
              As an owner of property <Typography.Anchor>metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Anchor>{" "}
              you are entitled to:
            </Typography.Text>
            <Typography.Text>
              a) Access the property by N% of days of the 365 days relative to the percentage of your ownership.
            </Typography.Text>
            <Typography.Text>b) ...</Typography.Text>
            <Typography.Headline5>Owner Obligations Details</Typography.Headline5>
          </Modal.Content>
          <Modal.Actions>
            <Grid.Row>
              <Grid.Col>
                <Button color="secondary" variant="outlined" onClick={() => setIsBuyOwnershipInfoModalOpen(false)}>
                  Nevermind
                </Button>
              </Grid.Col>
              <Grid.Col>
                <Button>Buy Ownership</Button>
              </Grid.Col>
            </Grid.Row>
          </Modal.Actions>
        </Modal>
      )}

      {isRegisterInterestModalOpen && (
        <Modal isOpened onClose={() => null} aria-labelledby="Register Interest Modal Window">
          <Modal.Header>
            <Typography.Headline3 className={styles["property__register-interest-modal--header"]}>
              Register Interest
            </Typography.Headline3>
          </Modal.Header>
          <Modal.Content>
            <Typography.Text>
              Solana Real Estate NFT properties are sold worldwide. To access senstitive information such as exact
              location &amp; attachments, THE PLATFORM requests a payment of 2 SOL valid for 1 month of access to all
              properties' information.
            </Typography.Text>
            <Typography.Headline5>OK, but how does it work?</Typography.Headline5>
            <Typography.Text>
              When a user creates an NFT through THE PLATFORM, attachment properties of the asset are encrypted in our
              servers so that the metadata is not stored in plain text. Then it is stored in the blockchain. By
              submitting your 2 SOL payment, the server whitelists your wallet public key and you'll be able to see the
              private content of any of the properties listed.
            </Typography.Text>
            <Typography.Headline5>OK, and where does the money go?</Typography.Headline5>
            <Typography.Text>
              THE PLATFORM is an open-source project, and the money is distributed across its maintainers to pay for
              hosting expenses and further development.
            </Typography.Text>
          </Modal.Content>
          <Modal.Actions>
            <Grid.Row>
              <Grid.Col>
                <Button color="secondary" variant="outlined" onClick={() => setIsRegisterInterestModalOpen(false)}>
                  Nevermind
                </Button>
              </Grid.Col>
              <Grid.Col>
                <Button>Pay 2 SOL</Button>
              </Grid.Col>
            </Grid.Row>
          </Modal.Actions>
        </Modal>
      )}

      {isVerifyPropertyInfoModalOpen && (
        <Modal isOpened onClose={() => null} aria-labelledby="Register Interest Modal Window">
          <Modal.Header>
            <Typography.Headline3 className={styles["property__register-interest-modal--header"]}>
              Become A Verifier
            </Typography.Headline3>
          </Modal.Header>
          <Modal.Content>
            <Typography.Text>
              Solana Real Estate NFT properties' verifiers are real persons (you know, everything is virtual now), that
              act as whitnesses of the asset. They'd normally live at a maximum 30mins distance of the asset and should
              be available to visit and whitness the asset within a 7 days period since the publication of the asset.
            </Typography.Text>
            <Typography.Headline5>OK, but how does I enroll as a verifier?</Typography.Headline5>
            <Typography.Text>
              To enroll as a verifier, you need to pay the enrollment fee, which is 5 SOL and input your personal
              information with a Telegram Messenger account.
            </Typography.Text>
            <Typography.Text>
              The 80% of the 5 SOL enrollment fee stays in an escrow program and will act as a stake during your
              involvement as a verifier. You can withdraw your stake at any time. If you incur in any penalties, a
              partial or a total amount of the stake may be withdrawn from the escrow by decision of the DAO.
            </Typography.Text>
            <Typography.Text>
              20% of the 5 SOL enrollment fee goes to THE PLATFORM and it is not refundable.
            </Typography.Text>
            <Typography.Text>
              Your personal information is securely encrypted within the Telegram servers, only you and the property
              owner may access this information.
            </Typography.Text>
            <Typography.Headline5>OK, but how do I get notified?</Typography.Headline5>
            <Typography.Text>
              Once you've input your personal information with the Telegram Passport interface, THE PLATFORM will
              securely store your Telegram username and @nonfungiblemebot will let you know if an asset is within your
              range to be witnessed and assessed by you.
            </Typography.Text>
            <Typography.Headline5>OK, but what do I earn as a verifier?</Typography.Headline5>
            <Typography.Text>
              For every property you witness and as long as your 5 SOL enrollment stays in escrow, you'll earn 0.5% of
              each property ownership purchase. Sounds good, no?
            </Typography.Text>
            <Typography.Headline5>Are there any penalties?</Typography.Headline5>
            <Typography.Text>
              Yes, there are. As a verifier, you'll act as a solely witness and state under oath that the asset complies
              with the information provided by the creator. You'll visit the actual real-life asset and confirm (with a
              provided form and digital statement) that the asset is real, and that it is in the state that it is
              described in the asset media, attachments &amp; location.
            </Typography.Text>
            <Typography.Text>
              Interested parties or current owners may raise a complaint about a verifier wrong-doing and the case will
              be sent to the DAO for resolution. The penalty may be the partial or total loss of your stake.
            </Typography.Text>
          </Modal.Content>
          <Modal.Actions>
            <Grid.Row>
              <Grid.Col>
                <Button color="secondary" variant="outlined" onClick={() => setIsVerifyPropertyInfoModalOpen(false)}>
                  Nevermind
                </Button>
              </Grid.Col>
              <Grid.Col>
                <Button>Enroll as verifier</Button>
              </Grid.Col>
            </Grid.Row>
          </Modal.Actions>
        </Modal>
      )}
    </>
  );
};
