interface IProps {
  label: string;
}
const Success: React.FC<IProps> = ({ label }) => {
  return <h3 style={{ color: "green" }}>{label}</h3>;
};

export default Success;
