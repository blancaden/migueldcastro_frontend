import React from 'react'
import CrudBlog from '../../components/CrudBlog/CrudBlog'

const AdminBlogView = () => {
  const token = localStorage.getItem('token');
  console.log(token )
  return (
  <>
    <CrudBlog/>
  </>
  )
}

export default AdminBlogView