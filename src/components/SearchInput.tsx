import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

export default function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearch = useGameQueryStore((state) => state.setSearchText);

  function onSubmit(e: any) {
    if (inputRef.current) {
      onSearch(inputRef.current.value);
    }
  }

  return (
    <div className="relative flex items-center flex-grow ">
      <span className="absolute left-3">
        <BsSearch />
      </span>

      <input
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "NumpadEnter" || e.key === "Tab") {
            onSubmit(e);
          }
        }}
        type="search"
        placeholder="Search games...."
        className="pl-14 pr-2 rounded-3xl bg-secondaryLight hover:bg-hoverLight dark:bg-secondary w-full p-2 dark:hover:bg-hover dark:focus:outline-hover dark:focus:bg-primary"
      />
    </div>
  );
}
