/*
 Referência em Vídeo - DOM (Document Object Model)
 Canal: Curso em Vídeo (Site) - EP01 (Playlist: JavaScript)
 https://youtu.be/WWZX8RWLxIk

  // COMENTÁRIO //

 O DOM (Document Object Model) é um ACRÔNIMO de conjuntos de objetos (inseridos no navegador) que
 dará acesso aos componentes internos do website, sua funcionalidade não se aplica em
 programas usados no JS ( node.js ). Porém, é localizado ao ser acessado internamente
 no navegador.
 Algo que é presente na sua execução, a Árvore DOM está localizada em uma raiz nomeada
 como window' que permite a visualização de uma "janela" no navegador. O formato também
 é dividido por áreas que implementam as janelas como:
    
    - window 
     - location -> do qual define a localização de um site (por sua URL e páginas )
     - document -> documento atual
     - history -> histórico de navegação

 E eles são interligados por classes, como :
    - html -> o arquivo criado 
    - head -> cabeçalho deste documento ( " filhos do html ")
	- meta / title / style -> métricas
    - body -> corpo deste documento ( " filhos do html ")
    - div / h1 / p -> corpo do documento -> métricas ( " filhos do body ")

 A ação de navegação entre os elementos do Documente Object Model ( DOM ) ocorre por meio de propriedades
 e métodos que permitam acessar e interagir os diferentes componentes da página. Estes elementos podem ser navegados
 por métodos que selecionam-as dentro da árvore, como por exemplo:

    - write -> escrever 
        window.document.write("olá mundo");
    - tag -> marcador
        document.getElementByTagName ( tag )
    - id -> identificação
        document.getElementById ( id ) = uso de #
     - name -> nome
        document.getElementsByName ( name )
    - classe -> classe
        document.getElementsByClassName ( class ) = uso de pontos
    - seletor -> seletor 
        document.querySelector ( seletor )
        document.quwerySelectorAll ( tudo )

----------------------------------------------------
 recomendação de programas:
 watch'in'chrome (extensão)
 node exec (extensão)
 vscode watch'in'chrome (plug-in no chrome)

*/

/*
 Referência em Vídeo - DOM ( Document Object Model )
 Canal: Curso em Vídeo (Site) - EP02 (Playlist: JavaScript)
 https://youtu.be/wWnBB-mZIvY

    // COMENTÁRIO //

 Recapitulando o que foi debatido anteriormente, o DOM é a representação em forma de árvore 
 da estrutura do HTML, permitindo que os desenvolvedores manipulem os elementos da página de forma
 programática através do JS. A interação é realizada por meio de propriedades e métodos que possibilitam
 o acesso, a modificação e a análise das estruturas.

    -> estrutura hierárquica ( árvore )
     - a estrutura em árvore organiza os elementos de páginas em uma árvore de ' nós ', 
      onde cada elemento HTML é um nó que deriva-se de outros nós.
    
    -> manipulação de elementos = usados para modificar elementos através das técnicas:
     - tagname 
     - id
     - name
     - className
     - querySelector 

 Segundo o conteúdo apresentado, os "eventos DOM"  ações que ocorrem na página e podem ser capturados com JS 
 para execução de funções específicos. Essas ações permitam a interatividade e utilização de mecanismos ágeis 
 para realização de ações como:

    - mouseenter = ação que sobrepõe por algum elemento
    - mousedown = ação efetuada por um clique
    - mouseup = ação efetuada após o clique do elemento
    - onmouseover = altera o corportamento quando o mouse está emcima do elemento  
    - onmouseout = ação realizada quando o mouse está fora do elemento
    - onclick = quando o usuário clica em um elemento
    - onkeyup = quando uma tecla é selecionada e pressionada
    - innerText = texto que está dentro do elemento
    - innerHTML = código HTML que está dentro do elemento

 Para explorar demais comandos executáveis pelo DOM, acesse o site:
    
    - https://www.w3schools.com/jsref/dom_obj_all.asp
    - https://developer.mozilla.org/en-US/docs/Web/Events
    
 Porém, os conceito sobre as ações só serão realizadas através de funções que possibilitam a interação e movimentação 
 de elementos, as funções são blocos de códigos que são aplicados para executar ações específicas na web, tendo relevância 
 durante o processo de criação de sites por capturar eventos através de conteúdos dinâmicos.
 As funções são aplicadas atrvés de blocos de códigos, que são delimitados por meio de " chaves " ( {} ) que são classificados 
 por sua nomeação " function " e exigem a identificação de eventos...incluindo parâmetros que executa comandos necessários.

    - os eventos podem ser ajustados pela estrutura HTML ou diretamente pelo JS
    - as funções podem não ter identificadores, sendo nomeado como " função anônima "

 Dependendo do funcionamento do código, o programa pode não executar algum comando sem localizar ou identificar o erro cometido.
 Com isso, existe comandos recomendados que facilita a identificação do problema:

    -> clique com o botão direiro do mouse
     -> clique em inspecionar
      -> acesse a área "dev tools" ou pressione " ctrl + shift + i "
        -> verifique o alerta de erro e faça a correção

*/