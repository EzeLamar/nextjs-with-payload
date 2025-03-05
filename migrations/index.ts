import * as migration_20250305_203406_initial from './20250305_203406_initial';

export const migrations = [
  {
    up: migration_20250305_203406_initial.up,
    down: migration_20250305_203406_initial.down,
    name: '20250305_203406_initial'
  },
];
