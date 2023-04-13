export interface CartContent {
  code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  storeId: string;
  productList: ProductList[];
}

export interface ProductList {
  productId: string;
  productDetailId: string;
  quantity: number;
  notes: string;
  storeId: string;
  storeName: string;
  productName: string;
  productVarName: string;
  price: number;
  storeLocation: null | string;
  productDocuments: ProductDocument[];
  productWeight: number;
}

export interface ProductDocument {
  version: number;
  isActive: boolean;
  productDocumentId: string;
  notes: string;
  url: string;
}
