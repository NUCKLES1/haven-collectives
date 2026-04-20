import React, {useState} from 'react'

const CartIcon = () => {
    const [isClient, setIsClient] = useState()
    if(isClient) {
        return null;
    }
  return (
    <div>

    </div>
  )
}

export default CartIcon