import {Component} from '@angular/core';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  questions: FAQItem[];
}

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.css'
})
export class FAQPageComponent {
  openQuestion: string | null = null;

  faqCategories: FAQCategory[] = [
    {
      name: 'Product Information',
      questions: [
        {
          question: 'How do I find my correct shoe size?',
          answer: 'We recommend measuring your feet in the afternoon (feet typically swell during the day) and referring to our size guide. For the most accurate fit, measure both feet while standing and use the measurements of your larger foot. Our size chart provides both US and European sizes with corresponding foot measurements.'
        },
        {
          question: 'What materials are used in your shoes?',
          answer: 'Our shoes are crafted with premium materials including breathable mesh uppers, cushioned EVA midsoles, and durable rubber outsoles. We carefully select materials that provide the perfect balance of comfort, durability, and performance. All our materials are ethically sourced and environmentally conscious.'
        },
        {
          question: 'Are your shoes suitable for marathon running?',
          answer: 'Yes, our premium running shoes are designed and tested for long-distance running, including marathons. They feature enhanced cushioning, superior arch support, and durable construction specifically engineered for extended wear and high mileage.'
        }
      ]
    },
    {
      name: 'Shipping & Delivery',
      questions: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for 1-2 business day delivery. International shipping times vary by location but generally take 7-14 business days.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. You can view specific shipping rates and estimated delivery times during checkout.'
        },
        {
          question: 'Is shipping free?',
          answer: 'We offer free standard shipping on all US orders over $100. International orders and express shipping options have additional costs that are calculated at checkout based on destination and weight.'
        }
      ]
    },
    {
      name: 'Returns & Refunds',
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for unworn shoes in their original packaging. Returns are free for customers in the US. Simply initiate a return through your account or contact our customer service team.'
        },
        {
          question: 'How do I initiate a return?',
          answer: 'To initiate a return, log into your account and select the order containing the item you wish to return. Follow the prompts to generate a return shipping label. Pack the items securely in their original packaging and attach the label.'
        },
        {
          question: 'When will I receive my refund?',
          answer: "Once we receive and inspect your return, we'll process your refund within 3-5 business days. The funds may take an additional 5-10 business days to appear in your account, depending on your bank's processing time."
        }
      ]
    }
  ];

  toggleQuestion(question: string) {
    this.openQuestion = this.openQuestion === question ? null : question;
  }

  isQuestionOpen(question: string): boolean {
    return this.openQuestion === question;
  }
}
