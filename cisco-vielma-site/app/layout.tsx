import Footer from "./components/footer";
import Header from "./components/header";
import "./global.css";

export const metadata = {
  title: "Cisco Vielma",
  description: "Personal Website",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className="container">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}