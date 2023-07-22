import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import Select from "./Select";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const onSelectPlatform = useGameQueryStore((state) => state.setPlatformId);
  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);

  const onSelect = (platform: Platform) => {
    onSelectPlatform(platform.id);
  };

  return (
    <Select
      name="Platforms"
      data={data?.results || []}
      onSelect={onSelect}
      selectedItemId={platformId}
    />
  );
};

export default PlatformSelector;
