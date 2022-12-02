export default interface Product {
    id?:number;
    productId: number;
    productName: string;
    productPrice: number;
    productDescription: string;
    productImageUrl: string;
    productQuantity: number;
    productSeller: string;
    ratings:number;
}