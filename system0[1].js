const $ = (id) => document.getElementById(id);
const sections = ["home","loading","mainArea","heavenArea","meganArea","rosasArea","diceArea"];
function showSection(id){ sections.forEach(s => $(s).classList.toggle("hidden",s!==id)); window.scrollTo({top:0,behavior:"smooth"}); }
function home(){ $("password").value=""; $("loginMessage").textContent=""; showSection("home"); }
document.querySelectorAll('[data-action="home"]').forEach(b=>b.addEventListener("click",home));
function showMessage(el,text,isError=true){el.textContent=text;el.style.color=isError?"#ffaaaa":"#a7f4c2";}
let activeTimer=null, challengeStep=0, blueStart=0, blueInterval=null;
const mainPages = [
 ["sistema1","Sistema 1","Bem vindo ao sistema 1","No sistema 1 sao as sessoes que jogamos essa ea area principal que usa de inicio pra tudo chamamos de o inicio de tudo por isso eo sistema 1"],
 ["sistema2","Sistema 2","Bem vindo ao sistema 2","No sistema 2 ele e a historia que acontece como seria no sistema 1 so que com mais coisas e e tudo decidido pelo mestre ate ter one shots pro sistema 2 mais a maioria e so historia"],
 ["sistema3","Sistema 3","Bem vindo ao sistema 3","No sistema 3 todas as ideias que foram adaptadas pra ser jogável o sistema 1 nao serao levadas en conta o sistema 3 nao tem um livro de regras ate porque as regras nen faria sentido existir mais terao as classificações da q.b e terao one shots pra jogar"],
 ["tarot","Sistema de tarot","Bem vindo ao sistema de tarot","No sistema de tarot nao tem muito coisa vamos pra textes antes de tentar jogar"],
 ["mestre","Sistema do mestre","Bem vindo ao sistema de mestre","No sistema de mestre so sao dados uma historia criada na hora e o mestre decide oque acontece junto dos dados"]
];
function renderMain(key){const item=mainPages.find(x=>x[0]===key)||mainPages[0];$("mainContent").innerHTML=`<h2>${item[2]}</h2><p>${item[3]}</p>`;document.querySelectorAll("#mainTabs button").forEach(b=>b.classList.toggle("active",b.dataset.page===item[0]));}
$("mainTabs").innerHTML=mainPages.map(x=>`<button data-page="${x[0]}">${x[1]}</button>`).join("");
$("mainTabs").addEventListener("click",e=>{const b=e.target.closest("button[data-page]");if(b)renderMain(b.dataset.page);});
function openMain(){showSection("mainArea");renderMain("sistema1");}
const meganPages = [
 ["chave-maior","Chave maior",`<h2>Central de tudo</h2><p>Todo nosso conhecimento esta em megan tudo sobre a historia do mundo esta nela inclusive o azul dos ventos senha 5</p>`],
 ["chave-menor","Chave menor",`<h2>Bem vindo a chave menor</h2><table><thead><tr><th>O que é</th><th>O que fez</th></tr></thead><tbody>
 <tr><td>fodeia</td><td>deu inicio o que seria moneycit</td></tr><tr><td>ments</td><td>uma organização que controla moneycit desde sua fundação</td></tr><tr><td>zigurates</td><td>foi o predio que foi evoluindo até chegar no que e o predio da ments</td></tr><tr><td>nacadamos</td><td>experimentos com alma</td></tr><tr><td>asimov</td><td>tomou controle da própria alma</td></tr><tr><td>—</td><td>—</td></tr><tr><td>megan</td><td>a nova inteligência artificial que deu o avanço mais tecnológico pra ments</td></tr></tbody></table>`],
 ["rodana","Rodana",`<h2>Fabricas</h2><table><thead><tr><th>Nome</th><th>O que é</th><th>Pra que serve</th><th>Porque manter</th></tr></thead><tbody>
 <tr><td>vidro de prisão do metamorfo</td><td>é feito de vidro e gelo pra congelar</td><td>prender o metamorfo</td><td>pro metamorfo nao sair pelo cinco reinos</td></tr>
 <tr><td>peças de motos</td><td>sao varios tipos de peças pra usar em motos</td><td>pra trocar ou fazer mais motos</td><td>pra ter motos pros moto clubes</td></tr>
 <tr><td>maquinas de casino</td><td>sao maquinas pra apostar dinheiro</td><td>apostar dinheiro</td><td>pra ter mais circulação de dinheiro em moneycit</td></tr>
 <tr><td>folhas</td><td>sao folhas de papel a3 a4 a5 e a6</td><td>pra fazer anotações ou desenhos</td><td>pra ter aonde escrever</td></tr>
 <tr><td>tecnologias da ments</td><td>sao tecnologias que a ments usa</td><td>pra ter avanços em moneycit</td><td>pra continuar avançando</td></tr>
 <tr><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>Katanas</td><td>Armas</td><td>Para lutar</td><td>Pode ser uma arma muito útil</td></tr></tbody></table>`],
 ["volante","Volante",`<h2>Controle de megan</h2><div class="button-row"><button id="meganPower">Desligar / ligar</button><button id="meganControl">Controle de megan</button></div><div id="meganControlContent"><p>Estado do sistema: <span class="status-on">Ligado</span></p></div>`],
 ["acesso","Acesso restrito",`<h2>Acesso restrito</h2><p>Digite a senha para continuar.</p><form id="cardozoForm" class="login"><input id="cardozoPassword" type="password" placeholder="Senha" required><button>Entrar</button></form><p id="cardozoMessage" class="message"></p><div id="cardozoSecret"></div>`]
];
$("meganTabs").innerHTML=meganPages.map(x=>`<button data-megan="${x[0]}">${x[1]}</button>`).join("");
function renderMegan(key){const item=meganPages.find(x=>x[0]===key)||meganPages[0];$("meganContent").innerHTML=item[2];if(key==="volante")setupMeganControls();if(key==="acesso")setupCardozo();window.scrollTo({top:0,behavior:"smooth"});}
$("meganTabs").addEventListener("click",e=>{const b=e.target.closest("button[data-megan]");if(b)renderMegan(b.dataset.megan);});
function setupMeganControls(){
 $("meganPower").addEventListener("click",()=>{const box=$("meganContent");box.innerHTML=`<div style="background:#650d1b;padding:35px;text-align:center;border-radius:12px"><h2>DESLIGADO</h2><p>Sistema da Megan temporariamente desligado.</p></div>`;setTimeout(()=>renderMegan("volante"),3000);});
 $("meganControl").addEventListener("click",()=>{const names=["pensamento","armazenamento","controle do corpo","conexão com ments","registros de Aacgua"];$("meganControlContent").innerHTML=`<h3>Funcionamento e interruptores</h3>`+names.map((n,i)=>`<div class="switch-row"><strong>${n}</strong><span class="switch-state ${i===4?"status-off":"status-on"}">${i===4?"Desligado":"Ligado"}</span><button data-switch="${i}">${i===4?"Ligar":"Desligar"}</button></div>`).join("");$("meganControlContent").querySelectorAll("[data-switch]").forEach(b=>b.addEventListener("click",()=>{const row=b.closest(".switch-row"),state=row.querySelector(".switch-state");const on=state.textContent==="Desligado";state.textContent=on?"Ligado":"Desligado";state.className="switch-state "+(on?"status-on":"status-off");b.textContent=on?"Desligar":"Ligar";}));});
}
function setupCardozo(){$("cardozoForm").addEventListener("submit",e=>{e.preventDefault();if($("cardozoPassword").value==="Cardozo"){$("cardozoMessage").textContent="";$("cardozoSecret").innerHTML=`<h2>Bem vindo meu mago</h2><p>Meu amor a gente deve estar longe agora mais saiba que te amo a isso nunca vai mudar jamais mesmo longe vai chegar uma hora que a história só vai começar o verdadeiro romance a escrita do escritor vai chegar na hora que o mago vai encontrar e os caminhos vão se juntar e esses caminhos não vai dar pra sair vai ser o escritor e o mago ou melhor dizendo o casal perfeito juntos pra sempre pela eternidade toda até que o fim do livro ou até que chegue no fim do caminho será nós dois juntinhos</p>`;}else showMessage($("cardozoMessage"),"Senha incorreta.");});}
const timeline = [
 ["o-inicio","O inicio",`No inicio nada existia nenhum som nenhuma luz nenhum tempo todo nosso universo se concentrava em um unico ponto um ponto quente pulsando energia inimaginável tao denso que o proprio espaço se curvava ao redor dele extremamente instavel. Um ponto que podemos chamar de singularidade de tamanho menor que um átomo em um lugar que nao existia. De repente ele começou a mudar ficou mais instável se comprimiu se expandiu e em menos de um segundo… bunn… esse foi o Big Bang, uma das coisas que nos separa do começo do universo.<p>A inflação cósmica foi o momento que o espaço cresceu do nada mais rápido que a própria luz podia viajar. Não foi uma explosão: foi o próprio tecido do cosmo se esticando. Antes disso nada tinha forma nem nome. Foi a era de Planck, o primeiro suspiro da existência: tempo, espaço e energia misturados, tudo incerto e nada ao mesmo tempo.</p>`],
 ["estrelas","Formação das primeiras estrelas — ano 13.000.000.000 a.A",`O universo existe luz há muito tempo, porque há 13 bilhões de anos as primeiras estrelas foram formadas. Antes disso, havia um universo recém-nascido, quente demais e denso demais, um caos que se expandia sem saber para onde ir. Pequenas imperfeições apareceram, regiões um pouco mais densas, gotas invisíveis de matéria sendo puxadas umas pelas outras. Então aconteceu o primeiro brilho: uma fagulha acendeu no coração daquela nuvem esmagada e o universo viu luz pela primeira vez. Não eram estrelas como conhecemos hoje: eram titãs, monstros azuis enormes e furiosos que queimaram com a pressa de quem sabe que nasceu apenas para explodir.`],
 ["planeta","Formação do planeta — ano 4.500.000.000 a.A",`Há 4,5 bilhões de anos, uma rocha quente girava rápido demais: um mundo sem forma, sem descanso e sem nome. Sua superfície era fogo puro, líquido, um mar brilhante onde nada existia além de caos. Então vieram colossos, montanhas inteiras viajando pelo vazio, em chamas, despencando do céu. Isso viria formar nosso planeta: um mundo esculpido na violência, temperado no fogo, nascido do caos e destinado a um dia ser chamado de os Cinco Reinos, o planeta Crônico.`],
 ["criatura","A primeira criatura nasce — ano 3.500.000.000 a.A",`Há 3,5 bilhões de anos, o céu laranja não era por conta do sol: era a própria atmosfera saturada de gases tóxicos. A superfície era quente, abafada e densa; o solo ainda nascia fervendo sob vulcões que nunca descansavam. Os oceanos mais pareciam uma sopa quente do que água. Mesmo assim foi neste inferno primitivo que a primeira centelha de existência se formou: um ser impossível, formado pela vontade da própria natureza e muita, muita sorte.`],
 ["terrestre","Primeiro animal terrestre aparece — ano 360.000.000 a.A",`Há 360 milhões de anos, o primeiro animal terrestre aparece. Não é nada gigante ou heroico: é só um bicho simples, pequeno, meio anfíbio, meio peixe, um dos primeiros tetrápodes primitivos. Quando saiu, viu aquele mundo vazio: nenhuma árvore, apenas terra, lama e umas pedras. Um mundo vazio, triste e sozinho.`],
 ["dinossauros","Início do reino dos dinossauros — ano 240.000.000 a.A",`Nós não somos nada. O tempo que vivemos aqui é menor do que o tempo que eles vagaram por estas terras: os dinossauros. Répteis gigantes, desde carnívoros a herbívoros, seu reinado foi tão grande que marcou a existência do planeta. O reino dos dinossauros é datado de ter começado há 240 milhões de anos, onde agora é Deadsoul.`],
 ["ilhas","Rachamento para ilhas — ano 200.000.000 a.A",`Há 200 milhões de anos começou o rachamento para as ilhas onde ficam a Federação, a Ilha do Mago e a Ilha dos Isolados. No período jurássico, antes pequenas florestas ou pedras no encosto do continente, agora, pela primeira vez, ilhas isoladas.`],
 ["aves","Primeiras aves nascem — ano 150.000.000 a.A",`Há 150 milhões de anos, as primeiras aves como as conhecemos apareceram e os céus se encheram delas até hoje.`],
 ["flores","As primeiras flores nascem — ano 130.000.000 a.A",`Há 130 milhões de anos aconteceu o surgimento das primeiras flores. Campos antes vazios agora preencheram a imensidão com suas cores. As ilhas saindo do continente, aves enchendo o céu e flores dando cor — mas a coisa mais notável está por vir.`],
 ["meteoro","Meteoro — ano 66.000.000 a.A",`Há 66 milhões de anos parecia ser um dia normal. O sol se punha atrás das florestas e os dinossauros caminhavam lentamente, sem imaginar que aquele seria seu último entardecer. No céu, um ponto de luz crescia, lento, constante e inevitável. Horas depois era uma chama riscando o firmamento. Então veio o rugido, a luz tornou-se um segundo sol e o horizonte explodiu. A terra tremeu, florestas pegaram fogo e a onda de choque correu pela superfície. Pedaços incandescentes de rocha foram arremessados ao céu e caíram de volta como chuva de meteoros. O céu escureceu com cinzas e poeira, a temperatura despencou e as plantas morreram. Sem plantas, os herbívoros tombaram e, em seguida, os carnívoros tiveram o mesmo destino. O reinado dos gigantes acabava ali. Então apareceram os mamíferos: criaturas pequenas, peludas e resistentes, que sobreviveram ao impossível e viriam a se tornar nós.`],
 ["humanos","Primeiro humano nasce — ano 300.000 a.A",`Há 300 mil anos, o homem atual finalmente domina a Terra, aquele que viria colonizar todo o mundo. Começa a se organizar, fazer arte e ferramentas de pedra. Toda essa história parece pequena: nossa existência é apenas uma pequena parte da história do planeta, um tempo insignificante. A humanidade criou reinos, conquistou, destruiu e reconstruiu; a paz foi selada e quebrada, amizades foram traídas e formadas, invenções mudaram o mundo. Tudo isso aconteceu de forma insignificante para o tempo que os Cinco Reinos têm.`],
 ["paleolitico","Paleolítico — ano 40.000 a.A",`Podemos pensar que, como tudo o que vem acontecendo neste planeta, as ideias sobre alma, espírito e eternidade tenham evoluído ao mesmo tempo em que os humanos evoluíram. Em dado momento, tais ideias ganham forma nos filósofos de Aagcua, nos pensadores da Ments, na igreja de Suuntraine, nos fantasmas de Deadsoul e nas criaturas presas em garrafas de Quino Shin. No Paleolítico, há 40 mil anos, nossos ancestrais começaram a fazer esculturas para eternizar a imagem de humanos e animais. A necessidade de cultivar lembranças de pessoas queridas é uma explicação possível para o surgimento dos primeiros rituais mortuários. Assim nasceu a crença de que os espíritos daqueles com quem convivemos continuam nos rondando, mesmo depois que seus corpos são guardados em tumbas.`],
 ["agricultura","Invenção da agricultura — ano 10.000 a.A",`Há 10 mil anos, a invenção da agricultura foi quando os humanos pararam de vagar pelo mundo e pela primeira vez dominaram a terra. Para sobreviver, os humanos caçavam e formavam pequenos grupos que permaneciam sempre em movimento. Quando descobriram a agricultura, os grupos aumentaram. Com a criação de Suuntraine e Moneycit, conhecidas como Alvila e Fodeia, ambas focadas no cultivo e no propósito de crescer, surgiram discussões que antes não existiam e, pela primeira vez na história, ocorreram guerras — o que acontece até hoje.`],
 ["mesopotamia","Mesopotâmia — ano 6.000 a.A",`Há 6 mil anos, onde tudo começou de verdade: a Mesopotâmia. Ali surgiram as primeiras cidades, os primeiros templos e as primeiras leis. Os sumérios registravam o mundo em tabuletas de argila. Aquelas cidades eram blocos de barro seco, ruas estreitas entre casas de tijolo e argila. No centro erguiam-se os zigurates colossais, tão altos quanto um prédio moderno de muitos andares, dominando tudo ao redor e parecendo obras de deuses.`],
 ["nacadano","Período nacadano — ano 5.000 a.A",`No período nacadano, há cerca de 5 mil anos, surgiram sinais claros sobre a ideia de alma imortal. Dessa época vêm registros de seres humanos fazendo experimentos com corpos de pessoas importantes depois de suas mortes. Essas práticas mortuárias buscavam preservar o corpo e lembrar que, mesmo depois da morte, existiria uma vida eterna.`],
 ["areias","Areias de encaminhos — ano 4.500 a.A",`Há 4.500 anos, uma das coisas mais enigmáticas aconteceu: um buraco que leva para o que chamam de Deserto de Encaminhos. Ele foi selado pelos deuses para ninguém entrar nem sair.`],
 ["aagcua","Império de Aagcua — ano 177 d.A",`Em 177, um império nasce: o ápice de todos os impérios, o maior que já existiu, tão vasto que parecia impossível de ser detido. Esse é o Império de Aagcua, onde agora é Deadsoul. Todos os fantasmas assassinos estavam sob controle de uma única pessoa. Os antigos líderes da Ments — Robin Hood, Mular e Joana d’Arc — se juntaram ao rei Arthur de Suuntraine e ao Dragão Verde, soberano de Quino Shin, para acabar com esse império. Aagcua não foi morto: foi preso em algum lugar, e os assassinos e fantasmas foram sentenciados a ficar em Deadsoul.`],
 ["suuntraine","Guerra do comando de Suuntraine — ano 1337 d.A",`Em 1337 houve uma guerra em Suuntraine para decidir quem ia liderar: a linhagem de sangue do rei Arthur, agora representada pela rainha Elizabeth, ou o novo Gengis Khan. A linhagem de Elizabeth era a original que fundou Suuntraine; a linhagem de Gengis Khan vinha da profecia do portador da bênção do sol. A rainha e o padre Francisco, com o exército de Suuntraine, enfrentaram Gengis Khan, o Flagelo e os apoiadores da profecia. O Flagelo e Gengis Khan eram mais fortes com as armas douradas, venceram e as armas foram escondidas.`],
 ["expansao","Expansão para as ilhas — ano 1492 d.A",`A expansão marítima abriu o planeta. Os humanos cruzaram oceanos inteiros até que só um mago foi deixado na ilha. Ninguém mais usou barco, ninguém mais foi para a ilha.`],
 ["industria","A indústria — ano 1770 d.A",`Em 1770, a indústria tomou conta: as fábricas, os robôs e a tecnologia começaram a crescer em Moneycit, enquanto Suuntraine ficou do mesmo jeito.`],
 ["guerra1","Guerra de Suuntraine e Moneycit — ano 1914 d.A",`Registro histórico ainda não preenchido.`],
 ["guerra2","Guerra de Quino Shin — ano 1939 d.A",`Registro histórico ainda não preenchido.`]
];
$("timelineNav").innerHTML=timeline.map(x=>`<button data-timeline="${x[0]}">${x[1]}</button>`).join("");
function renderTimeline(key){const item=timeline.find(x=>x[0]===key)||timeline[0];$("timelineContent").innerHTML=`<h2>${item[1]}</h2><p>${item[2]}</p>`;document.querySelectorAll("#timelineNav button").forEach(b=>b.classList.toggle("active",b.dataset.timeline===key));}
$("timelineNav").addEventListener("click",e=>{const b=e.target.closest("button[data-timeline]");if(b)renderTimeline(b.dataset.timeline);});
function openMegan(){showSection("meganArea");renderMegan("chave-maior");}
function startTimedLoading(title,seconds,onComplete,blue=false){
 if(activeTimer)clearInterval(activeTimer);if(blueInterval)clearInterval(blueInterval);
 showSection("loading");$("loadingTitle").textContent=title;$("loadingText").textContent=blue?"Verificação do servidor em andamento.":"Aguarde enquanto o acesso é preparado.";
 $("progressBar").style.width="0%";$("progressLabel").textContent="0%";$("challenge").classList.toggle("hidden",!blue);$("challengeTitle").textContent="";$("challengeHint").textContent="";$("challengeMessage").textContent="";$("challengeAnswer").value="";challengeStep=0;blueStart=Date.now();
 const begin=Date.now();let pausedAt=null,elapsedBeforePause=0;
 if(blue){$("challenge").classList.add("hidden");}
 activeTimer=setInterval(()=>{
   let elapsed=(Date.now()-begin)/1000;
   if(blue){
     if(challengeStep===1 && pausedAt!==null)elapsed=elapsedBeforePause;
     const p=Math.min(100,elapsed/seconds*100);$("progressBar").style.width=p+"%";$("progressLabel").textContent=Math.floor(p)+"%";
     if(challengeStep===0 && elapsed>=60){challengeStep=1;pausedAt=Date.now();elapsedBeforePause=60;$("challenge").classList.remove("hidden");$("challengeTitle").textContent="mestre";$("challengeHint").textContent="Digite a resposta para continuar."; $("challengeAnswer").value="";$("challengeAnswer").focus();$("loadingText").textContent="A barra foi pausada para uma pergunta.";}
     if(challengeStep===2 && elapsed>=180){challengeStep=3;pausedAt=Date.now();elapsedBeforePause=180;$("challenge").classList.remove("hidden");$("challengeTitle").textContent="voce aceita";$("challengeAnswer").value="";$("challengeAnswer").focus();}
     if(challengeStep===4 && elapsed>=299){challengeStep=5;pausedAt=Date.now();elapsedBeforePause=299;$("challenge").classList.remove("hidden");$("challengeTitle").textContent="caixa";$("challengeAnswer").value="";$("challengeAnswer").focus();}
     if(elapsed>=seconds && challengeStep===6){clearInterval(activeTimer);activeTimer=null;onComplete();}
   }else{
     const p=Math.min(100,elapsed/seconds*100);$("progressBar").style.width=p+"%";$("progressLabel").textContent=Math.floor(p)+"%";
     if(elapsed>=seconds){clearInterval(activeTimer);activeTimer=null;onComplete();}
   }
 },200);
}
$("challengeForm").addEventListener("submit",e=>{
 e.preventDefault();const answer=$("challengeAnswer").value.trim().toLowerCase();
 const expected={1:"751",3:"agua molhada",5:"coraçao"};
 if(answer!==expected[challengeStep]){if(activeTimer)clearInterval(activeTimer);activeTimer=null;home();$("loginMessage").textContent="Resposta incorreta. O acesso foi reiniciado; tente novamente desde o início.";return;}
 $("challenge").classList.add("hidden");$("challengeMessage").textContent="";
 if(challengeStep===1){challengeStep=2;blueStart=Date.now();const old=activeTimer;clearInterval(old);let phaseStart=Date.now();activeTimer=setInterval(()=>{
   const elapsed=(Date.now()-phaseStart)/1000+60;const p=Math.min(100,elapsed/300*100);$("progressBar").style.width=p+"%";$("progressLabel").textContent=Math.floor(p)+"%";
   if(elapsed>=180 && challengeStep===2){clearInterval(activeTimer);challengeStep=3;$("challenge").classList.remove("hidden");$("challengeTitle").textContent="voce aceita";$("challengeHint").textContent="Digite a resposta para continuar.";$("challengeAnswer").value="";$("challengeAnswer").focus();}
 },200);
 }else if(challengeStep===3){challengeStep=4;let phaseStart=Date.now();clearInterval(activeTimer);activeTimer=setInterval(()=>{const elapsed=(Date.now()-phaseStart)/1000+180;const p=Math.min(100,elapsed/300*100);$("progressBar").style.width=p+"%";$("progressLabel").textContent=Math.floor(p)+"%";if(elapsed>=299&&challengeStep===4){clearInterval(activeTimer);challengeStep=5;$("challenge").classList.remove("hidden");$("challengeTitle").textContent="caixa";$("challengeHint").textContent="Digite a resposta para continuar.";$("challengeAnswer").value="";$("challengeAnswer").focus();}},200);
 }else if(challengeStep===5){challengeStep=6;let phaseStart=Date.now();clearInterval(activeTimer);activeTimer=setInterval(()=>{const elapsed=(Date.now()-phaseStart)/1000+299;const p=Math.min(100,elapsed/300*100);$("progressBar").style.width=p+"%";$("progressLabel").textContent=Math.floor(p)+"%";if(elapsed>=300&&challengeStep===6){clearInterval(activeTimer);activeTimer=null;renderTimeline("o-inicio");showSection("rosasArea");}},100);}
});
$("loginForm").addEventListener("submit",e=>{
 e.preventDefault();const pass=$("password").value.trim();$("loginMessage").textContent="";
 if(pass==="3"){startTimedLoading("Acesso à área principal",180,openMain);}
 else if(pass==="4"){showSection("heavenArea");}
 else if(pass==="4311319344"){startTimedLoading("Inicializando sistema da Megan",60,openMegan);}
 else if(pass==="5"){startTimedLoading("Servidor das Rosas dos Ventos",300,()=>{renderTimeline("o-inicio");showSection("rosasArea");},true);}
else if (pass === "1d100") {
  startTimedLoading("Preparando os dados", 30, openDice);
}
 else showMessage($("loginMessage"),"Senha incorreta.");
});
// SISTEMA DE DADOS
const diceTypes = [100, 20, 12, 10, 8, 6, 4, "%"];

