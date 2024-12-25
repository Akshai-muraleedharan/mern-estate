import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
   <div className='p-3 max-w-lg mx-auto'>
    <h1 className='font-semibold text-3xl text-center my-7'>Sign up</h1>

    <form className='flex flex-col gap-4'>
      <input type="text" placeholder='username' id='username' className='rounded p-3 border' />
      <input type="email" placeholder='email' id='email' className='rounded p-3 border' />
      <input type="password" placeholder='password' id='password' className='rounded p-3 border' />

      <button  className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Sign up</button>
    </form>

    <div className='flex gap-2 mt-5'>
      <p>Have an account?</p>

      <Link to={'/sign-in'}>
      <span className='text-blue-700'>Sign in</span>
        </Link>
    </div>
   </div>
  )
}

