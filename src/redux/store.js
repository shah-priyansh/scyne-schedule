import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import rootReducers from "./reducers.js";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export function makeStore(initialState) {
    const store = configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware=> getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware)),
    });
    sagaMiddleware.run(rootSaga);
    if (import.meta.hot) {
        import.meta.hot.accept("./reducers.js", (newModule) => {
            store.replaceReducer(newModule.default);
        });
    }
    return store;
}

export const store = makeStore();
