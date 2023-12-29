// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapClient from '../components/bootstrapClient';
import '../styles/global.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from '../components/layout.module.css';

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  )
}