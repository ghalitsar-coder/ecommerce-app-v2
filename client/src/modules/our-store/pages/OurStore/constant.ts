
export type FilterOption = {
  label: string;
  name: string;
};
export type PriceFilter = {
  name: string;
  allowOn: string;
  placeholder: string;
};
export type SizeProps = {
  [key:string]: string;
}

export type FilterBy = {
  availability: FilterOption[];
  prices:PriceFilter[];
  sizes:SizeProps[];
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

export const filterBy :FilterBy = {
  availability: [
    { label: "In Stock", name: "inStock" },
    { label: "Out Of Stock", name: "outOfStock" },
  ],
  sizes: [
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
    { label: "XXL", value: "XXL" },
  ],
  prices : [
    { name: 'min', allowOn: 'allowNumericOnly', placeholder: 'Minimum $100' },
    { name: 'max', allowOn: 'allowNumericOnly', placeholder: 'Maximum $100' },
  ]
};

export type Filter = {
  handleFilter: (
    type: string,
    item: LabelValueProps | string,
    moreThanOneValues?: boolean
  ) => () => void;
  currentFilter: CurrentFilterProps;
};

export type filterKeyProps =
| "availability"
| "categories"
| "color"
| "sizes"
| "tags";

export type CurrentFilterProps = {
categories: string;
availability: string;
color: { [key: string]: string };
sizes: { [key: string]: string }[];
price: { min :number | string ,max :number | string };
tags: { [key: string]: string }[];
};

export type LabelValueProps = { label: string; value: string };
