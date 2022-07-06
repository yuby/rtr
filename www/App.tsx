/* eslint-disable import/no-relative-packages */
import React, { useEffect } from 'react';
import { Box } from './components/Theme';
import init, { greet } from './pkg/wasm_utils';

function App() {
  useEffect(() => {
    init()
      .then(() => {
        greet();
      });
  }, []);
  return (
    <Box
      display="flex"
    >
      App!!!@#!@#
    </Box>
  );
}

export default App;
