// Head-Light home — creator edition (2026-09-28).
// Japanese copy lives in the HTML. Other languages come from this table:
// [en, ko, de, zh-Hant, fr, es, it]. Missing entries fall back to English.
const L = ['en', 'ko', 'de', 'zh-Hant', 'fr', 'es', 'it'];
const T = {
 pitch1: ['Save what inspires you.', '마음을 움직인 것을 모으고,', 'Bewahre, was dich inspiriert.', '收藏打動你的事物，', 'Gardez ce qui vous inspire.', 'Guarda lo que te inspira.', 'Conserva ciò che ti ispira.'],
 pitch2: ['Say what you’ll make.', '만들 것을 말해 보세요.', 'Sprich aus, was du erschaffen wirst.', '說出你要創作的東西。', 'Dites ce que vous allez créer.', 'Di lo que vas a crear.', 'Di’ ad alta voce cosa creerai.'],
 endPitch2: ['Say what you’ll make, out loud.', '만들 것을 소리 내어 말해 보세요.', 'Sprich laut aus, was du erschaffen wirst.', '把你要創作的東西，大聲說出來。', 'Dites à voix haute ce que vous allez créer.', 'Di en voz alta lo que vas a crear.', 'Di’ ad alta voce cosa creerai.'],
 pitchEye: ['An inventory app for creators', '크리에이터를 위한 인벤토리 앱', 'Eine Inventar-App für Kreative', '為創作者而生的收藏庫 App', 'L’app d’inventaire des créateurs', 'La app de inventario para creadores', 'L’app di inventario per chi crea'],
 pitchSub: ['Videos, music, links and files on shelves you can take in at a glance. When an idea hits, just say it.', '영상도 음악도, 링크도 파일도 한눈에 보이는 선반에. 떠오르면 말하기만 하세요.', 'Videos, Musik, Links und Dateien in Regalen, die du auf einen Blick überschaust. Und wenn dir etwas einfällt, sprich es einfach aus.', '影片、音樂、連結與檔案，都放上一眼就能看遍的收藏架。有了靈感，說出來就好。', 'Vidéos, musique, liens et fichiers sur des étagères visibles d’un coup d’œil. Quand une idée surgit, dites-la simplement.', 'Vídeos, música, enlaces y archivos en estanterías que abarcas de un vistazo. Cuando llegue una idea, solo dila.', 'Video, musica, link e file su scaffali che abbracci con un solo sguardo. Quando arriva un’idea, dilla e basta.'],
 colEye: ['Collection', '컬렉션', 'Sammlungen', '收藏', 'Collections', 'Colecciones', 'Raccolte'],
 colH: ['Turn links and files<br>into cards on a shelf.', '링크와 파일을<br>표지가 있는 카드로.', 'Links und Dateien werden<br>zu Karten im Regal.', '連結與檔案，<br>都變成有封面的卡片。', 'Vos liens et fichiers deviennent<br>des cartes sur une étagère.', 'Tus enlaces y archivos,<br>tarjetas con portada.', 'Link e file diventano<br>schede con copertina.'],
 colP: ['Videos, social posts, albums, playlists, and web links. Photos, PDFs, text, Word documents, and audio files can live on the same shelf, ready to browse by cover and choose by hand.', '영상, SNS 게시물, 앨범, 플레이리스트, 웹 링크. 사진, PDF, 텍스트, Word, 오디오 파일도 같은 선반에 놓고 표지를 보며 직접 고를 수 있어요.', 'Videos, Social Posts, Alben, Playlists und Weblinks. Auch Fotos, PDFs, Text-, Word- und Audiodateien liegen im selben Regal und lassen sich über ihre Cover durchblättern.', '影片、社群貼文、專輯、播放清單與網頁連結，還有照片、PDF、文字、Word 與音訊檔案，都能放在同一個架上，依封面瀏覽與挑選。', 'Vidéos, publications, albums, playlists et liens web. Photos, PDF, textes, documents Word et fichiers audio trouvent aussi leur place sur la même étagère, à parcourir par couverture et à choisir à la main.', 'Vídeos, publicaciones, álbumes, listas y enlaces web. Fotos, PDF, textos, documentos de Word y archivos de audio también caben en la misma estantería, para recorrerlos por su portada y elegir a mano.', 'Video, post, album, playlist e link web. Anche foto, PDF, testi, documenti Word e file audio stanno sullo stesso scaffale, da sfogliare per copertina e scegliere a mano.'],
 shelfHint: ['Scroll to shelve', '스크롤해서 선반에', 'Scrollen zum Einräumen', '捲動，排上架', 'Faites défiler pour ranger', 'Desplaza para ordenar', 'Scorri per sistemare'],
 pt1h: ['Paste it. The cover appears.', '붙이기만 하면 표지가 생겨요.', 'Einfügen – schon ist das Cover da.', '貼上，封面就出現。', 'Collez, la couverture apparaît.', 'Pégalo y aparece la portada.', 'Incolla, e appare la copertina.'],
 pt1p: ['Paste a link and the thumbnail or album art is fetched for you, ready on the shelf.', '링크를 붙이면 썸네일과 재킷을 자동으로 가져와 선반에 놓아요.', 'Füge einen Link ein, und Vorschaubild oder Albumcover werden automatisch geholt und ins Regal gestellt.', '貼上連結，縮圖或專輯封面會自動取得，排上收藏架。', 'Collez un lien : la miniature ou la pochette est récupérée et rangée sur l’étagère.', 'Pega un enlace y la miniatura o la carátula se obtiene sola y se coloca en la estantería.', 'Incolla un link: miniatura o copertina vengono recuperate e messe sullo scaffale.'],
 pt2h: ['Flip it. Play it.', '넘기고, 바로 재생.', 'Umblättern und abspielen.', '翻開，直接播放。', 'Retournez, écoutez.', 'Gírala y dale al play.', 'Girala e premi play.'],
 pt2p: ['Swipe a card up to open it. Swipe an album down to play from Side B.', '카드를 위로 밀면 열리고, 앨범은 아래로 밀면 B면부터 재생돼요.', 'Wische eine Karte nach oben, um sie zu öffnen, ein Album nach unten für Seite B.', '向上滑動卡片即可開啟；向下滑動專輯，從 B 面開始播放。', 'Glissez une carte vers le haut pour l’ouvrir, un album vers le bas pour la face B.', 'Desliza una tarjeta hacia arriba para abrirla y un álbum hacia abajo para la cara B.', 'Scorri una scheda verso l’alto per aprirla, un album verso il basso per il lato B.'],
 pt3h: ['A whole shelf, one link.', '선반 전체를 링크 하나로.', 'Ein ganzes Regal, ein Link.', '整個收藏架，一個連結。', 'Toute une étagère, un seul lien.', 'Toda una estantería, un enlace.', 'Un intero scaffale, un link.'],
 pt3p: ['Share a shelf with a short link. Anyone can open it in a browser.', '모은 선반을 짧은 링크로 공유할 수 있어요. 받은 사람은 브라우저로도 볼 수 있어요.', 'Teile ein Regal über einen kurzen Link. Empfänger öffnen es auch im Browser.', '收藏架可用短連結分享，收到的人用瀏覽器也能看。', 'Partagez une étagère avec un lien court, consultable dans un navigateur.', 'Comparte una estantería con un enlace corto; se ve también en el navegador.', 'Condividi uno scaffale con un link breve, visibile anche dal browser.'],
 makeP: ['Return to what inspires you, then turn it into what you make next.', '모으는 데서 끝나지 않고, 다시 보고 말로 남겨 다음 창작으로 이어 가세요.', 'Kehre zurück zu dem, was dich inspiriert, und mach daraus dein nächstes Werk.', '不只收藏；再次翻看、說出想法，再讓它成為下一個創作。', 'Revenez à ce qui vous inspire, puis faites-en votre prochaine création.', 'Vuelve a lo que te inspira y conviértelo en tu próxima creación.', 'Torna a ciò che ti ispira e trasformalo nella tua prossima creazione.'],
 vidH: ['See the music shelf in action.', '음악 선반을 영상으로 만나보세요.', 'Das Musikregal im Video.', '用影片看看音樂收藏架。', 'L’étagère musicale en vidéo.', 'La estantería de música, en acción.', 'Lo scaffale della musica, in azione.'],
 vidP: ['Browse your album covers in a grid or Cover Flow, then play music right from your shelf.', '앨범 재킷을 그리드나 Cover Flow로 둘러보고, 선반에서 바로 음악을 재생할 수 있어요.', 'Durchsuche deine Cover im Raster oder Cover Flow und spiele die Musik direkt aus dem Regal ab.', '用格狀或 Cover Flow 瀏覽專輯封面，直接從收藏架播放音樂。', 'Parcourez vos pochettes en grille ou en Cover Flow, puis lancez la musique depuis l’étagère.', 'Recorre tus carátulas en cuadrícula o Cover Flow y reproduce la música desde la estantería.', 'Sfoglia le copertine in griglia o in Cover Flow e avvia la musica dallo scaffale.'],
 vidAria: ['How to use music collections in Head-Light'],
 voiceEye: ['Voice', '목소리', 'Stimme', '聲音', 'Voix', 'Voz', 'Voce'],
 voiceH: ['Just talk<br>to save an idea.', '떠오르면<br>말하기만 하세요.', 'Einfach sprechen,<br>schon ist die Idee da.', '靈感一來，<br>說出來就好。', 'Une idée ?<br>Dites-la.', '¿Una idea?<br>Solo dila.', 'Un’idea?<br>Dilla e basta.'],
 voiceP: ['When an idea hits, voice is the fastest way to catch it. That’s why there is a big microphone on the very first screen. Tap it, talk, and say “send it” at the end to save. Typing works too.', '아이디어가 떠오를 때 가장 빠른 방법은 목소리예요. 그래서 앱을 열자마자 보이는 첫 화면에 큰 마이크를 두었습니다. 한 번 누르고 말한 뒤 마지막에 “전송”이라고 하면 저장됩니다. 글로 입력해도 돼요.', 'Wenn eine Idee kommt, hältst du sie am schnellsten mit der Stimme fest. Deshalb wartet gleich auf dem ersten Bildschirm ein großes Mikrofon. Antippen, sprechen und am Ende „absenden“ sagen. Tippen geht auch.', '靈感出現時，聲音是最快的捕捉方式。因此 App 的第一個畫面就放了一個醒目的大麥克風。點一下、說出來，最後說「傳送」即可儲存，也能用文字輸入。', 'Quand une idée surgit, la voix est le moyen le plus rapide de la saisir. C’est pourquoi un grand micro vous attend dès le premier écran. Touchez-le, parlez et dites « envoi » à la fin pour enregistrer. Vous pouvez aussi écrire.', 'Cuando llega una idea, la voz es la forma más rápida de atraparla. Por eso hay un gran micrófono en la primera pantalla. Tócalo, habla y di «envíalo» al final para guardar. También puedes escribir.', 'Quando arriva un’idea, la voce è il modo più rapido per afferrarla. Per questo c’è un grande microfono già nella prima schermata. Toccalo, parla e di’ «invia» alla fine per salvare. Puoi anche scrivere.'],
 voiceAlt: ['A person speaking into an iPhone with Head-Light open.'],
 txListening: ['Listening', '듣고 있어요', 'Hört zu', '聆聽中', 'À l’écoute', 'Escuchando', 'In ascolto'],
 txSaved: ['Saved', '저장했어요', 'Gespeichert', '已儲存', 'Enregistré', 'Guardado', 'Salvato'],
 txText: ['The new chorus might work better in a new key.', '새 곡 후렴구, 전조하면 재밌을 것 같아.', 'Der neue Refrain klingt mit Tonartwechsel vielleicht besser.', '新歌的副歌，轉調也許會很有趣。', 'Le nouveau refrain irait mieux dans une autre tonalité.', 'El estribillo nuevo quedaría mejor en otra tonalidad.', 'Il nuovo ritornello starebbe meglio in un’altra tonalità.'],
 txTrigger: ['send it', '전송', 'absenden', '傳送', 'envoi', 'envíalo', 'invia'],
 sortH: ['Speak freely.<br>Let AI sort the rest.', '말한 그대로,<br>정리까지 맡길 수 있어요.', 'Sprich einfach drauflos.<br>Die KI ordnet den Rest.', '直接說出來，<br>整理也交給 AI。', 'Parlez librement.<br>L’IA fait le tri.', 'Habla como te salga.<br>La IA ordena el resto.', 'Parla liberamente.<br>L’IA mette in ordine.'],
 sortP: ['Speak or type as thoughts come. AI separates them into plans, to-dos and ideas.', '말로도 글로도. 떠오르는 대로 넣으면 AI가 일정·할 일·아이디어로 나눠요.', 'Sprich oder tippe, wie es dir in den Sinn kommt. Die KI trennt Termine, Aufgaben und Ideen.', '想到什麼就說或打字。AI 會分成行程、待辦與點子。', 'Parlez ou écrivez comme cela vient. L’IA sépare rendez-vous, tâches et idées.', 'Habla o escribe tal como te venga. La IA separa planes, tareas e ideas.', 'Parla o scrivi come ti viene. L’IA separa impegni, cose da fare e idee.'],
 quote: ['“Um, <mark class="m1">next Wednesday I think it’s the dentist at 3</mark>, and <mark class="m2">I need to grab batteries on the way home</mark>. Oh — <mark class="m3">the chorus of that new song might work better modulated</mark>.”',
  '「음, <mark class="m1">다음 주 수요일 아마 3시부터 치과였고</mark>, <mark class="m2">돌아오는 길에 배터리도 사야 해</mark>. 아 맞다, <mark class="m3">새 곡 후렴구 전조하면 재밌을 것 같은데</mark>」',
  '„Ähm, <mark class="m1">nächsten Mittwoch um 3 ist, glaube ich, Zahnarzt</mark>, und <mark class="m2">auf dem Heimweg muss ich Batterien kaufen</mark>. Ach ja – <mark class="m3">der neue Refrain klingt mit Tonartwechsel vielleicht besser</mark>.“',
  '「嗯，<mark class="m1">下週三好像三點要看牙醫</mark>，還有<mark class="m2">回家路上得買電池</mark>。對了，<mark class="m3">新歌的副歌轉調也許會很有趣</mark>。」',
  '« Euh, <mark class="m1">mercredi prochain, je crois, dentiste à 15 h</mark>, et <mark class="m2">je dois acheter des piles en rentrant</mark>. Ah — <mark class="m3">le nouveau refrain serait peut-être mieux avec une modulation</mark>. »',
  '«Eh, <mark class="m1">el miércoles que viene creo que tengo dentista a las 3</mark>, y <mark class="m2">a la vuelta tengo que comprar pilas</mark>. Ah, <mark class="m3">el estribillo nuevo quizá quede mejor con una modulación</mark>.»',
  '«Allora, <mark class="m1">mercoledì prossimo mi pare ho il dentista alle 3</mark>, e <mark class="m2">tornando devo comprare le pile</mark>. Ah, <mark class="m3">il nuovo ritornello forse suonerebbe meglio modulato</mark>.»'],
 c1Tag: ['Plan', '일정', 'Termin', '行程', 'Rendez-vous', 'Plan', 'Impegno'],
 c1T: ['Dentist, Wed 3:00 PM', '치과 수요일 15:00', 'Zahnarzt, Mi. 15:00', '牙醫 週三 15:00', 'Dentiste, mer. 15 h', 'Dentista, miér. 15:00', 'Dentista, mer. 15:00'],
 c1S: ['Asks once: “Add to calendar?”', '「캘린더에 추가할까요?」라고 한 번만 물어봐요', 'Fragt einmal: „Zum Kalender hinzufügen?“', '只問一次：「加入行事曆？」', 'Demande une seule fois : « Ajouter au calendrier ? »', 'Pregunta una vez: «¿Añadir al calendario?»', 'Chiede una sola volta: «Aggiungere al calendario?»'],
 c2Tag: ['To-do', '할 일', 'Aufgabe', '待辦', 'À faire', 'Tarea', 'Da fare'],
 c2T: ['Buy batteries', '배터리 사기', 'Batterien kaufen', '買電池', 'Acheter des piles', 'Comprar pilas', 'Comprare le pile'],
 c2S: ['Goes to your to-dos', '할 일 목록으로', 'Landet in deinen Aufgaben', '放進待辦清單', 'Rejoint vos tâches', 'Va a tus tareas', 'Va tra le cose da fare'],
 c3Tag: ['Idea', '아이디어', 'Idee', '點子', 'Idée', 'Idea', 'Idea'],
 c3T: ['Try a key change in the new chorus', '새 곡 후렴구 전조해 보기', 'Tonartwechsel im neuen Refrain ausprobieren', '試著幫新歌副歌轉調', 'Essayer de moduler le nouveau refrain', 'Probar a modular el estribillo nuevo', 'Provare a modulare il nuovo ritornello'],
 c3S: ['Drops into the Idea Jar as a bead', '아이디어의 병에 구슬이 되어 쌓여요', 'Fällt als Perle ins Ideenglas', '化成一顆珠子，落進點子瓶', 'Tombe dans le bocal à idées, comme une perle', 'Cae al bote de ideas como una cuenta', 'Cade nel barattolo delle idee come una perlina'],
 sortNote: ['It doesn’t have to be tidy. Leave the organizing to AI.', '정리되지 않은 채로 말해도 괜찮아요. 정리는 AI에게 맡길 수 있어요.', 'Es muss nicht geordnet sein. Die KI übernimmt das Sortieren.', '不必先整理好。交給 AI 分類就行。', 'Pas besoin que ce soit rangé. Laissez le tri à l’IA.', 'No hace falta que esté ordenado. Deja el orden a la IA.', 'Non serve che sia in ordine. Lascia il riordino all’IA.'],
 toolsEye: ['Everyday tools', '매일의 도구', 'Werkzeuge für jeden Tag', '每天的工具', 'Outils du quotidien', 'Herramientas diarias', 'Strumenti di ogni giorno'],
 toolsH: ['More than 20 tools<br>to move your day forward.', '오늘을 앞으로,<br>20개가 넘는 도구.', 'Mehr als 20 Werkzeuge,<br>die deinen Tag voranbringen.', '20 多種工具，<br>陪你推進今天。', 'Plus de 20 outils<br>pour faire avancer la journée.', 'Más de 20 herramientas<br>para hacer avanzar tu día.', 'Più di 20 strumenti<br>per mandare avanti la giornata.'],
 toolsP: ['Writing, reading, journal, calendar, routines and timers. Keep only the tools you need right now on your Home shelf.', '쓰기, 읽기, 수첩, 캘린더, 루틴, 타이머. 지금 나에게 필요한 도구만 홈 선반에 둘 수 있어요.', 'Schreiben, Lesen, Tagebuch, Kalender, Routinen und Timer. Lege nur die Werkzeuge, die du gerade brauchst, auf dein Regal im Home-Bildschirm.', '書寫、閱讀、手帳、行事曆、例行流程與計時器。只把現在需要的工具放在主畫面的架子上。', 'Écriture, lecture, journal, calendrier, routines et minuteurs. Gardez sur l’étagère de l’accueil uniquement les outils dont vous avez besoin.', 'Escribir, leer, diario, calendario, rutinas y temporizadores. Deja en la estantería de Inicio solo lo que necesitas ahora.', 'Scrittura, lettura, diario, calendario, routine e timer. Tieni sullo scaffale della Home solo gli strumenti che ti servono ora.'],
 jT: ['Calendar & journal', '캘린더·수첩', 'Kalender & Tagebuch', '行事曆・手帳', 'Calendrier et journal', 'Calendario y diario', 'Calendario e diario'],
 jH: ['Your own timeline.', '나만의 타임라인.', 'Deine ganz persönliche Timeline.', '專屬於你的時間軸。', 'Votre propre chronologie.', 'Tu propia línea de tiempo.', 'La tua timeline personale.'],
 jP: ['The words you said and the photos you took line up on each day’s page, so your journal grows on its own.', '말한 내용과 찍은 사진이 그날의 페이지에 쌓여, 일기가 저절로 자라요.', 'Deine Worte und Fotos landen auf der Seite des Tages – so wächst dein Tagebuch von selbst.', '說過的話與拍下的照片排在當天的頁面上，日記自然長成。', 'Vos mots et vos photos s’alignent sur la page du jour : votre journal grandit tout seul.', 'Tus palabras y fotos se ordenan en la página del día, y el diario crece solo.', 'Parole e foto si allineano sulla pagina del giorno: il diario cresce da solo.'],
 rT: ['Routines', '루틴', 'Routinen', '例行流程', 'Routines', 'Rutinas', 'Routine'],
 rH: ['Build a routine like a playlist.', '플레이리스트를 만들 듯, 루틴을 짜 보세요.', 'Stell deine Routine zusammen wie eine Playlist.', '像製作播放清單一樣，編排例行流程。', 'Composez une routine comme une playlist.', 'Arma tu rutina como una playlist.', 'Componi una routine come una playlist.'],
 rP: ['Voice guidance and a circular timer show what’s next. Keep going and your plant grows.', '음성과 원형 타이머가 다음 할 일을 안내해요. 이어 갈수록 식물이 자라요.', 'Stimme und Kreis-Timer zeigen, was als Nächstes kommt. Bleib dran, und deine Pflanze wächst.', '語音與圓形計時器引導下一步。持續下去，植物也會成長。', 'La voix et un minuteur circulaire indiquent la suite. Continuez, et votre plante grandit.', 'La voz y un temporizador circular te guían. Si sigues, tu planta crece.', 'Voce e timer circolare ti guidano. Continua e la tua pianta cresce.'],
 tT: ['Tidy assistant', '정리 어시스턴트', 'Ordnungs-Assistent', '整理助手', 'Assistant de rangement', 'Asistente de orden', 'Assistente di riordino'],
 tH: ['This is enough for today.', '오늘은 이것만으로, 충분해요.', 'Für heute reicht das.', '今天做到這些，就夠了。', 'Pour aujourd’hui, c’est assez.', 'Por hoy, con esto basta.', 'Per oggi, basta così.'],
 tP: ['Say what’s on your mind. AI sorts it into now, later, grow and let go.', '머릿속에 있는 것을 말하기만 하면 돼요. AI가 ‘지금’, ‘나중’, ‘키우기’, ‘놓기’로 나눠요.', 'Sag, was dir durch den Kopf geht. Die KI teilt es in „Jetzt“, „Später“, „Wachsen lassen“ und „Loslassen“.', '說出腦海裡的事。AI 會分成「現在」「稍後」「培養」「放下」。', 'Dites ce que vous avez en tête. L’IA le répartit en « maintenant », « plus tard », « à cultiver » et « à laisser aller ».', 'Di lo que tienes en mente. La IA lo divide en «ahora», «más tarde», «cultivar» y «dejar ir».', 'Di’ ciò che hai in mente. L’IA lo divide in “ora”, “dopo”, “da coltivare” e “da lasciar andare”.'],
 hT: ['Hand to AI', 'AI로 보내기', 'An die KI', '交給 AI', 'Confier à l’IA', 'Pasar a la IA', 'Affida all’IA'],
 hH: ['Bring your words to the AI you already use.', '모아둔 말을, 평소 쓰는 AI에게.', 'Bring deine Worte zur KI, die du schon nutzt.', '把累積的文字，交給平常用的 AI。', 'Confiez vos mots à l’IA que vous utilisez déjà.', 'Lleva tus palabras a la IA que ya usas.', 'Porta le tue parole all’IA che usi già.'],
 hP: ['Paste straight into ChatGPT, Gemini, Claude or any AI you use. You always see what you’re sharing first.', 'ChatGPT·Gemini·Claude 등 평소 쓰는 AI에 그대로 붙일 수 있어요. 보낼 내용은 미리 확인할 수 있어요.', 'Direkt in ChatGPT, Gemini, Claude oder deine KI einfügen. Was du teilst, siehst du vorher.', '可直接貼到 ChatGPT、Gemini、Claude 等常用的 AI，分享前都能先確認內容。', 'À coller dans ChatGPT, Gemini, Claude ou votre IA. Vous voyez toujours d’abord ce que vous partagez.', 'Pégalo en ChatGPT, Gemini, Claude o la IA que uses. Siempre ves antes lo que compartes.', 'Incollalo in ChatGPT, Gemini, Claude o nell’IA che usi. Vedi sempre prima cosa condividi.'],
 q: ['“Where should I even start?”', '「뭐부터 시작하면 좋을까요?」', '„Wo fange ich überhaupt an?“', '「我該從哪裡開始？」', '« Par où commencer ? »', '«¿Por dónde empiezo?»', '«Da dove comincio?»'],
 a1L: ['Ask it plain', '그냥 물어보면', 'Einfach so gefragt', '直接問', 'Question brute', 'Preguntando sin más', 'Chiedendo e basta'],
 a1: ['First, list every task, then sort by importance and urgency.', '먼저 할 일을 모두 적고, 중요도와 긴급도로 분류해 보세요.', 'Schreib zuerst alle Aufgaben auf und sortiere nach Wichtigkeit und Dringlichkeit.', '先寫下所有任務，再依重要性與緊急程度分類。', 'Listez d’abord toutes vos tâches, puis triez-les par importance et urgence.', 'Primero apunta todas las tareas y ordénalas por importancia y urgencia.', 'Prima elenca tutte le attività, poi ordinale per importanza e urgenza.'],
 a1n: ['…an answer you’ve heard before.', '…어디선가 들어본 답.', '…eine Antwort, die du schon kennst.', '……似曾聽過的答案。', '… une réponse déjà entendue.', '…una respuesta que ya has oído.', '…una risposta già sentita.'],
 a2L: ['After pasting your words', '말을 붙여넣고 물어보면', 'Mit deinen Worten gefragt', '貼上你的文字再問', 'Après avoir collé vos mots', 'Tras pegar tus palabras', 'Dopo aver incollato le tue parole'],
 a2: ['The dentist is Wednesday, so nothing to do there today. Batteries on the way back. What’s really on your mind is that new chorus, right? Start there today.', '치과는 수요일이니 오늘은 괜찮아요. 배터리는 돌아오는 길에. 제일 신경 쓰이는 건 새 곡 후렴구죠? 오늘은 거기서부터.', 'Zahnarzt ist erst Mittwoch, heute ist da nichts zu tun. Batterien auf dem Rückweg. Was dich wirklich beschäftigt, ist der neue Refrain, oder? Fang heute dort an.', '牙醫是週三，今天不用管。電池回程順便買。你最在意的其實是新歌的副歌吧？今天就從那裡開始。', 'Le dentiste, c’est mercredi : rien à faire aujourd’hui. Les piles, au retour. Ce qui vous occupe vraiment, c’est le nouveau refrain, non ? Commencez par là.', 'El dentista es el miércoles, así que hoy nada. Las pilas, a la vuelta. Lo que de verdad te ronda es el estribillo nuevo, ¿no? Empieza por ahí.', 'Il dentista è mercoledì, quindi oggi niente. Le pile al ritorno. Quello che ti preme davvero è il nuovo ritornello, giusto? Comincia da lì.'],
 a2n: ['Your answer.', '당신의 답.', 'Deine Antwort.', '屬於你的答案。', 'Votre réponse.', 'Tu respuesta.', 'La tua risposta.'],
 free: ['Free', '무료', 'Kostenlos', '免費', 'Gratuit', 'Gratis', 'Gratis'],
 chip1: ['To-do', '할 일', 'Aufgaben', '待辦', 'À faire', 'Tareas', 'Da fare'],
 chip2: ['3-day planner', '3일 플래너', '3-Tage-Planer', '3 日計畫', 'Planificateur 3 jours', 'Planificador de 3 días', 'Planner 3 giorni'],
 chip3: ['Timer', '타이머', 'Timer', '計時器', 'Minuteur', 'Temporizador', 'Timer'],
 chip4: ['Meditation', '명상', 'Meditation', '冥想', 'Méditation', 'Meditación', 'Meditazione'],
 chip5: ['Workout', '근력 운동', 'Workout', '肌力訓練', 'Musculation', 'Entrenamiento', 'Allenamento'],
 chip6: ['Sleep', '수면', 'Schlaf', '睡眠', 'Sommeil', 'Sueño', 'Sonno'],
 chip7: ['Mood', '오늘의 컨디션', 'Stimmung', '今日狀態', 'Humeur', 'Estado de ánimo', 'Umore'],
 chip8: ['Medicine', '약', 'Medikamente', '藥物', 'Médicaments', 'Medicación', 'Farmaci'],
 chip9: ['Meals', '식사', 'Mahlzeiten', '飲食', 'Repas', 'Comidas', 'Pasti'],
 chip10: ['Expenses', '경비', 'Ausgaben', '支出', 'Dépenses', 'Gastos', 'Spese'],
 chip11: ['Idea jar', '아이디어의 병', 'Ideenglas', '點子瓶', 'Bocal à idées', 'Bote de ideas', 'Barattolo delle idee'],
 chip12: ['Blank paper', '하얀 종이', 'Leeres Blatt', '白紙', 'Page blanche', 'Hoja en blanco', 'Foglio bianco'],
 chip13: ['Let go', '놓아주기', 'Loslassen', '放下', 'Lâcher prise', 'Soltar', 'Lasciar andare'],
 chip14: ['Remember', '기억해 두기', 'Merken', '記住', 'Retenir', 'Recordar', 'Ricorda'],
 chip15: ['Folders', '폴더', 'Ordner', '資料夾', 'Dossiers', 'Carpetas', 'Cartelle'],
 chip16: ['Widgets', '위젯', 'Widgets', '小工具', 'Widgets', 'Widgets', 'Widget'],
 toolsLink: ['Read about every tool', '도구 설명을 전부 보기', 'Alle Werkzeuge ansehen', '查看所有工具說明', 'Découvrir tous les outils', 'Ver todas las herramientas', 'Scopri tutti gli strumenti'],
 designEye: ['Design', '디자인', 'Design', '設計', 'Design', 'Diseño', 'Design'],
 designH: ['Keep it simple—<br>or make it playful.', '심플하게도,<br>개성 넘치게도.', 'Schlicht oder<br>voller Persönlichkeit.', '可以簡約，<br>也可以充滿個性。', 'Sobre,<br>ou plein de fantaisie.', 'Sencillo,<br>o lleno de personalidad.', 'Essenziale,<br>o pieno di fantasia.'],
 designP: ['Choose the calm Simple mode, or build a more expressive look. Mix the body, colors, background, accent, app icon and retro styling into a place you will want to open every day.', '차분한 심플 모드를 고르거나 더 풍부한 분위기를 만들 수 있어요. 바디, 색 조합, 배경, 포인트 색, 앱 아이콘과 레트로 표현을 조합해 매일 열고 싶은 공간으로 꾸며 보세요.', 'Wähle den ruhigen Simple-Modus oder einen ausdrucksstärkeren Look. Kombiniere Gehäuse, Farben, Hintergrund, Akzent, App-Symbol und Retro-Stil zu einem Ort, den du jeden Tag gern öffnest.', '可選擇安靜的 Simple 模式，也能打造更有個性的外觀。自由組合機身、配色、背景、強調色、App 圖示與復古風格，變成每天都想打開的空間。', 'Choisissez le mode Simple, tout en calme, ou composez un style plus expressif : boîtier, couleurs, fond, accent, icône et touche rétro, pour un endroit qu’on a envie d’ouvrir chaque jour.', 'Elige el tranquilo modo Simple o crea un estilo más expresivo combinando cuerpo, colores, fondo, acento, icono y toques retro, para un lugar que apetezca abrir cada día.', 'Scegli la tranquilla modalità Simple o crea uno stile più espressivo combinando corpo, colori, sfondo, accento, icona e tocco rétro, per un posto che vorrai aprire ogni giorno.'],
 designCta: ['Try a design', '디자인 해 보기', 'Design ausprobieren', '試試看設計', 'Essayer un design', 'Prueba un diseño', 'Prova un design'],
 diceHint: ['Or roll the dice at the top', '맨 위의 주사위로도 바꿀 수 있어요', 'Oder oben würfeln', '也能用最上方的骰子換裝', 'Ou lancez le dé tout en haut', 'O lanza el dado de arriba', 'Oppure lancia il dado in alto'],
 nameEye: ['The name', '이름에 담은 뜻', 'Der Name', '名字的由來', 'Le nom', 'El nombre', 'Il nome'],
 nameH: ['A lighter head.<br>A light on the road ahead.', '머리는 가볍게.<br>앞으로 갈 길에는 빛을.', 'Ein leichterer Kopf.<br>Ein Licht auf dem Weg.', '讓腦袋輕一點。<br>為前方的路點一盞光。', 'Une tête plus légère.<br>Une lumière sur le chemin.', 'Una cabeza más ligera.<br>Una luz en el camino.', 'Una testa più leggera.<br>Una luce sulla strada.'],
 nameP: ['Head-Light isn’t a place to lock away the things you love. It’s a place to find them again, and make something from them right away. A lighter head. A light on the road ahead. So you can take the next step without hesitation. That’s why I named it Head-Light.', '흩어진 것을 다시 찾을 수 있는 곳에 모으고, 떠오른 순간 목소리로 남겨 망설임 없이 다음 걸음을 내딛도록. 그 두 가지 바람을 Head-Light라는 이름에 담았습니다.', 'Verstreutes wiederfinden, Ideen im Moment ihres Entstehens per Stimme festhalten und ohne Zögern den nächsten Schritt gehen: Diese Gedanken stecken im Namen Head-Light.', '把散落的事物集中到能再次找到的地方，在靈感出現的瞬間用聲音留下，然後毫不猶豫地跨出下一步。這兩個願望，就是 Head-Light 這個名字的由來。', 'Head-Light n’est pas un endroit où enfermer ce que vous aimez, mais où le retrouver et en faire tout de suite quelque chose. Une tête plus légère, une lumière sur le chemin, pour faire le pas suivant sans hésiter. D’où le nom Head-Light.', 'Head-Light no es un lugar para guardar bajo llave lo que te gusta, sino para volver a encontrarlo y crear algo con ello enseguida. Una cabeza más ligera y una luz en el camino, para dar el siguiente paso sin dudar. Por eso se llama Head-Light.', 'Head-Light non è un posto dove chiudere a chiave ciò che ami, ma dove ritrovarlo e farne subito qualcosa. Una testa più leggera e una luce sulla strada, per fare il passo successivo senza esitare. Per questo si chiama Head-Light.'],
 storyEye: ['Why it exists', '만든 이유', 'Warum es Head-Light gibt', '開發的理由', 'Pourquoi Head-Light', 'Por qué existe', 'Perché esiste'],
 storyH: ['A home for ideas<br>that used to scatter.', '흩어지던 아이디어를<br>다시 쓸 수 있는 곳으로.', 'Ein Ort für Ideen,<br>die sich früher verstreuten.', '給曾經四處散落的靈感，<br>一個能派上用場的家。', 'Un lieu pour les idées<br>qui s’éparpillaient.', 'Un hogar para las ideas<br>que antes se dispersaban.', 'Una casa per le idee<br>che prima si disperdevano.'],
 storyRole: ['Developer / video creator', '개발자 / 영상 크리에이터', 'Entwickler / Videocreator', '開發者／影片創作者', 'Développeur / créateur vidéo', 'Desarrollador / creador de vídeo', 'Sviluppatore / video creator'],
 storyLead: ['Built by making from what moved me.', '직접 겪은 경험에서 만들었습니다.', 'Aus eigener Erfahrung entstanden.', '來自真實經驗的製作。', 'Faire vite quelque chose de ce qui touche.', 'Convertir enseguida en obra lo que emociona.', 'Trasformare subito in opera ciò che emoziona.'],
 storyP: ['Kai appeared on a client’s YouTube channel while handling everything from planning to editing, helping it grow to one million subscribers. Every day, he searched a sea of content on his phone for the seeds of new ideas, then made something real as soon as it moved him. But favorites and essentials kept piling up. Living with ADHD made finding the right thing at the right moment difficult, and before long those references were scattered everywhere. Remembering his record-label days—lining up covers, browsing them, and picking one out by hand—he built Head-Light as a shelf you can see, browse, and use.',
  '개발자 Kai는 클라이언트의 YouTube 채널이 구독자 100만 명까지 성장하는 일에 참여한 영상 크리에이터입니다. ADHD를 직접 겪으며, 자료와 영감이 흩어져 사라지던 불편에서 Head-Light를 만들었습니다.',
  'Kai ist Videocreator und half dabei, den YouTube-Kanal eines Kunden auf eine Million Abonnenten zu bringen. Aus seiner Erfahrung mit ADHS entwickelte er Head-Light für Referenzen und Ideen, die sonst verstreut waren.',
  '開發者 Kai 是影片創作者，曾協助客戶的 YouTube 頻道成長到一百萬訂閱者。作為 ADHD 當事人，他因資料散落、靈感還沒用上就消失的不便，開發了 Head-Light。',
  'Kai est apparu sur la chaîne YouTube d’un client tout en s’occupant de tout, de la planification au montage, et a contribué à la faire grandir jusqu’à un million d’abonnés. Chaque jour, il plongeait dans un océan de contenus sur son téléphone pour y chercher des graines d’idées, puis créait dès qu’une chose le touchait. Mais les favoris et les références essentielles s’accumulaient. Vivre avec un TDAH rendait difficile de trouver la bonne chose au bon moment, et tout finissait éparpillé. En repensant à ses années dans un label, quand il alignait les pochettes, les parcourait et en choisissait une à la main, il a créé Head-Light : une étagère qu’on voit, qu’on parcourt et qu’on utilise.',
  'Kai apareció en el canal de YouTube de un cliente mientras se encargaba de todo, de la planificación a la edición, y ayudó a que llegara al millón de suscriptores. Cada día buscaba en su móvil, en un mar de contenidos, las semillas de nuevas ideas y creaba algo en cuanto algo lo conmovía. Pero los favoritos y las referencias esenciales no dejaban de acumularse. Vivir con TDAH hacía difícil encontrar lo justo en el momento justo, y pronto todo estaba disperso. Recordando sus días en un sello discográfico —alinear carátulas, recorrerlas y elegir una con la mano—, creó Head-Light: una estantería que puedes ver, recorrer y usar.',
  'Kai è apparso sul canale YouTube di un cliente occupandosi di tutto, dalla pianificazione al montaggio, e ha contribuito a farlo crescere fino a un milione di iscritti. Ogni giorno cercava sul telefono, in un mare di contenuti, i semi di nuove idee e creava qualcosa non appena qualcosa lo colpiva. Ma preferiti e riferimenti essenziali continuavano ad accumularsi. Convivere con l’ADHD rendeva difficile trovare la cosa giusta al momento giusto, e presto tutto era sparso ovunque. Ripensando agli anni in un’etichetta discografica, quando allineava le copertine, le sfogliava e ne sceglieva una con le mani, ha creato Head-Light: uno scaffale da vedere, sfogliare e usare.'],
 promiseEye: ['Our promise', '약속', 'Versprechen', '承諾', 'Promesse', 'Promesa', 'Promessa'],
 promiseH: ['You are not the product.', '당신을 상품으로 만들지 않아요.', 'Du bist nicht das Produkt.', '你不是商品。', 'Vous n’êtes pas le produit.', 'Tú no eres el producto.', 'Non sei tu il prodotto.'],
 p1: ['No ads', '광고 없음', 'Keine Werbung', '無廣告', 'Sans publicité', 'Sin anuncios', 'Niente pubblicità'],
 p1s: ['Your screen holds only your things.', '화면에는 당신의 것만.', 'Dein Bildschirm, nur deine Dinge.', '畫面上只有你的東西。', 'Votre écran, rien que vos choses.', 'Tu pantalla, solo tus cosas.', 'Il tuo schermo, solo le tue cose.'],
 p2: ['No tracking', '행동 추적 없음', 'Kein Tracking', '無行為追蹤', 'Aucun pistage', 'Sin rastreo', 'Nessun tracciamento'],
 p2s: ['We never sell your data.', '데이터를 팔지 않아요.', 'Wir verkaufen keine Daten.', '不販賣你的資料。', 'Vos données ne sont jamais vendues.', 'Nunca vendemos tus datos.', 'Non vendiamo mai i tuoi dati.'],
 p3: ['Stored on your device', '기기 안에 저장', 'Auf deinem Gerät', '存在你的裝置裡', 'Stocké sur votre appareil', 'Guardado en tu dispositivo', 'Salvato sul tuo dispositivo'],
 p3s: ['Protect it with Face ID.', 'Face ID로 지킬 수 있어요.', 'Mit Face ID geschützt.', '可用 Face ID 保護。', 'Protégé par Face ID.', 'Protégelo con Face ID.', 'Proteggilo con Face ID.'],
 p4: ['You see it before it’s sent', '보내기 전에 확인', 'Du siehst es vor dem Senden', '送出前先確認', 'Vous validez avant tout envoi', 'Lo ves antes de enviarlo', 'Lo vedi prima dell’invio'],
 p4s: ['Only when you choose cloud AI or shelf sharing is the shown content sent—and it’s never used to train AI.', '클라우드 AI나 선반 공유를 고른 경우에만 표시된 범위가 전송돼요. AI 학습에는 쓰이지 않아요.', 'Nur wenn du Cloud-KI oder das Teilen eines Regals wählst, wird der angezeigte Inhalt gesendet – nie zum KI-Training.', '只有在你選擇雲端 AI 或分享收藏架時，才會送出顯示的範圍，且不會用於 AI 訓練。', 'Le contenu affiché n’est envoyé que si vous choisissez l’IA cloud ou le partage d’étagère, et jamais pour entraîner une IA.', 'Solo se envía lo mostrado cuando eliges la IA en la nube o compartir una estantería, y nunca para entrenar IA.', 'Il contenuto mostrato viene inviato solo se scegli l’IA cloud o la condivisione di uno scaffale, e mai per addestrare l’IA.'],
 privacyLink: ['Read the Privacy Policy', '개인정보 처리방침 보기', 'Datenschutzrichtlinie lesen', '閱讀隱私權政策', 'Lire la politique de confidentialité', 'Leer la política de privacidad', 'Leggi l’informativa sulla privacy'],
 prEye: ['Pricing', '요금', 'Preise', '價格', 'Tarifs', 'Precios', 'Prezzi'],
 prH: ['Free, always.<br>Hand the organizing to High Beam.', '계속 무료.<br>정리하는 수고는 High Beam에게.', 'Dauerhaft kostenlos.<br>Das Ordnen übernimmt High Beam.', '永久免費。<br>整理的工夫交給 High Beam。', 'Gratuit, pour toujours.<br>Le rangement, c’est High Beam.', 'Gratis, siempre.<br>El orden, déjaselo a High Beam.', 'Gratis, per sempre.<br>Il riordino lo fa High Beam.'],
 prP: ['Turn spoken thoughts into plans and to-dos. Read expenses from receipts and estimate nutrition from meal photos. High Beam helps with everyday organizing and data entry.', '말한 내용을 일정과 할 일로 분류하고, 영수증에서 경비를 읽고, 식사 사진으로 영양을 추정해요. High Beam가 매일의 정리와 입력을 도와줘요.', 'Gesprochene Gedanken in Pläne und Aufgaben sortieren, Ausgaben aus Belegen lesen und Nährwerte aus Essensfotos schätzen. High Beam hilft beim täglichen Ordnen und Erfassen.', '將說出的想法分成行程與待辦，從收據讀取支出，從餐點照片估算營養。High Beam 協助每天的整理與輸入。', 'Classer vos paroles en rendez-vous et tâches, lire les dépenses sur un reçu, estimer les nutriments d’un repas en photo : High Beam vous aide chaque jour à ranger et saisir.', 'Clasifica lo que dices en planes y tareas, lee gastos de los recibos y estima la nutrición a partir de fotos de comidas. High Beam te ayuda a ordenar y registrar cada día.', 'Smista ciò che dici in impegni e cose da fare, legge le spese dagli scontrini e stima i nutrienti dalle foto dei pasti. High Beam ti aiuta a riordinare e registrare ogni giorno.'],
 freeTag: ['Free forever', '계속 무료', 'Dauerhaft kostenlos', '永久免費', 'Gratuit pour toujours', 'Gratis para siempre', 'Gratis per sempre'],
 f1: ['Words, journal, calendar and collections', '말・수첩・캘린더・컬렉션', 'Wörter, Tagebuch, Kalender und Sammlungen', '文字、手帳、行事曆與收藏', 'Mots, journal, calendrier et collections', 'Palabras, diario, calendario y colecciones', 'Parole, diario, calendario e raccolte'],
 f2: ['More than 20 tools', '20개가 넘는 도구', 'Mehr als 20 Werkzeuge', '20 多種工具', 'Plus de 20 outils', 'Más de 20 herramientas', 'Più di 20 strumenti'],
 f3: ['No ads. We never sell your data', '광고 없음. 데이터를 팔지 않음', 'Keine Werbung. Wir verkaufen deine Daten nicht', '無廣告。不販賣你的資料', 'Sans publicité. Vos données ne sont jamais vendues', 'Sin anuncios. Nunca vendemos tus datos', 'Niente pubblicità. Non vendiamo i tuoi dati'],
 f4: ['Up to 3 collection shelves', '컬렉션 선반은 3개까지', 'Bis zu 3 Sammlungsregale', '最多 3 個收藏架', 'Jusqu’à 3 étagères de collection', 'Hasta 3 estanterías de colección', 'Fino a 3 scaffali per le raccolte'],
 f5: ['Your records stay yours, always', '기록은, 계속 당신의 것', 'Deine Aufzeichnungen bleiben deine, immer', '你的記錄永遠屬於你', 'Vos notes restent à vous, toujours', 'Tus registros son tuyos, siempre', 'I tuoi dati restano tuoi, sempre'],
 hbTag: ['Annual plan: 7 days free', '연간 플랜은 7일 무료', 'Jahresabo: 7 Tage kostenlos', '年繳方案免費 7 天', 'Abonnement annuel : 7 jours gratuits', 'Plan anual: 7 días gratis', 'Piano annuale: 7 giorni gratis'],
 h1: ['AI sorting for the words you speak', '말한 내용을 AI로 분류', 'KI-Sortierung für deine gesprochenen Worte', '用 AI 分類你說的話', 'Tri par IA de ce que vous dites', 'Clasificación con IA de lo que dices', 'Smistamento con IA di ciò che dici'],
 h2: ['AI chat and photo-to-words', 'AI 채팅・사진 언어화', 'KI-Chat und Foto-zu-Text', 'AI 聊天與照片轉文字', 'Chat IA et photo-en-mots', 'Chat con IA y fotos a palabras', 'Chat con IA e foto in parole'],
 h3: ['Unlimited shelves while subscribed', '구독 중에는 선반을 무제한으로', 'Unbegrenzt viele Regale während des Abos', '訂閱期間收藏架無上限', 'Étagères illimitées pendant l’abonnement', 'Estanterías ilimitadas durante la suscripción', 'Scaffali illimitati durante l’abbonamento'],
 h4: ['Your X posts in the journal on the day you posted', 'X 게시물을 게시한 날의 수첩으로', 'X-Posts ins Tagebuch des Veröffentlichungstags', '將 X 貼文放進發文當天的手帳', 'Vos posts X dans le journal du jour de publication', 'Tus posts de X en el diario del día en que publicaste', 'I tuoi post su X nel diario del giorno di pubblicazione'],
 h5: ['Tidy, remember, expenses, meals, night reflection and more', '정리・기억해 두기・경비・식사・밤의 되돌아보기 등', 'Ordnen, Merken, Ausgaben, Mahlzeiten, Abendreflexion und mehr', '整理、記住、支出、飲食、夜間回顧等', 'Rangement, mémo, dépenses, repas, bilan du soir et plus', 'Orden, recordar, gastos, comidas, reflexión nocturna y más', 'Riordino, promemoria, spese, pasti, riflessione serale e altro'],
 sName: ['Add more shelves', '선반 늘리기', 'Mehr Regale', '增加收藏架', 'Plus d’étagères', 'Más estanterías', 'Più scaffali'],
 sTag: ['One-time purchase', '한 번만 구매', 'Einmaliger Kauf', '單次購買', 'Achat unique', 'Compra única', 'Acquisto una tantum'],
 s1: ['3 shelves included for free', '선반 3개는 무료', '3 Regale kostenlos enthalten', '免費包含 3 個收藏架', '3 étagères incluses gratuitement', '3 estanterías incluidas gratis', '3 scaffali inclusi gratis'],
 s2: ['Add 10 shelves with one purchase', '한 번 구매하면 선반 10개 추가', '10 weitere Regale mit einem Kauf', '一次購買可增加 10 個收藏架', 'Ajoutez 10 étagères en un achat', 'Añade 10 estanterías con una compra', 'Aggiungi 10 scaffali con un acquisto'],
 s3: ['Your local price is shown in the app', '지역별 가격은 앱 내에 표시', 'Der lokale Preis wird in der App angezeigt', '當地價格顯示於 App 內', 'Votre tarif local est affiché dans l’app', 'El precio local se muestra en la app', 'Il prezzo locale è mostrato nell’app'],
 prNote: ['* The annual High Beam plan renews automatically after the 7-day free trial. Cancel anytime before renewal. Exact prices for High Beam and shelf expansion are shown in the app for your region.', '※ High Beam 연간 플랜은 7일 무료 체험 후 자동 갱신됩니다. 갱신 전에 언제든지 해지할 수 있어요. High Beam와 선반 추가의 정확한 가격은 사용 지역에 맞게 앱 내에 표시됩니다.', '* Das High Beam-Jahresabo verlängert sich nach dem 7-tägigen kostenlosen Test automatisch. Du kannst vor der Verlängerung jederzeit kündigen. Die genauen Preise für High Beam und zusätzliche Regale werden in der App für deine Region angezeigt.', '※ High Beam 年繳方案在 7 天免費試用後自動續訂，可於續訂前隨時取消。High Beam 與增加收藏架的正確價格，會依你所在地區顯示於 App 內。', '* L’abonnement annuel High Beam se renouvelle automatiquement après l’essai gratuit de 7 jours. Annulez à tout moment avant le renouvellement. Les prix exacts de High Beam et des étagères supplémentaires sont affichés dans l’app selon votre région.', '* El plan anual de High Beam se renueva automáticamente tras la prueba gratuita de 7 días. Cancela cuando quieras antes de la renovación. Los precios exactos de High Beam y de las estanterías adicionales se muestran en la app según tu región.', '* Il piano annuale High Beam si rinnova automaticamente dopo la prova gratuita di 7 giorni. Puoi annullare in qualsiasi momento prima del rinnovo. I prezzi esatti di High Beam e degli scaffali aggiuntivi sono mostrati nell’app in base alla tua regione.'],
 legal: ['Legal notice for Japan', '일본 특정상거래법 표기', 'Anbieterangaben für Japan', '日本特定商業交易法標示', 'Mentions légales pour le Japon', 'Aviso legal para Japón', 'Note legali per il Giappone'],
 supEye: ['Support', '지원', 'Support', '支援', 'Assistance', 'Soporte', 'Assistenza'],
 supH: ['Something wrong?<br>Just reach out.', '곤란할 때는<br>편하게 연락하세요.', 'Etwas stimmt nicht?<br>Melde dich einfach.', '遇到問題，<br>歡迎隨時聯絡。', 'Un souci ?<br>Écrivez-nous.', '¿Algún problema?<br>Escríbenos.', 'Qualcosa non va?<br>Scrivici.'],
 supP: ['Questions, bug reports, requests — reply on X, DM us on Instagram or TikTok, or send an email. Replies may take a few days.', '질문・버그 신고・요청은 X 답글, Instagram·TikTok DM, 이메일로 편하게 보내 주세요. 답장에 며칠 걸릴 수 있어요.', 'Fragen, Fehlermeldungen, Wünsche: antworte auf X, schreib uns per DM auf Instagram oder TikTok oder per E-Mail. Antworten können ein paar Tage dauern.', '問題、錯誤回報與建議，歡迎在 X 回覆、透過 Instagram 或 TikTok 私訊，或寄電子郵件。回覆可能需要幾天。', 'Questions, bugs, envies : répondez-nous sur X, écrivez-nous en MP sur Instagram ou TikTok, ou par e-mail. La réponse peut prendre quelques jours.', 'Preguntas, errores o peticiones: responde en X, escríbenos por DM en Instagram o TikTok, o envía un correo. La respuesta puede tardar unos días.', 'Domande, bug, richieste: rispondi su X, scrivici in DM su Instagram o TikTok o via e-mail. La risposta può richiedere qualche giorno.'],
 mail: ['Email', '이메일', 'E-Mail', '電子郵件', 'E-mail', 'Correo', 'E-mail'],
 q1: ['Which devices are supported?', '지원 기기는?', 'Welche Geräte werden unterstützt?', '支援哪些裝置？', 'Quels appareils sont compatibles ?', '¿Qué dispositivos son compatibles?', 'Quali dispositivi sono supportati?'],
 a1f: ['iPhone and iPad (iOS 17+), Apple Watch (watchOS 11+), and Mac (Apple silicon). With High Beam, cloud AI works on any supported device, whether or not it supports Apple Intelligence. Your records, journal, calendar, collections, and more than 20 tools are free on every device.', 'iPhone・iPad(iOS 17 이상), Apple Watch(watchOS 11 이상), Mac(Apple 실리콘). High Beam에서는 Apple Intelligence 지원 여부와 관계없이 어떤 기기에서도 클라우드 AI가 작동해요. 기록・수첩・캘린더・컬렉션과 20개가 넘는 도구는 모든 기기에서 무료예요.', 'iPhone und iPad (iOS 17+), Apple Watch (watchOS 11+) und Mac (Apple Silicon). Mit High Beam funktioniert die Cloud-KI auf jedem unterstützten Gerät, ob mit oder ohne Apple Intelligence. Aufzeichnungen, Tagebuch, Kalender, Sammlungen und mehr als 20 Werkzeuge sind auf allen Geräten kostenlos.', 'iPhone 與 iPad（iOS 17 以上）、Apple Watch（watchOS 11 以上）與 Mac（Apple 晶片）。使用 High Beam 時，無論是否支援 Apple Intelligence，任何機型都能使用雲端 AI。記錄、手帳、行事曆、收藏與 20 多種工具在所有裝置上都免費。', 'iPhone et iPad (iOS 17 ou ultérieur), Apple Watch (watchOS 11 ou ultérieur) et Mac (puce Apple). Avec High Beam, l’IA cloud fonctionne sur tout appareil compatible, avec ou sans Apple Intelligence. Notes, journal, calendrier, collections et plus de 20 outils sont gratuits sur tous les appareils.', 'iPhone y iPad (iOS 17 o posterior), Apple Watch (watchOS 11 o posterior) y Mac (chip de Apple). Con High Beam, la IA en la nube funciona en cualquier dispositivo compatible, tenga o no Apple Intelligence. Registros, diario, calendario, colecciones y más de 20 herramientas son gratis en todos los dispositivos.', 'iPhone e iPad (iOS 17 o successivo), Apple Watch (watchOS 11 o successivo) e Mac (chip Apple). Con High Beam l’IA cloud funziona su qualsiasi dispositivo supportato, con o senza Apple Intelligence. Dati, diario, calendario, raccolte e oltre 20 strumenti sono gratuiti su tutti i dispositivi.'],
 q2: ['Where is my data stored?', '데이터는 어디에 저장되나요?', 'Wo werden meine Daten gespeichert?', '資料存在哪裡？', 'Où sont stockées mes données ?', '¿Dónde se guardan mis datos?', 'Dove vengono salvati i miei dati?'],
 a2f: ['Your records are stored on your device. Only when you choose an AI feature are the words or photos needed for that task sent to cloud AI. The developer does not view or sell the contents of your records.', '기록은 사용 중인 기기에 저장돼요. AI 기능을 고른 경우에만 처리에 필요한 말이나 사진이 클라우드 AI로 전송돼요. 개발자가 기록 내용을 열람하거나 판매하는 일은 없어요.', 'Deine Aufzeichnungen werden auf deinem Gerät gespeichert. Nur wenn du eine KI-Funktion wählst, werden die dafür nötigen Worte oder Fotos an die Cloud-KI gesendet. Der Entwickler sieht und verkauft deine Inhalte nicht.', '記錄會儲存在你的裝置上。只有在你選擇 AI 功能時，處理所需的文字或照片才會傳送到雲端 AI。開發者不會查看或販賣你的記錄內容。', 'Vos notes sont stockées sur votre appareil. Ce n’est que lorsque vous choisissez une fonction IA que les mots ou photos nécessaires sont envoyés à l’IA cloud. Le développeur ne consulte ni ne vend vos contenus.', 'Tus registros se guardan en tu dispositivo. Solo cuando eliges una función de IA se envían a la IA en la nube las palabras o fotos necesarias. El desarrollador no ve ni vende tus contenidos.', 'I tuoi dati sono salvati sul tuo dispositivo. Solo quando scegli una funzione IA, le parole o le foto necessarie vengono inviate all’IA cloud. Lo sviluppatore non vede né vende i tuoi contenuti.'],
 q3: ['How does the AI sorting work?', 'AI 정리 기능은 어떻게 작동하나요?', 'Wie funktioniert die KI-Sortierung?', 'AI 整理功能如何運作？', 'Comment fonctionne le tri par IA ?', '¿Cómo funciona la clasificación con IA?', 'Come funziona lo smistamento con IA?'],
 a3f: ['With High Beam, cloud AI processes the information needed for sorting and other AI features. The content sent is used only to perform that task, never to train AI. AI features, Hand to AI, and sharing send information outside the device only when you choose those actions.', 'High Beam에서는 클라우드 AI가 분류와 AI 기능에 필요한 정보를 처리해요. 보낸 내용은 그 처리에만 쓰이고 AI 학습에는 쓰이지 않아요. AI 기능・「AI로 보내기」・공유처럼 밖으로 보내는 작업은 직접 선택했을 때만 이뤄져요.', 'Mit High Beam verarbeitet die Cloud-KI die für die Sortierung und andere KI-Funktionen nötigen Informationen. Gesendete Inhalte dienen nur dieser Aufgabe und nie dem KI-Training. KI-Funktionen, „An die KI“ und Teilen senden nur dann etwas, wenn du es auswählst.', '使用 High Beam 時，雲端 AI 會處理分類與 AI 功能所需的資訊。送出的內容只用於該處理，不會用於 AI 訓練。AI 功能、「交給 AI」與分享等對外傳送的操作，只在你主動選擇時進行。', 'Avec High Beam, l’IA cloud traite les informations nécessaires au tri et aux autres fonctions IA. Le contenu envoyé ne sert qu’à cette tâche, jamais à entraîner une IA. Fonctions IA, « Confier à l’IA » et partage n’envoient rien sans votre choix.', 'Con High Beam, la IA en la nube procesa la información necesaria para clasificar y para otras funciones de IA. Lo enviado solo se usa para esa tarea, nunca para entrenar IA. Las funciones de IA, «Pasar a la IA» y compartir solo envían algo cuando tú lo eliges.', 'Con High Beam, l’IA cloud elabora le informazioni necessarie allo smistamento e alle altre funzioni IA. Il contenuto inviato serve solo a quel compito, mai ad addestrare l’IA. Funzioni IA, «Affida all’IA» e condivisione inviano qualcosa solo quando lo scegli tu.'],
 q4: ['Can I back up my data?', '백업할 수 있나요?', 'Kann ich meine Daten sichern?', '可以備份嗎？', 'Puis-je sauvegarder mes données ?', '¿Puedo hacer una copia de seguridad?', 'Posso fare un backup?'],
 a4f: ['From Settings, you can export a full backup (JSON) including photos. Markdown sync to iCloud Drive or a NAS (the Head-Light Vault) is also available.', '설정에서 사진을 포함한 전체 백업(JSON)을 내보낼 수 있어요. iCloud Drive나 NAS로의 Markdown 동기화(Head-Light 보관함)도 있어요.', 'In den Einstellungen kannst du ein vollständiges Backup (JSON) inklusive Fotos exportieren. Auch eine Markdown-Synchronisierung mit iCloud Drive oder einem NAS (Head-Light-Tresor) ist möglich.', '可在設定中匯出包含照片的完整備份（JSON），也能以 Markdown 同步到 iCloud Drive 或 NAS（Head-Light 保管庫）。', 'Dans les Réglages, exportez une sauvegarde complète (JSON), photos comprises. Une synchronisation Markdown vers iCloud Drive ou un NAS (le coffre Head-Light) est aussi disponible.', 'En Ajustes puedes exportar una copia completa (JSON) con fotos. También hay sincronización en Markdown con iCloud Drive o un NAS (la bóveda de Head-Light).', 'Dalle Impostazioni puoi esportare un backup completo (JSON) con le foto. È disponibile anche la sincronizzazione Markdown con iCloud Drive o un NAS (il Caveau di Head-Light).'],
 endP: ['Free to start, today.', '오늘부터, 무료로.', 'Kostenlos, ab heute.', '今天起，免費開始。', 'Gratuit, dès aujourd’hui.', 'Gratis, desde hoy.', 'Gratis, da oggi.'],
 qr: ['Scan with your<br>iPhone camera', 'iPhone 카메라로<br>스캔하세요', 'Mit der iPhone-<br>Kamera scannen', '用 iPhone 相機<br>掃描', 'Scannez avec<br>l’appareil photo', 'Escanea con la<br>cámara del iPhone', 'Scansiona con la<br>fotocamera'],
 privacy: ['Privacy Policy', '개인정보 처리방침', 'Datenschutz', '隱私權政策', 'Confidentialité', 'Privacidad', 'Privacy'],
 terms: ['Terms of Use', '이용약관', 'Nutzungsbedingungen', '使用條款', 'Conditions d’utilisation', 'Términos de uso', 'Termini di utilizzo'],
 badgeAlt: ['Download on the App Store'],
 journalAlt: ['A day’s page in the journal, with words and a photo of a cat.'],
 routineAlt: ['The routine shelf and its circular timer.'],
 tidyAlt: ['The tidy assistant sorting words into four groups.']
};

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = t => 1 - Math.pow(1 - t, 3);
const lang = () => root.dataset.lang || root.lang || 'ja';
function t(key, l = lang()) {
 const row = T[key];
 if (!row) return null;
 const i = L.indexOf(l);
 return (i >= 0 && row[i]) || row[0];
}

