import { Navbar } from "@/components/navbar/navbar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <div className="w-full z-20 flex-col fixed inset-y-0">
        <Navbar />
      </div>

      <main className="h-full pt-[50px] pl-6 pr-6 ">{children}</main>
    </div>
  );
};

export default MainLayout;
