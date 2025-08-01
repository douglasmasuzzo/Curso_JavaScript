/*
 Referência em Vídeo - Conhecendo JS (Módulo A)
 Canal: Curso em Vídeo (Site) - EP01 (Playlist: JavaScript)
 https://youtu.be/uzEhd3Lugik

 // COMENTÁRIO //

 O conteúdo apresentado pelo curso será responsável de explicar e apresentar os fundamentos da linguagem Js e seus fundamentos,
 através do método de aprendizagem que é disponibilizado pela plataforma. A playlist possuirá módulos, aulas e exercícios 
 que incluem os vídeos para o material principal para verificar se o usuário conseguiu absorver os ensinamentos sobre a linguagem de programação
 e se está ápto e capacitado para seguir nesta área.
 Neste módulo, a estratégia porposta por educadores são:
    - O que é JS e que faz?
        - Dicas de Aprendizagem
            - JavaScript vs ECMAScript
                - Requisito de programas / softwares
                    - Primeiras produções de Scripts.     
*/

/*
 Referência em Vídeo - O que é JS e o que faz? (Módulo A)
 Canal: Curso em Vídeo (Site) - EP02 (Playlist: JavaScript)
 https://youtu.be/Ptbk2af68e8

 // COMENTÁRIO //

 Antes de iniciar,existe o questionado do que o JS se trata, o que ele faz, o que é e como pode ser utilizado Neste módulo, os ensinamentos 
 serão apresentados por vídeos e falará sobre as ações interativas que a linguagem porporcina. 
 Inicialmente, para comprender o que a linguagem faz, é importante entender o conceito de "Cliente x Server". O conceito descreve a interação
 entre duas partes principais em uma rede: o cliente e o servidor. Esse modelo é fundamental para a comunicação na internet e em sistemas distribuídos
 (como os navegadores).

 ex:
    Cliente
     - Quem faz o pedido (navegador)
         Envia solicitações ao servidor, como ao acessar uma página web ou buscar informações, 
             onde recebe e exibe os dados enviados pelo servidor (pela URL de um site).
    Servidor:
     - Quem presta serviços a essas informações (páginas web)
         - Processa as solicitações feitas pelo cliente. Envia de volta os dados ou realiza ações,
             como carregar um site, fornecer arquivos ou executar operações de banco de dados.
    Resumo
     - O cliente envia uma solicitação (request) ao servidor.
         O servidor processa essa solicitação e envia uma resposta (cópia do arquivo) ao cliente.
             O cliente exibe ou usa os dados recebidos.

 Inicialmente, a linguagem foi desenvolvida para garantir o funcionamento na área "Cliente", sendo reconhecida como
 uma linguagem "Client Side", mas depois de modificações, o Js começou a ser introduzido ao lado dos "Servidores" 
 e pode distribuir suporte as demais classes.

 No conceito do "Client Side", os mecanismos tecnológicos que compõem a formação de um website são: 
     Conteúdo: HTML (HyperText Markup Language)
         - Linguagem de marcação para a criação do conteúdo de um site  
     A linguagem HTML foca na criação de contepudo, baseado em textos e marcações.    
    
     Design: CSS (Cascading Style Sheet)
         - Linguagem de marcaçaõ para a criação do desing de um site
     O CSS vai modificar o layout desssa página, adicionando requisitos ilustrativos     
     que enfatiza o visual e o material utilizado.

     Interação: JS (JavaScript)  
         - Linguagem de programação para criação de interatividade de um site
     E estaa linguagem pode influenciar o uso de ações interativas que constroem um sie, 
     viabilizando comandos e navegações mais responsivas. 
*/

