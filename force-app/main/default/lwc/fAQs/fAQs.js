import { LightningElement,track,api } from 'lwc';
import getAccounts from '@salesforce/apex/SearchLink.getAccounts';
export default class FAQs extends LightningElement {
   @api searchtextvar;
    @track questions = [
        { id: 1, text: 'Why should I sell on Flipkart?', answer: 'Flipkart is a trusted and leading e-commerce platform with over 45 crore+ customers across 19000+ pin codes in India. By selling on Flipkart, you gain access to a vast customer base and Indias largest shopping festival, The Big Billion Days, along with other major shopping events. The cost of doing business on Flipkart is also low, providing a lucrative opportunity for sellers.' , showAnswer: false},
        { id: 2, text: 'How does selling on Flipkart.com work?', answer: 'Selling on Flipkart.com is a simple process. Create an account with your GSTIN, valid mobile number, email ID, bank account, and address details. List your products on the platform and manage orders. You can choose to pack and ship the products yourself or utilise Flipkarts Fulfilment by Flipkart (FBF) service for hassle-free logistics management. Payments are disbursed within 7* days from the date of product dispatch' , showAnswer: false},
        { id: 3, text: 'What is the minimum listing quantity to sell on Flipkart.com?', answer: 'To start selling on Flipkart.com, you only need a minimum of 1 product to list. However, it is recommended to have more products to leverage the wide customer reach and trust of millions of Flipkart users.' , showAnswer: false},
        { id: 4, text: 'What products can I sell on Flipkart.com?', answer: 'Flipkart.com offers a wide range of categories for sellers to choose from, including clothing, electronics, jewellery, home furnishings, books, mobiles, beauty products, kitchenware, and many more. However, some categories may require prior quality approval before going live on the platform.' , showAnswer: false},
        { id: 5, text: 'What do I need to register to sell on Flipkart.com?', answer: 'To register and sell products on Flipkart.com, you will need the following details: Business information Contact details (email ID and phone number) Tax registration details, such as GSTIN (mandatory for taxable products) and PAN (mandatory for Book Sellers)' , showAnswer: false},
        { id: 6, text: 'I dont have a website; can I still sell on Flipkart.com?', answer: 'Absolutely! You can sell on Flipkart.com without having a website. Once registered, you will gain access to the Flipkart Seller Hub, where you can list your products and start selling. Please note that Flipkart charges a small fee when your product is sold.' , showAnswer: false},

        // Add more questions and answers as needed
    ];

    toggleAnswer(event) {
        const clickedQuestionId = event.currentTarget.dataset.questionId;

        this.questions = this.questions.map(question => {
            if (question.id === parseInt(clickedQuestionId, 10)) {
                question.showAnswer = !question.showAnswer;
            } else {
                question.showAnswer = false;
            }
            return { ...question };
        });
    }

   

    closePopup() {
        this.popupContent = '';
    }
}