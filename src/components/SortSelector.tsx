import useGameQueryStore from "../store";
import Select from "./Select";

const data = [
  { id: 1, name: "Relevance", value: "relevance" },
  { id: 2, name: "Data Added", value: "-added" },
  { id: 3, name: "Name", value: "name" },
  { id: 4, name: "Release Date", value: "-released" },
  { id: 6, name: "Popularity", value: "-metacritic" },
  { id: 5, name: "Average Rating", value: "-rating" },
];

// interface Props {
//   onSelectSort: (sort: { id: string; name: string; value: string }) => void;
// }
export default function SortSelector() {
  const onSelectSort = useGameQueryStore((state) => state.setSortOrder);
  return <Select name="Sort By" data={data} onSelect={onSelectSort} />;
}
