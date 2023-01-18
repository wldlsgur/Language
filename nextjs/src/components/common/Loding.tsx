import Loader from "react-spinners/RotateLoader";
export default function Loding(): JSX.Element {
  return (
    <Loader color="black" loading={true} size={15} speedMultiplier={0.4} />
  );
}
