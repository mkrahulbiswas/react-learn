function Header(props: any) {
  console.log('Inside Header:- ', props)
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-mobile-phone-png-smartphone-camera-mockup-png-image_3009179.jpg" />
      </div>
    </div>
  )
}
export default Header
