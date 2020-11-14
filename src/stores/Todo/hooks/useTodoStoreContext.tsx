import React, { useContext } from 'react'
import { ITodoStore, TodoStoreContext } from '..'

function useTodoStoreContext(): ITodoStore {
  return useContext(TodoStoreContext);
}

export default useTodoStoreContext
