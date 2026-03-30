'use client';

import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-foreground'>
      <div className='max-w-md w-full p-8 text-center border border-border bg-card/50 backdrop-blur-sm rounded-3xl shadow-xl'>
        <div className="flex justify-center mb-6">
          <Image
            src='/images/logo.svg'
            width={64}
            height={64}
            alt={`${APP_NAME} logo`}
            priority
            className="hover:rotate-12 transition-transform duration-300"
          />
        </div>
        
        <h1 className='text-4xl font-black tracking-tighter mb-2'>404</h1>
        <h2 className='text-xl font-bold mb-4'>Endpoint Not Found</h2>
        
        <p className='text-muted-foreground mb-8'>
          The resource you are looking for has been purged from the edge cache or never existed.
        </p>

        <Button asChild variant='default' className='rounded-full px-8 py-6 text-lg shadow-lg hover:scale-105 transition-all'>
          <Link href='/'>Return to Origin</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;