import Head from 'next/head';
import Title from 'components/Heading/title';

export default function Layout() {
    return (
        <>
            <Head>
                <title>Loading...</title>
            </Head>

            <div className="flex flex-col justify-center items-center h-screen bg-[#262626]">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-200"></div>
            </div>
        </>
    );
}