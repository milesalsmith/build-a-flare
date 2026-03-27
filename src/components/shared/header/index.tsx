import Image from 'next/image'; 
import Link from 'next/link';

const APP_NAME = "Build-a-Flare";

const Header = () => {
  return (
    <header className='w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between p-4'>
        <div className='flex items-center gap-4'>
          <Link href='/' className='flex items-center gap-3 group'>
            {/* Swapping the <div> for your actual logo */}
            <Image 
              src="/public/logo.svg"
              alt={`${APP_NAME} logo`}
              width={40}
              height={40}
              priority 
              className="object-contain"
            />
            <span className='hidden lg:block font-bold text-xl tracking-tight'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        
        {/* ... rest of the nav remains the same */}
        <nav className="flex items-center gap-6 font-medium text-sm">
           <Link href="/shop" className="hover:text-orange-500 transition-colors text-zinc-600 dark:text-zinc-400">Shop</Link>
           <Link href="/cart" className="hover:text-orange-500 transition-colors text-zinc-600 dark:text-zinc-400">Cart</Link>
           <Link href="/login" className="px-5 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:opacity-90 transition-all active:scale-95">
             Sign In
           </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;