const diceButtons = document.getElementById("diceButtons");
const diceResult = document.getElementById("diceResult");

if (diceButtons && diceResult) {
  diceButtons.innerHTML = diceTypes.map(die =>
    `<button data-die="${die}">${die === "%" ? "d%" : "d" + die}</button>`
  ).join("");

  diceButtons.addEventListener("click", event => {
    const button = event.target.closest("button[data-die]");
    if (!button) return;

    const die = button.dataset.die;
    let result;

    if (die === "%") {
      result = (Math.floor(Math.random() * 10) + 1) * 10;
    } else {
      result = Math.floor(Math.random() * Number(die)) + 1;
    }

    diceResult.innerHTML = `<h2>Resultado: ${result}</h2>`;
  });
}

function openDice() {
  showSection("diceArea");
  diceResult.textContent = "Escolha um dado acima.";
}
document.addEventListener("click",e=>{const b=e.target.closest('[data-action="system1"],[data-action="system2"]');if(b){const name=b.dataset.action==="system1"?"Sistema 1":"Sistema 2";$("mainContent").innerHTML=`<h2>${name}</h2><p>Esta passagem libera o acesso narrativo ao ${name}. O arquivo do sistema pode ser conectado aqui.</p><button data-action="heaven-back">Voltar à passagem</button>`;showSection("mainArea");$("mainTabs").classList.add("hidden");}});
document.addEventListener("click",e=>{if(e.target.closest('[data-action="heaven-back"]')){showSection("heavenArea");$("mainTabs").classList.remove("hidden");}});
