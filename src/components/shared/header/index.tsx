import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';

const Header = () => {
  return (
    <header className='w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center group'>
            <Image
              src='/images/logo.svg' 
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true} 
            />
            <span className='hidden lg:block font-bold text-2xl ml-3 tracking-tight text-foreground'>
            {APP_NAME}
            </span>
          </Link>
        </div>

        {/* This is the crucial part that connects the Toggle & Buttons */}
        <Menu />
        
      </div>
    </header>
  );
};

export default Header;