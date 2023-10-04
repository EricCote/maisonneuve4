/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import { lazy, memo, Children, Suspense } from 'react';
import { createFileMap } from './createFileMap';

const SandpackRoot = lazy(() => import('./SandpackRoot'));

const SandpackGlimmer = ({ code }: { code: string }) => (
  <div className=''></div>
);

export default memo(function SandpackWrapper(props: any): any {
  console.log(props);
  const codeSnippet = createFileMap(Children.toArray(props.children));

  // To set the active file in the fallback we have to find the active file first.
  // If there are no active files we fallback to App.js as default.
  let activeCodeSnippet = Object.keys(codeSnippet).filter(
    (fileName) =>
      codeSnippet[fileName]?.active === true &&
      codeSnippet[fileName]?.hidden === false
  );
  let activeCode;
  if (!activeCodeSnippet.length) {
    activeCode = codeSnippet['/App.js'].code;
  } else {
    activeCode = codeSnippet[activeCodeSnippet[0]].code;
  }

  return (
    <Suspense fallback={<SandpackGlimmer code={activeCode} />}>
      <SandpackRoot {...props} />
    </Suspense>
  );
});