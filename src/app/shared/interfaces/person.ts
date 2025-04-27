/*export interface Address {    αν ειχα subdocument, θα μπορουσα να το χα κανει ετσι αλλα στο interface person θα εβαζα address: Address
    area: string;
    road: string;
}*/

export interface Person {
  givenName: string;
  surName: string;
  age: number;
  email: string;
  address: string;
}
