import ProductCard from '@/components/shared/product/product-card';
import { Product } from '@/types/index'; 

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className='my-10'>
      {title && (
        <h2 className='text-2xl font-bold mb-6 text-foreground tracking-tight'>
          {title}
        </h2>
      )}
      {data.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {limitedData.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed rounded-3xl bg-muted/30">
          <p className="text-muted-foreground">No products detected at the edge.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;