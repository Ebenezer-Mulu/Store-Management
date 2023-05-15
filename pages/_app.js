import "../styles/globals.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-slate-100">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
