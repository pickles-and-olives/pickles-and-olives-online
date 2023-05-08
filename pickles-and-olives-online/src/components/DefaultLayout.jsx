import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({ children, colour }) {
  return (
    <>
    <Header colour={colour}/>
      
      <div className='w-full h-full min-h-screen pb-10'>
      {children}
      </div>
      <Footer colour={colour}/>
    </>
  );
}
