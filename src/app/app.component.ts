import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'questionnaire';
  result = '';
  validator = true;
  submitted = false;
  rightAnswer = 0;

  // set of some questions hardcoded here 
  allQuestions = [
    {
      title: 'What is scientefic name of Cobra?',
      options: ['Naja Naja', 'Rosa indica', 'Mangi fera indica', 'Homo sepiens'].sort(() => 0.5 - Math.random()),
      answer: 'Naja Naja',
      selectedAnswer: '',
      explain : 'Naja Naja is the correct answer'
    },
    {
      title: 'What is capital of Austria?',
      options: ['Viena', 'New Delhi', 'Seatle', 'Berlin'].sort(() => 0.5 - Math.random()),
      answer: 'Viena',
      selectedAnswer: '',
      explain : 'Viena is the correct answer'
    },
    {
      title: 'Who is inventor of vaccine?',
      options: ['Edward Gener', 'George O\'neil', 'Munaro', 'Autohan'].sort(() => 0.5 - Math.random()),
      answer: 'Edward Gener',
      selectedAnswer: '',
      explain : 'Edward Gener is the correct answer'
    },
    {
      title: 'Who is the largest shoe manufacturer in the world?',
      options: ['Nike', 'Adidas', 'Asics', 'Puma'].sort(() => 0.5 - Math.random()),
      answer: 'Nike',
      selectedAnswer: '',
      explain : 'Nike is the correct answer'
    },
    {
      title: 'Who won the fifa 2014 football world cup?',
      options: ['Germany', 'Brasil', 'France', 'Nepal'].sort(() => 0.5 - Math.random()),
      answer: 'Germany',
      selectedAnswer: '',
      explain : 'Germany is the correct answer'
    },
    {
      title: 'which is the largest river in the world?',
      options: ['Amazon', 'Nile', 'Ganga', 'Thems'].sort(() => 0.5 - Math.random()),
      answer: 'Amazon',
      selectedAnswer: '',
      explain : 'Amazon is the correct answer'
    },
    {
      title: 'Which is the tallest building in the world?',
      options: ['Burj Khalifa', 'Efiel Tower', 'Supernova', 'Paramount Symphony'].sort(() => 0.5 - Math.random()),
      answer: 'Burj Khalifa',
      selectedAnswer: '',
      explain : 'Burj khalifa is the correct answer'
    },
    {
      title: 'Where is the world\'s tallest statue?',
      options: ['India', 'China', 'thailand', 'Great Britain'].sort(() => 0.5 - Math.random()),
      answer: 'India',
      selectedAnswer: '',
      explain : 'India is the correct answer'
    },
  ];

  // shuffle the array to change the order to random and select 4 questions
  shuffledQuestions = this.allQuestions.sort(() => 0.5 - Math.random()).slice(0, 4);

  submitQuestionnaire() {
    this.validator = true;
    this.shuffledQuestions.forEach(element => {
      if (element.selectedAnswer == '') {
       this.validator = false; 
      }
    });
    // if no validation eror the count the result
    if(this.validator == true){
      this.submitted = true;
      this.shuffledQuestions.forEach(element => {
        if (element.selectedAnswer == element.answer) {
         this.rightAnswer += 1; 
        }
      });
    }
    window.scroll(0,0);
  }

  enterAnswer(i, option) {
    this.submitted = false;
    this.validator = true;
    this.shuffledQuestions[i].selectedAnswer = option;
  }

}
