import Link from 'next/link'
import './navbar.scss'
const Navbar = () => {
  return (
      <nav className="navbar flex justify-between align-middle">
          <div className='wrapper flex'>
            <div className='flex'>
              <div></div>
              <h1 className="uppercase logo-name">Nerzpaints</h1>
          </div>

          <ul className='flex'>
            <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>  
                  <li><Link href="/reviews">Reviews</Link></li>  
                  <li><Link href="/shop">Shop</Link></li>  
            <li><Link href="/blog">Blog</Link></li>
          </ul>
</div>
          <div className='flex align-middle btn-group'>
              <button className='contact-btn' type="button">Contact</button>
        <i className="fa fa-search" aria-hidden="true"></i>
          </div>
    </nav>
  )
}

export default Navbar