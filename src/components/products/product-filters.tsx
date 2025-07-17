'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import medusaClient from '@/lib/medusa-client';
import { useQuery } from '@tanstack/react-query';
import { type ProductCategory } from '@/types/medusa';

const fetchCategories = async (): Promise<ProductCategory[]> => {
  const { product_categories } = await medusaClient.productCategories.list();
  return product_categories;
};

const priceRanges = ['Under $50', '$50 - $100', '$100 - $200', 'Over $200'];

interface ProductFiltersProps {
  selectedCategories: string[];
  onCategoryChange: (categoryId: string, isChecked: boolean) => void;
}

export function ProductFilters({ selectedCategories, onCategoryChange }: ProductFiltersProps) {
  const { data: categories, isLoading, isError } = useQuery<ProductCategory[]>({
    queryKey: ['product_categories'],
    queryFn: fetchCategories,
  });

  return (
    <aside className="w-full lg:w-64">
      <h3 className="text-xl font-semibold mb-4">Filters</h3>
      <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {isLoading && <span>Loading categories...</span>}
              {isError && <span>Could not fetch categories.</span>}
              {categories?.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={category.id} 
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(isChecked) => onCategoryChange(category.id, !!isChecked)}
                  />
                  <label
                    htmlFor={category.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {priceRanges.map((range) => (
                <div key={range} className="flex items-center space-x-2">
                  <Checkbox id={range.toLowerCase().replace(/\s/g, '')} />
                  <label
                    htmlFor={range.toLowerCase().replace(/\s/g, '')}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {range}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}
