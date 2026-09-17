// ========================================
// ENTRAR NO SISTEMA 1.0
// ========================================

const botoesSistema = document.querySelectorAll(".sistemas button");

if (botoesSistema.length >= 2) {

    botoesSistema[1].addEventListener("click", function () {
        window.location.href = "sistema1.html";
    });

}


// ========================================
// MENU
// ========================================

function mostrarPagina(pagina) {

    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(function (elemento) {
        elemento.classList.add("oculto");
    });

    const escolhida = document.getElementById(pagina);

    if (escolhida) {
        escolhida.classList.remove("oculto");
    }
}


// ========================================
// VOLTAR
// ========================================

function voltarInicio() {
    window.location.href = "index.html";
}


// ========================================
// PERSONAGENS
// ========================================

const personagens = {

    Ashlyn: {

        nome: "Ashlyn Yume",
        idade: "15 a 16",
        peso: "59kg",
        altura: "1,60",
        classe: "atirador",
        afiliacao: "águias da paz",
        magia: "alma",
        devocao: "tempo",
        mortos: "X",

        atributos: {
            Força: 3,
            Inteligência: 4,
            Velocidade: 3,
            Vontade: 4,
            Percepção: 3,
            Destreza: 3
        },

        pericias: {
            Sorte: 15,
            Equilíbrio: 17,
            Precisão: 15,
            Sabedoria: 10,
            Furtividade: 7,
            Agilidade: 17,
            Acrobacia: 15,
            Investigação: 10,
            Persuasão: 4,
            Intimidação: 3,
            Diplomacia: 1,
            Pilotagem: 10,
            Mira: 20,
            Atletismo: 17,
            Arrombamento: 7,
            Medicina: 20,
            Criação: 2,
            Carisma: 17,
            Vigor: 13,
            Tecnologia: 8,
            "Conhecimento mágico": 20
        },

        lore: `Ashlyn uma garotinha que adora seu irmão mais velho que sempre andao juntos, e um dia enquanto eles iao pra um asilo de idosos fazer uma ação social com o esquadrão aguias da paz eles vão explorar ver como é o asilo e um senhor bem magro que dava pra ver os ossos do corpo se levanta de uma messa com mais três pessoas bem diferentes e um deles chama seu irmão e o que se levantou te pede ajuda pra levá-lo até o banheiro, e antes dele entra ele te entregar uma máscara de guaxinin e fala que "enquanto você usala nenhum mal chegará até você" e Ashlyn escuta seu irmão te chamando e você vê ele com uma máscara parecendo um troco de árvore fala "vamos tá na ora de ir e olha oque eles me darão" e Ashlyn virá e o senhor não está mais lá e a porta do banheiro está aperta com um cheiro podre e ela coloca a máscara e sai de lá com seu irmão`

    },


    Jade: {

        nome: "jade blanc",
        idade: "17",
        peso: "60kg",
        altura: "1.80",
        classe: "anjo",
        afiliacao: "X",
        magia: "magia",
        devocao: "Deus",
        mortos: "X",

        atributos: {
            Força: 4,
            Inteligência: 1,
            Velocidade: 6,
            Vontade: 4,
            Percepção: 1,
            Destreza: 3
        },

        pericias: {
            Sorte: 6,
            Equilíbrio: 3,
            Precisão: 8,
            Sabedoria: 2,
            Voo: 11,
            Furtividade: 10,
            Agilidade: 11,
            Acrobacia: 5,
            Investigação: 5,
            Persuasão: 9,
            Intimidação: 6,
            Diplomacia: 12,
            Pilotagem: 1,
            Mira: 9,
            Atletismo: 3,
            Arrombamento: 8,
            Medicina: 16,
            Criação: 9,
            Carisma: 2,
            Vigor: 8,
            Tecnologia: 2,
            "Conhecimento mágico": 6
        },

        lore: `nascida no céu entre todos os anjos de Deus até que eu dia ela foi mandada pros cinco reinos junto de queruin blanc o seu pai pra ela descobrir como é ser como um humano e ajudar quem precisar`

    },


    Pedrinho: {

        nome: "Pedrinho do gral",
        idade: "18",
        peso: "45",
        altura: "1.80",
        classe: "lutador",
        afiliacao: "arena dos reinos",
        magia: "destruiçao",
        devocao: "sonwent",
        mortos: "X",

        atributos: {
            Força: 1,
            Inteligência: 4,
            Velocidade: 4,
            Vontade: 3,
            Percepção: 3,
            Destreza: 1
        },

        pericias: {
            Sorte: 9,
            Equilíbrio: 9,
            Precisão: 7,
            Sabedoria: 10,
            Furtividade: 9,
            Agilidade: 6,
            Acrobacia: 10,
            Investigação: 9,
            Persuasão: 9,
            Intimidação: 8,
            Diplomacia: 6,
            Pilotagem: 7,
            Mira: 7,
            Atletismo: 10,
            Arrombamento: 5,
            Medicina: 8,
            Criação: 9,
            Carisma: 6,
            Vigor: 9,
            Tecnologia: 8,
            "Conhecimento mágico": 8
        },

        lore: "X"

    },


    Jackson: {

        nome: "Jackson - sussuro",
        idade: "16",
        peso: "X",
        altura: "X",
        classe: "assasino",
        afiliacao: "abutres",
        magia: "alma",
        devocao: "sonwent",
        mortos: "jakob",

        atributos: {
            Força: 2,
            Inteligência: 4,
            Velocidade: 4,
            Vontade: 4,
            Percepção: 3,
            Destreza: 2
        },

        pericias: {
            Sorte: 1,
            Equilíbrio: 3,
            Precisão: 12,
            Sabedoria: 1,
            Furtividade: 17,
            Agilidade: 4,
            Acrobacia: 5,
            Investigação: 2,
            Persuasão: 1,
            Intimidação: 11,
            Diplomacia: 8,
            Pilotagem: 7,
            Mira: 9,
            Atletismo: 12,
            Arrombamento: 2,
            Medicina: 2,
            Criação: 5,
            Carisma: 7,
            Vigor: 7,
            Tecnologia: 11,
            "Conhecimento mágico": 1
        },

        lore: `nascido com uma vontade ser o melhor estilista e assim foi indo semdo cada vez mais conhecido e entrou pro prédio da ments tendo um apartamento e uma sala pra ele fazer as coisas dele mais isso semdo algo bem rápido por ser jovem logo muda quando ele entra pro moto clube abutres testemunhando seu iniciamento uma pessoa que tinha mexido com um dos abutres estava cortado pela metade e ele tinha que fatiar o resto do corpo e fazer um churras e assim foi indo as fezes ele mata quen mexe com os irmãos dele`

    },


    Scarlet: {

        nome: "Scarlet batatinha",
        idade: "17",
        peso: "45kg",
        altura: "1.60",
        classe: "vampiro",
        afiliacao: "abutres",
        magia: "deatruiçao",
        devocao: "hestor",
        mortos: "X",

        atributos: {
            Força: 3,
            Inteligência: 4,
            Velocidade: 4,
            Vontade: 3,
            Percepção: 1,
            Destreza: 2
        },

        pericias: {
            Sorte: 7,
            Equilíbrio: 8,
            Precisão: 20,
            Sabedoria: 8,
            Mordida: 7,
            Furtividade: 11,
            Agilidade: 13,
            Acrobacia: 7,
            Investigação: 13,
            Persuasão: 20,
            Intimidação: 18,
            Diplomacia: 20,
            Pilotagem: 17,
            Mira: 19,
            Atletismo: 10,
            Arrombamento: 1,
            Medicina: 20,
            Criação: 13,
            Carisma: 17,
            Vigor: 14,
            Tecnologia: 18,
            "Conhecimento mágico": 7
        },

        lore: `Uma garota que virou dos abutres e foi até o bairo podre de moneycit pra pegar uma pessoa que tinha mexido com um irmão e ela entra dentro da mansão abandonado que tem no bairo podre e quando ela pisa lá dentro um clarão tudo muda e ela tá ditada na sede dos abutres e ela virou uma Vampira e fica mais forte ela não lembra como virou um vanpiro mais adorou ser um Vampiro`

    },


    Brady: {

        nome: "Brady lepty",
        idade: "35",
        peso: "65kg",
        altura: "1,85",
        classe: "criatura mistica",
        afiliacao: "federação e escola dos reinos",
        magia: "destruiçao",
        devocao: "tempo",
        mortos: "X",

        atributos: {
            Força: 1,
            Inteligência: 4,
            Velocidade: 3,
            Vontade: 4,
            Percepção: 1,
            Destreza: 4
        },

        pericias: {
            Sorte: 11,
            Equilíbrio: 12,
            Precisão: 17,
            Sabedoria: 9,
            Furtividade: 9,
            Agilidade: 1,
            Acrobacia: 5,
            Investigação: 6,
            Persuasão: 20,
            Intimidação: 1,
            Diplomacia: 18,
            Pilotagem: 13,
            Mira: 18,
            Atletismo: 18,
            Arrombamento: 18,
            Medicina: 2,
            Criação: 2,
            Carisma: 3,
            Vigor: 10,
            Tecnologia: 8,
            "Conhecimento mágico": 15
        },

        lore: "um adulto entra na federaçao e é mandado pra escola pra guiar os destinados"

    },
    Zayrion: {

        senha: "Zayrion",

        nome: "Zayrion Montclair",
        idade: "327",
        peso: "68kg",
        altura: "1,78",
        classe: "mago",
        afiliacao: "iluminati",
        magia: "magia",
        devocao: "sonwent",
        mortos: "X",

        atributos: {
            Força: 3,
            Inteligência: 4,
            Velocidade: 3,
            Vontade: 4,
            Percepção: 4,
            Destreza: 2
        },

        pericias: {
            Sorte: 4,
            Equilíbrio: 6,
            Precisão: 5,
            Sabedoria: 16,
            Furtividade: 13,
            Agilidade: 2,
            Acrobacia: 18,
            Investigação: 5,
            Persuasão: 10,
            Intimidação: 12,
            Diplomacia: 19,
            Pilotagem: 5,
            Mira: 20,
            Atletismo: 2,
            Arrombamento: 14,
            Medicina: 15,
            Criação: 14,
            Carisma: 5,
            Vigor: 17,
            Tecnologia: 6,
            "Conhecimento mágico": 5
        },

        lore: `Zayrion Montclair


O Mago que o Tempo Esqueceu


Zayrion Montclair nasceu em 1166 D.A., em uma família cuja história ainda guardava muitos mistérios. Desde jovem, Zayrion demonstrava uma curiosidade incomum. Enquanto outras crianças se interessavam pelo mundo que conheciam, ele queria compreender aquilo que existia além dele.


Com o passar dos anos, essa curiosidade o levou ao estudo da magia.


Zayrion tornou-se um estudioso dedicado, passando grande parte de sua juventude entre livros, manuscritos, símbolos e antigos conhecimentos. Foi durante seus estudos que encontrou algo que mudaria para sempre o rumo de sua vida: um dos Cinco Livros.


O livro continha conhecimentos que ultrapassavam aquilo que Zayrion acreditava ser possível. Fascinado, ele passou anos tentando compreender seus ensinamentos e aprofundando-se cada vez mais na magia.


Entre todas as áreas que estudou, uma chamou particularmente sua atenção:


o tempo.


Zayrion começou a acreditar que, se o tempo podia ser medido, observado e compreendido, talvez também pudesse ser influenciado pela magia.


Foi então que tentou realizar um experimento.


Seu objetivo era simples: alterar o ciclo do dia e da noite, fazendo o dia se transformar em noite através de magia temporal.


Mas algo deu errado.

A magia não afetou apenas o mundo ao redor de Zayrion.

Ela afetou o próprio tempo de sua existência.

No início, ele não percebeu.

Os dias continuaram passando. As estações mudaram. Pessoas que conhecia envelheceram.


Então Zayrion percebeu algo impossível.


Ele estava envelhecendo, mas lentamente demais.


Enquanto os anos passavam para o mundo, seu corpo mudava apenas uma pequena parte do que deveria.


Foi assim que descobriu a consequência de seu feitiço.


Zayrion não havia se tornado imortal.


Ele ainda podia morrer.


Seu corpo ainda era mortal, e uma morte causada por ferimentos ou outras circunstâncias ainda poderia acabar com sua vida.


O que havia mudado era outra coisa:


o tempo havia deixado de envelhecê-lo normalmente.


Décadas poderiam passar enquanto Zayrion mudaria apenas um pouco.


Séculos poderiam passar, e ele continuaria praticamente o mesmo.


Mas havia um problema.


Zayrion não sabia como desfazer o feitiço.


E, quanto mais tempo passava, mais perigoso se tornava tentar.


Ele começou a suspeitar que, caso conseguisse restaurar o fluxo normal de seu tempo, poderia acabar pagando o preço de todos os anos que havia vivido.


Talvez seu corpo envelhecesse de uma só vez.


Talvez sua existência simplesmente não fosse compatível com aquele tempo.


Ou talvez algo ainda pior acontecesse:


Zayrion poderia desaparecer.


Por isso, ele decidiu não tentar desfazer a magia.


Continuaria vivendo com sua condição e buscaria uma resposta através de seus estudos.


---


1337 D.A. — A Guerra


Em 1337 D.A., Zayrion se viu envolvido em uma guerra.


Os acontecimentos daquele período marcariam profundamente sua visão sobre o mundo e sobre a magia.


Ele já não era apenas o jovem curioso que havia começado seus estudos anos antes.


Era um mago que carregava conhecimentos que poucas pessoas poderiam compreender.


A guerra também lhe mostrou que o conhecimento mágico não existia apenas para ser estudado.


Ele podia proteger.


Podia destruir.


E podia mudar o destino daqueles que o utilizavam.


Depois daquele período, Zayrion continuou sua jornada, carregando consigo suas experiências, seus conhecimentos e o mistério dos Cinco Livros.


---


1493 D.A. — A Torre


Em 1493 D.A., depois de séculos de estudos e experiências, Zayrion decidiu construir um lugar que fosse completamente seu.


Assim nasceu sua Torre do Mago.


Mais do que uma simples residência, a torre tornou-se o centro de sua existência.


Ali, Zayrion poderia guardar seus livros, estudar magia, realizar experimentos e pesquisar os mistérios que ainda não conseguia compreender.


A torre também representava algo importante.


Zayrion sabia que sua vida seria diferente da vida das pessoas comuns.


Enquanto gerações nasciam e desapareciam, ele continuaria ali.


Por isso, construiu um lugar que pudesse acompanhá-lo através dos séculos.


A torre tornou-se seu lar.


Sua biblioteca.


Seu laboratório.


Seu refúgio.


E, talvez, o lugar onde um dia encontraria as respostas para os mistérios que carregava desde a juventude.


---


O Sonho


Algum tempo depois da construção da torre, algo estranho aconteceu.


Durante uma noite, Zayrion teve um sonho.


Nele havia um garoto.


Um garoto de aparência bela e misteriosa, alguém que Zayrion nunca havia visto antes.


Ele não sabia quem era aquela pessoa.


Não sabia de onde vinha.


Nem por que havia aparecido em seu sonho.


Mas havia algo diferente naquela visão.


Parecia mais do que um simples sonho.


Quando Zayrion acordou, percebeu que havia algo ao lado de sua cama.


Um objeto que não estava ali quando ele havia adormecido.


Um cubo.


Zayrion o observou em silêncio.


Não demorou para descobrir que aquele objeto carregava um nome:


O Cubo do Amor Eterno.


Zayrion não sabia quem o havia colocado ali.


Não sabia como havia chegado até sua torre.


E, principalmente, não sabia qual era sua ligação com o garoto que havia aparecido em seu sonho.


Mas aquele acontecimento fez surgir uma nova possibilidade.


Durante seus estudos sobre os Cinco Livros, Zayrion havia percebido que existiam coisas sobre eles que simplesmente não faziam sentido.


Então uma pergunta começou a persegui-lo:


E se os livros tivessem um verdadeiro autor?


E, mais assustador ainda:


E se o garoto do sonho fosse essa pessoa?


Zayrion ainda não possuía nenhuma resposta.


Apenas um sonho.


Um cubo.


E um mistério que talvez estivesse esperando por ele há séculos.


E assim começaria uma nova parte da história de Zayrion Montclair.`
    },


    Roger: {

        nome: "Roger W",
        idade: "18",
        peso: "60kg",
        altura: "1.70",
        classe: "lutador",
        afiliacao: "X",
        magia: "alma",
        devocao: "Hasthur",
        mortos: "X",

        atributos: {
            Força: 4,
            Inteligência: 2,
            Velocidade: 2,
            Vontade: 1,
            Percepção: 3,
            Destreza: 2
        },

        pericias: {
            Sorte: 10,
            Equilíbrio: 12,
            Precisão: 10,
            Sabedoria: 19,
            Furtividade: 14,
            Agilidade: 20,
            Acrobacia: 18,
            Investigação: 5,
            Persuasão: 1,
            Intimidação: "X",
            Diplomacia: 18,
            Pilotagem: 9,
            Mira: 10,
            Atletismo: 18,
            Arrombamento: 19,
            Medicina: 5,
            Criação: 18,
            Carisma: 10,
            Vigor: 1,
            Tecnologia: 18,
            "Conhecimento mágico": 19
        },

        lore: "Hasthur observa Hasthur julga Hasthur concede poder aqueles que se tornam seu instrumento"

    }

};


