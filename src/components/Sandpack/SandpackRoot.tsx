/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import { Children } from 'react';
import * as React from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
//import { SandpackLogLevel } from '@codesandbox/sandpack-client';
//import { CustomPreset } from './CustomPreset';
import { createFileMap } from './createFileMap';
//import { CustomTheme } from './Themes';

type SandpackProps = {
  children: React.ReactNode;
  autorun?: boolean;
};

const sandboxStyle = `
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 20px;
  padding: 0;
}

h1 {
  margin-top: 0;
  font-size: 22px;
}

h2 {
  margin-top: 0;
  font-size: 20px;
}

h3 {
  margin-top: 0;
  font-size: 18px;
}

h4 {
  margin-top: 0;
  font-size: 16px;
}

h5 {
  margin-top: 0;
  font-size: 14px;
}

h6 {
  margin-top: 0;
  font-size: 12px;
}

code {
  font-size: 1.2em;
}

ul {
  padding-inline-start: 20px;
}
`.trim();

function SandpackRoot(props: SandpackProps) {
  let { children, autorun = true, ...rest } = props;
  const codeSnippets = Children.toArray(children) as React.ReactElement[];
  const files = createFileMap(codeSnippets);

  files['/styles.css'] = {
    code: [sandboxStyle, files['/styles.css']?.code ?? ''].join('\n\n'),
    hidden: !files['/styles.css']?.visible,
  };

  return (
    <div className='sandpack sandpack--playground w-full my-8' dir='ltr'>
      <Sandpack template='react' files={files} theme='dark' {...rest} />
    </div>
  );
}

export default SandpackRoot;
