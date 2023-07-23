import { useState } from "react";

interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  const [Expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children.length <= limit) {
    return <p>{children}</p>;
  }

  const summary = children.slice(0, limit);
  return (
    <p>
      {Expanded ? children : summary + "..."}
      <button
        className="  bg-yellow-200 dark:text-black rounded-lg px-4 py-1 ml-2 font-bold"
        onClick={() => {
          setExpanded(!Expanded);
        }}
      >
        {Expanded ? "Show less" : "Show more"}
      </button>
    </p>
  );
}

export default ExpandableText;
