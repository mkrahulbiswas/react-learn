function WMStudent({ props }: any) {
  return (
    <div className="std_card">
      <div className="std_image">
        <img src={window.location.origin + '/public/img/1.jpg'} alt="" />
      </div>
      <div className="std_info">
        <div className="std_name">
          <span>Rahul Biswas</span>
        </div>
        <div className="std_class">
          <span>Class:</span>
          <span>10</span>
        </div>
        <div className="std_roll">
          <span>Roll:</span>
          <span>10</span>
        </div>
        <div className="std_about">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolor sit amet, consectetur adipisicing elit.</span>
        </div>
        <div className="std_score">
          <span>4.5 / 5</span>
        </div>
      </div>
    </div>
  )
}
export default WMStudent
