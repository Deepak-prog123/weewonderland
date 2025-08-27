import Content from "@/components/content";
import Features from "@/components/feature";
import NewSection from "@/components/new-section";
import Sections from "@/components/sections";

const page = () => {
  return (
    <>
      <Sections />
      <Features />
      <NewSection />
      <Content />
    </>
  );
};

export default page;
