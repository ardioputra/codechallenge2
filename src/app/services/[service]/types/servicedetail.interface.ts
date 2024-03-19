export interface Iservice {
  id: string;
  image: string;
  name: string;
  desc: string;
  solution: {
    firstpack: {
      name: string;
      price: string;
      jobdesc: string;
    };
    secondpack: {
      name: string;
      price: string;
      jobdesc: string;
    };
    thirdpack: {
      name: string;
      price: string;
      jobdesc: string;
    };
  };
}
