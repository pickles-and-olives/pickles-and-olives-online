import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({ children, bgColour }) {
  return (
    <>
    <Header />
      
      <div className='w-full pb-10'
      style={{ backgroundColor: bgColour }}>
      {children}
      </div>
      <Footer />
    </>
  );
}
