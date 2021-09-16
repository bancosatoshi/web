import clsx from "clsx";
import Prism from "prismjs";
import { useState } from "react";
import Editor from "react-simple-code-editor";
import { Button } from "../../../../ui/button/Button";
import { Grid } from "../../../../ui/grid/Grid";
import { MainPanel } from "../../../../ui/mainpanel/MainPanel";
import { ModalNavbar } from "../../../../ui/navbar/modal-navbar/ModalNavbar";
import { Typography } from "../../../../ui/typography/Typography";
import styles from "./ListProperty.module.scss";
import { ListPropertyProps } from "./ListProperty.types";
import TokenMetadataTemplate from "./token-metadata-template.json";

const loadLanguages = require("prismjs/components/index");
loadLanguages(["JSON"]);

export const ListProperty: React.FC<ListPropertyProps> = ({}) => {
  const [value, setValue] = useState(JSON.stringify(TokenMetadataTemplate, null, 2));

  return (
    <main className={clsx(styles["list-property"])}>
      <ModalNavbar title="Solana Real Estate: List a property" />
      <MainPanel>
        <MainPanel.Container className={styles["list-property__main-panel--container"]}>
          <Grid.Container>
            <Grid.Row>
              <Grid.Col lg={8}>
                <Typography.Headline1>List A Property</Typography.Headline1>
                <Typography.Text>
                  Edit this file with the property details.{" "}
                  <Typography.Anchor href="https://docs.metaplex.com/nft-standard#json-structure" target="_blank">
                    See the spec.
                  </Typography.Anchor>
                </Typography.Text>
                <section className={styles["list-property__editor"]}>
                  <pre>
                    <code className="language-json">
                      <Editor
                        value={value}
                        onValueChange={(code) => setValue(code)}
                        highlight={(code) => Prism.highlight(code, Prism.languages.js, "javascript")}
                        padding={10}
                      />
                    </code>
                  </pre>
                </section>
              </Grid.Col>
              <Grid.Col lg={4}>
                <Button fullWidth>List Property</Button>
                <section className={styles["list-property__attachments"]}>
                  <Typography.Headline5>Attachments</Typography.Headline5>
                </section>
              </Grid.Col>
            </Grid.Row>
          </Grid.Container>
        </MainPanel.Container>
      </MainPanel>
    </main>
  );
};