// ========================================
// MOSTRAR TABELA
// ========================================

function criarTabela(titulo, dados) {

    let tabela = `
        <h3>${titulo}</h3>

        <table class="tabela-ficha">

            <tr>
                <th>${titulo === "Atributos" ? "Atributo" : "Perícia"}</th>
                <th>Valor</th>
            </tr>
    `;

    for (const nome in dados) {

        tabela += `
            <tr>
                <td>${nome}</td>
                <td>${dados[nome]}</td>
            </tr>
        `;

    }

    tabela += `
        </table>
    `;

    return tabela;
}


// ========================================
// ABRIR FICHA
// ========================================

function abrirFicha() {

    const senha = document.getElementById("senhaFicha").value.trim();
    const resultado = document.getElementById("resultadoFicha");

const senhaNormalizada = senha.toLowerCase();

const chaves = Object.keys(personagens);

const chaveEncontrada = chaves.find(function (chave) {
    return chave.toLowerCase() === senhaNormalizada;
});

const personagem = personagens[chaveEncontrada];

    if (!personagem) {

        resultado.innerHTML = `
            <p class="erro">Senha incorreta.</p>
        `;

        return;
    }


    let botaoBrady = "";

    if (senha === "Brady") {

        botaoBrady = `
            <button class="botao-bld" onclick="abrirBLD()">
                BLD
            </button>
        `;

    }


    resultado.innerHTML = `

        <div class="ficha">

            <h2>${personagem.nome}</h2>

            ${botaoBrady}

            <div class="dados-personagem">

                <div>
                    <strong>Idade</strong>
                    <span>${personagem.idade}</span>
                </div>

                <div>
                    <strong>Peso</strong>
                    <span>${personagem.peso}</span>
                </div>

                <div>
                    <strong>Altura</strong>
                    <span>${personagem.altura}</span>
                </div>

                <div>
                    <strong>Classe</strong>
                    <span>${personagem.classe}</span>
                </div>

                <div>
                    <strong>Afiliação</strong>
                    <span>${personagem.afiliacao}</span>
                </div>

                <div>
                    <strong>Magia</strong>
                    <span>${personagem.magia}</span>
                </div>

                <div>
                    <strong>Devoção</strong>
                    <span>${personagem.devocao}</span>
                </div>

                <div>
                    <strong>Pessoas mortas</strong>
                    <span>${personagem.mortos}</span>
                </div>

            </div>

            ${criarTabela("Atributos", personagem.atributos)}

            ${criarTabela("Perícias", personagem.pericias)}

            <h3>Lore</h3>

            <div class="lore">

                <p>${personagem.lore}</p>

            </div>

        </div>

    `;

}


