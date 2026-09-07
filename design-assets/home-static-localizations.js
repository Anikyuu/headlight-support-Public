// Translations for editorial copy that is intentionally outside the legacy table.
const editorialLanguages=['de','zh-Hant','fr','es','it'];
const editorialCopy=[
['Simple mode stays calm by default',
 'Der ruhige Simple-Modus ist die Grundlage. Das illustrierte Gesicht kannst du jederzeit wählen.',
 '預設是安靜的 Simple 模式，也能隨時選擇插畫表情。',
 'Le mode Simple reste discret par défaut. Vous pouvez choisir le visage illustré à tout moment.',
 'El modo Simple es tranquilo por defecto. Puedes elegir la cara ilustrada cuando quieras.',
 'La modalità Simple è discreta per impostazione predefinita. Puoi scegliere il volto illustrato quando vuoi.'],
['Choose and combine the body, background',
 'Wähle Gehäuse, Hintergrund und Farben unabhängig voneinander.',
 '機身、背景與顏色都能分別選擇並自由搭配。',
 'Choisissez et associez le boîtier, le fond et les couleurs séparément.',
 'Elige y combina el cuerpo, el fondo y los colores por separado.',
 'Scegli e combina separatamente corpo, sfondo e colori.'],
['Pick a Home Screen icon, retro',
 'Wähle auch ein App-Symbol, Retro-Schrift und Texturen.',
 '還能選擇主畫面的 App 圖示、復古字體與材質。',
 'Choisissez aussi une icône, une typographie et une texture rétro.',
 'Elige también el icono, la tipografía y la textura retro.',
 'Scegli anche icona, caratteri e texture rétro.'],
['DESIGN STUDIO','DESIGNSTUDIO','設計工作室','STUDIO DE DESIGN','ESTUDIO DE DISEÑO','STUDIO DI DESIGN'],
['Try your own look','Probiere deinen eigenen Look','在這裡試試你的設計','Essayez votre propre style','Prueba tu propio estilo','Prova il tuo stile'],
['Mix the body, colors and background','Kombiniere Gehäuse, Farben und Hintergrund','搭配機身、顏色與背景','Associez le boîtier, les couleurs et le fond','Combina el cuerpo, los colores y el fondo','Combina corpo, colori e sfondo'],
['Hold on to what you love,','Bewahre, was du liebst,<br>und dein Herz wird leichter.','留下喜歡的事物，<br>心也會輕盈一些。','Gardez ce que vous aimez,<br>et votre cœur s’allège.','Conserva lo que te gusta,<br>y siente el corazón más ligero.','Conserva ciò che ami,<br>e il cuore si fa più leggero.'],
['Music you love. A film that stayed',
 'Musik, die du liebst. Ein Film, der dich berührt hat. Worte, zu denen du immer wieder zurückkehren möchtest.<br>Sie zeigen dir, was dich bewegt und was dir wichtig ist.',
 '喜歡的音樂、留在心裡的電影、想反覆讀回的話語。<br>它們讓你看見，什麼能觸動自己，什麼對自己重要。',
 'Une musique aimée. Un film qui vous a marqué. Des mots à retrouver encore et encore.<br>Ils révèlent ce qui vous touche et ce qui compte pour vous.',
 'La música que te gusta. Una película que te marcó. Palabras a las que quieres volver una y otra vez.<br>Revelan lo que te mueve y lo que te importa.',
 'La musica che ami. Un film che ti è rimasto dentro. Parole a cui vuoi tornare ancora e ancora.<br>Rivelano ciò che ti emoziona e ciò che conta per te.'],
['Keeping what you love close can',
 'Was du liebst in deiner Nähe zu haben, kann dich im Kleinen daran erinnern, wohin dein Herz möchte.',
 '把喜歡的事物留在身邊，能輕輕提醒你，心想往哪裡走。',
 'Garder près de vous ce que vous aimez peut vous rappeler doucement la direction que votre cœur souhaite prendre.',
 'Tener cerca lo que te gusta puede recordarte, en pequeño, hacia dónde quiere ir tu corazón.',
 'Tenere vicino ciò che ami può ricordarti, nel quotidiano, la direzione che il tuo cuore vuole prendere.'],
['Psychology research suggests',
 'Psychologische Forschung deutet darauf hin, dass Menschen ihre Bemühungen eher fortsetzen und Ziele eher erreichen, wenn diese zu ihren eigenen Interessen und Werten passen. Sheldon und Elliot berichteten diesen Zusammenhang anhand von drei Längsschnittdatensätzen.',
 '心理學研究指出，當目標符合個人的興趣與價值觀，人們較可能持續努力並達成目標。Sheldon 與 Elliot 在三組縱貫研究資料中報告了這項關係。',
 'Des recherches en psychologie suggèrent que les personnes poursuivant des objectifs liés à leurs intérêts et valeurs ont davantage tendance à persévérer et à les atteindre. Sheldon et Elliot ont observé ce lien dans trois ensembles de données longitudinales.',
 'La investigación psicológica sugiere que quienes persiguen objetivos acordes con sus intereses y valores tienen más probabilidades de mantener el esfuerzo y alcanzarlos. Sheldon y Elliot describieron esta relación en tres conjuntos de datos longitudinales.',
 'La ricerca psicologica suggerisce che chi persegue obiettivi in linea con interessi e valori personali tende maggiormente a perseverare e a raggiungerli. Sheldon ed Elliot hanno osservato questa relazione in tre serie di dati longitudinali.'],
['In four further studies,',
 'In vier weiteren Studien berichteten Milyavskaya und Kollegen, dass stärker vom eigenen Wollen getragene Ziele mit einer geringeren Anziehung durch störende Versuchungen und mit weniger erlebten Hindernissen zusammenhingen.',
 'Milyavskaya 與同事在另外四項研究中報告，較強的「我想要」動機，與較少受到妨礙目標的誘惑吸引，以及較少經歷阻礙有關。',
 'Dans quatre autres études, Milyavskaya et ses collègues ont associé les objectifs davantage portés par l’envie personnelle à une moindre attirance pour les tentations perturbatrices et à moins d’obstacles ressentis.',
 'En otros cuatro estudios, Milyavskaya y sus colegas relacionaron los objetivos impulsados por un mayor deseo personal con una menor atracción por tentaciones que interfieren y con menos obstáculos percibidos.',
 'In altri quattro studi, Milyavskaya e colleghi hanno associato gli obiettivi sostenuti da una maggiore motivazione personale a una minore attrazione verso tentazioni che ostacolano il percorso e a meno ostacoli percepiti.'],
['Your energy naturally turns toward',
 'Deine Energie richtet sich von selbst auf das, was dir wichtig ist.<br>Wenn der Weg klarer wird, können Ablenkungen dich weniger leicht davon abbringen.',
 '你的心力，自然會朝重要的事物聚集。<br>當前方的方向更清楚，分心的事就比較不容易把你帶走。',
 'Votre énergie se tourne naturellement vers ce qui compte pour vous.<br>Quand le chemin se précise, les distractions ont moins de prise.',
 'Tu energía se orienta de forma natural hacia lo que te importa.<br>Cuando el camino se aclara, las distracciones tienen menos fuerza para desviarte.',
 'La tua energia si rivolge naturalmente a ciò che conta per te.<br>Quando la strada è più chiara, le distrazioni riescono meno a portarti altrove.'],
['Holding on to what you love gives',
 'Was du liebst zu bewahren, gibt dir etwas, zu dem du zurückkehren kannst – und etwas mehr Raum zum Atmen.',
 '留下喜歡的事物，就有了能回去的地方，也多了一點呼吸的空間。',
 'Conserver ce que vous aimez vous offre un point de retour et un peu plus d’espace pour respirer.',
 'Conservar lo que te gusta te da un lugar al que volver y un poco más de espacio para respirar.',
 'Conservare ciò che ami ti offre un punto a cui tornare e un po’ più di spazio per respirare.'],
['With Head-Light, you can place',
 'Mit Head-Light kannst du deine Musik, Videos und Bücher in einem ganz eigenen Regal sammeln. Auch deine Gedanken und kommenden Pläne finden im selben Tagebuch Platz.',
 '在 Head-Light 裡，喜歡的音樂、影片與書籍，都能放上只屬於自己的收藏架。當下的想法與未來的計畫，也能住在同一本手帳裡。',
 'Avec Head-Light, réunissez les musiques, vidéos et livres que vous aimez sur une étagère bien à vous. Vos pensées et vos projets peuvent trouver place dans le même journal.',
 'Con Head-Light puedes reunir la música, los vídeos y los libros que te gustan en una estantería solo tuya. Tus ideas y tus próximos planes también caben en el mismo diario.',
 'Con Head-Light puoi raccogliere musica, video e libri che ami su uno scaffale tutto tuo. Pensieri e progetti possono trovare posto nello stesso diario.'],
['Head-Light is a journal that keeps',
 'Head-Light bewahrt, was du liebst und welche Worte dir wichtig sind, ganz in deiner Nähe. So gehst du mit leichterem Herzen durch den Tag, ohne dich selbst aus dem Blick zu verlieren.',
 'Head-Light 是一本把喜歡的事物與重要話語留在身邊的手帳，讓你不忘記自己，也能更輕盈地度過每一天。',
 'Head-Light est un journal qui garde près de vous ce que vous aimez et les mots qui comptent, pour avancer chaque jour le cœur plus léger sans vous perdre de vue.',
 'Head-Light es un diario que mantiene cerca lo que te gusta y las palabras importantes, para vivir cada día con el corazón más ligero sin perderte de vista.',
 'Head-Light è un diario che tiene vicino ciò che ami e le parole importanti, per vivere ogni giorno con il cuore più leggero senza perdere di vista te stesso.'],
['* These research findings are summarized',
 '* Dies ist eine Zusammenfassung von Forschungsergebnissen. Die genannten Studien untersuchten Zielmotivation, nicht die Wirkung des Ausstellens geliebter Dinge oder der Nutzung von Head-Light.',
 '＊此處為研究結果摘要。上述研究探討的是目標動機，並未驗證展示喜愛事物或使用 Head-Light 的效果。',
 '* Ces résultats sont résumés ici. Les études portaient sur la motivation envers les objectifs et n’ont pas testé les effets de l’exposition d’objets aimés ni de l’utilisation de Head-Light.',
 '* Aquí se resumen los resultados. Los estudios analizaron la motivación hacia objetivos; no comprobaron los efectos de mostrar cosas que gustan ni de utilizar Head-Light.',
 '* Qui sono riassunti i risultati delle ricerche. Gli studi riguardavano la motivazione verso gli obiettivi; non hanno verificato gli effetti dell’esporre cose amate o dell’uso di Head-Light.']
];
function installEditorialCopy(){
 document.querySelectorAll('span[data-i18n="en"][data-static-localized]').forEach(source=>{
  const entry=editorialCopy.find(row=>source.textContent.startsWith(row[0]));
  if(!entry)return;
  editorialLanguages.forEach((lang,i)=>{
   if(source.parentElement.querySelector('[data-i18n="'+lang+'"]'))return;
   const span=source.cloneNode(false);span.dataset.i18n=lang;span.innerHTML=entry[i+1];
   const citation=source.querySelector('.citation');if(citation){span.append(' ',citation.cloneNode(true));}
   source.after(span);
  });
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installEditorialCopy,{once:true});else installEditorialCopy();
