import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import Select from "./Select";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const onSelectPlatform = useGameQueryStore((state) => state.setPlatformId);

  const onSelect = (platform: Platform) => {
    onSelectPlatform(platform.id);
  };

  return (
    <Select name="Platforms" data={data?.results || []} onSelect={onSelect} />
  );
};

export default PlatformSelector;
