import { Layout } from "./components/layout/component";
import { Tabs } from "./components/tabs/component";
import { restaurants } from './data/mock';

import './styles/index.scss';

export const App = () => {
  return (
    <Layout>
      {/* {restaurants.map(({...restaurant}) => (
        <Restaurant {...restaurant} />
      ))} */}
      <Tabs restaurants={restaurants} />
    </Layout>
  );
};