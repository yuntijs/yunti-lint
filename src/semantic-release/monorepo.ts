import { createConfig } from 'semantic-release-config-gitmoji/lib/createConfig';

import { options, overwriteSemRelPlugins } from './index';

export const semanticReleaseMonoRepo = {
  $schema: 'https://json.schemastore.org/semantic-release',
  ...overwriteSemRelPlugins(createConfig({ ...options, monorepo: true })),
};