/* ---------- i18n ---------- */
function applyLanguage() {
 const l = lang();
 $$('[data-t]').forEach(el => {
  if (el.dataset.ja === undefined) el.dataset.ja = el.innerHTML;
  el.innerHTML = l === 'ja' ? el.dataset.ja : (t(el.dataset.t, l) ?? el.dataset.ja);
 });
 $$('[data-t-alt]').forEach(el => {
  if (el.dataset.jaAlt === undefined) el.dataset.jaAlt = el.alt;
  el.alt = l === 'ja' ? el.dataset.jaAlt : (t(el.dataset.tAlt, l) ?? el.dataset.jaAlt);
 });
 $$('[data-t-aria]').forEach(el => {
  if (el.dataset.jaAria === undefined) el.dataset.jaAria = el.getAttribute('aria-label') || '';
  el.setAttribute('aria-label', l === 'ja' ? el.dataset.jaAria : (t(el.dataset.tAria, l) ?? el.dataset.jaAria));
 });
 // App screenshots follow the language (Korean and others use the English screens).
 $$('main.hx img[data-shot]').forEach(img => {
  const suffix = l === 'ja' ? 'ja' : 'en';
  const ext = img.dataset.shotExt || 'jpg';
  const sep = img.dataset.shot.includes('-') ? '-' : '_';
  const next = `img/shots/${img.dataset.shot}${sep}${suffix}.${ext}`;
  if (!img.getAttribute('src').startsWith(next)) img.src = next;
 });
 const video = $('.hx-video-frame video');
 if (video) {
  const v = l === 'ja' ? 'ja' : 'en';
  if (video.dataset.v !== v) {
   video.dataset.v = v;
   video.pause();
   video.poster = `img/video-posters/collection-music-${v}.jpg`;
   video.src = `video/collection-music-${v}.mp4`;
   const glow = $('.hx-video-glow');
   if (glow) glow.style.backgroundImage = `url("img/video-posters/collection-music-${v}.jpg")`;
  }
 }
 const txLabel = $('.hx-tx-label');
 if (txLabel) txLabel.textContent = l === 'ja' ? '聞いています' : t('txListening', l);
 splitPitch();
 transcript.reset();
 onScroll();
}

