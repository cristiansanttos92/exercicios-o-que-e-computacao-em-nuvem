// Estrutura de dados para armazenar perguntas e respostas com explicações detalhadas
const perguntas = [
    {
        pergunta: "O que é computação em nuvem?",
        alternativas: {
            a: "Uma tecnologia que permite acesso remoto a hardware físico no data center da empresa.",
            b: "A entrega sob demanda de recursos de TI, como armazenamento e computação, via Internet.",
            c: "Um sistema de software que opera apenas localmente.",
            d: "Um dispositivo físico utilizado para backup de dados."
        },
        respostaCorreta: 'b',
        explicacoes: {
            a: "Essa opção está incorreta. Embora a computação em nuvem permita acesso remoto, ela não se limita a acessar hardware físico em um único data center. O conceito é muito mais amplo, envolvendo uma rede de servidores distribuídos para fornecer serviços sob demanda, como armazenamento e processamento, de forma escalável e flexível.",
            b: "Essa é a resposta correta. A computação em nuvem é um modelo que permite o acesso a recursos de TI sob demanda, como servidores, armazenamento e bancos de dados, através da Internet. Esse modelo é vantajoso pois elimina a necessidade de infraestrutura física própria, oferecendo escalabilidade e cobrança com base no uso, o que pode reduzir custos.",
            c: "Essa opção está incorreta. A computação em nuvem não é limitada ao funcionamento local. Pelo contrário, o acesso a serviços e recursos é feito remotamente pela Internet, permitindo que esses serviços sejam utilizados em qualquer lugar, desde que haja uma conexão de rede.",
            d: "Essa opção está incorreta. A computação em nuvem não é um dispositivo físico, mas sim uma infraestrutura composta por vários servidores distribuídos. Embora possa ser usada para backup, seu propósito é muito mais abrangente, fornecendo diversos recursos computacionais e serviços remotos."
        }
    },
    {
        pergunta: "Qual das alternativas a seguir não é um modelo de serviço em nuvem?",
        alternativas: {
            a: "IaaS",
            b: "PaaS",
            c: "SaaS",
            d: "VPN"
        },
        respostaCorreta: 'd',
        explicacoes: {
            a: "Incorreto. IaaS, ou Infrastructure as a Service (Infraestrutura como Serviço), é um modelo de serviço de computação em nuvem que fornece recursos como servidores, redes e armazenamento. Esse modelo permite que as empresas aluguem infraestrutura computacional ao invés de mantê-la localmente.",
            b: "Incorreto. PaaS, ou Platform as a Service (Plataforma como Serviço), é outro modelo de serviço em nuvem. Ele oferece um ambiente para desenvolvimento, execução e gerenciamento de aplicativos, permitindo que desenvolvedores criem e gerenciem aplicações sem se preocupar com a infraestrutura subjacente.",
            c: "Incorreto. SaaS, ou Software as a Service (Software como Serviço), é um modelo de serviço onde o software é distribuído pela Internet e acessado através de um navegador ou aplicação. Exemplos comuns incluem e-mail baseado em web e plataformas de produtividade.",
            d: "Correto. VPN, ou Virtual Private Network (Rede Privada Virtual), não é um modelo de serviço de computação em nuvem. Ela é uma tecnologia de rede que permite uma conexão segura e privada em redes públicas, mas não está diretamente relacionada com os modelos de serviço em nuvem."
        }
    },
    {
        pergunta: "Qual dos seguintes modelos de serviço envolve menos gerenciamento pelo cliente?",
        alternativas: {
            a: "IaaS",
            b: "PaaS",
            c: "SaaS",
            d: "TI Local"
        },
        respostaCorreta: "c",
        explicacoes: {
            a: "Essa opção está incorreta. No modelo IaaS (Infraestrutura como Serviço), o provedor oferece componentes básicos, como servidores e armazenamento, mas o cliente é responsável por gerenciar o sistema operacional, instalar e configurar softwares e manter a segurança. Isso ainda exige uma série de tarefas de gerenciamento e configuração, que diferem do SaaS, onde o cliente usa apenas o software pronto.",
            b: "Essa opção está incorreta. No modelo PaaS (Plataforma como Serviço), o cliente utiliza uma plataforma gerenciada pelo provedor, incluindo hardware e sistema operacional. No entanto, o cliente ainda é responsável pelo desenvolvimento, gerenciamento e manutenção de seus próprios aplicativos na plataforma. Embora o PaaS reduza o gerenciamento em comparação ao IaaS, ainda exige mais envolvimento do cliente do que o SaaS.",
            c: "Essa é a resposta correta. O SaaS (Software como Serviço) envolve menos gerenciamento pelo cliente, pois o provedor de serviços gerencia todos os aspectos da infraestrutura, incluindo hardware, sistema operacional, segurança, armazenamento e atualizações. O cliente só precisa acessar o software pela Internet e utilizá-lo para suas finalidades específicas, sem se preocupar com a manutenção ou configuração do sistema. Exemplo: no Dropbox, o cliente armazena e organiza seus arquivos, enquanto o provedor se encarrega de todo o gerenciamento técnico e segurança.",
            d: "Essa opção está incorreta. Na TI local, a infraestrutura é inteiramente gerenciada pela organização. Isso inclui hardware, armazenamento, redes, segurança, atualizações e até mesmo o ambiente físico, como refrigeração e espaço. Esse modelo exige um nível de gerenciamento muito maior do que o SaaS, onde o provedor se encarrega de todos esses aspectos, enquanto o cliente foca apenas no uso do software."
        }
    },
    {
        pergunta: "Qual é um exemplo de SaaS?",
        alternativas: {
            a: "Amazon EC2",
            b: "AWS Lambda",
            c: "Dropbox",
            d: "Kubernetes"
        },
        respostaCorreta: "c",
        explicacoes: {
            a: "Essa opção está incorreta. O Amazon EC2 é um exemplo de IaaS (Infraestrutura como Serviço), onde o cliente gerencia o sistema operacional e as configurações do servidor. Embora o provedor ofereça recursos de infraestrutura, como capacidade de computação, o cliente ainda precisa configurar e gerenciar o servidor e suas aplicações, diferente do SaaS, onde o software já está completamente pronto para o uso.",
            b: "Essa opção está incorreta. O AWS Lambda é um serviço de computação serverless (sem servidor), que permite ao cliente executar funções sem precisar gerenciar infraestrutura, mas ele não é um exemplo de SaaS. No serverless, o cliente ainda controla o código e as configurações das funções, o que é diferente do SaaS, onde tudo está preparado para o uso do cliente final sem necessidade de configuração.",
            c: "Essa é a resposta correta. O Dropbox é um exemplo de SaaS (Software como Serviço), onde o usuário apenas gerencia seus arquivos, enquanto o provedor cuida de toda a infraestrutura subjacente, segurança, armazenamento e atualizações. Isso permite ao cliente focar apenas no uso do software, sem a necessidade de gerenciar aspectos técnicos.",
            d: "Essa opção está incorreta. O Kubernetes é uma plataforma de orquestração de contêineres, usada para gerenciar aplicações em contêineres em um ambiente distribuído. Ele oferece ferramentas para controlar clusters e workloads, mas não é um SaaS. SaaS envolve software pronto para uso, enquanto o Kubernetes requer configuração e gerenciamento pelo usuário."
        }
    },
    {
        pergunta: "Em que situação uma empresa pode preferir um modelo de nuvem híbrida?",
        alternativas: {
            a: "Quando precisa armazenar todos os dados localmente.",
            b: "Quando quer evitar qualquer tipo de integração com sua infraestrutura local.",
            c: "Quando deseja estender recursos de nuvem a uma infraestrutura já existente.",
            d: "Quando deseja utilizar apenas uma nuvem privada."
        },
        respostaCorreta: "c",
        explicacoes: {
            a: "Essa opção está incorreta. No modelo de nuvem híbrida, a empresa pode armazenar dados tanto localmente quanto na nuvem. Isso proporciona flexibilidade, pois a empresa pode escolher onde armazenar diferentes tipos de dados com base em necessidades específicas de segurança e acesso.",
            b: "Essa opção está incorreta. O conceito de nuvem híbrida envolve precisamente a integração entre infraestrutura de nuvem e a infraestrutura local. Empresas que optam por nuvem híbrida desejam ter uma ponte entre a nuvem e seus recursos locais.",
            c: "Essa é a resposta correta. A nuvem híbrida é ideal para empresas que desejam estender recursos da nuvem a uma infraestrutura já existente. Esse modelo combina o melhor dos dois mundos, permitindo que a empresa aproveite a escalabilidade da nuvem enquanto ainda utiliza e integra sua infraestrutura local.",
            d: "Essa opção está incorreta. Uma nuvem privada é isolada e restrita à infraestrutura de uma organização, sem recursos de nuvem pública. A nuvem híbrida, por outro lado, envolve o uso tanto da nuvem pública quanto da infraestrutura local, proporcionando uma combinação dos dois."
        }
    },
    {
        pergunta: "Qual é uma vantagem financeira do uso de computação em nuvem?",
        alternativas: {
            a: "Compra antecipada de hardware.",
            b: "Gastos contínuos com atualização de hardware.",
            c: "Redução de despesas iniciais de capital.",
            d: "Alto custo inicial com data centers."
        },
        respostaCorreta: "c",
        explicacoes: {
            a: "Essa opção está incorreta. A computação em nuvem permite que as empresas evitem a compra antecipada de hardware, uma vez que os recursos são disponibilizados sob demanda. Isso elimina a necessidade de gastos iniciais com infraestrutura própria.",
            b: "Essa opção está incorreta. Na nuvem, o provedor é responsável pela atualização do hardware, o que reduz os gastos contínuos e libera o cliente dessas responsabilidades.",
            c: "Essa é a resposta correta. Com a computação em nuvem, não há necessidade de altos investimentos iniciais em infraestrutura física, como servidores e data centers. Em vez disso, as empresas pagam apenas pelos recursos que usam, o que pode reduzir significativamente as despesas de capital.",
            d: "Essa opção está incorreta. Os data centers são mantidos pelo provedor de nuvem, de forma que os clientes não têm que arcar com os custos de construção e manutenção dessas instalações, evitando altos custos iniciais."
        }
    },
    {
        pergunta: "Qual modelo de implantação permite manter toda a infraestrutura de TI localmente?",
        alternativas: {
            a: "Nuvem pública",
            b: "Nuvem privada",
            c: "Nuvem híbrida",
            d: "SaaS"
        },
        respostaCorreta: "b",
        explicacoes: {
            a: "Essa opção está incorreta. A nuvem pública utiliza infraestrutura fornecida por terceiros, ou seja, os recursos estão hospedados em data centers de provedores de nuvem, como AWS ou Microsoft Azure, e não localmente.",
            b: "Essa é a resposta correta. A nuvem privada é uma infraestrutura dedicada, hospedada em data centers locais ou privados, onde a organização tem controle exclusivo sobre os recursos e a segurança. Nesse modelo, toda a infraestrutura de TI é mantida dentro da organização, ao contrário das nuvens públicas.",
            c: "Essa opção está incorreta. A nuvem híbrida combina recursos de nuvem pública e privada, permitindo que dados e aplicativos sejam compartilhados entre ambas. Portanto, parte da infraestrutura permanece local, mas também envolve recursos em nuvem pública.",
            d: "Essa opção está incorreta. SaaS (Software como Serviço) não é um modelo de implantação, mas sim um modelo de serviço onde o software é entregue e gerido pelo provedor, com o cliente utilizando apenas a aplicação sem se preocupar com a infraestrutura."
        }
    },
    {
        pergunta: "A qual modelo de serviço pertence o Amazon EC2?",
        alternativas: {
            a: "SaaS",
            b: "PaaS",
            c: "IaaS",
            d: "Nuvem Híbrida"
        },
        respostaCorreta: "c",
        explicacoes: {
            a: "Essa opção está incorreta. O SaaS (Software como Serviço) fornece software pronto para uso, sem que o cliente precise gerenciar a infraestrutura subjacente. O Amazon EC2 não é um software pronto, mas um serviço de infraestrutura.",
            b: "Essa opção está incorreta. O PaaS (Plataforma como Serviço) fornece uma plataforma para desenvolver e hospedar aplicativos, mas o cliente não gerencia o servidor ou a infraestrutura subjacente. No caso do EC2, o cliente tem controle sobre o servidor e o sistema operacional.",
            c: "Essa é a resposta correta. O Amazon EC2 é um exemplo de IaaS (Infraestrutura como Serviço), onde o cliente aluga servidores virtuais e controla o sistema operacional e as configurações da máquina. O provedor cuida da infraestrutura física, enquanto o cliente gerencia os recursos virtuais e o software.",
            d: "Essa opção está incorreta. Nuvem híbrida é um modelo de implantação que combina nuvem pública e privada, permitindo que os dados e os aplicativos sejam compartilhados entre ambas. Não se trata de um modelo de serviço como o IaaS."
        }
    },
    {
        pergunta: "Qual das alternativas a seguir representa um uso comum da computação em nuvem?",
        alternativas: {
            a: "Configuração de infraestrutura de rede local",
            b: "Hospedagem de sites e armazenamento de backup",
            c: "Construção de infraestrutura física",
            d: "Gerenciamento de data centers internos"
        },
        respostaCorreta: "b",
        explicacoes: {
            a: "Essa opção está incorreta. A computação em nuvem não exige que o cliente configure infraestrutura de rede local. Pelo contrário, ela oferece recursos através da Internet, eliminando a necessidade de infraestrutura física local para esse tipo de serviço.",
            b: "Essa é a resposta correta. Hospedagem de sites e armazenamento de backup são usos comuns da computação em nuvem. Esses serviços são acessíveis sob demanda, permitindo escalabilidade, disponibilidade e redução de custos com infraestrutura física e manutenção.",
            c: "Essa opção está incorreta. A nuvem elimina a necessidade de construção e manutenção de infraestrutura física, pois os recursos são fornecidos pelo provedor de nuvem, permitindo que as empresas evitem grandes investimentos em hardware.",
            d: "Essa opção está incorreta. Gerenciar data centers internos não é uma prática necessária na computação em nuvem, já que o provedor de nuvem cuida da infraestrutura, liberando as empresas de responsabilidades com data centers próprios."
        }
    },
    {
        pergunta: "Qual é a principal vantagem da capacidade elástica da nuvem?",
        alternativas: {
            a: "Maior custo inicial para provisionar hardware",
            b: "Capacidade de ajustar rapidamente os recursos conforme a demanda",
            c: "Menor agilidade na implantação de novos projetos",
            d: "Necessidade de planejamento de pico máximo constante"
        },
        respostaCorreta: "b",
        explicacoes: {
            a: "Essa opção está incorreta. A elasticidade da nuvem permite reduzir custos iniciais, pois não há necessidade de provisionar hardware físico antecipadamente. Os recursos são ajustados conforme a demanda, o que elimina custos fixos elevados.",
            b: "Essa é a resposta correta. A elasticidade da nuvem é a capacidade de ajustar rapidamente os recursos (como armazenamento, processamento e largura de banda) conforme a demanda. Isso proporciona flexibilidade, permitindo que as empresas escalem seus recursos de forma eficiente e econômica.",
            c: "Essa opção está incorreta. A elasticidade da nuvem aumenta a agilidade na implantação de novos projetos, pois permite que os recursos sejam ajustados automaticamente com base nas necessidades, acelerando a implementação sem a necessidade de longos ciclos de planejamento de infraestrutura.",
            d: "Essa opção está incorreta. A capacidade elástica da nuvem elimina a necessidade de planejamento constante para picos de demanda. Em vez disso, os recursos podem ser ajustados automaticamente, garantindo que os sistemas estejam sempre preparados para diferentes níveis de carga."
        }
    },
    {
        pergunta: "O que caracteriza a implantação de um aplicativo 'tudo na nuvem'?",
        alternativas: {
            a: "O aplicativo opera totalmente na infraestrutura local",
            b: "O aplicativo não possui qualquer integração com a nuvem",
            c: "Todas as partes do aplicativo operam na nuvem, sem infraestrutura local",
            d: "A infraestrutura do aplicativo é parcialmente na nuvem e parcialmente local"
        },
        respostaCorreta: "c",
        explicacoes: {
            a: "Essa opção está incorreta. 'Tudo na nuvem' significa que o aplicativo opera inteiramente na infraestrutura da nuvem, sem depender de recursos locais.",
            b: "Essa opção está incorreta. O aplicativo 'tudo na nuvem' usa a nuvem como infraestrutura principal, o que implica em integração com a nuvem.",
            c: "Essa é a resposta correta. Em uma implantação 'tudo na nuvem', o aplicativo funciona completamente na nuvem, sem a necessidade de infraestrutura local. Todos os recursos, como servidores, armazenamento e processamento, são fornecidos pelo provedor de nuvem.",
            d: "Essa opção está incorreta. A descrição de infraestrutura parcialmente na nuvem e parcialmente local corresponde a uma implantação híbrida, não 'tudo na nuvem', que envolve apenas a nuvem."
        }
    }    
    
];

// Variáveis para controlar o progresso do quiz
let indicePerguntaAtual = 0;
let acertos = 0;
let erros = 0;

// Função para carregar a pergunta atual no HTML
function carregarPergunta() {
    const pergunta = perguntas[indicePerguntaAtual];
    const questionContainer = document.getElementById("question-container");

    // Limpa o container antes de adicionar a nova pergunta
    questionContainer.innerHTML = `
        <div class="question">
            <p><strong>${pergunta.pergunta}</strong></p>
            <ul>
                ${Object.keys(pergunta.alternativas).map(letra => `
                    <li onclick="verificarResposta(this, '${letra}')">${letra}) ${pergunta.alternativas[letra]}</li>
                `).join('')}
            </ul>
            <div id="feedback" class="feedback"></div>
        </div>
    `;
}

// Função para verificar a resposta e exibir feedback detalhado
function verificarResposta(element, resposta) {
    const pergunta = perguntas[indicePerguntaAtual];
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.style.display = 'block';

    // Verifica a resposta e contabiliza acertos e erros
    if (resposta === pergunta.respostaCorreta) {
        element.classList.add('correct');
        acertos++;
    } else {
        element.classList.add('wrong');
        erros++;
    }

    // Exibe explicações para todas as alternativas
    const explicacaoCompleta = `
        <p><strong>Explicações:</strong></p>
        <ul>
            ${Object.keys(pergunta.explicacoes).map(letra => `
                <li><strong>${letra})</strong> ${pergunta.explicacoes[letra]}</li>
            `).join('')}
        </ul>
    `;
    feedbackDiv.innerHTML = explicacaoCompleta;

    // Desativar a interação com as outras opções
    const opcoes = element.parentNode.children;
    for (let i = 0; i < opcoes.length; i++) {
        opcoes[i].onclick = null;
    }

    // Exibir botão para próxima pergunta
    document.getElementById('next-question').style.display = 'block';
}

