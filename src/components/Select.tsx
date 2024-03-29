import { BsChevronDown } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";

interface Props {
  name: string;
  data: any[];
  onSelect?: (item: any) => void;
  selectedItemId?: number;
}

const Select = ({ name, data, onSelect, selectedItemId }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  // const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const selectedItem = data.find((item) => item.id === selectedItemId)?.name;

  return (
    <span className="inline-block" ref={menuRef}>
      <button
        type="button"
        className="flex items-center px-4 py-2 rounded-md bg-secondaryLight hover:bg-hoverLight dark:bg-secondary  shadow-sm  dark:hover:bg-hover"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
      >
        <span>{selectedItem || name}</span>
        <BsChevronDown className="ml-2 h-5 w-5" />
      </button>
      {isMenuOpen && (
        <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-secondaryLight dark:bg-secondary ring-1 ring-black ring-opacity-5">
          <ul className="py-1">
            {data.map((item) => (
              <li
                key={item.id}
                className=" dark:hover:bg-hover hover:bg-hoverLight"
              >
                <button
                  type="button"
                  className=" block px-4 py-2 text-sm w-full text-left"
                  onClick={() => {
                    onSelect && onSelect(item);

                    closeMenu();
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
};

export default Select;
