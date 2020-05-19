import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { Fragment } from "react";

const name = "Gyungsoo";
export const SITE_TITLE = "Sample Website";

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn hot to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            SITE_TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <Fragment>
            <img src="/images/profile.jpg" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </Fragment>
        ) : (
          <Fragment>
            <Link href="/">
              <a>
                <img src="/images/profile.jpg"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </Fragment>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
