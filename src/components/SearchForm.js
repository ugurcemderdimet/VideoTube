import React from 'react'
import { useGlobalContext } from '../context'
import _ from "lodash"


export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchVideo = _.debounce((e) => {
    setSearchTerm(searchValue.current.value);
  }, 2000)


  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your video</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchVideo}
          />
        </div>
      </form>
    </section>
  )
}