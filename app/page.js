'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

export default function Home() {
  const imageAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 },
  };

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.5 },
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4">
      <motion.div
        initial="initial"
        animate="animate"
        transition={imageAnimation.transition}
        variants={imageAnimation}
        className="mx-auto mt-16"
      >
        <Image
          src="/dept_commerce.png"
          alt="Department of Commerce"
          width={150}
          height={150}
        />
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={textAnimation.transition}
        variants={textAnimation}
        className="mt-8 text-center max-w-prose"
      >
        <Typography variant="h4" className="mb-4">
          Thank you from MilkLegend
        </Typography>
        <Typography variant="body1" className="mb-8">
          As of August 13, 2023, Item Price Tracker will no longer be available. It has
          been a pleasure providing you with the first chestshop tracking service but
          I have decided to retire the service in favor of DemocracyTrade. DemocracyTrade
          is a new plugin that will allow you to view realtime prices of items and stock
          which is a feature that Item Price Tracker did not have data for nor the frequency
          of updates. It is my hope that my service has helped you in some way.
          <br /><br />
          Thank you for your support, MilkLegend.
        </Typography>
      </motion.div>
    </div>
  );
}
