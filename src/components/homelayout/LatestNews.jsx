import Marquee from "react-fast-marquee";

export default function LatestNews() {
  return (
    <div className="bg-base-200 mb-5 flex items-center gap-5">
      <p className="text-base-100 bg-secondary px-4 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, sequi!
        </p>
        <p className="font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, sequi!
        </p>
        <p className="font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, sequi!
        </p>
        <p className="font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, sequi!
        </p>
      </Marquee>
    </div>
  );
}
