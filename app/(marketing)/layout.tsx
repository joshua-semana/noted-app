import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
