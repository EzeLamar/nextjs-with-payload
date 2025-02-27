import * as migration_20250224_223609_initial from './20250224_223609_initial';

export const migrations = [
  {
    up: migration_20250224_223609_initial.up,
    down: migration_20250224_223609_initial.down,
    name: '20250224_223609_initial'
  },
];