/* ---------- Pitch: characters light up with scroll ---------- */
const pitch = $('.hx-pitch');
let pitchChars = [];
function splitPitch() {
 if (!pitch) return;
 pitchChars = [];
 $$('.hx-pitch-lines > span', pitch).forEach(line => {
  const text = line.textContent;
  line.setAttribute('aria-label', text);
  const cjk = /[　-鿿가-힯＀-￯]/.test(text);
  const frag = document.createDocumentFragment();
  const addChars = (str, parent) => [...str].forEach(ch => {
   const s = document.createElement('span');
   s.className = 'hx-ch'; s.textContent = ch; s.setAttribute('aria-hidden', 'true');
   parent.append(s); pitchChars.push(s);
  });
  if (cjk) addChars(text, frag);
  else text.split(/(\s+)/).forEach(part => {
   if (/^\s+$/.test(part)) { frag.append(' '); return; }
   const w = document.createElement('span'); w.style.whiteSpace = 'nowrap'; w.style.display = 'inline-block';
   addChars(part, w); frag.append(w);
  });
  line.textContent = ''; line.append(frag);
 });
 // The second line warms from ink to lamp-gold, across the whole line.
 const second = $$('.hx-pitch-lines > span:nth-child(2) .hx-ch', pitch);
 second.forEach((c, i) => {
  const k = second.length > 1 ? i / (second.length - 1) : 0;
  const mix = (a, b) => Math.round(a + (b - a) * k);
  c.style.setProperty('--c', `rgb(${mix(12, 176)},${mix(12, 132)},${mix(13, 70)})`);
 });
}

