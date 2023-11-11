import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { LogoImage } from "./partials/logo";

const config: DocsThemeConfig = {
  logo: <LogoImage />,
  project: {
    link: "https://github.com/dryerjs/dryerjs",
  },
  chat: {
    link: "https://discord.gg/dcRkQ4e9",
  },
  docsRepositoryBase: "https://github.com/dryerjs/docs",
  footer: {
    text: "DryerJS © 2023 - All rights reserved.",
  },
  primaryHue: 161,
  primarySaturation: 100,
};

export default config;
