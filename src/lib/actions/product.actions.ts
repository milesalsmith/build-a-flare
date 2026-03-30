import { Product } from '@/types'; // This matches the file we made in step 1
import sampleData from '@/db/sample-data';

export async function getLatestProducts() {
  return sampleData.products.slice(0, 4) as Product[];
}

export async function getFeaturedProducts() {
  // Add the type (product: Product) to the filter
  return sampleData.products.filter((product: Product) => product.isFeatured);
}