/* ---------- Shelf ---------- */
const REC = 'img/shots/collection-records-hp.webp';
const FILM = 'img/shots/collection-films-hp.webp';
const SRC_W = 924, TILE = 422;
const covers = [
 {src: REC, x: 26, y: 232, r: 1}, {src: REC, x: 476, y: 232, r: 1}, {src: REC, x: 26, y: 681, r: 1},
 {src: REC, x: 476, y: 681, r: 1}, {src: REC, x: 26, y: 1130, r: 1}, {src: REC, x: 476, y: 1130, r: 1},
 {src: FILM, x: 26, y: 219, r: 1.5}, {src: FILM, x: 476, y: 219, r: 1.5}, {src: FILM, x: 26, y: 879, r: 1.5}, {src: FILM, x: 476, y: 879, r: 1.5}
];
// Where each cover starts: a loose, overlapping pile (fractions of the stage).
const scatter = [
 [.10, .66, -18, 26], [.32, .80, 12, -30], [.56, .64, -8, 34], [.80, .74, 22, -22], [.93, .36, -26, 18],
 [.20, .96, 9, 40], [.68, .98, -14, -36], [.46, .88, 26, 20], [.88, 1.0, 6, -28], [.78, .40, -30, 30]
];
const shelf = $('.hx-shelf');
const stage = $('.hx-shelf-stage');
let coverEls = [], boards = [], layout = null;
function buildShelf() {
 if (!stage) return;
 covers.forEach((c, i) => {
  const el = document.createElement('div');
  el.className = 'hx-cover'; el.setAttribute('aria-hidden', 'true');
  el.style.backgroundImage = `url("${c.src}")`;
  stage.append(el); coverEls.push(el);
 });
 for (let i = 0; i < 3; i++) { const b = document.createElement('div'); b.className = 'hx-shelf-board'; stage.append(b); boards.push(b); }
}
function computeLayout() {
 if (!stage) return;
 const W = stage.clientWidth, H = stage.clientHeight;
 const copy = $('.hx-shelf-copy', stage);
 const top = copy.offsetTop + copy.offsetHeight + (W < 700 ? 26 : 40);
 const bottom = H - (W < 700 ? 56 : 70);
 const avail = Math.max(160, bottom - top);
 const aw = Math.min(W - 32, 1180);
 const gap = W < 700 ? 10 : 18, shelfGap = W < 700 ? 34 : 50;
 const pos = [], rows = [];
 if (W < 700) {
  // 3 × 2 records, then 4 films.
  let r = Math.min((aw - 2 * gap) / 3, (avail - 58) / 3.35);
  let f = Math.min((aw - 3 * gap) / 4, r * .9);
  const totalH = 2 * r + gap + 14 + shelfGap + f * 1.5;
  let y = top + Math.max(0, (avail - totalH) / 2);
  for (let row = 0; row < 2; row++) {
   const x0 = (W - (3 * r + 2 * gap)) / 2;
   for (let c = 0; c < 3; c++) pos.push({x: x0 + c * (r + gap), y, w: r, h: r});
   rows.push({x: x0 - 8, y: y + r + 4, w: 3 * r + 2 * gap + 16});
   y += r + (row === 0 ? gap + 14 : shelfGap);
  }
  const x0 = (W - (4 * f + 3 * gap)) / 2;
  for (let c = 0; c < 4; c++) pos.push({x: x0 + c * (f + gap), y, w: f, h: f * 1.5});
  rows.push({x: x0 - 8, y: y + f * 1.5 + 4, w: 4 * f + 3 * gap + 16});
 } else {
  let r = Math.min((aw - 5 * gap) / 6, (avail - shelfGap) / (1 + 1.5 * .92));
  const f = r * .92;
  const totalH = r + shelfGap + f * 1.5;
  let y = top + Math.max(0, (avail - totalH) / 2);
  let x0 = (W - (6 * r + 5 * gap)) / 2;
  for (let c = 0; c < 6; c++) pos.push({x: x0 + c * (r + gap), y, w: r, h: r});
  rows.push({x: x0 - 14, y: y + r + 6, w: 6 * r + 5 * gap + 28});
  y += r + shelfGap;
  x0 = (W - (4 * f + 3 * gap * 2)) / 2;
  for (let c = 0; c < 4; c++) pos.push({x: x0 + c * (f + gap * 2), y, w: f, h: f * 1.5});
  rows.push({x: x0 - 14, y: y + f * 1.5 + 6, w: 4 * f + 6 * gap + 28});
 }
 layout = {W, H, pos};
 coverEls.forEach((el, i) => {
  const p = pos[i], c = covers[i], k = p.w / TILE;
  el.style.width = p.w + 'px'; el.style.height = p.h + 'px';
  el.style.backgroundSize = `${SRC_W * k}px auto`;
  el.style.backgroundPosition = `${-c.x * k}px ${-c.y * k}px`;
  el.style.borderRadius = Math.max(6, p.w * .045) + 'px';
 });
 boards.forEach((b, i) => {
  const r = rows[i];
  b.style.display = r ? '' : 'none';
  if (r) { b.style.left = r.x + 'px'; b.style.top = r.y + 'px'; b.style.width = r.w + 'px'; }
 });
}
function renderShelf(p, time) {
 if (!layout) return;
 const {W, H, pos} = layout;
 const still = reduced.matches;
 coverEls.forEach((el, i) => {
  const end = pos[i], s = scatter[i];
  const local = still ? 1 : ease(clamp((p - .06 - i * .03) / .5));
  const sw = end.w * 1.35;
  const drift = still ? 0 : Math.sin(time / 1400 + i * 1.7) * 8 * (1 - local);
  const sy0 = W < 700 ? Math.max(s[1], .62) : s[1];
  const sx = s[0] * W - sw / 2, sy = sy0 * H - sw / 2 + drift;
  const x = sx + (end.x - sx) * local;
  const y = sy + (end.y - sy) * local;
  const rot = s[2] * (1 - local), ry = s[3] * (1 - local), sc = 1.35 + (1 - 1.35) * local;
  el.style.transform = `translate3d(${x}px,${y}px,0) rotateZ(${rot}deg) rotateY(${ry}deg) scale(${sc})`;
  el.style.zIndex = local > .98 ? 2 : 3 + i;
 });
 shelf.classList.toggle('settled', still || p > .72);
}

