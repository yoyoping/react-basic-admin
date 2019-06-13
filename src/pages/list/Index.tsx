import React, { useEffect, useState } from 'react'
import Fetch from '../../fetch/fly'

interface ListType {
  id: number
}

const List: React.FC<any> = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const params = {
      uriCode: 'BS01'
    }
    const res:any = await Fetch(params)
    setList(res.banners)
    console.log('banner结果：', res)
  }

  return(
    <>
      <ul>
        {
          list.map((item:any, index:number) => (
            <li key={index}>{index + 1 + '--' + item.typeTitle}</li>
          ))
        }
      </ul>
    </>
  )
}

export default List
