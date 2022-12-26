import { Fira_Code, Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const inter = Inter({
  display: 'block',
  subsets: ['latin'],
  variable: '--font-inter',
});
const firaCode = Fira_Code({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}
      </style>
      <main className={`${inter.variable} ${firaCode.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}