import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchTerm: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

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
        className="pl-14 pr-2 rounded-3xl shadow bg-secondary w-full p-2 hover:bg-hover focus:outline-hover focus:bg-primary"
      />
    </div>
  );
}
