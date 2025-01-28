import{_ as a}from"./chunks/recorrente-1.CFD1l_d7.js";import{_ as r,c as o,ag as s,o as t}from"./chunks/framework.-a8jReyC.js";const h=JSON.parse('{"title":"Transações Recorrentes","description":"","frontmatter":{"title":"Transações Recorrentes"},"headers":[],"relativePath":"features/transactions-recurrences.md","filePath":"features/transactions-recurrences.md"}'),i={name:"features/transactions-recurrences.md"};function n(c,e,l,d,u,m){return t(),o("div",null,e[0]||(e[0]=[s('<h2 id="🔁-transacoes-recorrentes" tabindex="-1">🔁 Transações Recorrentes <a class="header-anchor" href="#🔁-transacoes-recorrentes" aria-label="Permalink to &quot;🔁 Transações Recorrentes&quot;">​</a></h2><img src="'+a+'" width="600px"><p>Gerencie transações automáticas, como despesas fixas ou receitas mensais, de maneira prática e flexível. O sistema de recorrência do FlyCash é projetado para oferecer controle total sobre suas transações, permitindo alterações, exclusões e expansões de forma personalizada.</p><h3 id="como-funciona-a-recorrencia" tabindex="-1"><strong>Como funciona a recorrência?</strong> <a class="header-anchor" href="#como-funciona-a-recorrencia" aria-label="Permalink to &quot;**Como funciona a recorrência?**&quot;">​</a></h3><ul><li><p><strong>Criação de transações recorrentes:</strong></p><ul><li>Ao marcar uma transação como recorrente, você pode especificar um período de início e fim (atualmente, apenas frequência mensal é suportada).</li><li>Novos registros recorrentes são gerados automaticamente dentro do período especificado.</li></ul></li><li><p><strong>Vinculação de registros recorrentes:</strong></p><ul><li>Todas as transações criadas como parte de uma recorrência ficam vinculadas entre si.</li><li>As alterações realizadas em uma transação recorrente podem ser propagadas para outros registros vinculados, com opções detalhadas para personalização.</li></ul></li></ul><hr><h3 id="gerenciamento-de-recorrencias" tabindex="-1"><strong>Gerenciamento de Recorrências</strong> <a class="header-anchor" href="#gerenciamento-de-recorrencias" aria-label="Permalink to &quot;**Gerenciamento de Recorrências**&quot;">​</a></h3><h4 id="_1-alteracao-de-transacoes-recorrentes" tabindex="-1"><strong>1. Alteração de Transações Recorrentes</strong> <a class="header-anchor" href="#_1-alteracao-de-transacoes-recorrentes" aria-label="Permalink to &quot;**1. Alteração de Transações Recorrentes**&quot;">​</a></h4><p>Ao modificar uma transação recorrente, você pode escolher como a alteração será aplicada:</p><ul><li><strong>Todos os registros:</strong> Propaga a alteração para todos os registros da recorrência.</li><li><strong>Todos a partir deste registro:</strong> Aplica a alteração ao registro atual e a todos os posteriores dentro da recorrência.</li><li><strong>Somente este registro:</strong> Mantém a alteração apenas no registro selecionado, sem impactar os outros.</li></ul><p>Além disso, é possível escolher quais <strong>campos</strong> serão alterados durante a propagação:</p><ul><li>Exemplo: Se você alterar a <strong>data</strong>, o <strong>valor</strong> e a <strong>descrição</strong> de um registro, poderá decidir que: <ul><li>Apenas o valor será propagado para os demais registros.</li><li>A nova data e descrição serão aplicadas apenas ao registro modificado.</li></ul></li></ul><h4 id="_2-exclusao-de-transacoes-recorrentes" tabindex="-1"><strong>2. Exclusão de Transações Recorrentes</strong> <a class="header-anchor" href="#_2-exclusao-de-transacoes-recorrentes" aria-label="Permalink to &quot;**2. Exclusão de Transações Recorrentes**&quot;">​</a></h4><p>A exclusão de transações recorrentes também permite diferentes níveis de impacto:</p><ul><li><strong>Excluir todos os registros:</strong> Remove toda a série de transações recorrentes.</li><li><strong>Excluir todos a partir deste registro:</strong> Apaga o registro atual e os posteriores da série.</li><li><strong>Excluir somente este registro:</strong> Remove apenas o registro selecionado, mantendo os demais intactos.</li></ul><hr><h3 id="expansao-de-recorrencias" tabindex="-1"><strong>Expansão de Recorrências</strong> <a class="header-anchor" href="#expansao-de-recorrencias" aria-label="Permalink to &quot;**Expansão de Recorrências**&quot;">​</a></h3><p>Você pode expandir uma recorrência existente para incluir novos registros:</p><ul><li>Exemplo: Se você criou uma recorrência de janeiro a abril, mas deseja estendê-la até junho: <ol><li>Localize o último registro da série (abril).</li><li>Marque-o novamente como uma transação recorrente.</li><li>Especifique o novo período de término (até junho).</li><li>Os novos registros (maio e junho) serão criados e vinculados à recorrência original.</li></ol></li></ul><hr><h3 id="visualizacao-de-alteracoes" tabindex="-1"><strong>Visualização de Alterações</strong> <a class="header-anchor" href="#visualizacao-de-alteracoes" aria-label="Permalink to &quot;**Visualização de Alterações**&quot;">​</a></h3><p>Durante qualquer alteração em uma transação recorrente, o FlyCash exibe um resumo detalhado das mudanças:</p><ul><li>Para cada campo alterado (como data, valor ou descrição), o sistema mostra o <strong>antes</strong> e o <strong>depois</strong> lado a lado.</li><li>Isso permite que você revise as mudanças antes de confirmá-las.</li><li>A interface foi inspirada na exibição de diferenças de commits no GitHub, garantindo clareza e precisão.</li></ul>',23)]))}const f=r(i,[["render",n]]);export{h as __pageData,f as default};