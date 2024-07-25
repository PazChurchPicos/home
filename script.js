
document.addEventListener("DOMContentLoaded", function() {
  // Array de versículos e referências
const verses = [
  { verse: "Esforçai-vos, e ele fortalecerá o vosso coração, vós todos que esperais no Senhor.", reference: "Salmos 31:24" },
  { verse: "Elevo os meus olhos para os montes; de onde vem o meu socorro? O meu socorro vem do Senhor, que fez os céus e a terra.", reference: "Salmos 121:1-2" },
  { verse: "Confia no Senhor para sempre, pois o Senhor Deus é uma rocha eterna.", reference: "Isaías 26:4" },
  { verse: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês.", reference: "Mateus 11:28" },
  { verse: "Ele te cobrirá com as suas penas, e debaixo das suas asas estarás seguro; a sua verdade será o teu escudo e broquel.", reference: "Salmos 91:4" },
  { verse: "E o Senhor te guiará continuamente, fartará a tua alma em lugares secos, e fortificará os teus ossos; serás como um jardim regado, e como um manancial cujas águas nunca faltam.", reference: "Isaías 58:11" },
  { verse: "O Senhor é bom para com aqueles cuja esperança está nele, para com aqueles que o buscam.", reference: "Lamentações 3:25" },
  { verse: "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e tenha misericórdia de ti; o Senhor sobre ti levante o seu rosto e te dê a paz.", reference: "Números 6:24-26" },
  { verse: "O Senhor é a minha rocha, a minha fortaleza e o meu libertador; o meu Deus é o meu rochedo, em quem me refugio. Ele é o meu escudo e o poder que me salva, a minha torre alta.", reference: "Salmos 18:2" },
  { verse: "Se alguém tem sede, venha a mim e beba. Quem crer em mim, como diz a Escritura, do seu interior correrão rios de água viva.", reference: "João 7:37-38" },
  { verse: "Assim que, se alguém está em Cristo, nova criatura é: as coisas velhas já passaram; eis que tudo se fez novo.", reference: "2 Coríntios 5:17" },
  { verse: "Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa e com ele cearei, e ele comigo.", reference: "Apocalipse 3:20" },
  { verse: "Não se turbe o vosso coração; credes em Deus, crede também em mim.", reference: "João 14:1" },
  { verse: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.", reference: "Isaías 41:10" },
  { verse: "Confessai, pois, os vossos pecados uns aos outros, e orai uns pelos outros, para serdes curados. A oração de um justo é poderosa e eficaz.", reference: "Tiago 5:16" },
  { verse: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.", reference: "Jeremias 29:11" },
  { verse: "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e as vossas mentes em Cristo Jesus.", reference: "Filipenses 4:7" },
  { verse: "Portanto, se alguém está em Cristo, nova criatura é: as coisas velhas já passaram; eis que tudo se fez novo.", reference: "2 Coríntios 5:17" },
  { verse: "Porque o Filho do homem veio buscar e salvar o que se havia perdido.", reference: "Lucas 19:10" },
  { verse: "E Jesus, olhando para eles, disse: Para os homens é impossível, mas não para Deus, porque para Deus todas as coisas são possíveis.", reference: "Marcos 10:27" },
  { verse: "Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá;", reference: "João 11:25" },
  { verse: "Porque o Senhor corrige o que ama, e açoita a qualquer que recebe por filho.", reference: "Hebreus 12:6" },
  { verse: "Eu sou o bom pastor; o bom pastor dá a sua vida pelas ovelhas.", reference: "João 10:11" },
  { verse: "Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica com ação de graças.", reference: "Filipenses 4:6" },
  { verse: "Não andeis ansiosos por coisa alguma, mas em tudo, pela oração e súplica, e com ação de graças, apresentem os seus pedidos a Deus.", reference: "Filipenses 4:6" },
  { verse: "Em verdade, em verdade vos digo que quem ouve a minha palavra e crê naquele que me enviou, tem a vida eterna, e não entrará em condenação, mas passou da morte para a vida.", reference: "João 5:24" },
  { verse: "Bem-aventurados os humildes de espírito, porque deles é o reino dos céus.", reference: "Mateus 5:3" },
  { verse: "Porque onde estiver o vosso tesouro, aí estará também o vosso coração.", reference: "Mateus 6:21" },
  { verse: "Aquele que tem o Filho tem a vida; aquele que não tem o Filho de Deus não tem a vida.", reference: "1 João 5:12" },
  { verse: "E o Senhor, que é fiel, vos fortalecerá e vos guardará do maligno.", reference: "2 Tessalonicenses 3:3" },
  { verse: "Mas, como está escrito: As coisas que o olho não viu, e o ouvido não ouviu, e não subiram ao coração do homem, são as que Deus preparou para os que o amam.", reference: "1 Coríntios 2:9" },
  { verse: "Porque nele foram criadas todas as coisas que há nos céus e na terra, visíveis e invisíveis, sejam tronos, sejam dominações, sejam principados, sejam potestades; tudo foi criado por ele e para ele.", reference: "Colossenses 1:16" },
  { verse: "E, quando orardes, não sereis como os hipócritas; porque eles gostam de orar em pé nas sinagogas e nas esquinas das ruas, para serem vistos pelos homens. Em verdade vos digo que eles já receberam a sua recompensa.", reference: "Mateus 6:5" },
  { verse: "Pois eu sou o Senhor, o Deus de toda a humanidade. Há alguma coisa difícil demais para mim?", reference: "Jeremias 32:27" },
  { verse: "Porque, quanto ao Senhor, seus olhos passam por toda a terra, para mostrar-se forte para com aqueles cujo coração é totalmente dele.", reference: "2 Crônicas 16:9" },
  { verse: "Sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.", reference: "Efésios 4:32" },
  { verse: "Bem-aventurados os que choram, porque eles serão consolados.", reference: "Mateus 5:4" },
  { verse: "E já está próximo o fim de todas as coisas; portanto, sede sóbrios e vigiai em oração.", reference: "1 Pedro 4:7" },
  { verse: "Portanto, ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo;", reference: "Mateus 28:19" },
  { verse: "Assim, a fé vem pelo ouvir, e o ouvir pela palavra de Deus.", reference: "Romanos 10:17" },
  { verse: "Bem-aventurados os limpos de coração, porque eles verão a Deus.", reference: "Mateus 5:8" },
];
  // Seleciona um versículo aleatório
  const randomIndex = Math.floor(Math.random() * verses.length);
  const randomVerse = verses[randomIndex];

  // Atualiza o conteúdo dos elementos HTML
  document.getElementById("verse").textContent = randomVerse.verse;
  document.getElementById("reference").textContent = randomVerse.reference;
});
