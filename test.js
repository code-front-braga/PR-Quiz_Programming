export const programmingLanguage = [
  {
    id: 'pl-01',
    question: 'Qual linguagem de programação abaixo foi iniciada na empresa Sun Microsystems?',
    answerOptions: ['JavaScript', 'Java', 'C++', 'C#', 'Assembly'],
    correctAnswer: 'Java',
  },
];

if (programmingLanguage[0].answerOptions[1] === programmingLanguage[0].correctAnswer) {
  console.log('ok');
} else {
  console.log('nok');
}
