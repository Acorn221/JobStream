export default {
  title: 'The Graphql Main Schema',
  required: ['operationName', 'variables', 'query'],
  properties: {
    operationName: {
      type: 'string',
      title: 'operationName',
    },
    variables: {
      type: 'object',
      title: 'variables',
    },
    query: {
      type: 'string',
      title: 'query',
    },
  },
} as const;