// ========================================
// FICHA BLD
// ========================================

function abrirBLD() {

    const resultado = document.getElementById("resultadoFicha");

    resultado.innerHTML = `

        <div class="ficha">

            <h2>bld</h2>

            <button class="botao-voltar-ficha" onclick="abrirFichaBrady()">
                ← Voltar para Brady
            </button>

            <div class="dados-personagem">

                <div>
                    <strong>Idade</strong>
                    <span>35</span>
                </div>

                <div>
                    <strong>Peso</strong>
                    <span>200kg</span>
                </div>

                <div>
                    <strong>Altura</strong>
                    <span>3,20</span>
                </div>

                <div>
                    <strong>Classe</strong>
                    <span>criatura mistica</span>
                </div>

                <div>
                    <strong>Afiliação</strong>
                    <span>federaçao</span>
                </div>

                <div>
                    <strong>Magia</strong>
                    <span>destruiçao</span>
                </div>

                <div>
                    <strong>Devoção</strong>
                    <span>tempo</span>
                </div>

                <div>
                    <strong>Pessoas mortas</strong>
                    <span>X</span>
                </div>

            </div>

            ${criarTabela("Atributos", {

                Força: 5,
                Inteligência: 4,
                Velocidade: 3,
                Vontade: 4,
                Percepção: 1,
                Destreza: 4

            })}

            ${criarTabela("Perícias", {

                Sorte: 11,
                Equilíbrio: 12,
                Precisão: 20,
                Sabedoria: 5,
                Furtividade: 9,
                Agilidade: 1,
                Acrobacia: 10,
                Investigação: 6,
                Persuasão: 20,
                Intimidação: 11,
                Diplomacia: 18,
                Pilotagem: 13,
                Mira: 20,
                Atletismo: 20,
                Arrombamento: 20,
                Medicina: 2,
                Criação: 2,
                Carisma: 3,
                Vigor: 15,
                Tecnologia: 8,
                "Conhecimento mágico": 15

            })}

            <h3>Lore</h3>

            <div class="lore">

                <p>
                    um esperimento da federaçao feito fazendo ele se tranformar nun montro
                </p>

            </div>

        </div>

    `;

}


