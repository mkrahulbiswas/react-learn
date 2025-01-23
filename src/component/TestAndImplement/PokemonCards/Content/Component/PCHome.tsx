import React, { useEffect, useState } from 'react'
import PCCards from './PCCards'
function PCHome() {
  const [cards, setCards] = useState([null])
  const getCards = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      const data = await res.json()
      const detailData = data.results.map(async (row: any) => {
        const res = await fetch(row.url)
        const data = await res.json()
        return data
      })
      const detailDataFinal = await Promise.all(detailData)
      console.log(detailDataFinal)
      setCards(detailDataFinal)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCards()
  }, [])
  return (
    <React.Fragment>
      <section className='pc_content'>
        <div className="pc_main">
          <div className="pc_list">
            {
              cards != null ?
                cards.map((val: any) => {
                  return (
                    <>
                      <PCCards key={val.id} dataPass={val} />
                    </>
                  )
                })
                : null
            }
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default PCHome
