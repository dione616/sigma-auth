import { useState } from "react";

const Tweets = () => {
  const [state] = useState("Hi List!");

  return (
    <div>
      <h1>Tweets</h1>
      <h3>{state}</h3>
    </div>
  );
};

export default Tweets;
