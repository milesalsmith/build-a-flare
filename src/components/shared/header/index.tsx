import Image from 'next/image';
import Link from 'next/link';

// We'll keep this local until we create your constants file
import { APP_NAME } from '@/lib/constants';

const Header = () => {
  return (
    <header className='w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50'>
      {/* We replaced 'wrapper flex-between' with standard Tailwind 4 classes */}
      <div className='max-w-7xl mx-auto flex items-center justify-between p-4'>
        
        <div className='flex items-center'>
          {/* CategoryDrawer will go here later */}
          
          <Link href='/' className='flex items-center ml-4 group'>
            <Image
              src='/images/logo.svg' // Path is relative to the 'public' folder
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true} // High priority for LCP performance
              className="group-hover:scale-105 transition-transform"
            />
            <span className='hidden lg:block font-bold text-2xl ml-3 tracking-tight'>
              {APP_NAME}
            </span>
          </Link>
        </div>

        {/* Search Placeholder - keeps the layout balanced while we build the rest */}
        <div className='hidden md:block flex-1 max-w-sm mx-8'>
           <div className="w-full h-10 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center px-4 text-zinc-400 text-sm">
             Search products...
           </div>
        </div>

        {/* Menu Placeholder */}
        <nav className="flex items-center gap-6 font-medium text-sm text-zinc-600 dark:text-zinc-400">
           <Link href="/cart" className="hover:text-orange-500 transition-colors">Cart</Link>
           <Link href="/login" className="px-5 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:opacity-90 transition-all active:scale-95">
             Sign In
           </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;