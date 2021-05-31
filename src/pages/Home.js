import React,{useState,useContext} from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import ReactPlayer from 'react-player'

export default function Home(props) {

  return (
    <main>
      <SearchForm />
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      <CocktailList />

    </main>
  )
}