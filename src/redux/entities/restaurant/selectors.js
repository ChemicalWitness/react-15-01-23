export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id]

export const selectRestaurantMenuById = (state, id) => selectRestaurantById(state, id)?.menu

export const selectRestaurantReviewById = (state, id) => selectRestaurantById(state, id)?.reviews