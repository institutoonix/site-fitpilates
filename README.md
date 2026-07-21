## Definições Gerais
• O site gerado deve ser responsivo e se auto-rearranjar sem prejuízo de exibição do conteúdo em dispositivos móveis e layouts verticais
• Todas os designs de páginas estão dentro de /pages, em formato SVG. O nome do arquivo deve corresponder ao nome da página.
• Toda a definição dos botões estão em na seção "Botões e Links" abaixo
• Sempre que encontrar uma tag ou grupo com a ID iniciando em 'img-', substitua pela imagem de mesmo nome na pasta /assets, que já tem a transparência/máscara correta aplicada
• Sempre que encontrar uma tag ou grupo com a ID iniciando em 'svg-', crie um asset SVG separado, salve em /assets, e converta para uma tag <img src="assets/nome-da-id.svg"> em vez de renderizar o vetor inline; IDs repetidas devem apontar para o mesmo asset.
• Header é idêntico em todas as páginas.
• Footer é idêntico em todas as páginas.
• Package Card tem múltiplas instâncias.

## Animações e Micro-interações
• Use smooth scrolling.
• Faça um contador animado dos números dentro de "section-method", toda vez que ele aparecer no viewport do navegador. A contagem deve levar no máximo 2 segundos. O contador deve partir do zero, ir incrementando e desacelerar até o número final.
• Os botões com apenas texto na barra do header (como "O MÉTODO") devem trocar para a cor #83b89c quando apontados, retornando à cor original se o ponteiro se afasta sem clicar, ou mudando para a cor #c06c46 após serem clicados. 
• Os botões com apenas o stroke, como "VER PLANOS" e "VER HORÁRIOS", quando apontados devem alternar para o estilo sólido de botões como "RESERVAR". Acrescente uma transição animada discreta mas sofisticada.
• Os botões com fundo sólido, como "RESERVAR", quando apontados devem alternar para o estilo com apenas o stroke de botões como em "VER PLANOS"
• Todos os class-cards (dentro de section-class-formats) devem ser animados com ease-in-out aumentando de tamanho em 5% toda vez que apontados, e retornar ao tamanho original quando o pointer se afasta deles. Por enquanto não haverá links em cada um.
• Aplique o mesmo estilo de animação dos class-cards, descrito acima, ao svg-onixfitlogo e ao endereço (no footer)
• Os demais botões no footer devem apenas mudar de cor quando apontados, para branco intenso, e ficarem um pouco mais escuros (que a cor padrão) quando já foram clicados. 

## Fonts
• Arial (from system; fallbacks: Helvetica, sans-serif)
• Cantarell - Google Font (fallback: Verdana)
• Gelasio - Google Font (fallback: Times New Roman)

## Botões e Links
• svg-onixfitlogo → Sempre leva para a página "main", #section-hero
• Botão "O MÉTODO" → Rola para #section-method
• Botão "A EXPERIÊNCIA" → Rola para #section-rythm
• Botão "HORÁRIOS" → https://agendamento.nextfit.com.br/de96b908-1d85-4b95-a931-421502de7550
• Link de "Política de Privacidade" (no footer): https://ajuda.nextfit.com.br/support/solutions/articles/69000798726-termos-de-uso-e-pol%C3%ADtica-de-privacidade
• Instagram (footer) abre em nova aba. (https://www.instagram.com/institutoonix)
• WhatsApp (footer) abre um link wa.me. (+55 79 9945-6327)
• Endereço (footer) → https://maps.app.goo.gl/QRYprvyyzCWDvm6XA
• Botões "RESERVAR", "RESERVAR PRIMEIRA AULA" → https://venda.nextfit.com.br/00fde286-4f1b-4c7f-9b53-4ff04a8eec71/contratos
• Botão "PRINCIPAL" → página "main"
• Botões "VER PLANOS" e "COMEÇAR AGORA" → página "pacotes"
• Todos os botões "COMPRAR AGORA" → https://venda.nextfit.com.br/00fde286-4f1b-4c7f-9b53-4ff04a8eec71/contratos
