import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import VideoListPopup from '../components/Button/VideoListPopup'
export default function Home() {
  return (
    <main>
      <SearchForm />
      <VideoListPopup/>
      <CocktailList />

    </main>
  )
}