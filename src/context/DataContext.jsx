import React, { createContext, useState, useContext } from 'react'

const DataContext = createContext()

export const DataProvider = ({children}) => {
  const [dataValues, setDataValues] = useState({});

  const setValues = (values) => {
    setDataValues(prevData => ({
      ...prevData,
      ...values
    }))
  }

  return <DataContext.Provider value={{dataValues, setValues, setDataValues}}>
    {children}
  </DataContext.Provider>
}

export const useData = () => useContext(DataContext)