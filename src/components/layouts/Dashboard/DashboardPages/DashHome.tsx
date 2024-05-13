import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import RadialProgress from "../../../../shared/RadialProgress/RadialProgress";

const data = [
  {
    subject: "Baby Products",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Medicle Items",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Groceries",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Fruits",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Meats",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Others",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const DashHome = () => {
  return (
    <section className="pt-10">
      <h1 className="text-orange-500 text-2xl uppercase font-medium pb-5">
        Overview
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* details */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 bg-white shadow-xl p-0 lg:p-8 col-span-12 text-black font-medium">
          <div className="total-donation w-full lg:w-60 h-32 bg-yellow-300 flex items-center justify-center text-center rounded-md">
            <div className="">
              <span>Total Donation</span>
              <p>300+</p>
            </div>
          </div>
          <div className="total-donor w-full lg:w-60 h-32 bg-green-300 flex items-center justify-center text-center rounded-md">
            <div>
              <span>Total Donor</span>
              <p>100+</p>
            </div>
          </div>
          <div className="total-project w-full lg:w-60 h-32 bg-purple-300 flex items-center justify-center text-center rounded-md">
            <div>
              <span>Completed Project</span>
              <p>150+</p>
            </div>
          </div>
          <div className="new-donor w-full lg:w-60 h-32 bg-blue-300 flex items-center justify-center text-center rounded-md">
            <div>
              <span>New Donor</span>
              <p>50+</p>
            </div>
          </div>
        </div>
        <div className="pie-chart bg-white shadow-xl col-span-12 lg:col-span-6 p-5">
          <p className="text-orange-500 font-medium text-xl p-5">Analytics</p>
          <div className="buttons flex justify-between mb-5">
            <button className="btn-ghost">This Month</button>
            <button className="btn-ghost">This Week</button>
            <button className="btn-ghost">This Year</button>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="progressions bg-white col-span-12 lg:col-span-6 p-5">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
            <RadialProgress value="80" color="blue" text="Success Rate" />
            <RadialProgress value="95" color="blue" text="Positive Review" />
            <RadialProgress value="75" color="blue" text="Permanent Donor" />
            <RadialProgress
              value="80"
              color="blue"
              text="Goal Achieving Successfully"
            />
            <RadialProgress value="10" color="red" text="Failed Projects" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default DashHome;
