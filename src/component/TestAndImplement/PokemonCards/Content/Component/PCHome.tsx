import React, { useEffect, useState } from 'react'
import PCCards from './PCCards'
function PCHome() {
  const [cards, setCards] = useState<any>([])
  const getCards = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      const data = await res.json()
      const detailData = data.results.map(async (row: any) => {
        const res = await fetch(row.url)
        const finalData = await res.json()
        return finalData
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
                : <p>No data found</p>
            }
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default PCHome
