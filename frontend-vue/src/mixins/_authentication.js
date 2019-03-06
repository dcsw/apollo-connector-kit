import { _checkAuthQuery, _checkAdminQuery } from '../api';

export default {
  data() {
    return {
      authorized: false,
    };
  },
  apollo: {
    authorized: {
      query: _checkAuthQuery,
      fetchPolicy: 'network-only',
      update({ _checkAuth }) {
        return typeof _checkAuth === 'string';
      },
    },
    admin: {
      query: _checkAdminQuery,
      fetchPolicy: 'network-only',
      update({ _checkAdmin }) {
        return typeof _checkAdmin === 'string';
      },
    },
  },
};
