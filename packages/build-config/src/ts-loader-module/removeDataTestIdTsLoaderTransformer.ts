import * as ts from 'typescript';

export const removeDataTestIdTransformer = (): ts.TransformerFactory<ts.Node> => {
  return (context) => {
    const visit: ts.Visitor = (node) => {
      if (ts.isJsxAttribute(node)) {
        if (node.name.getText() === 'data-test-id' || node.name.getText() === 'data-testid') {
          return undefined;
        }
      }
      return ts.visitEachChild(node, visit, context);
    };

    return (node) => ts.visitNode(node, visit);
  };
};
