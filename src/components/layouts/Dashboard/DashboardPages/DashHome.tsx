import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import Container from "../../../../shared/Container/Container";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";

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
    <Container>
      <SectionTitle heading="Overview Of Our All Categories" />{" "}
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
    </Container>
  );
};

export default DashHome;
