import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";
import { useState, useRef, useEffect } from "react";
import Select from "./Select";

interface Props {
  onSelectPlatform?: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  return <Select name="Platforms" data={data} onSelect={onSelectPlatform} />;
};

export default PlatformSelector;
