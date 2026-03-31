"use client";
import Image from "next/image";

const Images = [
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.15 PM (1).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.15 PM (2).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.15 PM.jpeg", colSpan: 4, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.16 PM (1).jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.16 PM (2).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.16 PM (3).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.16 PM.jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.17 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.17 PM (2).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.17 PM.jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.18 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.18 PM (2).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.18 PM (3).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.18 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.19 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.19 PM (2).jpeg", colSpan: 4, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.19 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.20 PM (1).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.20 PM.jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.21 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.21 PM (2).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.21 PM.jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.22 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.22 PM (2).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.22 PM.jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.23 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.23 PM (2).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.23 PM.jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.24 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.24 PM (2).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.24 PM.jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.25 PM (1).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.25 PM.jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.26 PM (1).jpeg", colSpan: 4, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.26 PM (2).jpeg", colSpan: 3, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.26 PM.jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.27 PM (1).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.27 PM (2).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.27 PM.jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.28 PM (1).jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.28 PM (2).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.28 PM.jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.29 PM (1).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.29 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.30 PM (1).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.30 PM (2).jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.30 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.31 PM (1).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.31 PM (2).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.31 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.32 PM (1).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.32 PM.jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.33 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.33 PM (2).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.33 PM.jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.34 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.34 PM (2).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.34 PM.jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.35 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.35 PM.jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.36 PM (1).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.36 PM (2).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.36 PM.jpeg", colSpan: 2, rowSpan: 6, fit: "cover", position: "top" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.37 PM (1).jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.37 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.38 PM (1).jpeg", colSpan: 3, rowSpan: 5, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.38 PM (2).jpeg", colSpan: 2, rowSpan: 6, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.38 PM.jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.39 PM (1).jpeg", colSpan: 3, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.39 PM (2).jpeg", colSpan: 4, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.39 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.40 PM (1).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.40 PM.jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.41 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.41 PM.jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.42 PM (1).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "top" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.42 PM (2).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "top" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.42 PM (3).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.42 PM.jpeg", colSpan: 3, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.43 PM (1).jpeg", colSpan: 2, rowSpan: 5, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.43 PM (2).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.43 PM.jpeg", colSpan: 3, rowSpan: 6, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.44 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.44 PM.jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.45 PM (1).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.45 PM (2).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.45 PM.jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.46 PM (1).jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.46 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.47 PM (1).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.47 PM.jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.48 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.48 PM (2).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.48 PM.jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.49 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.49 PM (2).jpeg", colSpan: 2, rowSpan: 5, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.49 PM.jpeg", colSpan: 3, rowSpan: 6, fit: "cover", position: "top" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.50 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.50 PM.jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.51 PM (1).jpeg", colSpan: 4, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.51 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.52 PM (1).jpeg", colSpan: 5, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.52 PM (2).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.52 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.53 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.53 PM.jpeg", colSpan: 4, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.54 PM (1).jpeg", colSpan: 3, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.54 PM (2).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.54 PM.jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.55 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.55 PM.jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.56 PM (1).jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.56 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.57 PM (1).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.57 PM.jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.58 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.58 PM (2).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.58 PM (3).jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.58 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.59 PM (1).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.59 PM (2).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.00.59 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.00 PM (1).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.00 PM (2).jpeg", colSpan: 3, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.00 PM (3).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.01 PM (1).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.00 PM.jpeg", colSpan: 3, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.01 PM (2).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "top" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.01 PM (3).jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.02 PM.jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "top" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.02 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.01 PM.jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.03 PM (1).jpeg", colSpan: 3, rowSpan: 5, fit: "cover", position: "top" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.03 PM (2).jpeg", colSpan: 2, rowSpan: 5, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.03 PM.jpeg", colSpan: 2, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.04 PM (1).jpeg", colSpan: 3, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.04 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.05 PM (1).jpeg", colSpan: 2, rowSpan: 4, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.05 PM (2).jpeg", colSpan: 3, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.05 PM.jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.06 PM (1).jpeg", colSpan: 2, rowSpan: 2, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.06 PM.jpeg", colSpan: 4, rowSpan: 3, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.07 PM (1).jpeg", colSpan: 3, rowSpan: 5, fit: "cover", position: "center" },
  { src: "/gallery/WhatsApp Image 2026-03-31 at 1.01.07 PM.jpeg", colSpan: 4, rowSpan: 4, fit: "cover", position: "center" },
];

export default function ZigZagGallery() {
  return (
    <div className="p-4 md:p-15  min-h-screen">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold">
            Our <span className="text-[var(--primary)]">Gallery</span>
          </h2>
        </div>
      <div
        className="grid gap-2 md:gap-4"
        style={{
          // Mobile: 1 col, Tablet: 4 cols, Desktop: 7 cols
          display: "grid",
          gridAutoFlow: "dense",
          gridAutoRows: "100px",
        }}
      >
        {Images.map((img, i) => (
          <div
            key={i}
            className={`
              relative overflow-hidden rounded-lg md:rounded-xl group
              col-span-full 
              md:col-[span_var(--col-tablet)] 
              lg:col-[span_var(--col-desktop)]
            `}
            style={{
              // Use CSS variables to control spans per device
              "--col-tablet": Math.min(img.colSpan, 4), 
              "--col-desktop": img.colSpan,
              gridRow: `span ${img.rowSpan}`,
            }}
          >
            <Image
              src={img.src}
              alt={`gallery-${i}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`
                object-${img.fit} 
                object-${img.position} 
                w-full h-full
                transition-transform duration-500 group-hover:scale-110
              `}
            />
            {/* Subtle Overlay for better look */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Tailwind Responsive Grid Logic for Columns */}
      <style jsx>{`
        .grid {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(7, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
}