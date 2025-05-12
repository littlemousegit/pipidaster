
import { Container, Title, Filters } from "@/components/shared/";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title size="lg" text="Все пиццы" className="font-black" />
      </Container>
      <TopBar />
      <Container className="mt-10 pd-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" items={[{
                id: 1,
                name: 'Сырный цыпленок',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif',
                price: 395,
                items: [{price: 500}]
              },
              {
                id: 2,
                name: 'Диабло',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6149eb101d8727573088fa2eff.avif',
                price: 449,
                items: [{price: 500}]
              },
              {
                id: 3,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif',
                price: 399,
                items: [{price: 500}]
              },
              {
                id: 4,
                name: 'Сырный цыпленок',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif',
                price: 395,
                items: [{price: 500}]
              },
              {
                id: 5,
                name: 'Диабло',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6149eb101d8727573088fa2eff.avif',
                price: 449,
                items: [{price: 500}]
              },
              {
                id: 6,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif',
                price: 399,
                items: [{price: 500}]
              }
            ]} categoryId={1}/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
