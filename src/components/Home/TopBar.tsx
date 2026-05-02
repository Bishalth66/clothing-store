import Link from "next/link"

const TopBar = () => {
  return (
    <div className='bg-black hidden w-full text-[13px] font-medium h-fit py-2 text-white lg:flex justify-between px-10 '>
        <p className='uppercase'>Free Shipping on Nepal orders over $50</p>
        <div className='flex items-center gap-2'>
        <Link href={'/signup'}>Join Us</Link>
        <div>| </div>
        <Link href={'/login'}>Login</Link>
        </div>
    </div>
  )
}

export default TopBar