// ========================================
// VOLTAR PARA BRADY
// ========================================

function abrirFichaBrady() {

    document.getElementById("senhaFicha").value = "Brady";

    abrirFicha();

}


// ========================================
// RECURSOS DO MESTRE
// ========================================

function abrirMestre() {

    const senha = document.getElementById("senhaMestre").value;
    const resultado = document.getElementById("resultadoMestre");

    if (senha === "751") {

        resultado.innerHTML = `

            <div class="ficha">

                <h2>Recursos do Mestre</h2>

                <p>
                    Seja bem vindo mestre.
                </p>

                <div class="menu-mestre">

                    <button onclick="mostrarRecursoMestre('inicio')">
                        Início
                    </button>

                    <button onclick="mostrarRecursoMestre('elemento')">
                        Elemento
                    </button>

                    <button onclick="mostrarRecursoMestre('classes')">
                        Classes
                    </button>

                    <button onclick="mostrarRecursoMestre('moto-clube')">
                        Moto Clube
                    </button>

                    <button onclick="mostrarRecursoMestre('livros')">
                        Livros
                    </button>

                </div>

                <div id="conteudoMestre">

                    <h3>Início</h3>

                    <p>
                        Seja bem vindo mestre.
                    </p>

                </div>

            </div>

        `;

       } else {

        resultado.innerHTML = `
            <p class="erro">Senha incorreta.</p>
        `;

    }

} // fecha abrirMestre


