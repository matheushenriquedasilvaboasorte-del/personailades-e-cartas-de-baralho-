# 🃏 Baralho dos Arquétipos

Um site interativo e responsivo para explorar 54 arquétipos através de um baralho completo com interpretações masculina e feminina. Cada carta contém um QR Code para compartilhamento e impressão.

**Site ao vivo:** https://matheushenriquedasilvaboasorte-del.github.io/personailades-e-cartas-de-baralho-/

---

## ✨ Características

### 📚 54 Cartas Completas
- **52 cartas tradicionais** (13 de cada naipe)
  - ♥ **Copas** — O Mundo Emocional (relações, emoção, conexão)
  - ◆ **Ouros** — Ambição e Realização (recursos, trabalho, segurança)
  - ♣ **Paus** — Ação e Coragem (iniciativa, movimento, liderança)
  - ♠ **Espadas** — Inteligência e Estratégia (pensamento, análise, planejamento)
- **2 Coringas** (Os Coringas — Caos e Ruptura)

### 👥 Interpretação Dual
- **Masculino** e **Feminino** — textos diferenciados para cada perspectiva
- Toggle simples no topo da página
- Conteúdo se adapta automaticamente

### 🎯 Funcionalidades
✅ **Navegação por URL** — `?carta=copas-a&modo=masculino`  
✅ **Busca inteligente** — nome, naipe, descrição  
✅ **Filtros por naipe** — Todos, Copas, Ouros, Paus, Espadas, Coringas  
✅ **Carta aleatória** — "Tirar uma carta"  
✅ **Modal detalhado** — imagem, força, risco, QR Code  
✅ **Compartilhamento** — link copiável ou native share  
✅ **QR Codes** — 54 códigos PNG para imprimir no verso das cartas  
✅ **Responsivo** — mobile-first, funciona em todos os dispositivos  
✅ **SEO** — meta tags, Open Graph, schema  
✅ **Sem backend** — site 100% estático, funciona no GitHub Pages  

---

## 📂 Estrutura de Pastas

```
personailades-e-cartas-de-baralho-/
├── index.html              # Página principal (na raiz para GitHub Pages)
├── src/
│   └── main.js             # Dados de 54 cartas + lógica do app
├── assets/
│   ├── styles.css          # CSS responsivo
│   ├── cards/              # 54 imagens de cartas (PNG)
│   │   ├── copas-a.png
│   │   ├── copas-2.png
│   │   └── ... (até espadas-k.png, joker-vermelho.png, joker-preto.png)
│   └── qr/                 # 54 QR Codes (PNG, compatíveis com impressão)
│       ├── copas-a.png
│       └── ... (mesma estrutura)
├── impressao/
│   ├── baralho-frentes-A4.pdf      # Frentes das cartas para imprimir
│   ├── baralho-versos-QR-A4.pdf    # Versos com QR Codes
│   └── INSTRUCOES-IMPRESSAO.txt    # Como imprimir corretamente
├── generate_assets.py      # Script Python para regenerar QR Codes
└── README.md               # Este arquivo
```

---

## 🚀 Como Usar

### **1. Testar Localmente**

```bash
cd personailades-e-cartas-de-baralho-
python3 -m http.server 8000
```
Abra em `http://localhost:8000`

### **2. Publicar no GitHub Pages**

1. Vá a **Settings → Pages**
2. Source: Branch `main`, Folder `/root`
3. Salve e aguarde ~1 minuto

Seu site estará em:  
`https://seu-usuario.github.io/personailades-e-cartas-de-baralho-/`

### **3. Acessar Cartas Específicas**

- **Página inicial:** `/`
- **Ás de Copas (masculino):** `/?carta=copas-a&modo=masculino`
- **Rei de Espadas (feminino):** `/?carta=espadas-k&modo=feminino`
- **Coringa Vermelho:** `/?carta=joker-vermelho&modo=masculino`

---

## 📖 Como as Cartas Funcionam

### Dados das Cartas (`src/main.js`)

Cada carta é um objeto com:
```javascript
{
  id: "copas-a",
  suit: "copas",           // naipe: copas, ouros, paus, espadas, coringas
  suitSymbol: "♥",
  suitLabel: "Copas",
  rank: "A",               // A, 2-10, J, Q, K
  name: "O Sensível / A Sensível",
  image: "assets/cards/copas-a.png",
  qrCode: "assets/qr/copas-a.png",
  male: {
    name: "O Sensível",
    description: "...",
    strength: "Empatia",
    risk: "Pode absorver demais..."
  },
  female: {
    name: "A Sensível",
    description: "...",
    strength: "Empatia",
    risk: "Absorver problemas alheios"
  }
}
```

### Seleção de Gênero

O app detecta automaticamente:
- URL param `?modo=masculino` ou `?modo=feminino`
- Botões no topo da página
- Modal se nenhum gênero foi escolhido

---

## 🎨 Personalização

### Alterar os Textos das Cartas

Edite [src/main.js](src/main.js):
- Procure pelo objeto da carta (ex: `id: "copas-a"`)
- Modifique `male.description`, `female.description`, etc.

### Mudar Cores/Estilos

Edite [assets/styles.css](assets/styles.css):
```css
/* Cores dos naipes */
.card-copas,
.card-ouros { --suit-color: #e63946; }  /* Vermelho */

.card-paus,
.card-espadas { --suit-color: #1d3557; }  /* Preto */
```

