import '../styles/globals.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css';

import Head from 'next/head';
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react';
import useSWR from 'swr';

import Title from 'components/Heading/title';
import DataTable from 'components/DataTable/table';
import SearchBar from 'components/DataTable/searchbar';
import Loading from 'components/Loading/loading';

const fetcher = (url) => fetch(url).then((res) => res.json());

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // Background
      background: "#262626",
      backgroundAlpha: "rgba(25, 25, 25, 0.6)",
      foreground: "#d9d9d9",
      backgroundContrast: "#262626",

      // Brand Colors
      primaryLight: "$gray300",
      primaryLightHover: "$gray500",
      primaryLightActive: "$gray600",
      primaryLightContrast: "$gray900",
      primary: "linear-gradient(to right, rgb(33, 150, 243), rgb(156, 39, 176), rgb(233, 30, 99))",
      primaryShadow: "rgba(156, 39, 176, 0.5)",
    }
  },
});

export default function Main({ pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Home {...pageProps} />
    </NextUIProvider>
  );
}

const Home = () => {
  const { data: items, error } = useSWR('/api/latestItems', fetcher);
  const [searchTerm, setSearchTerm] = useState('');

  if (error) return <div className='flex flex-col justify-center items-center min-h-screen dark:bg-[#1e1e1e]'>Failed to load in items</div>;
  if (!items) return <Loading />;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Item Price Tracker</title>
      </Head>

      <div className="flex flex-col items-center min-h-screen dark:bg-[#1e1e1e]">
        <Title />
        <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <DataTable items={items} searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      </div>

      <Analytics />
    </>
  );
};
