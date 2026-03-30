import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Product } from '@/types';
import ProductPrice from './product-price';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className='w-full max-w-sm rounded-3xl overflow-hidden border-border bg-card/50 backdrop-blur-md hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group'>
      {/* The Hero Icon Section */}
      <CardHeader className='p-4 items-center justify-center bg-zinc-50/50 dark:bg-zinc-900/30'>
        <Link 
          href={`/product/${product.slug}`} 
          className="relative w-64 h-64 flex items-center justify-center"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            height={256} 
            width={256}
            priority={true} 
            className='object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out'
          />
        </Link>
      </CardHeader>
      
      {/* The Data Section */}
      <CardContent className='p-5 grid gap-1 border-t border-border/50'>
        <div className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold'>
          {product.brand}
        </div>
        
        <Link href={`/product/${product.slug}`}>
          <h2 className='text-base font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors'>
            {product.name}
          </h2>
        </Link>
        
        <div className='flex items-center justify-between mt-4'>
          {/* Rating Engine (Simplified for now) */}
          <div className='flex items-center gap-1.5'>
            <div className="bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-bold px-1.5 py-0.5 rounded">
              {product.rating}
            </div>
            <span className='text-[10px] text-muted-foreground font-medium'>
              {product.numReviews} Reviews
            </span>
          </div>
          
          {/* Price Engine */}
          <div className="flex flex-col items-end">
            {product.stock > 0 ? (
              <ProductPrice value={Number(product.price)} />
            ) : (
              <span className='text-destructive text-[10px] font-black uppercase tracking-widest bg-destructive/10 px-2 py-1 rounded-full'>
                Out of Stock
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;