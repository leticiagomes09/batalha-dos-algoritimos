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
console.log("");

// Nível 2 - Continuação da jornada 

let nomePersonagem = "Selene";
let classeNivel2 = "Mago"; 
let vidaAtual = 140;
let vidaMaxima = 200;
let manaAtual = 50;
let manaMaxima = 100;
let nivel2 = 1;
let experiencia = 50;
let ouroNivel2 = 220;

// Novos atributos para batalha
let forca = 50;
let defesa = 50;
let agilidade = 20;
let combatesVencidos = 3;

// Estado atual da história (continue de onde parou no Nível 1)
let localAtual = "cidade de Artenas";
let missaoAtual = "Combater o retorno de forças sombrias adormecidas";

// PRÓLOGO - Conexão com o Nível 1
console.log("Depois de tudo que aconteceu em " + localAtual + ", a corajosa " + nomePersonagem);
console.log("da classe " + classe + " encara mais um desafio em sua jornada...");
console.log("");

// Capítulo 1: condicionais simples na narrativa 
console.log("CAPÍTULO1⚠️: Uma força sombria foi detectada, e pretende derrotar todos da cidade de Artenas");

// Verificação baseada no nível do personagem
if (nivel <=5 ) {
    console.log("⚠️ Um Mago o adverte: Você ainda é leigo para está missão, ninguem abaixo do nível 5 foi capaz de vencer essa batalha!");
    console.log("Mas " + nomePersonagem + " decide prosseguir mesmo assim...");
}

// Verificação de recursos especiais
if (ouro >= 100) {
    console.log("💰 Você possui muitas moedas! Cuidado! Há um risco de atrair interesses...");
}

// Verificação de classe específica
if (classe = "Mago") {
    console.log("✨ Se prepare para a batalha! Você é  o personagem que precisamos para derrotar esse inimigo!");
}
console.log("");


// CAPÍTULO 2: Escolha Estratégica
console.log("⚔️ CAPÍTULO 2: Selene inicia sua batalha para tentar salvar a cidade de Artenas");

// Escolha baseada em recursos
if (ouro >= 100) {
    console.log( "Ouro suficiente!" + nomePersonagem +  " decide melhorar seus equipamentos!");
    forca += 5;
    defesa += 3;
    ouro -= 50;
    console.log("Força e defesa aumentaram! Ouro restante: " + ouro);
} else {
    console.log("💔 Sem ouro suficiente, " + nomePersonagem + " deve confiar apenas em suas habilidades!");
    console.log("A adversidade fortalece o espírito! Agilidade +2");
    agilidade += 2;
}

// Sistema de recompensas narrativo
if (experiencia >= 100) {
    console.log("🎉 A sabedoria acumulada traz resultados! " + nomePersonagem + " sente-se mais poderoso!");
    nivel++;
    experiencia = 0;
    vidaAtual = vidaMaxima; // Vida restaurada
} else {
    console.log("📊 " + nomePersonagem + " ainda busca mais conhecimento e experiência...");
    console.log("Sabedoria atual: " + experiencia + "/100");
}
console.log("");


// CAPÍTULO 3: A Batalha Decisiva
console.log("⚔️ CAPÍTULO 3: O confronto final está prestes a começar!");
let poderInimigo = 30;

// Sistema de combate inteligente baseado na situação
if (vidaAtual <= 30) {
    console.log("🆘 A beira da derrota, " + nomePersonagem + " aposta tudo em um último ataque!");
    console.log("Ataque final com toda a força restante!");
    poderInimigo -= (forca * 2);
} else if (manaAtual >= 30 && classe === "Mago") {
    console.log("✨ " + nomePersonagem + " absorve todo seu poder mágico!");
    console.log("Magia devastadora!");
    poderInimigo -= (forca + 20);
    manaAtual -= 30;
} else if (agilidade >= 15) {
    console.log("🏃‍♂️ Com movimentos rápidos e precisos, realiza um golpe perfeito!");
    poderInimigo -= forca;
} else {
    console.log("🛡️ Adota uma postura estratégica e se defende com cautela!");
    poderInimigo -= (forca / 2);
    vidaAtual += 10; // Recupera um pouco de vida
}
console.log("");

console.log("📜 === CONTINUAÇÃO DA JORNADA DE " + nomePersonagem + " ===");
console.log("");


// EPÍLOGO - Resultado final
if (poderInimigo <= 0) {
    console.log("🎉 VITÓRIA ÉPICA! " + nomePersonagem + " triunfa!");
    experiencia += 100;
    combatesVencidos++;
    console.log("A fama de " + nomePersonagem + " cresce...");
} else {
    console.log("⚔️ A batalha foi difícil, mas " + nomePersonagem + " resiste e vive para enfrentar novos perigos!");
}

console.log("");
console.log("🏁 CAPÍTULO ENERRADO - Em breve um novo desafio te espera!"); 