// ========================================
// MENU DOS RECURSOS DO MESTRE
// ========================================

function mostrarRecursoMestre(recurso) {

    const conteudo = document.getElementById("conteudoMestre");

    if (recurso === "inicio") {

        conteudo.innerHTML = `
            <h3>Início</h3>

            <p>
                Seja bem vindo mestre.
            </p>
        `;

    }

    if (recurso === "elemento") {

        conteudo.innerHTML = `

            <h3>Elementos</h3>

            <h4>Alma</h4>

            <p><strong>Corpo:</strong> ganha mais 2 pontos de força e velocidade e mais 10 de atletismo, acrobacia, agilidade, precisão e equilíbrio.</p>

            <p><strong>Mente:</strong> ganha mais 2 em inteligência e percepção e mais 10 em precisão, sabedoria, investigação, medicina, tecnologia e conhecimento mágico.</p>

            <p><strong>Alma:</strong> a chama da alma, uma chama que queima e toca a alma do inimigo.</p>

            <p><strong>Espírito:</strong> consegue enxergar os fantasmas e os espíritos e falar com eles.</p>


            <h4>Magia</h4>

            <p><strong>Magia Base:</strong> fogo cria chamas capazes de destruir e queimar; água permite curar 1d% de vida do aliado; vento permite ficar mais inteligente e ter sucesso em testes de inteligência e percepção; terra permite se defender e defender aliados criando uma barreira com 3d% de vida.</p>

            <p><strong>Magia Complexa:</strong> temporal permite mudar a posição do sol e da lua e transformar o dia em noite; espacial permite levitar e voar um pouco; invocação permite invocar algum ser ou criatura; ilusão permite criar ilusão de si mesmo ou objetos; selamento permite prender um ser em algo; transmutação permite se transformar ou transformar alguém em algo; gravidade permite mudar a gravidade como quiser.</p>

            <p><strong>Magia Divina:</strong> luz da criação cura 2d% de vida; escudo dos arcanjos protege de maldições e efeitos; chama sagrada cura pessoas ou seres corrompidos; julgamento celestial invoca lanças que dão 30 de dano no inimigo.</p>

            <p><strong>Magia Demoníaca:</strong> chama negra tira o elemento e bênção de qualquer coisa do alvo; prisão sombria prende o inimigo dentro da mente dele; asas do rei demônio dão mais 2 de força, velocidade e destreza e mais 10 de equilíbrio, precisão, furtividade, agilidade, acrobacia, mira, atletismo, arrombamento e vigor; eclipse do abismo deixa uma região em escuridão e enfraquece os inimigos.</p>

            <p><strong>Magia Amaldiçoada:</strong> marca da ruína causa 1d20 de dano a cada rodada; correntes do vazio aprisionam o espírito de alguém em algo; névoa dos mil lamentos faz a pessoa ouvir vozes; selo da noite eterna deixa o afetado sem usar habilidades.</p>


            <h4>Destruição</h4>

            <p><strong>Destruição:</strong> explosão escarlate, chamas do crepúsculo, lança da ruína e sol da extinção.</p>

            <p><strong>Morte:</strong> toque do silêncio, névoa dos sepulcros, passagem do véu e foice do descanso eterno.</p>

            <p><strong>Sangue:</strong> lâminas carmesins, correntes rubras, coração do dragão escarlate e mar vermelho.</p>

            <p><strong>Guerra:</strong> armadura do conquistador, rugido das mil espadas, bandeira do rei guerreiro e trono do general carmesim.</p>


            <h4>Céu do Abismo</h4>

            <p><strong>Divino:</strong> luz das constelações, espada do Serafim, muralha dos arcanjos e coroa das mil estrelas.</p>

            <p><strong>Demoníaco:</strong> chamas do eclipse, asas da noite, rugido do dragão abismal e trono do rei demônio.</p>


            <h4>Caos</h4>

            <p><strong>Caos:</strong> alteração, distorção, ruptura, transcendência e absoluto.</p>

        `;

    }

    if (recurso === "classes") {

        conteudo.innerHTML = `

            <h3>Classes</h3>

            <h4>Classes Simples</h4>

            <p><strong>Mago</strong></p>

            <p><strong>Atirador</strong></p>

            <p><strong>Lutador</strong></p>

            <p><strong>Cientista</strong></p>

            <p><strong>Assassino:</strong> voz na cabeça.</p>


            <h4>Classes Avançadas</h4>

            <p><strong>Demônio:</strong> +2 Força e Vontade; +10 Furtividade, Intimidação e Arrombamento. Atributo <strong>Pacto</strong>: pode negociar com o inimigo e ter a alma dele.</p>

            <p><strong>Anjo:</strong> +2 Força e Velocidade; +10 Agilidade, Diplomacia e Medicina. Atributo <strong>Voo</strong>: pode voar.</p>

            <p><strong>Vampiro:</strong> +1 Força, Inteligência e Velocidade; +5 Furtividade, Agilidade, Acrobacia, Atletismo, Medicina e Vigor. Atributo <strong>Mordida</strong>: pode fazer o inimigo te obedecer.</p>

            <p><strong>Sombra:</strong> +3 Força, Velocidade, Vontade e Percepção; +15 Precisão, Furtividade, Agilidade, Acrobacia, Intimidação, Mira, Atletismo, Arrombamento, Vigor e Conhecimento Mágico. Atributo <strong>Sombra</strong>: pode virar uma sombra.</p>

        `;

    }
    if (recurso === "moto-clube") {

    conteudo.innerHTML = `

        <h3>Moto Clube</h3>

        <p><strong>Unidos e Libertos</strong></p>
        <p>Tem sucesso nos próximos testes.</p>
        <p><strong>Local:</strong> Centro de Moneycit</p>

        <p><strong>Abutres</strong></p>
        <p>+300 dano.</p>
        <p><strong>Local:</strong> Centro de Moneycit</p>

        <p><strong>Insanos</strong></p>
        <p>Dá 5d% a mais.</p>
        <p><strong>Local:</strong> Centro de Moneycit</p>

        <p><strong>Pés Vermelhos</strong></p>
        <p>
            Faz um evento. Todos os inimigos vão perder 1d% de vida caso erre
            e 2d% caso acerte. Se der um 20 no dado, vai 3d%.
        </p>
        <p><strong>Local:</strong> Centro de Moneycit</p>

        <p><strong>Rock End Road</strong></p>
        <p>
            Pode usar dois poderes de qualquer moto clube,
            mas só uma vez por luta.
        </p>
        <p><strong>Local:</strong> Centro de Moneycit</p>

        <p><strong>Águias da Paz</strong></p>
        <p>
            Faz com que qualquer ataque de qualquer um não acerte.
            Teste de Vontade.
        </p>
        <p><strong>Local:</strong> Centro de Moneycit</p>

        <p><strong>Quebrados</strong></p>
        <p>
            Consegue matar um inimigo por vez, mas perde 1d% de vida.
            Inimigo até 5000 de PV.
        </p>
        <p><strong>Local:</strong> Zona de Comércio de Suuntraine</p>

        <p><strong>Rat Bike</strong></p>
        <p>
            Faz a arma de um inimigo enferrujar e parar de funcionar.
        </p>
        <p><strong>Local:</strong> Zona de Comércio de Suuntraine</p>

        <p><strong>No Rules</strong></p>
        <p>
            Pode usar o poder quantas vezes quiser sem gastar magia.
        </p>
        <p><strong>Local:</strong> Fábricas de Moneycit</p>

        <p><strong>Loucas Moto Clube</strong></p>
        <p>Dá mais 5d20 de dano.</p>
        <p><strong>Local:</strong> Centro de Moneycit</p>

        <p><strong>Amigos da Naja</strong></p>
        <p>
            Dá envenenamento. Perde 1d% de vida a cada rodada.
        </p>
        <p><strong>Local:</strong> Centro de Moneycit</p>

        <p><strong>Velho Oeste Moto Clube</strong></p>
        <p>
            Qualquer arma de tiro vai dar mais 5d% de dano.
        </p>
        <p><strong>Local:</strong> Guardas do Rei de Suuntraine</p>

    `;

}
if (recurso === "livros") {

    conteudo.innerHTML = `

        <h3>Livros</h3>

        <div class="livros">

            <button onclick="abrirLivroMestre('escolhidos')">
                Livro dos Escolhidos
            </button>

            <button onclick="abrirLivroMestre('sociedades')">
                Sociedades
            </button>

            <button onclick="abrirLivroMestre('verde')">
                Livro Verde
            </button>

            <button onclick="abrirLivroMestre('laranja')">
                Livro Laranja
            </button>

            <button onclick="abrirLivroMestre('azul')">
                Livro Azul
            </button>

        </div>

    `;
}

}
function abrirLivroMestre(livro) {

    if (livro === "escolhidos") {
        window.open("O Livro dos Escolhidos.pdf", "_blank");
    }

    if (livro === "sociedades") {
        window.open("sociedades.pdf", "_blank");
    }

    if (livro === "verde") {
        window.open("livro verde.pdf", "_blank");
    }

    if (livro === "laranja") {
        window.open("livro laranja.pdf", "_blank");
    }

    if (livro === "azul") {
        window.open("livro azul.pdf", "_blank");
    }

}


