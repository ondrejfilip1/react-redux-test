import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { Trash, ShoppingCart } from "lucide-react";
import { removeProduct } from "@/store/slices/cartSlice";

export default function ProductHeader() {
  const { cart } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    cart.forEach((element) => {
      total += element.price;
    });
    setTotalPrice(total);
  }, [cart]);

  const removeFromCart = (index) => {
    dispatch(removeProduct(index));
  };

  return (
    <>
      <div className="sticky top-0 w-full p-4 backdrop-blur-lg flex justify-between gap-2 items-center">
        <p className="text-xl">E-Shop</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <ShoppingCart />
              Košík
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-2 w-56">
            {cart && cart.length > 0 ? (
              cart.map((value, index) => (
                <Fragment key={index}>
                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-2">
                      <Button
                        variant={"icon"}
                        onClick={() => removeFromCart(index)}
                      >
                        <Trash />
                      </Button>
                      {value.name}
                    </div>
                    <p className="my-auto">{value.price},-</p>
                  </div>
                </Fragment>
              ))
            ) : (
              <p className="text-center">Your cart is empty</p>
            )}
            {cart && cart.length > 0 && (
              <>
                <div className="border-b my-4" />
                <p>Total price: {totalPrice},-</p>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
