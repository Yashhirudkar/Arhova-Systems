import Footer from '@/components/footer/page.jsx';
import Header from '../components/header/page.jsx';

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
