import { WidgetItem } from '@/components';
import { products, type Product } from '@/products/data/products';
import { ItemCard } from '@/shopping-cart/components/itemCard';
import { cookies } from 'next/headers';

export const metadata = {
 title: 'Cart',
 description: 'Productos en el carrito de compras',
};

interface ProductInCart {
    product: Product;
    quantity: number;
}

const getProductsInCart = (cart: { [id:string]:number }): ProductInCart[] => {

    const productsInCart: ProductInCart[] = [];

    Object.entries(cart).forEach( ([key, value ]) => {
        const product: Product | undefined = products.find((product) => product.id === key); // Puede retornar undefined si no pilla el valor
        if ( product ) {
            productsInCart.push({
                product,
                quantity: value
            });
        }
    });

    return productsInCart;
}

const getSubTotalInCart = ( productsInCart: ProductInCart[] ): number => {
    return productsInCart.reduce( (prev, current) => ( current.product.price * current.quantity ), 0);
}

export default function CartPage() {
  
  const cookiesStore = cookies();
  const cart = JSON.parse( cookiesStore.get('cart')?.value ?? '{}' ) as { [id:string]:number };
  const productsInCart = getProductsInCart(cart);
  const totalToPay = getSubTotalInCart(productsInCart);
  
  return (
    <div>
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="mb-2"/>

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
            {
                productsInCart.map(productInCart => (
                    <ItemCard
                        key={productInCart.product.id}
                        {...productInCart}
                    />
                ))
            }
        </div>
        <div className='flex flex-col w-full sm:w-4/12'>
            <WidgetItem title='Total a Pagar'>
                <div className='mt-2 flex justify-center gap-4'>
                    <h3 className='text-3xl font-bold text-gray-700'>{`$${totalToPay}`}</h3>
                </div>
                <span className='font-bold text-center text-gray-500'>{` Impuestos al 15%: $${(totalToPay * 0.15).toFixed(2) }`}</span>
            </WidgetItem>
        </div>
      </div>
    </div>
  );
}