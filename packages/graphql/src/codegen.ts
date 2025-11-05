import { CodegenConfig } from '@graphql-codegen/cli';
import { TEST_HEADERS } from 'backend-env';

const config: CodegenConfig = {
  schema: [
    {
      'http://localhost:4000/graphql': {
        headers: JSON.parse(TEST_HEADERS as string),
      },
    },
  ],
  overwrite: true,
  documents: ['./src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-operations',
        'typescript-react-apollo',
        'named-operations-object',
      ],
      config: {
        withHooks: true,
        hooksImportFrom: '@apollo/react-hooks',
      },
    },
  },
};

export default config;
