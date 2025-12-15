import { Button } from "@/components/ui/button";
import { addProduct } from "@/store/slices/cartSlice";
import { ShoppingBasket } from "lucide-react";
import { useDispatch } from "react-redux";

export default function ProductBox(props) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addProduct({
        name: props.name,
        price: props.price,
      })
    );
  };

  return (
    <>
      <div className="p-4 border rounded-2xl">
        <img
          draggable={false}
          src={props.imageUrl}
          alt="product image"
          className="aspect-square object-center object-contain max-h-40 h-full mx-auto"
        />
        <p className="text-xl">{props.name}</p>
        <p>{props.price},-</p>
        <Button className="mt-2" onClick={addToCart}>
          <ShoppingBasket />
          Add to Cart
        </Button>
      </div>
    </>
  );
}
