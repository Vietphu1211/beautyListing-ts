import Footer from "@/app/_components/footer/Footer";
import Meta from "./Meta";
import Alert from "./alert";
import { Button } from "@/components/ui/button";
import HeaderBlog from "./Blog/HeaderBlog";
// import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
    
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>
          {children}
          
          </main>
      </div>
    </>
  );
}
