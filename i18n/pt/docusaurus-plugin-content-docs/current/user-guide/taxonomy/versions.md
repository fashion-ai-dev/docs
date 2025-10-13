# Sistema de Versionamento

### Como Funciona o Controle de Versões

**Taxonomia Global:**
- Versões numeradas: v1, v2, v3...
- Cada atualização gera uma nova versão

**Taxonomia do Cliente:**
- Formato: maior.menor (exemplo: 2.1, 2.2)
- **Maior:** Baseado na versão global recebida
- **Menor:** Aumenta com cada personalização do cliente - o cliente pode editar categorias simultaneamente antes de salvar e gerar uma nova versão

### Exemplo Prático

1. Cliente recebe taxonomia global v2 → Sua versão se torna **2.0**
2. Cliente faz primeiro conjunto de personalizações → Versão **2.1**

> ⚠️ **Nota**: Se o cliente quiser fazer uma versão com o primeiro e segundo conjunto de personalizações, o cliente deve editar o segundo conjunto a partir da versão **2.1**, que deve ser selecionada manualmente no seletor de versão, por padrão é a versão principal.

3. Cliente faz segundo conjunto de personalizações → Versão **2.2**
4. Administrador lança nova versão global v3 → Cliente pode optar por recebê-la como **3.0**

## 📚 Operações Disponíveis

- Personalizar taxonomias (editar exemplos e ajustes)
- Criar versões personalizadas completas
- **Definir versão como principal** para ativá-la para processamento de produtos
- Redefinir para versão global definindo versão principal

## ⚙️ Como Personalizar

### Passo a Passo para Clientes

1. **Acesse** suas taxonomias na plataforma na aba My StyleAi
2. **Selecione** a categoria que deseja personalizar, você pode personalizar várias categorias antes de salvar
3. **Edite exemplos** específicos do seu negócio
4. **Salve** como nova versão personalizada
5. **Defina como versão principal** para ativar para processamento de produtos

### Vídeo de Demonstração

<div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
  <iframe
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    src="https://www.youtube.com/embed/-NcQNzSIDOQ"
    title="Taxonomies Demo"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen>
  </iframe>
</div>

## 🎯 Ativando uma Versão de Taxonomia

### Definir Versão Principal

Para tornar uma versão de taxonomia ativa para processar seus produtos:

1. **Navegue** até sua página My Style Ai
2. **Escolha** a versão que deseja ativar (por exemplo, "2.1", "2.2")
3. **Clique em "Definir como Principal"** para torná-la a versão ativa
4. **Confirme** a mudança

⚠️ **Importante:** Apenas a **versão principal** é usada para processar produtos. Outras versões permanecem disponíveis mas inativas.

### O Que Acontece Quando Você Define como Principal

✅ **O sistema usará esta taxonomia para:**
- Gerar descrições de produtos
- Criar conteúdo SEO
- Extrair atributos de produtos

❌ **Versões inativas:**
- Permanecem salvas para referência
- Podem ser ativadas mais tarde
- Não afetam o processamento de produtos
