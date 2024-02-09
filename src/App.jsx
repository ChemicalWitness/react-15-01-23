import { Layout } from "./components/layout/component";

import './styles/index.scss';
import { RestaurantPage } from "./pages/restaurant-page/component";
import { UserContext } from "./context/user";
import { useContext, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
  const [user, setUser] = useState()

  return (
    <Provider store={store}>
      <UserContext.Provider value={{user, setUser}}>
        <Layout>
          <RestaurantPage/>
        </Layout>
      </UserContext.Provider>
    </Provider>
  );
};