const criaturas = [
    {
        nome: "Hellken",
        vida: "800",
        resistencia: "1000",
        poderes: "Medo"
    },
    {
        nome: "3 líder de Encaminhos (Conhecimento)",
        vida: "50",
        resistencia: "30",
        poderes: "Conexão com Dest"
    },
    {
        nome: "2 líder de Encaminhos (Raios)",
        vida: "100",
        resistencia: "50",
        poderes: "Controla raios - 50 dano"
    },
    {
        nome: "1 líder de Encaminhos",
        vida: "200",
        resistencia: "500",
        poderes: "Controle de sombras"
    },
    {
        nome: "Shunthant",
        vida: "100",
        resistencia: "80",
        poderes: "Criar sombras"
    },
    {
        nome: "Chupa Cabra",
        vida: "50",
        resistencia: "30",
        poderes: "Mordida - 50 dano"
    },
    {
        nome: "El Silbom",
        vida: "50",
        resistencia: "80",
        poderes: "Saco - teste de Vontade"
    },
    {
        nome: "Thunt",
        vida: "200",
        resistencia: "320",
        poderes: "Mordida - 50 dano e caudada - 30 dano"
    },
    {
        nome: "Metamorfo",
        vida: "100",
        resistencia: "50",
        poderes: "Ataque - 20 dano"
    },
    {
        nome: "Abelha Rainha",
        vida: "10",
        resistencia: "5",
        poderes: "Picada - possui pessoa"
    },
    {
        nome: "Barmen",
        vida: "50",
        resistencia: "20",
        poderes: "Socos - 20 dano - 50 para quem bebeu"
    },
    {
        nome: "Golem de Pedra",
        vida: "200",
        resistencia: "300",
        poderes: "Pisada - 80 dano e socos - 60 dano"
    },
    {
        nome: "Rei do Lago",
        vida: "300",
        resistencia: "150",
        poderes: "Socos - 50 dano, Maré Profunda e Espelho Abismal"
    },
    {
        nome: "Falmon",
        vida: "500",
        resistencia: "1000",
        poderes: "Chamas - 80"
    },
    {
        nome: "Demônio Elemental",
        vida: "50",
        resistencia: "80",
        poderes: "Socos - 20 dano e energia de todos os elementos"
    },
    {
        nome: "Queruin Blanc",
        vida: "100",
        resistencia: "80",
        poderes: "Socos - 20 dano e regeneração - 2d20"
    },
    {
        nome: "Ravi Yume",
        vida: "50",
        resistencia: "80",
        poderes: "Socos - 20 dano e Desert Eagle"
    },
    {
        nome: "Clant",
        vida: "20",
        resistencia: "30",
        poderes: "Socos - 5 dano"
    },
    {
        nome: "R351V - RV",
        vida: "50",
        resistencia: "70",
        poderes: "Socos - 15 dano"
    },
    {
        nome: "Humberto",
        vida: "30",
        resistencia: "10",
        poderes: "Socos - 1 dano"
    },
    {
        nome: "Gênio",
        vida: "50",
        resistencia: "30",
        poderes: "Trofeu"
    },
    {
        nome: "Dullaran",
        vida: "100",
        resistencia: "80",
        poderes: "Chicote de ouro"
    },
    {
        nome: "Cavalo Dulla",
        vida: "50",
        resistencia: "80",
        poderes: "Coice - 50"
    },
    {
        nome: "Encourado",
        vida: "100",
        resistencia: "350",
        poderes: "Rifle"
    },
    {
        nome: "Cain",
        vida: "Imortal",
        resistencia: "Imortal",
        poderes: "Katana de Cain e pedrada - hit kill"
    },
    {
        nome: "Zeuu",
        vida: "10000",
        resistencia: "50000",
        poderes: "Faca de Zeus"
    },
    {
        nome: "Mão do Fim",
        vida: "1000",
        resistencia: "3000",
        poderes: "Cetro do Abismo e Face Demoníaca - dobro de vida e dano e não erra"
    },
    {
        nome: "Megan",
        vida: "500",
        resistencia: "100",
        poderes: "Lancha chave e Serra Quântica"
    },
    {
        nome: "Desthor",
        vida: "800",
        resistencia: "150",
        poderes: "Marreta de Desthor e Katanas Gêmeas"
    },
    {
        nome: "Himal",
        vida: "300",
        resistencia: "100",
        poderes: "Bastão Profético, Glock e pode voar"
    },
    {
        nome: "Quin Shin Huang",
        vida: "1500",
        resistencia: "520",
        poderes: "Facões gêmeos e bico de Tharok"
    },
    {
        nome: "Loney",
        vida: "100",
        resistencia: "30",
        poderes: "Katanas da Luz"
    },
    {
        nome: "Drany",
        vida: "800",
        resistencia: "350",
        poderes: "Luz e corte - 3d20 de dano"
    },
    {
        nome: "Peste",
        vida: "500",
        resistencia: "100",
        poderes: "Arco da Peste"
    },
    {
        nome: "Fome",
        vida: "500",
        resistencia: "100",
        poderes: "Balança da Fome"
    },
    {
        nome: "Morte",
        vida: "500",
        resistencia: "100",
        poderes: "Foice da Morte"
    },
    {
        nome: "Latac",
        vida: "800",
        resistencia: "250",
        poderes: "Canhão - 500 dano, lâmina - 150 dano e raio - 800 dano; só usa uma vez"
    }
];


