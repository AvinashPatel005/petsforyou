import React from 'react'
import './index.css'
function Rating({rating}) {
  return (
    <div>
      {
        Array(Math.floor(rating)).fill().map((_,i)=>( <i key={i} class="bi bi-star-fill rating-star"></i> ))
      }
      {
        rating!==Math.floor(rating) && <i class="bi bi-star-half rating-star"></i>
      }
      {
        Array(5-Math.ceil(rating)).fill().map((_,i)=>(<i  key={i} class="bi bi-star rating-star"></i>))
      }
    </div>
  )
}

export default Rating
