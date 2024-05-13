interface RadialProgressProps {
  value: string;
  color: string;
  text: string;
}

const RadialProgress: React.FC<RadialProgressProps> = ({
  value,
  color,
  text,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-xl p-5 rounded-md">
      <p className="mb-2">{text}</p>
      <div
        className={`radial-progress ${color ? `text-${color}-500` : ""}`}
        style={{ "--value": value } as React.CSSProperties}
        role="progressbar"
      >
        {value}
      </div>
    </div>
  );
};

export default RadialProgress;
