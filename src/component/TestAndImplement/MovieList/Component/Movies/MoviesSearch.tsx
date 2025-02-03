import { useState } from "react"
import { MdOutlineSearch, MdOutlineSearchOff } from "react-icons/md"

export const MoviesSearch = ({ filter }: any) => {
  const [searchKey, setSearchKey] = useState({
    key: '',
    error: '',
    type: true
  })

  const handelSearch = (type: any) => {
    if (type == 1) {
      if (searchKey.key !== '') {
        setSearchKey({ ...searchKey, type: false })
        filter(searchKey.key, 1)
      } else {
        filter('titanic', 1)
      }
    } else {
      resetSearch()
    }
  }

  const resetSearch = () => {
    filter('titanic', 1)
    setSearchKey({
      key: '',
      error: '',
      type: true
    })
  }

  return (
    <div className="m_form">
      <input
        type="text"
        className="form-control"
        onKeyUpCapture={() => setSearchKey({ ...searchKey, type: true })}
        placeholder="Search..."
        value={searchKey.key}
        onChange={(e) => setSearchKey({ ...searchKey, key: e.target.value })} />
      {
        searchKey.type == true
          ? <button onClick={() => handelSearch(1)}><MdOutlineSearch /></button>
          : <button onClick={() => handelSearch(0)}><MdOutlineSearchOff /></button>
      }
    </div>
  )
}