import type { Metadata } from 'next';
import './globals.scss';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://dh-marketing-site.vercel.app/'),
  title: {
    default: 'HeroPulse | AI-Powered Workflow Automation',
    template: '%s | HeroPulse',
  },
  description: 'HeroPulse helps enterprise teams automate workflows, monitor metrics, and scale efficiently with AI.',
  openGraph: {
    title: 'HeroPulse | AI-Powered Workflow Automation',
    description: 'Automate workflows and scale faster with AI-driven operations.',
    siteName: 'HeroPulse',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}