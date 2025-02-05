function PCCards({ dataPass }: any) {
  return (
    <div className="pc_item">
      <div className='pc_name'>
        <span>{dataPass.name}</span>
      </div>
      <div className='pc_front'>
        <div className='pc_image'>
          <img src={dataPass.sprites.other.dream_world.front_default} alt={dataPass.name} />
        </div>
        <div className='pc_stats'>
          <div className='pc_statsOne pc_statsCommon'>
            <span>weight</span>
            <span>{dataPass.weight}</span>
          </div>
          <div className='pc_statsTwo pc_statsCommon'>
            <span>height</span>
            <span>{dataPass.height}</span>
          </div>
          <div className='pc_statsThree pc_statsCommon'>
            <span>speed</span>
            <span>{dataPass.stats[5].base_stat}</span>
          </div>
          <div className='pc_statsFour pc_statsCommon'>
            <span>expe</span>
            <span>{dataPass.base_experience}</span>
          </div>
          <div className='pc_statsFive pc_statsCommon'>
            <span>attack</span>
            <span>{dataPass.stats[1].base_stat}</span>
          </div>
          <div className='pc_statsSix pc_statsCommon'>
            <span>ability</span>
            <span>{dataPass.types.map((val: any) => val.type.name).join(", ")}</span>
          </div>
        </div>
        <div className='pc_other'></div>
      </div>
      <div className='pc_back'>
        <div className='pc_about'>a</div>
      </div>
    </div>
  )
}
export default PCCards
