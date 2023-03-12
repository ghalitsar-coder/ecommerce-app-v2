export type LabelValueProps = { label: string; value: string };

export type FilterOption = {
  label: string;
  name: string;
};
export type PriceFilter = {
  name: string;
  allowOn: string;
  placeholder: string;
};

export type FilterBy = {
  availability: FilterOption[];
  prices: PriceFilter[];
  offers: LabelValueProps[];
  stocks: LabelValueProps[];
};
export type CurrentFilter = {
  categories: string;
  availability: string;
  price: {
    min: string;
    max: string;
  };
};
export const categories = ["SmartPhone", "Tv", "Camera", "Laptop"];

export const filterBy: FilterBy = {
  availability: [
    { label: "In Stock", name: "inStock" },
    { label: "Out Of Stock", name: "outOfStock" },
  ],
  offers: [
    { label: "Cashback", value: "Cashback" },
    { label: "Diskon", value: "Diskon" },
    { label: "COD", value: "COD" },
    { label: "Harga Grosir", value: "Harga Grosir" },
  ],
  stocks: [
    { label: "Preorder", value: "Preorder" },
    { label: "Tersedia", value: "Tersedia" },
    { label: "Tidak Tersedia", value: "Tidak Tersedia" },
  ],
  prices: [
    { name: "min", allowOn: "allowNumericOnly", placeholder: "Minimum $100" },
    { name: "max", allowOn: "allowNumericOnly", placeholder: "Maximum $100" },
  ],
};

export type Filter = {
  handleFilter: (
    type: string,
    item: LabelValueProps | string,
    moreThanOneValues?: boolean
  ) => () => void;
  currentFilter: Partial<CurrentFilterProps>;
};

export type filterKeyProps =
  | "availability"
  | "categories"
  | "color"
  | "offers"
  | "tags";

export type CurrentFilterProps = {
  categories: string;
  availability: string;
  color: { [key: string]: string };
  stock: { [key: string]: string };
  offers: LabelValueProps[];
  price: { min: number | string; max: number | string };
  tags: { [key: string]: string }[];
};
