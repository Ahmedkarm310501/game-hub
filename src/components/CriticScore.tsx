import React from "react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color =
    score > 75 ? "bg-green-600" : score > 60 ? "bg-yellow-600" : "bg-red-600";

  return (
    <span
      className=" px-2 rounded-md font-bold text-sm inline-block"
      style={{ backgroundColor: "#344038", color: "#9ae6b4" }}
    >
      {score}
    </span>
  );
};

export default CriticScore;