/* ---------- Voice transcript ---------- */
const transcript = (() => {
 const box = $('.hx-transcript');
 let timer = null, running = false;
 const body = box && $('.hx-tx-body', box), label = box && $('.hx-tx-label', box);
 function stop() { clearTimeout(timer); timer = null; running = false; }
 function run() {
  if (!box || running) return;
  running = true;
  const l = lang();
  const text = l === 'ja' ? '新曲のサビ、転調したら面白いかも。' : t('txText', l);
  const trig = l === 'ja' ? '送信' : t('txTrigger', l);
  box.classList.remove('saved');
  label.textContent = l === 'ja' ? '聞いています' : t('txListening', l);
  body.innerHTML = '';
  const typed = document.createElement('span'), caret = document.createElement('span');
  caret.className = 'caret'; body.append(typed, caret);
  const chars = [...text];
  let i = 0;
  const step = () => {
   if (!running) return;
   if (i < chars.length) { typed.textContent += chars[i++]; timer = setTimeout(step, reduced.matches ? 0 : 55); return; }
   timer = setTimeout(() => {
    const chip = document.createElement('span'); chip.className = 'trig'; chip.textContent = trig;
    typed.append(' ', chip);
    timer = setTimeout(() => {
     caret.remove(); box.classList.add('saved');
     label.textContent = l === 'ja' ? '保存しました' : t('txSaved', l);
     timer = setTimeout(() => { running = false; if (inView.has(box)) run(); }, 3200);
    }, 700);
   }, 380);
  };
  step();
 }
 return {run, stop, reset() { stop(); if (box && inView.has(box)) run(); }};
})();

