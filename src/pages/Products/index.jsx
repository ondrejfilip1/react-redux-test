import ProductBox from "./ProductBox";
import ProductHeader from "./ProductHeader";

export default function Products() {
  const productData = [
    {
      name: "Shower Gel",
      imageUrl: `https://www.dermosil.com/_next/image/?url=https%3A%2F%2Flitium.dermosil.com%2F_images%2Facbf14bd-b4df-4904-bc34-1dce34a6299a%2Fman-challenger-shower-gel-3677-.png&w=1920&q=90`,
      price: 259,
    },
    {
      name: "Chleba",
      imageUrl: `https://happycampersgf.com/cdn/shop/files/NewFSB1_4ae8fd94-1b2b-4199-9c6a-7bbb7d217c44_1440x.png?v=1691560066`,
      price: 20,
    },
    {
      name: "Voda",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Z65Tx9ACWpXPu6ZOrmrGo5yt5bqfSKH5xg&s",
      price: 25,
    },
    {
      name: "Snickers",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUzEPRKhJaOqF-4BUf7MgYTFKRg5MivqaoQ&s",
      price: 39,
    },
    {
      name: "Jablko",
      imageUrl:
        "https://medilifefood.com/wp-content/uploads/2019/10/purepng.com-red-appleappleapplesfruitsweet-1701527180174lrnig.png",
      price: 59,
    },
  ];

  return (
    <>
      <ProductHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mx-2">
        {productData.map((value, index) => (
          <ProductBox {...value} key={index} />
        ))}
      </div>
    </>
  );
}
