export interface IEmploye {
    _id?: number;
    user?: number;
    name: string;
    lastname:string;
    grade :string;
    age :number;
    departement :string;
    profession :string;
    payment? : boolean
}