import { Logo } from './logo';
import { Button } from '@mantine/core';

export function App(props) {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <Button href="https://preactjs.com/" target="_blank">
          Learn Preact
        </Button>
      </p>
    </>
  );
}
