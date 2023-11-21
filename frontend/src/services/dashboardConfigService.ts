import axios from 'axios';
import { DashboardConfigKind } from '~/k8sTypes';

export const fetchDashboardConfig = (): Promise<DashboardConfigKind> => {
  const url = '/api/config';
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};
