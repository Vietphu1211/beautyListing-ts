import React from 'react'
import listingCardItem from '../_data/getListingData'

interface CateTableProps {
  query:string,
  currentPage?:number
}
const  CateTable:React.FC<CateTableProps> = async({
    query,
    currentPage
}) => {
// const res = await fetch (URL_API+{query})
// const resJson = await res.json();

  return (
    <div><p>table</p></div>
  )
}

export default CateTable