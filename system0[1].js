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
  ["o-inicio", "o inicio", `no inicio nada existia nenhum som nenhuma luz nenhum tempo todo nosso universo se concentrava em um unico ponto um ponto quente pulsando energia inimaginável tao denso que o proprio espaço se curvava ao redor dele extremamente instavel
um ponto que podemos chamar de singularidade de tamanho menor que um átomo em um lugar que nao que nao existia mais derrepente ele começou a mudar ficou mais instável se comprimiu se expandiu e em menos de um segundo
bunn…
esse foi o bigbang que e apenas uma coisa que nos separa do começo do universo
a inflação cósmica foi o momento que o espaço cresceu do nada mais rápido que a própria luz podia viajar não foi uma explosão foi o próprio tecido do cosmo se esticando em um estante menor que um pensamento o quase nada se tornou se o quase infinito e antes disso nada tinha forma nem nome foi a era de plenk o primeiro suspiro da existência o universo era menor que um átomo mais quente que qualquer estrela viria a existir o tempo espaço a energia tudo misturado tudo incerto e nada ao mesmo tempo as leis da física nem existe e nem se aplicavam e e aqui que tudo termina`],

  ["estrelas", "formaçao das primeiras estrelas - ano 13.000.000.000 a.A", `o universo existe luz a muito tempo. porque a 13 bilhões de anos atrás as primeiras estrelas foram formadas
antes disso elas não existiam em lugar nenhum do universo havia apenas um ano infinito na escuridão
um universo recém-nascido quente demais denso demais um caos que se expandir sem saber pra onde ir e foi ali nesse vazio tentando virar um espaço que pequenas imperfeições aparecerao regiões um pouco mais densas gotas invisíveis de matéria sendo puxadas umas pelas outras como se o próprio universo estivesse respirando pela primeira vez
então aconteceu o primeiro brilho uma fagulha acendeu no coração daquela nuvem esmagada eo universo via luz pela primeira vez
não eram estrelas como conhecemos hoje eram titans!! monstros azuis enormes furiosos que queimaram com a pressa de quem sabe que nasceu apenas para explodir`],

  ["planeta", "formação do planeta - ano 4500000000 a.A", `há 4,5 bilhões de anos
uma rocha quente girando rápido demais um mundo sem forma sem descanso e sem nome sua superfície era fogo puro líquido um mar brilhante onde nada existia além de caos então vieram eles colossos montanhas inteiras viajando pelo vazio everest's em chamas despencando do céu e isso viria formar nosso planeta que conhecemos hoje
um mundo esculpido na violência temperado no fogo nascido do caos e destinado a um dia ser chamado de os cinco reinos o planeta crônico e mesmo depois de chegar no começo do planeta o nosso trabalho continua até o fim dele`],

  ["criatura", "a primeira criatura nasce - ano 3500000000 a.A", `3,5 bilhões de anos o céu laranja não era por conta do sol era a própria atmosfera saturada de tanto gases tóxicos que queimavam o ar como se a terra respirar enxofre
gases tão pesados e corrosivos tão completamente incompatíveis com qualquer forma de vida moderna que um adulto normal se fosse teleportado pra esse tempo agora desmaiaria em menos de um minuto
a superfície era quente abafada densa o solo ainda nascia fervendo sob vulcões que nunca descansavam os oceanos mais próximo de uma sopa quente do que água mal dava espaço pra vida se arriscar a existir
mesmo assim foi neste inferno primitivo que a primeira centelha de existência se formou um ser impossível formada apenas pela vontade da própria natureza e muita muita muita muita sorte`],

  ["terrestre", "primeiro animal terrestre aparece - ano 360000000 a.A", `há 360 milhões de anos e neste tempo que o primeiro animal terrestre aparece nao e nada gigante ou heróico é só um bicho simples pequeno meio anfíbio meio peixe um dos primeiros tetrápodes primitivos
quando ele saiu a primeira coisa que ele fez foi ver aquele mundo vazio nenhuma árvore apenas terra lama e umas pedras por aí
um mundo vazio triste e sozinho`],

  ["dinossauros", "início do reino dos dinossauros - ano 240000000 a.A", `nos nao somos nada o tempo que a gente vive aqui e menor do que o tempo que eles vagaram por essas terras esses são os dinossauros
répteis gigantes desde carnívoros a herbívoros e seu reinado é tão grande que podemos citar várias coisas notáveis que aconteceram durante a sua existência do nosso planeta
o reino dos dinossauros e datado de ter começado há 240 milhões de anos onde agora e deadsoul`],

  ["ilhas", "rachamento para ilhas - ano 200000000 a.A", `200 milhões de anos começou o rachamento pras ilhas onde fica a federação a ilha do mago e a ilha dos isolados no período jurássico antes pequenas florestas ou pedras no encosto do continente agora pela primeira vez ilhas isoladas`],

  ["aves", "primeiras aves nascem - ano 150000000 a.A", `150 milhões de anos atrás as primeiras aves como nos conhecemos apareceram e os céus se encheram delas até hoje`],

  ["flores", "as primeiras flores nascem - ano 130000000 a.A", `130 milhões de anos aconteceu o surgimento das primeiras flores campos antes vazios agora preencha a imensidão com suas cores tudo isso aconteceu durante o período jurássico as ilhas saindo do continente aves enchendo o céu flores dando cor mas a coisa mais notável está por vir`],

  ["meteoro", "meteoro - ano 66000000 a.A", `em algun dia de algum ano há 66 milhões de anos parecia ser um dia normal o sol se punha atrás das florestas os dinossauros estavam caminhando lentamente como fazio a milhões de anos sem imaginar que aquele seria seu último entardecer no céu algo diferente no começo um ponto de luz tão pequeno que só parecia mais uma estrela nascendo antes da hora nenhum dinossauro olhou pra cima nenhum percebeu mas aquele ponto cresia lento constante e inevitável horas depois ja nao era mais um ponto era chama riscando o firmamento traçando um corte brilhante no azul profundo do planeta os pássaros os únicos descendentes que sobreviveriam voavam em círculos confusos como se o próprio céu estivesse começando a cair então veio o rugido
primeiro distante como quase um trovão que nao deveria existir mas crescendo e crescendo e crescendo até que a luz se tornou um sol um segundo sol um sol assassino atravessando a atmosfera 72 mil quilômetros por hora em menos de um piscar de olhos o horizonte explodiu a terra tremeu montanhas inteiras balançavam como se fosse feito de areia florestas pegavam fogo antes mesmo da onda de choque chegar naquele instante em um único segundo 72% da vida daquele continente já estava condenada
o planeta jamais seria o mesmo os primeiros segundos foram o fim de uma era a onda de choque correu pela superfície da terra mais rápida que qualquer vento já visto 1500 quilômetros por hora de puro ar comprimido arrancando árvores destruindo florestas milenares jogando criaturas gigantescas como brinquedos quebrados então a segunda ameaça apareceu do centro da cratera recém nascida pedaços incandescentes de rocha foram arremessados para o ceu como como se a terra cuspise fogo essas pedras blilarao voaram subirão até tocar o espaço e depois caíram de volta como chuva de meteoros queimando o planeta inteiro em todos os continentes que dinosaurus ainda caminhavam pequenas estrelas cadentes atravessaram o céu cada uma delas trazendo calor suficiente para incendiar o mundo o dia virou noite mais uma noite iluminada por chamas e por horas a terra queimou
quando o ultimo incendio se apagou o planeta nao voltou a luz o ceu antes azul antes vivo agora era um muro negro cinzas poeira vapor e particulas de rocha suspensa na atmosfera bloquearam o sol como um manto infinito ea noite durou dias semanas ou ate meses a temperatura despencou florestas inteiras cogelarao logo apos ter ardido em chamas alguns dinossauros ainda vagavao confusos feridos famintos mais a propria natureza havia sido quebrada sem luz as plantas morreram sem plantas os herbivoros tombaram e ser herbivoros os carnivoros em seguida tiveram o mesmo destino o reinado dos gigantes acabava ali silencioso tragico e completamente inevitavel
então quando o mundo finalmente parou de tremer e as cinzas baixaram foi ali que apareceram os mamíferos criaturas pequenas peludas quase invisíveis na época dos gigantes rastejam para fora de suas tocas eles eram poucos mas eram muito teimosos resistentes como pedra e carregavam dentro de si um instinto que que nenhum dinossauro jamais teve a capacidade de sobreviver ao impossível eles eram os novos donos da terra aqueles que viriam a se tornar nos`],

  ["humanos", "primeiro humano nasce - ano 300000 a.A", `a 300 mil anos o homem atual nos finalmente domina a terra aquele que viria colonizar todo mundo finalmente sai das cavernas pra começar se organizar, fazer arte, ferramentas de pedra, tudo isso todo essa historia nao e nada todo nossa existência são apenas uma pequena parte da historio do planeta um tempo insignificante o terno não significamos nada nesse ponto é redundante
o próprio falar da frase não significamos e insignificante seria como uma formiga falar que ela é pequena demais seria como o ar falar que é invisível nós nunca fomos nada enquanto tudo isso aconteceu a humanidade foi criada reinos conquistados destruídos reconstruídos a paz foi selada e quebrada amizades foram traidas e formadas invenções mudaram o mundo e tudo isso aconteceu de forma insignificante pro tempo que os cinco reinos tem`],

  ["paleolitico", "paleolítico - ano 40000 a.A", `podemos pensar que como tudo o'que vem acontecendo neste planeta as ideias sobre alma espírito e eternidade tenha evoluído ao mesmo tempo em que os humanos evoluíram
até que em dado momento tais ideias ganham forma que nos foi apresentado pelos filósofos de Aagcua pelos pensadores da ments e depois deles a igreja de suuntraine fantasmas de deadsoul e criaturas presas em garrafas de quino shin
em certo momento do paleolítico a 40 mil anos nossos ancestrais começaram a fazer esculturas para eternizar a imagem de humanos e animais muitas vezes unidos os dois em algum momento começaram a usar barro e presas de mamute para reproduzir a imagem de pessoas mortas
então a imortalidade e pra quem vive e nesse sentido a alma existe só nas memórias alma e apenas uma memória ou e algo do nosso corpo pra seguir viagem
a necessidade de cultivar lembranças de pessoas queridas e uma das explicações possíveis para o surgimento dos primeiros rituais mortuários e com eles com perdão do paradoxo a imortalidade do morto assim nasceu a crença de que os espíritos daqueles com quem convivemos continuam nos rondando e às vezes nos assombrando mesmo depois que seus corpos são devidamente guardados em tumbas`],

  ["agricultura", "invenção da agricultura - ano 10000 a.A", `10 mil anos a invenção da agricultura foi quando os humanos pararam de vagar pelo mundo e pela primeiras vez dominaram a terra imagina esse cenário
esse mundo era hostil e selvagem para sobreviver os humanos tinham que caçar e por isso formavam pequenos grupos que permaneciam sempre em movimento quando descobriram a agricultura os grupos aumentaram com criação dessa antiga suuntraine e moneycit conhecida como alvila e fodeia ambas focada no cultivo e com propósito e propósito de crescerem com essas duas aldeias fizeram discussões que antes não existiam por sempre andarem sozinhos e pela primeira vez na história ocorreram guerras o'que acontece até hoje`],

  ["mesopotamia", "mesopotâmia - ano 6000 a.A", `6 mil anos onde tudo começou de verdade a mesopotâmia ali surgiram as primeiras cidades de verdade os primeiros templos as primeiras leis foi ali que a história deixou de ser um mito e virou memória quando os sumérios registravam o mundo pela primeira vez em tabuletas de argila
e aquelas cidades não eram cidades como as de hoje eram blocos gigantes de barro seco empilhados como montanhas artificiais ruas estreitas serpenteavam entre as casas de tijolo e argila tão apertada que duas pessoas mal pavão lado a lado no centro erguia os zigurates colossais tão altos quanto quanto um prédio moderno de 20 andares surgindo no meio de uma cidade feita completamente de barro
imagine uma favela feita de areia argila baixa quente e apertada e no meio dela um arranha céu maciço sem janela subindo em degraus até tocar o céu isso é se o céu tivesse a 160 metros de altura
para aquela epoca era como colocar um um prédio do tamanho de um hotel de luxo no meio de um vilarejo rural intimidava dominava tudo ao seu redor parecia obra de deuses`],

  ["nacadano", "período nacadano - ano 5000a.A", `no período nacadano acerca de 5 mil anos surgiu sinais muito claros sobre a ideia de alma imortal e dessa época que tem os registros de seres humanos fazendo experimentos com corpos de pessoas importantes depois de suas mortes
essas práticas mortuárias era pra preservar o corpo e pra lembrar que mesmo depois da morte existe um vida eterna ainda`],

  ["areias", "areias de encaminhos - ano 4500 a.A", `a 4 mil e 500 anos atrás uma das coisas mais enigmáticas acontecem um buraco que leva para o'que chamam de deserto de encaminhos
e lá foi selado pelos deuses pra ninguém entrar nem sair`],

  ["aagcua", "império de Aagcua - ano 177 d.A", `antes dessas cidades antes deste lugar encontramos um reino completamente diferente em 177 um império nasce o ápice de todos os impérios o maior império que já existiu um gigante tão vasto que parecia impossível de ser detido esse e o império de Aagcua
ele ficava aonde e agora deadsoul todos de deadsoul todos os fantasma assassinos estavam sob controle de uma única pessoa o exército dele marchava como se como se o cinco reinos fosse pequeno demais
só que os antigos líderes da ments robin hood mular e joana d’arc se juntaram de rei arthur rei de suuntraine da época e o dragão verde soberano de quino shin pra acabar com esse império só que eles nao mataram Aagcua ele foi preso em algum lugar e os assassinos e fantasmas foram sentenciados a ficar em deadsoul sem sair de lá`],

  ["suuntraine", "guerra do comando de suuntraine - ano 1337 d.A", `em 1337 teve a guerra em suuntraine pra decidir quem ia liderar se era a linhagem de sangue do rei arthur que agora era a rainha elizabeth ou se era o novo gengis khan
a guerro foi porque a linhagem de elizabeth era a original que fundou suuntraine e a linhagem de gengis khan que era da profecia que viria o portador da bênção do sol
a luta foi a rainha e o padre francisco mais o exercito de suuntraine contra gengis khan e o flagelo mais o pessoal que apoiava a profecia
a guerra foi indo mais o flagelo e gengis khan eram mais fortes com as armas douradas e ganharam e as armas foram escondidas`],

  ["expansao", "expansão pras ilhas - ano 1492 d.A", `a expansão marítima que abriu o planeta os humanos cruzaram oceanos inteiro ate que so um mago foi deixado na ilha ninguém mais usou barco nenhum ninguém mais foi pra ilha ninguém`],

  ["industria", "a industria - ano 1770 d.A", `em 1770 a indústria tomou conta as fabricas os robos tudo começou a tomar a tecnologia em moneycit e suuntraine fica do mesmo jeito`],

  ["guerra1", "guerra de suuntraine e moneycit - ano 1914 d.A", ``],

  ["guerra2", "guerra de quino shin - ano 1939 d.A", ``]
];


$("timelineNav").innerHTML = timeline.map(x =>
  `<button data-timeline="${x[0]}">${x[1]}</button>`
).join("");

function renderTimeline(key) {
  const item = timeline.find(x => x[0] === key) || timeline[0];

  $("timelineContent").innerHTML =
    `<h2></h2><div class="timeline-text"></div>`;

  $("timelineContent").querySelector("h2").textContent = item[1];
  $("timelineContent").querySelector(".timeline-text").textContent = item[2].trim();

  document.querySelectorAll("#timelineNav button").forEach(b => {
    b.classList.toggle("active", b.dataset.timeline === key);
  });
}

$("timelineNav").addEventListener("click", e => {
  const b = e.target.closest("button[data-timeline]");
  if (b) renderTimeline(b.dataset.timeline);
});

renderTimeline(timeline[0][0]);

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