/* ---------- AI sort demo ---------- */
const sort = $('.hx-sort');
let sortTimer = null;
function playSort() {
 if (!sort || sortTimer) return;
 let step = 0;
 const tick = () => {
  step = (step + 1) % 5;
  sort.dataset.step = String(step);
  sortTimer = setTimeout(tick, step === 4 ? 4200 : step === 0 ? 700 : 1100);
 };
 sort.dataset.step = '0';
 sortTimer = setTimeout(tick, 500);
}
function stopSort() { clearTimeout(sortTimer); sortTimer = null; }

/* ---------- Visibility ---------- */
const inView = new Set();
const io = new IntersectionObserver(entries => entries.forEach(e => {
 if (e.isIntersecting) inView.add(e.target); else inView.delete(e.target);
 if (e.target.matches('.hx-transcript')) e.isIntersecting ? transcript.run() : transcript.stop();
 if (e.target === sort) e.isIntersecting ? (reduced.matches ? (sort.dataset.step = '4') : playSort()) : stopSort();
}), {threshold: .25});
const revealIO = new IntersectionObserver(entries => entries.forEach(e => {
 if (e.isIntersecting) { e.target.classList.add('is-in'); revealIO.unobserve(e.target); }
}), {rootMargin: '0px 0px -8% 0px', threshold: .08});

