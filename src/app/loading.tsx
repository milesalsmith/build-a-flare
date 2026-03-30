import Image from 'next/image';
// Note: Ensure your loader.gif is in src/assets/ or public/
import loader from '@/assets/loader.gif'; 

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-9999">
      <div className="flex flex-col items-center gap-4">
        <Image 
          src={loader} 
          height={120} 
          width={120} 
          alt='Loading...' 
          priority
          className="dark:invert" 
        />
        <p className="text-sm font-medium text-muted-foreground animate-pulse">
          Optimizing Edge Routes...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;