import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <a><h3>BookeStore CMS</h3></a>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
        <a href="">profile</a>
      </nav>
    </header>
  )
}

export default Navbar;