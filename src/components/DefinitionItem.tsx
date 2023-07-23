import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div>
      <dt className="text-zinc-500 font-bold text-lg">{term}</dt>
      <dd className="">{children}</dd>
    </div>
  );
};

export default DefinitionItem;
