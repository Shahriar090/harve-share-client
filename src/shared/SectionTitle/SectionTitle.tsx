interface SectionTitleProps {
  heading: string;
  // subHeading: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ heading }) => {
  return (
    <div className="pb-28 text-center">
      <h1 className="text-2xl lg:text-4xl font-semibold text-black">
        {heading}
      </h1>
      {/* <p>{subHeading}</p> */}
    </div>
  );
};

export default SectionTitle;
