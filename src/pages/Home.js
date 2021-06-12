import React,{useState,useContext} from 'react'
import VideoList from '../components/VideoList'
import SearchForm from '../components/SearchForm'
import ReactPlayer from 'react-player'

export default function Home(props) {

  return (
    <main>
      <SearchForm />
      <VideoList />

    </main>
  )
}