// import { useState } from "react";
// import { Button } from "../button/component";
// import { Restaurant } from "../restaurant/component";

// import styles from './styles.module.scss'
// // import { Tab } from "../tab/component";

// export const Tabs = ({restaurants}) => {
//   const [activeTab, setActiveTab] = useState(restaurants[0].id)
//   return (
//     <div>
//       <div>
//         {restaurants.map((restaurant) => (
//           <Button className={styles.tabButton} onClick={() => setActiveTab(restaurant.id)}>{restaurant.name}</Button>
//         ))}
//       </div>
//       <div>
//         {restaurants.map(({...restaurant}) => (
//           <Restaurant className={styles} activeTab={activeTab} {...restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };