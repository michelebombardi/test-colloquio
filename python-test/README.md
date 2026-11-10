# Test Python

Il codice da analizzare è `main.py`.

Per eseguirlo online: [apri su Python Tutor](https://pythontutor.com/visualize.html#code=def%20trova_duplicati%28lista%2C%20visti%3D%5B%5D%29%3A%0A%20%20%20%20duplicati%20%3D%20%5B%5D%0A%20%20%20%20for%20x%20in%20lista%3A%0A%20%20%20%20%20%20%20%20if%20x%20in%20visti%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20x%20not%20in%20duplicati%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20duplicati.append%28x%29%0A%20%20%20%20%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20visti.append%28x%29%0A%20%20%20%20return%20duplicati%0A%0Aprint%28trova_duplicati%28%5B1%2C%202%2C%202%2C%203%5D%29%29%0Aprint%28trova_duplicati%28%5B3%2C%204%5D%29%29%0A&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false).

Rispondi alla domanda 1 **prima** di eseguire il codice.

1. Cosa stampa il programma? È quello che ci si aspetta?
2. Che complessità ha la funzione su una lista di 1 milione di elementi?
3. Riscrivila correttamente ed efficiente.

Ragiona ad alta voce. Puoi modificare il codice e rieseguirlo.
