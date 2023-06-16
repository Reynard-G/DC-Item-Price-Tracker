import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="A website to view the latest item prices in DemocracyCraft." />
        <meta name="application-name" content="Item Price Tracker" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Item Price Tracker" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="author" content="MilkLegend" href="https://milklegend.xyz" />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='Item Price Tracker' />
        <meta property='og:site_name' content='Item Price Tracker' />
        <meta property='og:description' content='A website to view the latest item prices in DemocracyCraft.' />
        <meta property='og:url' content='https://tracker.milklegend.xyz' />
        <meta property='og:image' content='https://imgs.milklegend.xyz/milklegend.png' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Item Price Tracker' />
        <meta name='twitter:description' content='A website to view the latest item prices in DemocracyCraft.' />
        <meta name='twitter:url' content='https://tracker.milklegend.xyz' />
        <meta name='twitter:image' content='https://imgs.milklegend.xyz/milklegend.png' />
        <meta name='twitter:creator' content='@MilkLegend' />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};