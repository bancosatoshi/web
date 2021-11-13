import React from "react";

import { BusinessDetails } from "./BusinessDetails";
import { BusinessDetailsProps } from "./BusinessDetails.types";

export const BusinessDetailsContainer = ({ content, media }: BusinessDetailsProps) => (
  <BusinessDetails content={content} media={media} />
);
