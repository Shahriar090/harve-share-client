type TContainerProps = {
  children: React.ReactNode;
};
const Container: React.FC<TContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 py-28">{children}</div>
  );
};

export default Container;
