import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Box, chakra } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <chakra.main>
      <Navbar />
      <HeroSection />
    </chakra.main>
  );
}
