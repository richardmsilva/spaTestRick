import { Card } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components';
import useSWR from 'swr';

const { Meta } = Card;
const fetcher = (url) => axios(url).then(res => res.data)


const ContainerT = styled('div')`
margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-evenly;
`

const Content = () => {

  const { data, error } = useSWR(
    "https://rickandmortyapi.com/api/character",
    fetcher
  );


console.log(data)

  return <div>
    <ContainerT>
      {data?.results?.map((person) => <Card key={person.name} hoverable style={{width: 300}} cover={<img src={person?.image || ''}/>}>
        <Meta title={person?.name || 'sem nome'} description={`personagem status: ${person?.status || 'unknown'}`}/>
      </Card>)}
      {!data?.results?.length && `carregando...`}
    </ContainerT>
  </div>
}

export default Content
