import { NextPage } from "next";
import { NewCodeViem } from "~~/components/NewCodeViem";
import { OldCodeEthers } from "~~/components/OldCodeEthers";

// Adjust import path as necessary

const Home: NextPage = () => {
  return (
    <div className="flex ">
      <OldCodeEthers />
      <NewCodeViem />
    </div>
  );
};
export default Home;
