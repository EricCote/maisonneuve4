// @ts-nocheck

export const runESLint = (
  doc: Text
): { errors: any[]; codeMirrorErrors: Diagnostic[] } => {
  return {
    codeMirrorErrors: [],
    errors: [],
  };
};
