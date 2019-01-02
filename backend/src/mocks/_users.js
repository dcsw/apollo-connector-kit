import { ROLES_PERMISSIONS, SCOPES } from '../config';

// online hash.js emulator
// http://www.xorbin.com/tools/sha256-hash-calculator

// online bcrypt emulator (use 12 rounds)
// https://www.dailycred.com/article/bcrypt-calculator
export const mockUsers = [
  {
    id: 1,
    name: 'Enrico',
    username: 'ric0',
    email: 'admin@test.it',
    password: '$2a$12$1e616OUCfSM7Wd3VOvbZve.4DtCrRDPrAZcKvIo3.lDUHm3kiXhna', // this is === 123456 client-side crypto-hashed
    // Note, to make login queries work in the graphql playground:
    // * use 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92 as 123456 client-side crypto-hashed in graphql plaground
    // After that, to make _checkAuth and _currentUser work, use these headers:
    // { 
    //   "x-connector-auth-request-type": "LOCAL_STORAGE",
    //   "x-connector-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InJpYzAiLCJlbWFpbCI6ImFkbWluQHRlc3QuaXQiLCJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwicGVybWlzc2lvbnMiOlsicmVhZDpjb21tZW50cyIsInJlYWQ6cHJvZmlsZSIsInJlYWQ6Y29tbWVudHMiXX0sImlhdCI6MTU0NjQ0MjgxNSwiZXhwIjoxNTQ2NDQzMTc1fQ.EEcCsUnra9fhQ6C0x7G92y-iLTped6omk9DRZuiGApA",
    //   "x-connector-refresh-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InJpYzAiLCJlbWFpbCI6ImFkbWluQHRlc3QuaXQiLCJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwicGVybWlzc2lvbnMiOlsicmVhZDpjb21tZW50cyIsInJlYWQ6cHJvZmlsZSIsInJlYWQ6Y29tbWVudHMiXX0sImlhdCI6MTU0NjQ0MjgxNSwiZXhwIjoxNTQ3MDQ3NjE1fQ.-CvuWGYiam872qLZxDkREmvaGyufrKN37431Pj_6BAU"
    // }
    roles: [
      ROLES_PERMISSIONS.ADMIN.NAME,
      ROLES_PERMISSIONS.USER.NAME,
    ],
    permissions: [
      ...ROLES_PERMISSIONS.ADMIN.PERMISSIONS[SCOPES.OPERATION.READ].map(permission =>
       `${SCOPES.OPERATION.READ}:${permission}`),
      ...ROLES_PERMISSIONS.USER.PERMISSIONS[SCOPES.OPERATION.READ].map(permission => `${SCOPES.OPERATION.READ}:${permission}`),
    ],
  },
  {
    id: 2,
    name: 'Kris',
    username: 'kris',
    email: 'test@test.it',
    password: '$2a$12$1e616OUCfSM7Wd3VOvbZve.4DtCrRDPrAZcKvIo3.lDUHm3kiXhna',
    roles: [
      ROLES_PERMISSIONS.USER.NAME,
    ],
    permissions: [
      ...ROLES_PERMISSIONS.USER.PERMISSIONS[SCOPES.OPERATION.READ].map(permission =>
        `${SCOPES.OPERATION.READ}:${permission}`),
    ],
  },
];