/*
 Referência em Vídeo - Cono chegamos em JS? (Módulo A)
 Canal: Curso em Vídeo (Site) - EP03 (Playlist: JavaScript)
 https://youtu.be/rUTKomc2gG8 

 // COMENTÁRIO //

 A segunda aula apresenta questionamentos referentes as dúvidas da área da programação, perguntas existentes que 
 compoem a realidade dos primeiros processos da tecnologia.
 Desde a origem das relações políticas entre os países, presenciavamos o surgimento de potências políticas / armamentistas que travaram 
 batalhas geo-políticas que infleunciaram o uso das tecnologias até o cotidiano atual, evento protagonizado pelo embate poítico e 
 tecnológico entre o USA (Estados Unidos) e a URSS (União Soviética) na década de 60'.
 A Guerra Fria foi marcada por intensa rivalidade tecnológica, e a DARPA (Agência de Projetos de Pesquisa Avançada de Defesa), criada pelo
 governo norte-americano em 1958, desempenhou um papel crucial nesse desenvolvimento. Fundada como resposta ao lançamento do satélite soviético
 Sputnik, a DARPA impulsionou avanços significativos em computação, redes e linguagens de programação. Um exemplo marcante foi o financiamento 
 do projeto ARPANET, precursor da internet, que visava criar sistemas de comunicação resilientes e seguros. 
 Esse ambiente de competição não apenas moldou a dinâmica tecnológica da época, mas também estabeleceu as bases para muitas das ferramentas e
 paradigmas de programação utilizados atualmente.

 Nos anos 1990, Tim Berners-Lee desenvolveu o HTML (HyperText Markup Language), a linguagem base para estruturar documentos na World Wide Web, 
 junto com o protocolo HTTP (HyperText Transfer Protocol), que permitiu a troca de informações entre servidores e navegadores. Posteriormente, 
 o HTTPS (HTTP Secure) foi introduzido, adicionando segurança por meio de criptografia. 
 Além disso, o W3C (World Wide Web Consortium), fundado em 1994 por Berners-Lee, foi essencial para estabelecer padrões que garantissem a 
 interoperabilidade e evolução da web, promovendo acessibilidade inovação tecnológica.
 
 Na décade de 1990, o ambiente de inovação tecnológica também deu origem a linguagens fundamentais como Java e JavaScript (JS). Java, criado 
 pela Sun Microsystems em 1995, foi projetado para ser uma linguagem portátil, capaz de rodar em qualquer dispositivo com a Máquina Virtual Java (JVM),
 tornando-se amplamente utilizado em aplicações empresariais e móveis.  
 No mesmo ano, Brendan Eich desenvolveu o JavaScript para o navegador Netscape Navigator, com o objetivo de adicionar interatividade às páginas da web. 
 Posteriormente, em 1997, o JavaScript foi padronizado pela ECMA (Assocação Europeia de Padronização de Computadores) International, resultando no "ECMAScript",
 que estabeleceu as bases para sua interoperabilidade e evolução. Essa padronização garantiu que o JavaScript pudesse ser amplamente adotado em diferentes 
 navegadores, consolidando sua posição como uma das principais linguagens da web.

 O surgimento dos navegadores foi crucial para a popularização da web. O Microsoft Internet Explorer (fornecido pela Trident) foi lançado em 1995 como parte do 
 pacote Windows, rapidamente ganhando popularidade durante a chamada "guerra dos navegadores". Anos depois, em 2002, surgiu o Firefox (apoiado pelo Gecko), desenvolvido pela Mozilla
 Foundation, com foco em código aberto, segurança e maior compatibilidade, desafiando o domínio do Internet Explorer.
 Em 2008, o Google lançou o Chrome (motorizado pela Blink), destacando-se por sua velocidade, simplicidade e inovação, tornando-se o navegador mais utilizado no mundo. Cada um desses
 navegadores desempenhou um papel importante na evolução e acessibilidade da internet.
 
 O Node.js é um ambiente de execução de JavaScript no lado do servidor, permitindo que os desenvolvedores utilizem JavaScript para criar aplicações web e servidores. Lançado em 2010,
 ele é baseado no motor V8 do Google Chrome, o que garante alta performance na execução do código. Ao contrário dos navegadores, que executam JavaScript no lado do cliente, o Node.js permite
 que o código seja executado no servidor, facilitando a criação de aplicativos escaláveis e rápidos, como APIs, sistemas de chat em tempo real e aplicações de streaming. 
 Além disso, ele possui um vasto ecossistema de pacotes, gerenciado pelo npm (Node Package Manager), o que facilita a instalação e gerenciamento de bibliotecas para diferentes funcionalidades.

 Usado como conteúdo, o material apresenta uma "linha temporal" que descreve o surgimento e evolução do JavaScript através das décadas, de acordo com o fluxo:
 
    1970 - a fundação do o´rgão "DARPA" e o início do projeto "ARPANET" (Internet)
    1993 - adesão do protocolo "htpps" e o surgimento do W3C (World Wide Web Consortium)
    1995 - surgimento da linguageM Java e JavaScript
    1995 - origem do navador Microsoft Internet Explore (integrado ao Windows 95)
    1997 - padronização da linguagem JS pela "ECMA" (Associação Européia de Padronização de Computadores)
    2002 - surgimento do FireFox Explore (pela Mozilla), desafiando o domínio do Intert Explorer  
    2008 - origem do navegador Google Chrome (motorizado pelo Blink) 
    2010 -  lançamento do Node.JS, popularizando-o para as versões de servidores. 
                    
 A linguagegm ECMAScript é uma versão padronizada da linguagem JS, desenvolveu suas versões iniciais em 1997 e em 1998. Em 1999, no ano seguinte a versão anterior,
 lançou a versão 3.0 que modificou a interface e operações do sistema, trazendo inovações e novops comnandos em coparação aos modelos anteriores.
 Após o lançamento das versões atualizadas, criou-se expectativas para o surgimento da versão 4.0 mas a atualização deste modelo nunca ocorreu, deste modo, o lançamento posterior
 desta versão touxee diversos incrementos e tornou-se popular pela versatilidader em diferentes navegadores. Em 2016, anos após o último lançamento, o modelo 
 "ECMS6" (6.0) introduziu como "let" e "const" para declaração de variáveis, arrow functions, classes, módulos, promessas e o spread/rest operator, 
 transformando o JavaScript em uma linguagem mais poderosa e expressiva. A partir dos demais lançamentos, a nomeclatura mudou seguindo os lançamentos entre os anos até a sua última versão, "ESM 2019".
 
 As tecnologias que possuem a lingugagem JavScrit por bibliotecas / frameworks:

    Tecnologias
        Node.Js
            - Ambiente de execução de JavaScript no servidor, permitindo o uso do JavaScript fora do navegador,
                 para construir servidores, APIs e aplicações em tempo real.
        Web API's
            - Conjunto de interfaces e funcionalidades integradas nos navegadores, como DOM (Document Object Model),
                 Geolocation API, Canvas API, entre outros, que permitem manipular elementos da página e acessar recursos do dispositivo.
    Bibliotecas
        jQuery
            - Uma das bibliotecas mais populares para facilitar a manipulação de DOM, animações e requisições AJAX. 
                 Embora menos usado hoje devido à evolução do JavaScript, ainda é uma biblioteca bastante presente em muitos projetos legados.
        Axios
            - Biblioteca para fazer requisições HTTP (REST, APIs), baseada em promessas, tornando a comunicação assíncrona mais simples e robusta.
    Framework
        React
            - Framework (tecnicamente uma biblioteca) desenvolvido pelo Facebook, utilizado para a criação de interfaces de usuário dinâmicas.
                 React é baseado em componentes, facilitando o desenvolvimento de UIs reutilizáveis.
        Vue.js
            - Framework progressivo para a construção de interfaces de usuário. Vue é leve, fácil de integrar e oferece recursos avançados para construção de SPAs (Single Page Applications). 
*/

