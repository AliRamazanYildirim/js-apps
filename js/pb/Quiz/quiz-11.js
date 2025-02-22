console.log(false || null || 'quiz-11.js'); //! quiz-11.js
console.log(false && null && 'quiz-11.js'); //! false

//Erklärung: In JavaScript wird der logische ODER-Operator (||) verwendet, um den ersten wahren Operanden zu finden. Wenn kein wahrer Operand gefunden wird, wird der letzte Operand zurückgegeben. In diesem Fall ist der erste Operand false, daher wird der letzte Operand 'quiz-11.js' zurückgegeben. 

// Der logische UND-Operator (&&) wird verwendet, um den ersten falschen Operanden zu finden. Wenn kein falscher Operand gefunden wird, wird der letzte Operand zurückgegeben. In diesem Fall ist der erste Operand false, daher wird false zurückgegeben.
