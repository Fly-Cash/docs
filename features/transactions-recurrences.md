---
title: Transações Recorrentes
---

## 🔁 Transações Recorrentes

<img src="../assets/recorrente-1.png" width="600px" />

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

