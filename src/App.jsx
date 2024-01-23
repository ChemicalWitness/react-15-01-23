import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from './data/mock';

import './styles/index.scss';

export const App = () => {
  return (
    <Layout>
      {restaurants.map(({...restaurant}) => (
        <Restaurant {...restaurant} />
      ))}
    </Layout>
  );
};