/* ---------- Marquee ---------- */
const rows = $$('.hx-mrow').map((el, i) => ({el, x: 0, dir: i % 2 ? 1 : -1, base: i % 2 ? 40 : 60}));
let lastY = scrollY, velocity = 0;

/* ---------- Scroll-linked pieces ---------- */
const progress = $('.hx-progress');
const videoFrame = $('.hx-video-frame');
function onScroll() {
 const vh = innerHeight;
 const max = document.documentElement.scrollHeight - vh;
 if (progress) progress.style.setProperty('--p', max > 0 ? (scrollY / max).toFixed(4) : 0);
 if (pitch && pitchChars.length) {
  const r = pitch.getBoundingClientRect();
  const p = reduced.matches ? 1 : clamp((vh * .82 - r.top) / (r.height * .72));
  const n = Math.round(p * pitchChars.length);
  pitchChars.forEach((c, i) => c.classList.toggle('lit', i < n));
 }
 if (videoFrame && !reduced.matches) {
  const r = videoFrame.getBoundingClientRect();
  const p = clamp((vh - r.top) / (vh * .7));
  videoFrame.style.setProperty('--rx', (12 * (1 - p)).toFixed(2) + 'deg');
  videoFrame.style.setProperty('--vs', (.9 + .1 * p).toFixed(3));
 }
}
function shelfProgress() {
 if (!shelf) return 0;
 const r = shelf.getBoundingClientRect();
 return clamp(-r.top / (r.height - innerHeight));
}
let lastTime = performance.now();
function frame(time) {
 const dt = Math.min(64, time - lastTime); lastTime = time;
 velocity += ((scrollY - lastY) - velocity) * .15; lastY = scrollY;
 if (!reduced.matches) rows.forEach(r => {
  const half = r.el.scrollWidth / 2;
  if (!half) return;
  r.x += r.dir * (r.base + Math.abs(velocity) * 6) * dt / 1000;
  if (r.dir < 0 && r.x <= -half) r.x += half;
  if (r.dir > 0 && r.x >= 0) r.x -= half;
  r.el.style.transform = `translate3d(${r.x}px,0,0)`;
 });
 if (shelf) {
  const r = shelf.getBoundingClientRect();
  if (r.bottom > -100 && r.top < innerHeight + 100) renderShelf(shelfProgress(), time);
 }
 requestAnimationFrame(frame);
}

