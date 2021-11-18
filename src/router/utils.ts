import {routesType} from './config'

/**
 *
 * 将路由转换为一维数组
 * @param routeList 路由
 * @param deep 是否深层转化
 * @param auth 路由是否需要检查授权, 路由配置的auth优先级比这里高
 */

 export function flattenRoute(
    routeList: routesType[],
    deep: boolean,
    auth: boolean,
  ): routesType[] {
    const result: routesType[] = [];
  
    for (let i = 0; i < routeList.length; i += 1) {
      const route = routeList[i];
  
      result.push({
        ...route,
        auth: typeof route.auth !== 'undefined' ? route.auth : auth,
      });
  
      if (route.routes && deep) {
        result.push(...flattenRoute(route.routes, deep, auth));
      }
    }
  
    return result;
  }