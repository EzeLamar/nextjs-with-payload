import * as migration_20250206_165232_initial from './20250206_165232_initial';

export const migrations = [
  {
    up: migration_20250206_165232_initial.up,
    down: migration_20250206_165232_initial.down,
    name: '20250206_165232_initial'
  },
];
