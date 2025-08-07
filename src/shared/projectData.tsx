export type Project = {
  companyName: string;
  title: string;
  url: string;
  description: string[];
  whatIDid: string[];
  techStack: { id: number; title: string }[];
};

export const streamflow = {
  companyName: "Streamflow",
  title: "Token Management Infrastructure",
  url: "https://streamflow.finance/",
  description: [
    "Streamflow is a multichain digital asset management platform that streamlines token operations with no-code tools.",
    "It offers automated token vesting, airdrops, staking, liquidity locks, programmable payments, and token minting.",
    "Trusted by over 5,000 projects",
    "Streamflow enables seamless fund distribution, payroll automation, and ecosystem incentives across Solana, Aptos, and Sui.",
  ],
  whatIDid: [
    "·Built and maintained decentralized finance (DeFi) platform features: Airdrops, Staking, Token Locking, and Payroll.",
    "·Integrated Solana blockchain APIs and on-chain logic into the front-end.",
    "·Improved app performance and responsiveness using React, ReactQuery, TypeScript, Storybook, and Tailwind CSS.",
  ],
  techStack: [
    { id: 1, title: "React" },
    { id: 2, title: "TypeScript" },
    { id: 3, title: "Tailwind CSS" },
    { id: 4, title: "Zustand" },
    { id: 5, title: "React Query" },
    { id: 6, title: "Storybook" },
    { id: 7, title: "Astro" },
  ],
};

export const softMetrix = {
  companyName: "SoftMetrix",
  title: "E-commerce Platform",
  url: "https://organogold.com/en/",
  description: [
    "Soft Metrix is a software consultancy that developed a custom e-commerce and affiliate management platform for Organo Gold",
    "A multi-level marketing (MLM) company enabling shop owners to resell products through a hierarchical earning structure.",
  ],
  whatIDid: [
    "·Built a complex international e-commerce platform with customizable storefronts and dynamic product ranking logic",
    "·Implemented a user hierarchy system to visualize and track multi-level earnings and commissions across the organization tree",
    "·Collaborated with designers and back-end teams to deliver pixel-perfect, mobile-first UI using modern front-end tools",
    "·Developed a support center dashboard for admins to manage and edit user data within the MLM structure.",
    "·Ensured scalability and performance of the front-end in a high-traffic, multi-tenant environment.",
  ],
  techStack: [
    { id: 1, title: "React" },
    { id: 2, title: "Next.js" },
    { id: 3, title: "Redux" },
    { id: 4, title: "SCSS" },
  ],
};
export const landline = {
  companyName: "Kortechs",
  title: "Landline Platform",
  url: "https://landline.com/",
  description: [
    "Kortechs developed the transportation platform Landline, which offers seamless airport transfers with real-time vehicle tracking and shift management for its fleet.",
    "The platform allows users to book rides from their homes to the airport, while operations teams manage dispatch, scheduling, and logistics.",
  ],
  whatIDid: [
    "·Built core features including the Dispatch Dashboard, Booking Service, and corporate website.",
    "·Developed dynamic, reusable UI components using React, GatsbyJS, and Redux.",
    "·Optimized site performance and user experience through code refactoring and front-end best practices.",
    "·Collaborated closely with cross-functional teams to ensure seamless integration with real-time tracking and scheduling systems.",
    "·Contributed to a scalable front-end architecture supporting both end-user and admin-facing applications.",
  ],
  techStack: [
    { id: 1, title: "React" },
    { id: 2, title: "GatsbyJS" },
    { id: 3, title: "Redux" },
  ],
};
export const projects = [streamflow, softMetrix, landline];