// Função para carregar a próxima pergunta
function carregarProximaPergunta() {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        carregarPergunta();
        document.getElementById('next-question').style.display = 'none';
    } else {
        mostrarResultado();
    }
}

// Função para exibir o resultado final
function mostrarResultado() {
    const questionContainer = document.getElementById("question-container");
    const nextButton = document.getElementById("next-question");
    nextButton.style.display = 'none';  // Oculta o botão "Próxima Pergunta"

    // Mensagem personalizada com base no desempenho
    let mensagemFinal = "";
    if (acertos === perguntas.length) {
        mensagemFinal = "Parabéns! Você acertou todas as perguntas!";
    } else if (acertos >= perguntas.length / 2) {
        mensagemFinal = "Bom trabalho! Você acertou mais da metade das perguntas!";
    } else {
        mensagemFinal = "Continue praticando! Tente novamente para melhorar seu desempenho.";
    }

    // Exibir o resultado final
    questionContainer.innerHTML = `
        <div class="result">
            <h2>Resultado Final</h2>
            <p>Você acertou ${acertos} perguntas e errou ${erros} perguntas.</p>
            <p>${mensagemFinal}</p>
            <button onclick="reiniciarQuiz()">Refazer Quiz</button>
        </div>
    `;
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    acertos = 0;
    erros = 0;
    carregarPergunta();
    document.getElementById('next-question').style.display = 'none';
}

// Carregar a primeira pergunta ao iniciar
window.onload = carregarPergunta;
