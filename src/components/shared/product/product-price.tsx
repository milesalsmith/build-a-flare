import { cn } from '@/lib/utils';

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // 16-ified: Ensure we handle the value as a number safely
  const stringValue = value.toFixed(2);
  const [intValue, floatValue] = stringValue.split('.');

  return (
    <div className={cn('text-2xl font-bold tracking-tight text-foreground flex items-baseline', className)}>
      {/* The Currency Symbol */}
      <span className='text-xs font-semibold mr-0.5 self-start mt-1'>$</span>
      
      {/* The Dollars */}
      <span className="leading-none">{intValue}</span>
      
      {/* The Cents - 'align-super' is a bit old school, 
          'self-start' with a smaller font is the modern way */}
      <span className='text-xs font-semibold self-start mt-1'>.{floatValue}</span>
    </div>
  );
};

export default ProductPrice;