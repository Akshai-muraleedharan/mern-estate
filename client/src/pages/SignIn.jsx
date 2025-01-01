import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {signinStart,signInSuccess,signinFailure} from '../redux/user/userSlice'
import OAuth from '../components/OAuth'

export default function SignIn() {

  const [formData,setFormData] = useState({})
  const {loading,error} = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()


 const handleChange = (e) => {
  setFormData(
   {
    ...formData,
    [e.target.id] : e.target.value,
   }
  )
 }


 const handleSubmit =async (e) => {
    e.preventDefault()

    try {

      dispatch(signinStart())
      const res =await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body:JSON.stringify(formData)
      })

      const data =await res.json()

      if(data.success === false){
        dispatch(signinFailure(data.message))
     
        return
      }
      
     dispatch(signInSuccess(data))
      navigate('/')
    
    } catch (error) {
     dispatch(signinFailure(error.message))
    
    }
 }



  return (
   <div className='p-3 max-w-lg mx-auto'>
    <h1 className='font-semibold text-3xl text-center my-7'>Sign In</h1>

    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
     
      <input type="email" placeholder='email' id='email' className='rounded p-3 border' onChange={handleChange}/>
      <input type="password" placeholder='password' id='password' className='rounded p-3 border' onChange={handleChange}/>

      <button disabled={loading} className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>{loading ? 'Loading' : 'Sign in'}</button>
   <OAuth />
    </form>

    <div className='flex gap-2 mt-5'>
      <p>Dont have an account?</p>

      <Link to={'/sign-up'}>
      <span className='text-blue-700'>Sign up</span>
        </Link>
    </div>

    {error && <p className='text-red-500 mt-5'>{error}</p>}
   </div>
  )
}

