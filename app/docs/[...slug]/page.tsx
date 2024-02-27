import React from 'react'

const Docs = ({ params }: {
  params: {
    slug: string[]
  }
}) => {

  if (params.slug.length == 1) { 
      return <div> Page  : {params.slug[0]}</div> } 

  else if (params.slug.length == 2) { 
      return <div> Page : {params.slug[1]}  </div> }

  else  return <div> Home Page  </div> 
}

export default Docs