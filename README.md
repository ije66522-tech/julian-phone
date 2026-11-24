# 줄리안 폰 (Julian St. Clair)

## 폴더 구조
```
index.html   ← 폰 본체 (건드릴 필요 없음)
photos.js    ← 사진 설정 파일 (여기만 고치면 됨)
img/
  profile/   프로필 사진
  wallpaper/ 배경화면
  gallery/   사진 앱
  instagram/ 인스타 게시물·스토리
  setlog/    셋로그 사진
  places/    구글맵 장소 사진
  music/     앨범 커버
```

## 사진 넣는 법
1. 사진을 알맞은 `img/` 폴더에 올리기 (파일명은 영어·숫자·`-` `_`만)
2. `photos.js`에서 그 칸에 경로 적기 → 예: `'Mummy': 'img/profile/mummy.jpg',`
3. 저장(Commit) → 1~2분 뒤 사이트 새로고침

규칙
- 대소문자 구분: `Mummy.JPG` ≠ `mummy.jpg`
- 따옴표 `' '` 짝, 줄 끝 쉼표 `,` 빠뜨리면 사진 전체가 안 뜸
- 빈칸 `''` 이면 기본 그림/이니셜로 나옴
- 사진을 바꾸면 폰이 처음 상태로 초기화됨 (보낸 메시지 등 리셋)
- 권장 크기: 프로필 400×400, 배경 1290×2796, 나머지 1080px 정도 (jpg, 1장 500KB 이하면 빠름)

## GitHub Pages 올리기
1. github.com 가입 → 오른쪽 위 `+` → **New repository**
2. 이름 `julian-phone`, **Public** 선택 → Create
3. **uploading an existing file** 클릭 → 이 폴더 안의 것 전부(index.html, photos.js, README.md, img 폴더)를 끌어다 놓기 → **Commit changes**
4. 저장소의 **Settings → Pages** → Branch `main`, 폴더 `/ (root)` → **Save**
5. 1~2분 뒤 `https://내아이디.github.io/julian-phone/` 접속

수정할 때: 저장소에서 `photos.js` 클릭 → 연필 아이콘 → 고치고 → Commit changes
사진 추가: 해당 img 폴더 들어가서 **Add file → Upload files**
