import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import ReactPlayer from 'react-player'

export default function VideoList() {
  const { videos, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (videos && videos.length < 1) {
    return (
      <h2 className='section-title'>
        no videos matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Videos</h2>
      <div className='videos-center'>
        {videos && videos.map((item) => {
          return(
            <div>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${item.id.videoId}`} width="100%" />
            <a href={`/download?qr=${item.id.videoId}`}>
            <img className="download" src={"download.png"}/>
            </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}