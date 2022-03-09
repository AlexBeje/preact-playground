import { Logo } from '/src/Components/Logo';
import { Container, Grid, Center, Button } from '@mantine/core';

import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '/src/Components/LanguageSwitcher';

export function Home() {
  const { t } = useTranslation();

  return (
    <Container className="h-screen">
      <Grid className="h-full">
        <Grid.Col>
          <LanguageSwitcher />
        </Grid.Col>
        <Grid.Col>
          <Center>
            <Logo />
          </Center>
          <h1 class="text-3xl font-bold underline">{t('home.title')}</h1>
          <Button component="a" href="https://preactjs.com/" target="_blank">
            {t('home.button')}
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
