import Card from "./Card";

export default function Project() {
  return (
    <div id="project">
      <div className="relative container mx-auto p-4 text-slate-800 pt-20">
        <h1
          data-aos="fade-zoom-in"
          data-aos-duration="1300"
          className="font-bold text-2xl uppercase mb-5 text-center lg:text-3xl"
        >
          Latest Project

        </h1>
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          className="space-y-6 grid md:grid-cols-2 md:space-y-0 md:gap-7 md:pt-5 lg:gap-10 lg:p-12 xl:px-[300px] 2xl:px-[400px]"
        >
          <Card title="AL-Quran Digital" href="https://al-quran-digital.vercel.app/" img="/Al-Quran Digital.png" alt="error" target="_blank"/>
          <Card title="Project 2" href="/" img="/project.jpeg" alt="error"/>
          <Card title="Project 3" href="/" img="/project.jpeg" alt="error"/>
          <Card title="Project 4" href="/" img="/project.jpeg" alt="error"/>
        </div>
      </div>
    </div>
  );
}
