import NameFilter from "./nameFilter"
import PriceFilter from "./priceFilter"
import TagFilter from "./tagFilter"
import TypeFilter from "./typeFilter"

import { FilterContextProvider } from "./filterContext"
import { useEffect, useState } from "react"

const Filter = () => {
  const INITIAL_STATE = {
    name: "",
    range: { minVal: 0, maxVal: 3000 },
    tags: { lifestyle: false, mobile: false, motor: false, work: false },
    type: "All",
  }
  const [filterParams, setFilterParams] = useState(INITIAL_STATE)

  const handleSubmit = (event) => {
    event.preventDeffault()
  }

  useEffect(() => {
    console.log("filtrare: ", filterParams)

    return () => {
      // Función de retorno para cancelar actualización de estado
    }
  }, [filterParams])

  const handleChange = () => {
    // console.log('cambio')
  }
  return (
    // TODO:
    /* 
     * El filtro contendrá los parámetros para filtrar. Realizar el filtrado
    en el front con los datos ya existentes para evitar peticiones al back.
     */
    <FilterContextProvider value={{ filterParams, setFilterParams }}>
      <div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <NameFilter />
          <TypeFilter />
          <PriceFilter />
          <TagFilter />
        </form>
      </div>
    </FilterContextProvider>
  )
}

export default Filter