/* ---------- Tilt cards ---------- */
function setupTilt() {
 if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
 $$('.hx-card').forEach(card => {
  card.addEventListener('pointermove', e => {
   if (reduced.matches) return;
   const r = card.getBoundingClientRect();
   const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
   card.style.setProperty('--mx', px * 100 + '%'); card.style.setProperty('--my', py * 100 + '%');
   card.style.setProperty('--ty', ((px - .5) * 5).toFixed(2) + 'deg');
   card.style.setProperty('--tx', ((.5 - py) * 4).toFixed(2) + 'deg');
  });
  card.addEventListener('pointerleave', () => { card.style.setProperty('--tx', '0deg'); card.style.setProperty('--ty', '0deg'); });
 });
}

/* ---------- Start ---------- */
function start() {
 buildShelf();
 $$('.hx-mrow').forEach(row => { row.innerHTML += row.innerHTML; });
 $$('.hx-chiprow').forEach(row => { row.innerHTML += row.innerHTML; });
 $$('[data-reveal]').forEach(el => revealIO.observe(el));
 [$('.hx-transcript'), sort].filter(Boolean).forEach(el => io.observe(el));
 setupTilt();
 applyLanguage();
 computeLayout();
 addEventListener('scroll', onScroll, {passive: true});
 addEventListener('resize', () => { computeLayout(); onScroll(); });
 new ResizeObserver(() => computeLayout()).observe(stage);
 new MutationObserver(applyLanguage).observe(root, {attributes: true, attributeFilter: ['lang']});
 $('.hx-to-top')?.addEventListener('click', () => {
  scrollTo({top: 0, behavior: reduced.matches ? 'auto' : 'smooth'});
  setTimeout(() => $('.hero-dice')?.focus({preventScroll: true}), 700);
 });
 onScroll();
 requestAnimationFrame(frame);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once: true}); else start();
