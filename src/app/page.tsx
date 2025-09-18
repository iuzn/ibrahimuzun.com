import Navigation from "@/components/layout/Navigation";
import Profile from "@/components/sections/Profile";

export default function Home() {
  return (
    <div
      className="bg-50 relative size-full min-h-screen px-[36px] py-[20px]"
      data-name="Main"
      data-node-id="278:131"
    >
      {/* Ana container */}
      <div
        className="content-stretch flex flex-col gap-[20px] items-start justify-start w-full max-w-6xl mx-auto"
        data-node-id="278:132"
      >
        {/* Navigation */}
        <Navigation />

        {/* Ana içerik bölümü */}
        <div
          className="content-stretch flex flex-col gap-[10px] items-center justify-start relative shrink-0 w-full"
          data-node-id="278:144"
        >
          <Profile />
        </div>
      </div>
    </div>
  );
}
