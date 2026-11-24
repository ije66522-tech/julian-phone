/* =========================================================
   줄리안 폰 사진 설정 파일
   - 사진은 img/ 폴더 안에 넣고, 여기에 경로를 적으면 됨
   - 비워두거나 줄 앞에 // 붙이면 → 기본 그라데이션/이니셜로 나옴
   - 경로는 대소문자 구분!  (Freddie.jpg ≠ freddie.jpg)
   - 항목 사이에 쉼표(,) 꼭 넣기. 따옴표 '' 짝 맞추기.
   - 인터넷 이미지 주소(https://...)도 그대로 넣어도 됨
   ========================================================= */
window.PHOTOS = {

  /* ---------- 배경화면 ---------- */
  wallpaper: '',   // 예: 'img/wallpaper/home.jpg'   (홈 화면)
  lock: '',        // 예: 'img/wallpaper/lock.jpg'   (잠금 화면, 비우면 홈과 같음)

  /* ---------- 프로필 사진 (연락처·메시지·인스타·왓츠앱·셋로그 공통) ----------
     왼쪽 이름은 폰 안에 표시되는 이름과 정확히 같아야 함 */
  avatars: {
    'me': '',                    // 줄리안 본인
    'Mummy': '',
    'Father': '',
    'Granny': '',
    'Freddie Ashworth': '',
    'Hugo Pemberton': '',
    'Arabella Whitmore': '',
    'Kit Montague': '',
    'Monty Fairfax': '',
    'Lottie Fairfax': '',
    'Elena Voss': '',            // 연락처 'Elena Voss (EXIA)'에도 적용됨
    'Rupert Hale': '',
    'Hartley': '',
    // 인스타 아이디별 프사 (안 적으면 이니셜 원)
    'freddie.ash': '',
    'hugo.pemberton': '',
    'arabella.w': '',
    'kit.montague': '',
    'lottie.fairfax': '',
    'monty_f': '',
    'sw7.eats': '',
    'verbier.daily': '',
    'albion.air': '',
  },

  /* ---------- 사진 앱 (갤러리) ----------
     위에서부터 최신순. 개수 제한 없음 */
  gallery: [
    // 'img/gallery/01.jpg',
    // 'img/gallery/02.jpg',
  ],

  /* ---------- 인스타그램 ---------- */
  igMine: [               // 줄리안 프로필 그리드 (내 게시물)
    // 'img/instagram/me1.jpg',
  ],
  igPosts: {              // 피드 게시물 1~9번. 여러 장이면 슬라이드됨
    // 1: ['img/instagram/post1a.jpg', 'img/instagram/post1b.jpg'],
    // 2: ['img/instagram/post2.jpg'],
  },
  igStories: {            // 스토리 (아이디별, 여러 장 가능)
    // 'freddie.ash': ['img/instagram/story_freddie1.jpg'],
  },

  /* ---------- 셋로그 ---------- */
  setlog: {               // 친구가 올리는 사진 (연락처 이름별, 랜덤으로 뽑힘)
    // 'Freddie Ashworth': ['img/setlog/freddie1.jpg', 'img/setlog/freddie2.jpg'],
  },
  setlogMe: [             // 줄리안이 올린 사진
    // 'img/setlog/me1.jpg',
  ],
  setlogAny: [            // 이름별 사진이 없을 때 쓰는 공용 사진
  ],

  /* ---------- 구글맵 장소 사진 (장소 이름별 2장) ---------- */
  places: {
    // 'Hyde Park': ['img/places/hydepark1.jpg', 'img/places/hydepark2.jpg'],
    // 'Maison Ottilie': [...], 'The Gilded Stag': [...], 'The Brompton Grill': [...],
    // 'Osteria Lucia': [...], 'Natural History Museum': [...], 'V&A Museum': [...],
    // 'The Albemarle Club': [...], 'South Kensington Station': [...]
  },

  /* ---------- 음악 앨범 커버 (곡 순서대로 7개) ----------
     1 Late Train Home / 2 Grey Skies, Gold Light / 3 Camden at 2am / 4 Sunday Roast
     5 Static Hearts / 6 Southbound / 7 Last Orders */
  music:   music: [
    'img/music/1.jpg', 'img/music/2.jpg', 'img/music/3.jpg', 'img/music/4.jpg',
    'img/music/5.jpg', 'img/music/6.jpg', 'img/music/7.jpg',
  ],ㅍ

  /* ---------- 그 외 모든 곳 (유튜브 썸네일, 뉴스, 크롬 등) ----------
     여기 넣으면 남은 기본 그라데이션이 전부 이 사진들로 돌아가며 바뀜 */
  pool: [
  ],
};
