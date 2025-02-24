import * as migration_20250206_165232_initial from './20250206_165232_initial';
import * as migration_20250224_153656_formBuilderPlugin from './20250224_153656_formBuilderPlugin';

export const migrations = [
  {
    up: migration_20250206_165232_initial.up,
    down: migration_20250206_165232_initial.down,
    name: '20250206_165232_initial',
  },
  {
    up: migration_20250224_153656_formBuilderPlugin.up,
    down: migration_20250224_153656_formBuilderPlugin.down,
    name: '20250224_153656_formBuilderPlugin'
  },
];
