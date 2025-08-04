// Nivel 1 

// Criação das principais variáveis
let nome = "Selene";     
let classe = "Maga";   
let nivel = 1;   
let vida = 100;       
let ouro = 250;        
let xp = 3200;        

// Definição de constantes 
let NOME_ARMA = "Daga Encantada";
let DANO_BASE = 100;    
let NOME_ARMADURA = "Capuz do conhecimento "  
let DEFESA_BASE = 50;

// Aplicação de operadores de atribuição

// O personagem treinou e ganhou 150 pontos de experiência
xp += 150;
// Comprou uma poção por 30 moedas de ouro
ouro -= 30;
// Usou a poção e recuperou 40 pontos de vida
vida += 40;
// A arma foi encantada, e seu dano foi dobrado
DANO_BASE *= 2;

// Cálculo de atributos finais 
ataqueTotal = nivel + DANO_BASE;
defesaTotal = DEFESA_BASE + (nivel / 2);

// Avaliação de Prontidão com operadores lógicos
vidaSuficiente = vida > 70;
ataqueForte = ataqueTotal > 60;
nivelAvancado = nivel >= 10;
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

// Geração da lore do personagem 
console.log("📃 LORE DA HEROÍNA: Selene 🧙‍♀️ ");
console.log("");
console.log(`🌟Ola! sou ${nome}, da classe ${classe}, eu nasci durante um Eclipse e fui marcada pela lua e destinada á magia desde o berço.`); 
console.log(`🌟Meu objetivo é buscar os segredos da magia lunar para impedir o retorno de forças sombrias adormecidas`);
console.log(`🌟Já ajudei alguns animais , por isso, tenho um nível intermediario de ${nivel}, e minha vida é de ${vida}.`);
console.log(`🌟Tenho um total de ${ouro} moedas de ouro.`);
console.log(`🌟Meu xp é ${xp} e minha arma favorita é a ${NOME_ARMA}, pois ela responde a minha magia lunar.`);
console.log(`🌟A armadura que utilizo é ${NOME_ARMADURA}, `);
console.log(`🌟Após meus treinamentos, meu ataque e minha defesa melhoraram muito, com um ataque de ${ataqueTotal} e defesa de ${defesaTotal}.`);
console.log(`🌟Vida suficiente? ${vidaSuficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}.`);
console.log(`🌟Pode enfrentar o Guardião? ${podeEnfrentarGuardiao}`);
console.log(`🌟isso não será problema para mim, sei que com as minhas habilidades e minha magia posso enfrentar qualquer desafio!`);