function carregarCriaturas() {
    const tabela = document.getElementById("tabelaCriaturas");

    if (!tabela) {
        return;
    }

    tabela.innerHTML = "";

    criaturas.forEach(function(criatura) {
        const linha = document.createElement("tr");

        linha.style.cursor = "pointer";
linha.onclick = function() {
    mostrarDetalhesCriatura(criatura); 
};

        linha.innerHTML = `
            <td>${criatura.nome}</td>
            <td>${criatura.vida}</td>
            <td>${criatura.resistencia}</td>
            <td>${criatura.poderes}</td>
        `;

        tabela.appendChild(linha);
    });
}
function mostrarDetalhesCriatura(criatura) {
    const resultado = document.getElementById("resultadoCriatura");

    resultado.innerHTML = `
        <div class="ficha">
            <h2>${criatura.nome}</h2>

            <h3>Características</h3>

            <div class="dados-personagem">
                <div>
                    <strong>Vida</strong>
                    <span>${criatura.vida}</span>
                </div>

                <div>
                    <strong>Resistência</strong>
                    <span>${criatura.resistencia}</span>
                </div>
            </div>

            <h3>Poderes</h3>

            <div class="lore">
                <p>${criatura.poderes}</p>
            </div>
        </div>
    `;
}
// ========================================
// ABRIR LIVROS
// ========================================

function abrirLivro(livro) {

    if (livro === "sistema") {
       window.open("sistema1.pdf.pdf", "_blank");
    }

    if (livro === "demonios") {
        window.open("Livro dos Demônios Ancestrais.pdf", "_blank");
    }

    if (livro === "cinco") {
        window.open("livro das cinco sessoes eternas.pdf", "_blank");
    }

}
