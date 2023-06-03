import CartList from '@/components/CartList';
import Form from '@/components/Form';
import SubTotal from '@/components/SubTotal';
import React from 'react'

const Cart = () => {
  return (
    <section className='flex p-20 h-full justify-between bg-gray-100'>
      <Form />
      <CartList />
      <SubTotal />
    </section>
  )
}

export default Cart;