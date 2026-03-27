import { APP_NAME } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400'>
      <div className='max-w-7xl mx-auto p-10'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          {/* Brand & Copyright */}
          <div className='flex flex-col items-center md:items-start gap-2'>
             <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-zinc-100">
                <span className="text-orange-500 underline decoration-2 underline-offset-4">Build</span>-a-Flare
             </div>
             <p className='text-sm'>
               &copy; {currentYear} {APP_NAME}. All Rights Reserved.
             </p>
          </div>

          {/* Quick Links */}
          <nav className='flex flex-wrap justify-center gap-8 text-sm font-medium'>
            <a href="/about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="/terms" className="hover:text-orange-500 transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-orange-500 transition-colors">Privacy</a>
            <a href="/help" className="hover:text-orange-500 transition-colors">Help</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;