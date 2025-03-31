---
title: FAQ - FlyCash
---

<script setup>
const questions = [
  {
    title: 'Perguntas Gerais',
    questions: [
      {
        title: 'O que é o FlyCash?',
        description: [
          'O FlyCash é uma ferramenta financeira que ajuda você a gerenciar seus gastos. Ele oferece recursos avançados, como recorrências personalizáveis, controle de orçamento por categorias e grupos, e integração com diferentes planos para atender às suas necessidades.',
        ],
      },
      {
        title: 'O FlyCash é gratuito?',
        description: [
          'Sim! O FlyCash oferece um plano gratuito com funcionalidades limitadas. Para acessar recursos ilimitados, você pode assinar o plano "Equilíbrio Total".',
        ],
      },
      {
        title: 'Como posso alterar ou cancelar meu plano?',
        description: [
          'Você pode alterar ou cancelar seu plano diretamente na página do seu Perfil. Caso volte ao plano gratuito, você poderá selecionar quais categorias/grupos/saldos permanecerão ativos. Os demais ficarão disponíveis apenas para leitura.',
        ],
      },
    ],
  },
  {
    title: 'Gerenciamento de Transações',
    questions: [
      {
        title: 'O que acontece se eu marcar uma transação como recorrente?',
        description: [
          'Ao configurar uma transação como recorrente, você pode definir um período e uma frequência (mensal, bimestral, trimestral, etc.).',
          'Se precisar editar ou deletar uma recorrência, você terá opções para aplicar as mudanças a todas as transações ou apenas às próximas.',
        ],
      },
      {
        title:
          'Posso alterar apenas uma transação dentro de uma série recorrente?',
        description: [
          'Sim, você pode alterar apenas uma transação individualmente, sem impactar as demais da série.',
        ],
      },
      {
        title: 'Como funciona a frequência de recorrência?',
        description: [
          'A frequência define o intervalo entre cada ocorrência da transação. Por exemplo, uma frequência de 2 meses cria uma nova transação a cada dois meses.',
        ],
      },
    ],
  },
  {
    title: 'Planos e Limitações',
    questions: [
      {
        title:
          'O que acontece com minhas informações ao cancelar o plano pago?',
        description: [
          'Ao voltar para o plano gratuito, você poderá selecionar quais categorias, grupos e saldos manter ativos, respeitando os limites do plano gratuito. Os registros excedentes ficarão disponíveis apenas para leitura.',
        ],
      },
      {
        title: 'Quais são os limites do plano gratuito?',
        description: [
          'No plano gratuito, você pode criar até:',
          '3 grupos',
          '10 categorias por grupo',
          '3 saldos',
        ],
      },
      {
        title:
          'Posso voltar ao plano pago e recuperar os registros excedentes?',
        description: [
          'Sim, ao reativar o plano pago, todos os registros voltarão a ser editáveis e você poderá criar novos sem restrições.',
        ],
      },
    ],
  },
  {
    title: 'Uso e Personalização',
    questions: [
      {
        title: 'Como visualizar minhas transações?',
        description: [
          'O FlyCash apresenta suas transações em um layout estilo Excel, com meses organizados lado a lado. Você pode clicar no mês para visualizar detalhes em um modal.',
        ],
      },
    ],
  },
  {
    title: 'Erros e Problemas',
    questions: [
      {
        title: 'O que acontece se eu tenho um erro ou problema?',
        description: [
          'Se você encontrar um erro ou problema, por favor, envie um email para <a href="mailto:support@flyca.sh">support@flyca.sh</a> com detalhes sobre o problema e o passo-a-passo para reproduzir o erro. Ou também pode abrir um ticket no <a href="https://discord.gg/VuQBBNhYXK">Discord</a>',
        ],
      },
      {
        title: 'Não consigo visualizar minhas transações',
        description: [
          'Se você não conseguir visualizar suas transações isso pode ser devido a uma versão antiga do FlyCash. Atualize para a versão mais recente clicando em "Recarregar" no popup que aparecer na sua tela ou pressionando <kbd>Ctrl<kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> ou <kbd>Shift</kbd> + <kbd>F5</kbd>.',
        ],
      }
    ],
  }
]
</script>

# FAQ - FlyCash

Não encontrou sua pergunta? Acesse nosso [discord](https://discord.gg/VuQBBNhYXK) ou [envie um email](mailto:support@flyca.sh) e tire sua dúvida.

<div v-for="category in questions" :key="category.title" class="faq-category">
  <h2>{{ category.title }}</h2>

  <details class="details custom-block" v-for="question in category.questions" :key="question.title">
    <summary>{{ question.title }}</summary>
    <p v-for="(desc, index) in question.description" :key="index" v-html="desc"></p>
  </details>
</div>

