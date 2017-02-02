var React=require('react');
var {Link,IndexLink}=require('react-router');
var Nav=()=>{
  return(
    <div>
        <div className="top-bar fixed">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Time App</li>
              <li className="menu-text">
                <IndexLink to='/' activeClassName="active-link">Timer</IndexLink>
              </li>
              <li className="menu-text">
                <Link to='/' activeClassName="active-link">Countdown</Link>
              </li>
            </ul>
          </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li className="menu-text">
                  Created by hari from mead
                </li>

              </ul>
            </div>
        </div>
    </div>

  )
}
module.exports=Nav;
