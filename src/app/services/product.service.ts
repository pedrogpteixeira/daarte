import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      id: '1',
      name: 'Calças de Fato de Treino',
      price: 29.99,
      description: 'Confortáveis e estilosas, ideais para o dia a dia.',
      images: ['assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg']
    },
    {
      id: '2',
      name: 'Mala Artesanal',
      price: 45.00,
      description: 'Feita à mão com materiais sustentáveis.',
      images: ['assets/bag1.jpg', 'assets/bag2.jpg']
    }
  ];

  getProductById(id: string) {
    return this.products.find(p => p.id === id);
  }
}
