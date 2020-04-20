import React from 'react';

export const getStack = (Stack, { stackOptions, screens }) => {
  return (
    <Stack.Navigator {...stackOptions}>
      {screens.map(screen => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  );
};

export default {
  getStack,
};
