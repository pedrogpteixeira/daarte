export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  mainImage: string;
  hoverImage: string;
  isNew?: boolean;
  onSale?: boolean;
  salePrice?: number;
  inStock: boolean;
}

export const categories = [
  "All",
  "Clothing",
  "Accessories",
  "Footwear",
  "Home Goods",
  "Electronics"
];

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 29.99,
    category: "Clothing",
    mainImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    isNew: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Leather Crossbody Bag",
    price: 89.99,
    category: "Accessories",
    mainImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    inStock: true,
  },
  {
    id: "3",
    name: "Running Sneakers",
    price: 119.99,
    category: "Footwear",
    mainImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    onSale: true,
    salePrice: 89.99,
    inStock: true,
  },
  {
    id: "4",
    name: "Ceramic Plant Pot",
    price: 24.99,
    category: "Home Goods",
    mainImage: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=2149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
  },
  {
    id: "5",
    name: "Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    mainImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    isNew: true,
    inStock: true,
  },
  {
    id: "6",
    name: "Denim Jacket",
    price: 79.99,
    category: "Clothing",
    mainImage: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    inStock: true,
  },
  {
    id: "7",
    name: "Minimalist Watch",
    price: 149.99,
    category: "Accessories",
    mainImage: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    inStock: true,
  },
  {
    id: "8",
    name: "Leather Boots",
    price: 159.99,
    category: "Footwear",
    mainImage: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    inStock: true,
  },
  {
    id: "9",
    name: "Scented Candle",
    price: 34.99,
    category: "Home Goods",
    mainImage: "https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://media.istockphoto.com/id/174667222/pt/foto/queimar-vela.jpg?s=2048x2048&w=is&k=20&c=EI9J7kn3-3BoUIJr9Wg5DGvr2TTbpueYrdNCq_Z-CWQ=",
    inStock: true,
  },
  {
    id: "10",
    name: "Smart Speaker",
    price: 129.99,
    category: "Electronics",
    mainImage: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    onSale: true,
    salePrice: 99.99,
    inStock: true,
  },
  {
    id: "11",
    name: "Linen Shirt",
    price: 59.99,
    category: "Clothing",
    mainImage: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    inStock: true,
  },
  {
    id: "12",
    name: "Sunglasses",
    price: 79.99,
    category: "Accessories",
    mainImage: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    isNew: true,
    inStock: true,
  },
  {
    id: "13",
    name: "Slip-on Sneakers",
    price: 69.99,
    category: "Footwear",
    mainImage: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    inStock: true,
  },
  {
    id: "14",
    name: "Throw Pillow",
    price: 39.99,
    category: "Home Goods",
    mainImage: "https://images.unsplash.com/photo-1580460848618-b1a43e74519b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImage: "https://images.unsplash.com/photo-1588706235076-627d896e9f67?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
  },
  {
    id: "15",
    name: "Wireless Earbuds",
    price: 149.99,
    category: "Electronics",
    mainImage: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://media.istockphoto.com/id/2154218635/pt/foto/wireless-blutooth-earbuds.jpg?s=2048x2048&w=is&k=20&c=jydLZd8ewChTPtLzhIgBL5BAxAk7_uPIUJlc0H2fYG4=",
    inStock: true,
  },
  {
    id: "16",
    name: "Knit Sweater",
    price: 89.99,
    category: "Clothing",
    mainImage: "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    hoverImage: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    onSale: true,
    salePrice: 69.99,
    inStock: true,
  },
];

export const similarProducts = [
  {
    id: "1",
    name: "Classic Running Shoes",
    price: 99.99,
    category: "Running Sneakers",
    mainImage: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    hoverImage: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isNew: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Sport Training Shoes",
    price: 119.99,
    category: "Running Sneakers",
    mainImage: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    hoverImage: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
  },
  {
    id: "3",
    name: "Trail Running Shoes",
    price: 139.99,
    category: "Running Sneakers",
    mainImage: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    hoverImage: "https://images.unsplash.com/photo-1711466067057-d1bd10183924?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    salePrice: 89.99,
    inStock: true,
  },
  {
    id: "4",
    name: "Lightweight Runners",
    price: 109.99,
    category: "Running Sneakers",
    mainImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    hoverImage: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
  },
];


export const productImages = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
];