### Regenerar QR Codes

Se modificar as URLs:
```bash
python3 generate_assets.py
```
(Requer PIL/Pillow e qrcode instalados)

---

## 🖨️ Como Imprimir

### Preparação
1. Baixe os PDFs: [baralho-frentes-A4.pdf](impressao/baralho-frentes-A4.pdf) e [baralho-versos-QR-A4.pdf](impressao/baralho-versos-QR-A4.pdf)

### Impressão Física
1. **Imprima as frentes** (baralho-frentes-A4.pdf):
   - Papel cardstock 250gsm (recomendado)
   - Qualidade máxima
   - 9 cartas por folha A4 (aprox. 63 × 88 mm cada)

2. **Vire o papel** e imprima os versos (baralho-versos-QR-A4.pdf):
   - Alinhamento: borda longa (long-edge flip)
   - Mesma qualidade

3. **Corte as cartas:**
   - Use uma guilhotina ou tesoura fina
   - Siga as marcas de corte (se houver)

4. **Acabamento (opcional):**
   - Cole as duas faces com cola PVA fina
   - Lamine as cartas (para durabilidade)
   - Use envelopes para proteção

### QR Codes nos Versos
- Cada verso tem o QR Code correspondente
- Ao escanear, abre a carta no site com o gênero selecionado
- URLs funcionam sem internet após a primeira visita (graças ao cache)

---

## 🔍 Detalhes Técnicos

### Stack
- **HTML5** — Semântica e acessibilidade
- **CSS3** — Flexbox, Grid, responsividade
- **JavaScript Vanilla** — Sem dependências externas
- **Imagens PNG** — QR Codes e cartas

### Performance
- Site 100% estático (sem servidor)
- Carregamento rápido (imagens otimizadas)
- Cache automático no navegador

### Compatibilidade
- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS (14+), Android (8+)
- ✅ Todos os tamanhos de tela

### SEO
- Meta tags (title, description)
- Open Graph (preview em redes sociais)
- Heading hierarchy correto
- Alt text em todas as imagens

---

## 📝 Como Adicionar/Editar Cartas

### 1. Adicionar uma nova carta

Abra [src/main.js](src/main.js) e copie um objeto existente:

```javascript
{
  id: "novo-id",
  suit: "copas",
  suitSymbol: "♥",
  suitLabel: "Copas",
  rank: "A",
  name: "Nome Completo",
  image: "assets/cards/novo-id.png",
  qrCode: "assets/qr/novo-id.png",
  male: { ... },
  female: { ... }
}
```

### 2. Criar a imagem da carta

Coloque em `assets/cards/novo-id.png` (qualquer tamanho, será redimensionado)

### 3. Gerar o QR Code

```bash
python3 -c "
import qrcode
url = 'https://seu-dominio.com/?carta=novo-id'
qr = qrcode.QRCode(version=1, box_size=10, border=2)
qr.add_data(url)
qr.make()
img = qr.make_image('RGB')
img.save('assets/qr/novo-id.png')
"
```

### 4. Fazer commit

```bash
git add -A
git commit -m "Adiciona carta: novo-id"
git push origin main
```

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Cartas não aparecem | Verifique se `index.html` e `src/main.js` estão na raiz/src |
| QR Codes não scanneiam | URLs devem ser absolutas (inclua domínio completo) |
| GitHub Pages não atualiza | Aguarde 2-3 min, limpe cache (Ctrl+Shift+Del) |
| Estilos não carregam | Verifique caminho de `assets/styles.css` no HTML |
| Imagens não aparecem | Confirme que PNG/JPG estão em `assets/cards/` e `assets/qr/` |

---

## 📊 Metadados das Cartas

### Naipes e Significados

**♥ Copas** — Emoção, relações, coração, intuição  
**◆ Ouros** — Recursos, trabalho, segurança, materialidade  
**♣ Paus** — Ação, movimento, coragem, iniciativa  
**♠ Espadas** — Intelecto, análise, estratégia, verdade  
**🃏 Coringas** — Caos, ruptura, transformação, liberdade  

### Números/Letras

| Rank | Significado |
|------|-------------|
| A | Iniciação, potencial |
| 2-9 | Progressão, desenvolvimento |
| 10 | Completude, plenitude |
| J | Energia jovem, dinamismo |
| Q | Maturidade feminina, sabedoria |
| K | Autoridade, liderança |

---

## 📄 Licença & Créditos

Baralho dos Arquétipos — Site responsivo  
Criado com ♥ em 2025

Todos os textos, imagens e conceitos de arquétipos pertencem a este projeto.  
Sinta-se livre para usar, modificar e compartilhar.

---

## 🎯 Próximas Ideias

- [ ] Modo dark/light
- [ ] Histórico de cartas tiradas
- [ ] Spreads (3 cartas, 5 cartas, Cruz Celta, etc.)
- [ ] Interpretação por combinações de cartas
- [ ] Exportar leitura em PDF
- [ ] Integração com redes sociais
- [ ] App mobile nativa (React Native)
- [ ] Múltiplos idiomas

---

**Última atualização:** 2025  
**Versão:** 2.0 (Com QR Codes e dados completos)
