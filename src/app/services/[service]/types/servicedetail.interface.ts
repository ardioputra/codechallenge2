export interface Iservice {
  id: string;
  image: string;
  name: string;
  desc: string;
  solution: [
    {
      name: string;
      image:string;
      price: string;
      jobdesc: string;
    },
    {
      name: string;
      image:string;
      price: string;
      jobdesc: string;
    },
    {
      name: string;
      image:string;
      price: string;
      jobdesc: string;
    }
  ];
}
