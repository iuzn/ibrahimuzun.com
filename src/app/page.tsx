import Navigation from "@/components/layout/Navigation";
import Profile from "@/components/sections/Profile";

export default function Home() {
  return (
    <div
      className="bg-50 size-full min-h-screen px-9 py-5"
      data-name="Main"
      data-node-id="278:131"
    >
      {/* Ana container */}
      <div
        className="flex flex-col gap-5 items-start justify-start w-full max-w-6xl mx-auto"
        data-node-id="278:132"
      >
        {/* Navigation */}
        <Navigation />

        {/* Ana içerik bölümü */}
        <div
          className="flex flex-col gap-2.5 items-center justify-start w-full"
          data-node-id="278:144"
        >
          <Profile />
        </div>
      </div>
    </div>
  );
}
