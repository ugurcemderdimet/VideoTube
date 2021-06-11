import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import videoJSON from "./VideoList/video.json"
import ReactPlayer from 'react-player'

export default function CocktailList() {
  const { videos, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (videos.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Videos</h2>
      <div className='cocktails-center'>
        {videos.map((item) => {
          return <ReactPlayer url={`https://www.youtube.com/watch?v=${item.id.videoId}`} width="100%" />
        })}
      </div>
    </section>
  )
}