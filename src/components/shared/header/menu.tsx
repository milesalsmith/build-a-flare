import { Button } from '@/components/ui/button';
import ModeToggle from './mode-toggle';
import Link from 'next/link';
import { ShoppingCart, UserIcon, EllipsisVertical } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Menu = () => {
  return (
    <div className='flex justify-end gap-3'>
      {/* Desktop Navigation */}
      <nav className='hidden md:flex w-full max-w-xs gap-2 items-center'>
        <ModeToggle />
        
        <Button asChild variant='ghost' className="rounded-full text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <Link href='/cart'>
            <ShoppingCart className="h-5 w-5 mr-1" /> 
            <span>Cart</span>
          </Link>
        </Button>

        <Button asChild className="rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all">
          <Link href='/sign-in'>
            <UserIcon className="h-5 w-5 mr-1" />
            <span>Sign In</span>
          </Link>
        </Button>
      </nav>

      {/* Mobile Navigation (Sheet) */}
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size="icon" className='align-middle text-foreground'>
              <EllipsisVertical className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className='flex flex-col items-start gap-4 pt-10'>
            <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
            
            <div className="flex items-center justify-between w-full border-b pb-4">
              <span className="text-sm font-medium text-muted-foreground">Appearance</span>
              <ModeToggle />
            </div>

            <Button asChild variant='ghost' className="w-full justify-start text-lg py-6 rounded-xl">
              <Link href='/cart'>
                <ShoppingCart className="mr-4 h-6 w-6" /> Cart
              </Link>
            </Button>

            <Button asChild className="w-full justify-start text-lg py-6 rounded-xl bg-primary text-primary-foreground">
              <Link href='/sign-in'>
                <UserIcon className="mr-4 h-6 w-6" /> Sign In
              </Link>
            </Button>
            
            <SheetDescription className="text-xs text-muted-foreground mt-auto">
              Secure Cloud Commerce @ Edge
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;