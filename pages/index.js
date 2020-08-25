import React from 'react';
import Markdown from 'markdown-to-jsx';

const content = `
# Hello, world!
From <Color bg="red">    MDX!    </Color>
<Box marginTop={1}>
  <Color bg="green">
    I'm a cyan box!
  </Color>
</Box>
`;

const Box = ({ children, marginTop }) => {
  return <div style={{ marginTop }}>{children}</div>;
};

const Color = ({ children, bg }) => {
  return <div style={{ backgroundColor: bg }}>{children}</div>;
};

const components = {
  Box,
  Color
};

const Home = () => {
  return <Markdown options={{ overrides: { ...components } }}>{content}</Markdown>;
};

export default Home;
