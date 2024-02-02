import { Layout } from "./components/layout/component";

import './styles/index.scss';
import { RestaurantPage } from "./pages/restaurant-page/component";

export const App = () => {

  return (
    <Layout>
      <RestaurantPage/>
    </Layout>
  );
};