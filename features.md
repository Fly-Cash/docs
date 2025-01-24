---
title: Funcionalidades do FlyCash
---

# Funcionalidades do FlyCash

## 📂 Organização por Grupos e Categorias

<img src="./assets/grupos-e-subcategorias.png" width="600px" />

O FlyCash oferece uma maneira inteligente e flexível de organizar suas finanças, permitindo que você visualize claramente a origem e o destino do seu dinheiro.

### **O que são Grupos?**

Grupos são grandes divisões que representam as **fontes de entrada e saída de dinheiro**. Isso ajuda a categorizar seus registros de forma geral. Exemplos de Grupos:
- **Gastos**: Todas as despesas, como contas e compras.
- **Receitas**: Entradas de dinheiro, como salário e rendas extras.
- **Investimentos**: Aplicações financeiras, como poupança, ações e fundos.

Grupos ajudam você a responder perguntas como:
- Quanto estou gastando em comparação com o que ganho?
- Quanto dinheiro está sendo destinado a investimentos?

---

### **O que são Categorias?**
Categorias são subdivisões dentro de um grupo. Elas permitem detalhar melhor suas transações. Por exemplo:

<div style="display: flex; gap: 10px;">
  <ul style="width: 300px">
    <li>Grupo: <b>Gastos</b></li>
    <li>Categoria: <b>Casa</b></li>
    <ul>
      <li>Subcategoria: <b>Luz</b>, <b>Água</b>, <b>Internet</b></li>
    </ul>
    <li>Categoria: <b>Transporte</b></li>
    <li>Categoria: <b>Lazer</b></li>
    <li>Categoria: <b>Receitas</b></li>
  </ul>
  <table>
    <tr>
      <th>Grupo</th>
      <th>Categoria</th>
      <th>Subcategoria</th>
    </tr>
    <tr>
      <td rowspan="5">Gastos</td>
      <td rowspan="3">Casa</td>
      <td>Luz</td>
    </tr>
    <tr>
      <td>Água</td>
    </tr>
    <tr>
      <td>Internet</td>
    </tr>
    <tr>
      <td colspan="2">Transporte</td>
    </tr>
    <tr>
      <td colspan="2">Lazer</td>
    </tr>
  </table>
</div>

<div style="display: flex; gap: 10px;">
  <ul style="width: 300px">
    <li>Grupo: <b>Receitas</b></li>
    <li>Categoria: <b>Salário</b></li>
    <ul>
      <li>Subcategoria: <b>1a quinzena</b>, <b>2a quinzena</b>, <b>Freelance</b>, <b>Rendimentos de aluguel</b></li>
    </ul>
    <li>Categoria: <b>Investimentos</b></li>
  </ul>
  <table>
    <tr>
      <th>Grupo</th>
      <th>Categoria</th>
      <th>Subcategoria</th>
    </tr>
    <tr>
      <td rowspan="3">Receitas</td>
      <td rowspan="2">Salário</td>
      <td>1a quinzena</td>
    </tr>
    <tr>
      <td >2a quinzena</td>
    </tr>
    <tr>
      <td>Frelance</td>
      <td>Rendimentos de aluguel</td>
    </tr>
  </table>
</div>

<div style="display: flex; gap: 10px;">
  <ul style="width: 300px">
    <li>Grupo: <b>Investimentos</b></li>
    <li>Categoria: <b>Ações</b></li>
    <li>Categoria: <b>Poupança</b></li>
    <li>Categoria: <b>Tesouro Direto</b></li>
  </ul>
  <table>
    <tr>
      <th>Grupo</th>
      <th>Categoria</th>
    </tr>
    <tr>
      <td rowspan="3">Investimentos</td>
      <td>Ações</td>
    </tr>
    <tr>
      <td >Poupança</td>
    </tr>
    <tr>
      <td>Tesouro Direto</td>
    </tr>
  </table>
</div>

Dessa forma, você pode entender com clareza:
- Para onde o dinheiro está indo dentro dos gastos.
- De onde suas receitas estão vindo.
- Quais tipos de investimentos estão recebendo mais aportes.

## 🔁 Transações Recorrentes

<img src="./assets/recorrente-1.png" width="600px" />

Gerencie transações automáticas, como despesas fixas ou receitas mensais, de maneira prática e flexível. O sistema de recorrência do FlyCash é projetado para oferecer controle total sobre suas transações, permitindo alterações, exclusões e expansões de forma personalizada.

### **Como funciona a recorrência?**
- **Criação de transações recorrentes:** 
  - Ao marcar uma transação como recorrente, você pode especificar um período de início e fim (atualmente, apenas frequência mensal é suportada).
  - Novos registros recorrentes são gerados automaticamente dentro do período especificado.

- **Vinculação de registros recorrentes:**
  - Todas as transações criadas como parte de uma recorrência ficam vinculadas entre si.
  - As alterações realizadas em uma transação recorrente podem ser propagadas para outros registros vinculados, com opções detalhadas para personalização.

---

### **Gerenciamento de Recorrências**

#### **1. Alteração de Transações Recorrentes**
Ao modificar uma transação recorrente, você pode escolher como a alteração será aplicada:
- **Todos os registros:** Propaga a alteração para todos os registros da recorrência.
- **Todos a partir deste registro:** Aplica a alteração ao registro atual e a todos os posteriores dentro da recorrência.
- **Somente este registro:** Mantém a alteração apenas no registro selecionado, sem impactar os outros.

