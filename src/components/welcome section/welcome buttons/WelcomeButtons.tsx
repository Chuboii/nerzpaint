import './welcomebtn.scss'


const WelcomeButtons = () => {
  return (
      <div className='btn-group'>
          <button type="button"><span className="text">Learn More </span>
              <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
          <button type="button">
           <i className="fa fa-play" aria-hidden="true"></i>
           <span className='text'>Our Products</span>
          </button>
    </div>
  )
}

export default WelcomeButtons