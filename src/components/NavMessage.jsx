import React from 'react'

function NavMessage() {
  return (
   <li className='nav-item dropdown'>
    <a className='nav-link nav-icon' href="#" data-bs-toggle="dropdown">
      <i className='bi bi-chat-left-text'></i>
      <span className='badge bg-success badge-number'>3</span>
    </a>

    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
      <li className='dropdown-header'>You have 3 new messages
        <a href="#">
          <span className='badge rounded-pill bg-primary p-2 ms-2'>View All</span>
        </a>
      </li>
      <li>
        <hr className='dropdown-divider'/>
      </li>

      <li className='message-item'>
        <a href="#">
          <img src="assets/img/mess" alt="" className='rounded-circle' />
          <div>
            <h4>Maria Hudson</h4>
            <p>"We’ve reduced stockouts by 40% since implementing this system.</p>
            <p>4 hours ago</p>
          </div>
        </a>
      </li>
      <li>
        <hr className='dropdown-divider'/>
      </li>

      <li className='message-item'>
        <a href="#">
          <img src="assets/img/mess" alt="" className='rounded-circle' />
          <div>
            <h4>Sofia Hussain</h4>
            <p>Keep track of your stock, reduce losses, and make informed decisions with our robust inventory management solution.</p>
            <p>3 hours ago</p>
          </div>
        </a>
      </li>

      <li className='message-item'>
        <a href="#">
          <img src="assets/img/mess" alt="" className='rounded-circle' />
          <div>
            <h4>Gautam Khan</h4>
            <p>Track inventory in real time, gain insights into product flow, and boost profitability with our cutting-edge tools.</p>
            <p>30 min ago</p>
          </div>
        </a>
      </li>

      <li className='message-item'>
        <a href="#">
          <img src="assets/img/mess" alt="" className='rounded-circle' />
          <div>
            <h4>Biplob Hazarika</h4>
            <p>Meet customer demand with ease by maintaining optimal stock levels and reducing fulfillment times.</p>
            <p>4 hours ago</p>
          </div>
        </a>
      </li>

      <li className='message-item'>
        <a href="#">
          <img src="assets/img/mess" alt="" className='rounded-circle' />
          <div>
            <h4>Pinky Das</h4>
            <p>Sign up for a free trial and see how our platform can streamline your stock management.</p>
            <p>6 hours ago</p>
          </div>
        </a>
      </li>
    </ul>
   </li>
  )
}

export default NavMessage;