import { HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorPalette="teal"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
