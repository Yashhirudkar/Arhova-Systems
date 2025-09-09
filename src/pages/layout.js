import Footer from '@/components/footer/page.jsx';
import Header from '../components/header/page.js';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
