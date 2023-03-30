import { k8sGetResource } from '@openshift/dynamic-plugin-sdk-utils';
import { RouteModel } from '../models';
import { RouteKind } from '../../k8sTypes';

export const getRoute = (name: string, namespace: string): Promise<RouteKind> => {
  return k8sGetResource<RouteKind>({ model: RouteModel, queryOptions: { name, ns: namespace } });
};

export const getGatewayRoute = (namespace: string, gatewayName: string): Promise<RouteKind | null> => {
  const labelSelector = `maistra.io/gateway-name=${gatewayName}`;
  const queryOptions = {
    ns: namespace,
    labelSelector,
  };
  return k8sGetResource<RouteKind>({ model: RouteModel, queryOptions })
    .catch(() => null); // Catch errors and return null
};