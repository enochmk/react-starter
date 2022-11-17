import { FC } from 'react';

export interface Route {
  name: string;
  layout: string;
  element: FC;
  path: string;
  icon: string;
}

const routes: Route[] = [];

export default routes;
