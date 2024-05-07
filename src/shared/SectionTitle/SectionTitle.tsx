interface SectionTitleProps {
  heading: string;
  subHeading: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ heading, subHeading }) => {
  return (
    <div className="pb-28 text-center">
      <h1>{heading}</h1>
      <p>{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