Além disso, é possível escolher quais **campos** serão alterados durante a propagação:
- Exemplo: Se você alterar a **data**, o **valor** e a **descrição** de um registro, poderá decidir que:
  - Apenas o valor será propagado para os demais registros.
  - A nova data e descrição serão aplicadas apenas ao registro modificado.

#### **2. Exclusão de Transações Recorrentes**
A exclusão de transações recorrentes também permite diferentes níveis de impacto:
- **Excluir todos os registros:** Remove toda a série de transações recorrentes.
- **Excluir todos a partir deste registro:** Apaga o registro atual e os posteriores da série.
- **Excluir somente este registro:** Remove apenas o registro selecionado, mantendo os demais intactos.

---

### **Expansão de Recorrências**

Você pode expandir uma recorrência existente para incluir novos registros:
- Exemplo: Se você criou uma recorrência de janeiro a abril, mas deseja estendê-la até junho:
  1. Localize o último registro da série (abril).
  2. Marque-o novamente como uma transação recorrente.
  3. Especifique o novo período de término (até junho).
  4. Os novos registros (maio e junho) serão criados e vinculados à recorrência original.

---

### **Visualização de Alterações**

Durante qualquer alteração em uma transação recorrente, o FlyCash exibe um resumo detalhado das mudanças:
- Para cada campo alterado (como data, valor ou descrição), o sistema mostra o **antes** e o **depois** lado a lado.
- Isso permite que você revise as mudanças antes de confirmá-las.
- A interface foi inspirada na exibição de diferenças de commits no GitHub, garantindo clareza e precisão.

---

## 📊 Visualização de Saldos

<img src="./assets/saldo-2.png" width="600px" style="padding-bottom: 10px;" />
<img src="./assets/saldo-1.png" width="350px" />

A funcionalidade de **Visualização de Saldos** permite que você analise seus dados financeiros de forma dinâmica, realizando operações matemáticas entre os grupos, categorias ou subcategorias. Isso ajuda a responder perguntas específicas sobre suas finanças e a obter informações precisas que atendem às suas necessidades.

### **O que é possível fazer com os saldos?**

1. **Criação de Saldos Personalizados**
   - Com os saldos, você pode selecionar grupos, categorias ou subcategorias específicas e realizar **operações matemáticas** entre elas, como soma ou subtração.
   - Isso permite criar análises detalhadas ou consolidar dados financeiros de forma personalizada.

2. **Flexibilidade na Seleção**
   - Você pode criar saldos que envolvem apenas um grupo ou múltiplos grupos.
   - É possível especificar categorias e até subcategorias para calcular valores mais granulares.

3. **Validação de Saldos**
   - Caso um grupo ou categoria selecionado deixe de existir, o saldo automaticamente recebe o status de **inválido**.
   - Você será notificado para corrigir ou remover o saldo. Dessa forma, a integridade das suas análises é mantida.

---

### **Exemplo Prático de Criação de Saldo**

#### **Tabela de Grupos, Categorias e Subcategorias**

| **Grupo**      | **Categoria** | **Subcategoria** | **Total (R$)** |
|-----------------|---------------|-------------------|----------------|
| **Receitas**    | Salário       | -                 | 60.000,00      |
|                 | Freelance     | -                 | 12.000,00      |
| **Despesas**    | Casa          | Luz               | 2.590,00       |
|                 |               | Água              | 1.950,00       |
|                 |               | Internet          | 1.440,00       |

Com isso, você pode visualizar o saldo de forma personalizada e dinâmica!

## 🌐 Funcionalidade Offline

<img src="./assets/offline.png" width="350px" />

O FlyCash também oferece suporte ao uso offline, garantindo que você tenha acesso aos seus dados financeiros, mesmo sem conexão com a internet. Essa funcionalidade foi projetada para proporcionar flexibilidade e conveniência, permitindo que você continue acompanhando suas finanças em qualquer situação.

### **Como funciona o modo offline?**

- **Primeiro acesso:** Para usar o FlyCash offline, é necessário realizar o login pelo menos uma vez com uma conexão ativa. Isso garante que os dados financeiros sejam sincronizados localmente no dispositivo.
- **Modo leitura:** No plano gratuito, o modo offline permite **somente a leitura dos dados previamente cadastrados**. Alterações, exclusões ou novos registros só podem ser feitos enquanto estiver online.
- **Sincronização automática:** No plano premium, todas as alterações realizadas offline são automaticamente sincronizadas com o servidor assim que a conexão com a internet for restabelecida. Isso inclui:
  - Registros de novas transações.
  - Atualizações em categorias ou grupos.
  - Criação de saldos personalizados.

---

### **Benefícios do Modo Offline**
- Acesso garantido aos seus dados financeiros, mesmo em áreas sem conexão.
- Visualização rápida e prática dos seus registros já existentes.
- Proteção contra perda de dados: o FlyCash mantém os dados armazenados localmente no dispositivo.

Com o FlyCash, você tem a liberdade de gerenciar suas finanças em qualquer lugar e a qualquer momento, dentro das limitações do plano escolhido.

