import DefaultLayout from "../components/DefaultLayout";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
    <DefaultLayout>
        <div className="flex flex-col w-3/4 mx-auto my-4 text-center">
    <Link to='/memes' className="text-5xl hover:underline hover:text-themePink p-6">
        make a meme
    </Link>
  
    <Link to='/caesar-cipher' className="text-5xl hover:underline hover:text-themeBlue p-6">
        crack a code
    </Link>
    </div>
      </DefaultLayout>
    </>
  );
}
