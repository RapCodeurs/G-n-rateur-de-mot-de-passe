function generatePassword(lenght, incluseLowerCase, incluseUpperCase, incluseNumber, incluseSymbol){

  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const number = '0123456789';
  const symbol = '!|$%?&*/#@';

  let allowed = '';
  let password = '';

  allowed += incluseUpperCase ? uppercase : '';
  allowed += incluseLowerCase ? lowercase : '';
  allowed += incluseNumber ? number : '';
  allowed += incluseSymbol ? symbol : '';

  if(lenght <= 0){
    return `(Le mot de passe doit contenir au mois 12 caracteres !)`;
  };

  if(allowed.length === 0){
    return `(Le mot de passe doit avoir au mois un chiffre!)`;
  }

  for(let i = 0; i < lenght; i++){
    const indexRandom = Math.floor(Math.random() * allowed.length);
    password += allowed[indexRandom];
  }

  const btn = document.querySelector('.btn');
  const reset = document.querySelector('.rst');

  btn.addEventListener('click', () => {
    document.querySelector('.password').textContent = password;
  })

  reset.addEventListener('click', () => {
    document.querySelector('.password').textContent = '';
  })

}


const lenghtPassword = 12;
const incluseLowerCase = true;
const incluseUpperCase = true;
const incluseNumber = true;
const incluseSymbol = true;


const password = generatePassword(lenghtPassword, 
                incluseLowerCase,        
                incluseUpperCase,
                incluseNumber, 
                incluseSymbol
              );


//console.log(password);