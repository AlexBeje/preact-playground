import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
      </ActionIcon>
    </>
  );
}
