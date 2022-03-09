import { Logo } from '/src/Components/Logo';
import { Button } from '@mantine/core';

export function Home() {
  return (
    <>
      <Logo />
      <h1 class="text-3xl font-bold underline">Welcome to Vite + Preact!</h1>
      <Button component="a" href="https://preactjs.com/" target="_blank">
        Learn Preact
      </Button>
    </>
  );
}
