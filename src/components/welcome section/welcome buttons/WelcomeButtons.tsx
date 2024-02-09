import './welcomebtn.scss'


const WelcomeButtons = () => {
  return (
      <div className='btn-groupp'>
          <button className='btn' type="button"><span className="text">Learn More </span>
              <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
          <button className='btn' type="button">
           <i className="fa fa-play" aria-hidden="true"></i>
           <span className='text'>Our Products</span>
          </button>
    </div>
  )
}

export default WelcomeButtons