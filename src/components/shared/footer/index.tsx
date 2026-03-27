import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400'>
      <div className='max-w-7xl mx-auto p-10'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          
          {/* Bottom Left: Logo & Copyright */}
          <div className='flex flex-col items-center md:items-start gap-3'>
             <Link href='/' className='flex items-center gap-2 group'>
                <Image
                  src='/images/buildaflare.svg'
                  alt={`${APP_NAME} logo`}
                  height={42} 
                  width={42}
                  className="opacity-80 group-hover:opacity-100 transition-opacity"
                />
             </Link>
             <p className='text-sm'>
               &copy; {currentYear} {APP_NAME}. All Rights Reserved.
             </p>
          </div>

          {/* Right Side: Quick Links */}
          <nav className='flex flex-wrap justify-center gap-8 text-sm font-medium'>
            <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
            <Link href="/terms" className="hover:text-orange-500 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy</Link>
            <Link href="/help" className="hover:text-orange-500 transition-colors">Help</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;