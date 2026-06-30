import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>William Aaron Tindull | Portfolio</title>
        <meta
          name="description"
          content="William Aaron Tindull is a Senior Software Engineer with 10 years of experience in AI, microservices, and cloud-native SaaS."
        />
        <meta
          name="keywords"
          content="william aaron tindull, senior software engineer, ai engineer, react, next, nextjs, python, node, microservices, cloud, aws, portfolio"
        />
        <meta name="author" content="William Aaron Tindull" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
