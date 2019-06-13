import React from 'react'
import { useStore } from '../../context/Index'

const Mine: React.FC<any> = (props:any) => {
  const [store] = useStore()
  console.log(store)
  return(
    <>
      Mine
    </>
  )
}

export default Mine
