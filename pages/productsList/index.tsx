import { DataType } from "../../component/Type/ProductType";
import { Products } from "../../component/ProductList/ProductList";
import React from "react";
import { useAppDispatch } from "../../redux/store/hook";
import { useEffect } from "react";
import { addProductList } from "../../redux/slice/ProductList";
export default function ProductListPage({
  ProductList,
}: {
  ProductList: DataType[];
}) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addProductList(ProductList));
  }, []);
  return <Products />;
}
