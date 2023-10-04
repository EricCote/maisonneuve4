/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import type { SandpackFile } from '@codesandbox/sandpack-react';

export const createFileMap = (codeSnippets: any) => {
  return codeSnippets.reduce(
    (result: Record<string, SandpackFile>, codeSnippet: React.ReactElement) => {
      if ((codeSnippet.type as any) !== 'pre') {
        return result;
      }

      const { props } = codeSnippet.props.children;
      let filePath; // path in the folder structure
      let fileHidden = false; // if the file is available as a tab
      let fileActive = false; // if the file tab is shown by default

      if (props.meta) {
        const [name, ...params] = props.meta.split(' ');
        filePath = '/' + name;
        if (params.includes('hidden')) {
          fileHidden = true;
        }
        if (params.includes('active')) {
          fileActive = true;
        }
      } else {
        if (props.className === 'language-js') {
          filePath = '/App.js';
        } else if (props.className === 'language-css') {
          filePath = '/styles.css';
        } else {
          throw new Error(
            `Code block is missing a filename: ${props.children}`
          );
        }
      }
      if (result[filePath]) {
        throw new Error(
          `File ${filePath} was defined multiple times. Each file snippet should have a unique path name`
        );
      }

      let cody: string = props.children.reduce((res: string, item: any) => {
        if (typeof item === 'string') return res + item;
        if (typeof item.props.children === 'string')
          return res + item.props.children;
        return (res + item.props.children.props.children) as string;
      }, '');

      result[filePath] = {
        code: cody,
        hidden: fileHidden,
        active: fileActive,
      };

      return result;
    },
    {}
  );
};
