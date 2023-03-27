import { View, Button, Heading, Stack } from 'native-base';
import { useCounter } from '../../hooks/useCounter';
import React from 'react';

export function Counter() {
  const [counter, incrementCounter] = useCounter();

  return (
    <View>
      <Stack
        h="full"
        px="10"
        direction="column"
        alignItems="center"
        justifyContent="center"
        space="6"
        >
        <Heading>Contador: {counter}</Heading>
        <Button onPress={() => incrementCounter}>Incrementar</Button>
      </Stack>
    </View>
  );
}