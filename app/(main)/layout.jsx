import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 inline-padding">
        {children}
      </div>
    </div>
  );
}
