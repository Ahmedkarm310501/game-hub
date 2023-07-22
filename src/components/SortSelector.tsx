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

export default function SortSelector() {
  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);
  const sortOrder = useGameQueryStore((state) => state.gameQuery.sortOrder);
  const onSelectSort = (value: { id: number; name: string; value: string }) => {
    setSortOrder(value);
  };
  return (
    <Select
      name="Sort By"
      data={data}
      onSelect={onSelectSort}
      selectedItemId={sortOrder?.id}
    />
  );
}
