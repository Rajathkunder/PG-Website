import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Shri Krishna Boys PG Manipal",
  description:
    "Shri Krishna Boys PG Manipal,Best PG for Students in Manipal,Located just minutes away from top educational institutions like MIT Manipal, MAHE, and other prime landmarks, Shri Krishna Boys PG is your perfect haven for academic success and personal growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
