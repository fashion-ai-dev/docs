---
sidebar_position: 3
---

# Taxonomias

Taxonomias são estruturas de dados que definem como descrever produtos de forma padronizada. Pense nelas como um "dicionário" que ensina o sistema a gerar descrições, conteúdo SEO, cores, tamanhos, etc. para produtos de e-commerce.

## 🏗️ Como Funciona

### 📋 Dois Tipos de Taxonomia

| Tipo | Descrição | Quem Usa |
|------|-----------|----------|
| **Taxonomia Global** | Padrão criado pelos administradores | ✅ Todos os clientes |
| **Taxonomia Personalizada** | Versão customizada pelo cliente | 👤 Cliente específico |

### 🔄 Fluxo de Trabalho

1. **Administrador cria** taxonomia global
2. **Sistema distribui** para todos os clientes
3. **Cliente pode personalizar** sua versão

## 🎛️ Categorias Automáticas

Alguns grupos se aplicam automaticamente a todas as categorias de produtos:

- 🎨 **Estampas e Cores** - Descrições de padrões e paleta de cores
- 👔 **Combina Com** - Sugestões de peças para harmonizar
- 💰 **Apoio de Vendas** - Argumentos e benefícios para vendas
- 🔍 **Conteúdo SEO** - Conteúdo otimizado para motores de busca

💡 **Importante:** Quando você edita uma propriedade desses tipos, ela é automaticamente copiada para todas as categorias existentes.

## 🔢 Sistema de Versionamento

### Como Funciona o Controle de Versão

**Taxonomia Global:**
- Versões numeradas: v1, v2, v3...
- Cada atualização gera uma nova versão

**Taxonomia do Cliente:**
- Formato: major.minor (exemplo: 2.1, 2.2)
- **Major:** Baseado na versão global recebida
- **Minor:** Aumenta com cada personalização do cliente - cliente pode editar categorias simultâneas antes de salvar e gerar uma nova versão

### Exemplo Prático

1. Cliente recebe taxonomia global v2 → Sua versão se torna **2.0**
2. Cliente faz primeiro conjunto de personalizações → Versão **2.1**

> ⚠️ **Note**: Se cliente quiser fazer uma versão com o primeiro e segundo conjunto de personalizações, deve editar o segundo conjunto a partir da versão **2.1**, que deve ser selecionada manualmente no seletor de versão, por padrão é a versão principal.

3. Cliente faz segundo conjunto de personalizações → Versão **2.2**
4. Admin lança nova versão global v3 → Cliente pode optar por receber como **3.0**

## 📚 Operações Disponíveis

- Personalizar taxonomias (editar exemplos e ajustes)
- Criar versões personalizadas completas
- **Definir versão como principal** para torná-la ativa no processamento de produtos
- Resetar para versão global definindo versão principal

## ⚙️ Como Personalizar

### Passo-a-Passo para Clientes

1. **Acesse** suas taxonomias na plataforma
2. **Selecione** a categoria que deseja personalizar
3. **Edite exemplos** específicos do seu negócio
4. **Salve** como nova versão personalizada
5. **Defina como versão principal** para ativar no processamento de produtos

### Interface de Taxonomias

<div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
  <iframe
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    src="https://www.youtube.com/embed/YkdTPn-vb0Y"
    title="Demo de Taxonomias"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen>
  </iframe>
</div>

## 🎯 Ativando uma Versão de Taxonomia

### Definindo Versão Principal

Para tornar uma versão de taxonomia ativa para processar seus produtos:

1. **Navegue** para sua página My Style Ai
2. **Escolha** a versão que deseja ativar (ex: "2.1", "2.2")
3. **Clique "Definir como Principal"** para torná-la a versão ativa
4. **Confirme** a alteração

⚠️ **Importante:** Apenas a **versão principal** é usada para processar produtos. Outras versões permanecem disponíveis mas inativas.

### O que Acontece Quando Você Define Principal

✅ **O sistema usará esta taxonomia para:**
- Gerar descrições de produtos
- Criar conteúdo SEO
- Extrair atributos de produtos

❌ **Versões inativas:**
- Permanecem salvas para referência
- Podem ser ativadas posteriormente
- Não afetam o processamento de produtos

### Dicas de Gerenciamento de Versão

- **Mantenha backup** de versões funcionais
- **Documente alterações** que fizer em versões personalizadas
- **Faça edições grandes** você pode fazer edições grandes e gerar uma versão
- **Atualize versão principal** sazonalmente para melhores resultados

### Dicas de Personalização

- Use linguagem consistente com sua marca
- Adicione termos específicos do seu nicho