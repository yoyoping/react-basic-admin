import React, { useReducer, useContext, ReactElement } from 'react';
import reducer from '../store/reducer'
import initialState from '../store/state'

const Context = React.createContext<any>({})

/**
 * 导出带有value的Provider
 * @param children： 子组件 
 */
export const Provider = ({ children }: { children: ReactElement }) => {
  const contextValue = useReducer(reducer, initialState);
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

/**
 * 自定义hooks
 */
export const useStore = () => {
  const contextValue = useContext(Context);
  return contextValue;
};
