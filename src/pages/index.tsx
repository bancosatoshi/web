import { NextPage } from "next";
import Head from "next/head";
import { Home } from "../app/Home/Home";

const Index: NextPage = () => (
  <>
    <Head>
      <title>Aufacicenta | Líderes en Estrategia DeFi</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://use.typekit.net/wrf5blq.css" />
      <meta
        name="description"
        content="Orientación especializada en Finanzas Descentralizadas (DeFi) para negocios de todos los tamaños de todas las regiones del mundo."
      />
    </Head>
    <Home />
  </>
);

export default Index;
