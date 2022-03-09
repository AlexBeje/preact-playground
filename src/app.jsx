import { Logo } from '/src/Components/Logo';
import { Button } from '@mantine/core';

export function App(props) {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <Button href="https://preactjs.com/" target="_blank">
        Learn Preact
      </Button>
    </>
  );
}
