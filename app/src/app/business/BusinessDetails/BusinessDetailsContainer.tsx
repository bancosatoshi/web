import React from "react";
import WPAPI from "wpapi";

import { BusinessDetails } from "./BusinessDetails";

export const BusinessDetailsContainer = () => {
  const [content, setContent] = React.useState<string | undefined>();

  React.useEffect(() => {
    const wp = new WPAPI({ endpoint: "https://cms.bancosatoshi.com/wp-json" });

    const getPostByBusinessSlug = async () => {
      try {
        const post = await wp.pages().slug("el-comalote-gt");

        if (!post.length) {
          // @TODO do something with an empty page content
        }

        setContent(post[0].content.rendered);
      } catch (error) {
        console.error(error);
      }
    };

    getPostByBusinessSlug();
  }, []);

  return <BusinessDetails content={content} />;
};
