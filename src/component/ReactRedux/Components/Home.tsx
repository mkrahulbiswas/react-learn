function Home(props: any) {
  console.log('Inside Home:- ', props)
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://png.pngtree.com/png-vector/20210303/ourmid/pngtree-mobile-phone-png-smartphone-camera-mockup-png-image_3009179.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={() => { props.addToCartHandler({ pice: 2000, name: 'i phone 11' }) }}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}
export default Home
