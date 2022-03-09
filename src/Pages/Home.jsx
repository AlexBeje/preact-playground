import { Logo } from '/src/Components/Logo';
import { Container, Grid, Center, Button } from '@mantine/core';

import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '/src/Components/LanguageSwitcher';
import { ThemeSwitcher } from '/src/Components/ThemeSwitcher';

export function Home() {
  const { t } = useTranslation();

  return (
    <Container className="h-screen">
      <Grid className="h-full">
        <Grid.Col className="flex justify-between pt-6">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </Grid.Col>
        <Grid.Col>
          <Center>
            <Logo />
          </Center>
          <Center className="flex-col">
            <h1 class="text-3xl font-bold underline text-center">
              {t('home.title')}
            </h1>
            <Button component="a" href="https://preactjs.com/" target="_blank">
              {t('home.button')}
            </Button>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
