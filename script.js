
document.addEventListener("DOMContentLoaded", function() {
  // Array de versículos e referências
  const verses = [
  { verse: "Tudo posso naquele que me fortalece.", reference: "Filipenses 4:13" },
  { verse: "O Senhor é meu pastor e nada me faltará.", reference: "Salmos 23:1" },
  { verse: "Eu sou o caminho, a verdade, e a vida. E ninguém vem ao Pai senão por mim.", reference: "João 14:6" },
  { verse: "No mundo tereis aflições, mas tende bom ânimo, eu venci o mundo.", reference: "João 16:33" },
  { verse: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.", reference: "João 3:16" },
  { verse: "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.", reference: "Salmos 119:105" },
  { verse: "Mas buscai primeiro o reino de Deus, e a sua justiça, e todas essas coisas vos serão acrescentadas.", reference: "Mateus 6:33" },
  { verse: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.", reference: "Salmos 37:5" },
  { verse: "Deleita-te também no Senhor, e te concederá os desejos do teu coração.", reference: "Salmos 37:4" },
  { verse: "O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?", reference: "Salmos 27:1" },
  { verse: "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes.", reference: "Jeremias 33:3" },
  { verse: "Pois eu bem sei os planos que estou planejando para vós, diz o Senhor; planos de paz e não de mal, para vos dar um futuro e uma esperança.", reference: "Jeremias 29:11" },
  { verse: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.", reference: "Jeremias 29:11" },
  { verse: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.", reference: "Romanos 8:28" },
  { verse: "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração.", reference: "Romanos 12:12" },
  { verse: "Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores.", reference: "Romanos 5:8" },
  { verse: "Porque a palavra de Deus é viva e eficaz, e mais cortante do que qualquer espada de dois gumes, e penetra até ao ponto de dividir alma e espírito, juntas e medulas, e é apta para discernir os pensamentos e intenções do coração.", reference: "Hebreus 4:12" },
  { verse: "Sem fé é impossível agradar a Deus, pois quem dele se aproxima precisa crer que ele existe e que recompensa aqueles que o buscam.", reference: "Hebreus 11:6" },
  { verse: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça.", reference: "1 João 1:9" },
  { verse: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.", reference: "Salmos 91:1" },
  { verse: "Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos.", reference: "Mateus 5:6" },
  { verse: "Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus.", reference: "Mateus 5:9" },
  { verse: "Respondeu Jesus: 'Está escrito: Nem só de pão viverá o homem, mas de toda palavra que procede da boca de Deus.'", reference: "Mateus 4:4" },
  { verse: "O ladrão não vem senão para roubar, matar e destruir; eu vim para que tenham vida, e a tenham com abundância.", reference: "João 10:10" },
  { verse: "Tudo que pedirdes em oração, crendo, recebereis.", reference: "Mateus 21:22" },
  { verse: "Pois sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.", reference: "Jeremias 29:11" },
  { verse: "O Senhor, teu Deus, está no meio de ti, poderoso para te salvar; ele se deleitará em ti com alegria, renovar-te-á com o seu amor, regozijar-se-á em ti com brados de júbilo.", reference: "Sofonias 3:17" },
  { verse: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.", reference: "Provérbios 3:5-6" },
  { verse: "Mas o fruto do Espírito é amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão, domínio próprio.", reference: "Gálatas 5:22-23" },
  { verse: "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.", reference: "Hebreus 11:1" },
  { verse: "Tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor, e não aos homens.", reference: "Colossenses 3:23" },
  { verse: "Mas em todas estas coisas somos mais que vencedores, por aquele que nos amou.", reference: "Romanos 8:37" },
  { verse: "E o meu Deus, segundo a sua riqueza em glória, há de suprir em Cristo Jesus cada uma de vossas necessidades.", reference: "Filipenses 4:19" },
  { verse: "Bendito o homem que confia no Senhor, e cuja esperança é o Senhor.", reference: "Jeremias 17:7" },
  { verse: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.", reference: "Salmos 46:1" },
  { verse: "Aquietai-vos, e sabei que eu sou Deus; sou exaltado entre as nações, sou exaltado na terra.", reference: "Salmos 46:10" },
  { verse: "Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.", reference: "1 Pedro 5:7" },
  { verse: "Se Deus é por nós, quem será contra nós?", reference: "Romanos 8:31" },
  { verse: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.", reference: "1 Coríntios 13:4" },
  { verse: "Tudo posso naquele que me fortalece.", reference: "Filipenses 4:13" },
  { verse: "O Senhor é o meu pastor; nada me faltará.", reference: "Salmos 23:1" },
  { verse: "Pois o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor.", reference: "Romanos 6:23" },
  { verse: "Eu sou a videira; vocês são os ramos. Se alguém permanecer em mim e eu nele, esse dará muito fruto; pois sem mim vocês não podem fazer coisa alguma.", reference: "João 15:5" },
  { verse: "Busquem o Senhor enquanto é possível achá-lo; clamem por ele enquanto está perto.", reference: "Isaías 55:6" },
  { verse: "Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.", reference: "Josué 1:9" },
  { verse: "Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria.", reference: "Salmos 90:12" },
  { verse: "O Senhor te guardará de todo mal; ele guardará a tua vida.", reference: "Salmos 121:7" },
  { verse: "Como é feliz aquele cujo auxílio é o Deus de Jacó, cuja esperança está no Senhor, no seu Deus.", reference: "Salmos 146:5" },
  { verse: "Eu pedi ao Senhor e ele me respondeu; livrou-me de todos os meus temores.", reference: "Salmos 34:4" },
  { verse: "Quem habita no abrigo do Altíssimo e descansa à sombra do Todo-poderoso pode dizer ao Senhor: Tu és o meu refúgio e a minha fortaleza, o meu Deus, em quem confio.", reference: "Salmos 91:1-2" },
    ];

  // Seleciona um versículo aleatório
  const randomIndex = Math.floor(Math.random() * verses.length);
  const randomVerse = verses[randomIndex];

  // Atualiza o conteúdo dos elementos HTML
  document.getElementById("verse").textContent = randomVerse.verse;
  document.getElementById("reference").textContent = randomVerse.reference;
});