/*
 Referência em Vídeo - Primeiros passoas
 Canal: Curso em Vídeo - EP04 (Playlist: JavaScript)
 https://youtu.be/FdePtO5JSd0

 // COMENTÁRIO //

 A aula anterior apresentou a utilidades e fundamentos da linguagem, neste episódio, será aplicado os materiais que serão utilizados e a construção de um arquivo em js.
 A forma de estudo não está relacionada ao consumo de materiais apenas, a ação de praticar algo é o que reforça a importância da aprendizagem, levando em consideração a 
 quantidade de vezes que o indivíduo pratica ou o jeito que se dedica para desenvolver uma habilidade. Os meios que possibilitam o seu desenvolvimento como profissional 
 resume-se em práticas habituais: como documentação de vídeos, registro de conteúdo, digitalização de códigos, leitura de materiais e etc. 

 O uso de referências bibliográficas para o desenvolvimento do curso são:
     "JavaScript: O guia definitivo" (baseado na versão ECM5)
     "JavaScript: Guia do Programação" (baseado na versão ECM6)
     "Guia de referência da Mozilla" - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
     "Guia de referência da ECMA" - https://ecma-international.org/publications-and-standards/standards/ecma-262/

 Os materiais que devrão ser utilizados são:
     - navegadores (Chrome)
         - ferramentas (vscode / node.js)
*/

/*
 Referência em Vídeo - Primeiros passoas
 Canal: Curso em Vídeo - EP05 (Playlist: JavaScript)
 https://youtu.be/OmmJBfcMJA8

 // COMENTÁRIO //

 Relembrando o conteúdo passado, as ferramentas que são utilizadas para produzir um conteúdo web são: 
 o HTML (conteúdo), o CSS (design) e o JavaScript (interatividade). Para iniciar os trabalhos, os códigos 
 serão aplicados em ferramentas que estão baixadas.

 (obs: o "arquivo.js" criado está na pasta de exercícios.)
*/