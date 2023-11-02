# github_finder
![github_finder](https://github.com/Jiiker/github_finder/assets/100774811/f3428936-21c1-4c64-9c06-b9675313c8f6)

## [전체 구성]
- 크게 헤더, 메인 컨텐츠, 푸터로 구성.
- 메인 컨텐츠는 github API로부터 유저 정보를 검색할 수 있는 텍스트 상자 포함.
- 텍스트 상자에 유저 이름을 입력하면 fetch 함수를 통해 github API로부터 유저 정보를 가져 옴.

## [유저 정보]
- ID, 이름, 국적, Website/Blog, 지역, 회원가입일, Repo 수, Gist 수, 팔로워 수, 팔로우 수 등 기본 정보 표시.
- View Profile 버튼을 통해 해당 유저의 github 페이지로 이동 가능.
  ![ezgif com-video-to-gif](https://github.com/Jiiker/github_finder/assets/100774811/35e91bc3-ba75-45b1-9ada-4ea9dcb9fb04)

- 해당 유저가 만든 Repository 표시.
- 해당 Repository 제목을 클릭하면 해당 레포지토리의 github 페이지로 이동 가능.
  ![ezgif com-video-to-gif (1)](https://github.com/Jiiker/github_finder/assets/100774811/944bd88b-029c-44bc-a36e-ace6ca1781e6)
- **https://ghchart.rshah.org/${userName}** 로 해당 유저의 github 페이지에 있는 연간 push 횟수 그래프(잔디밭)를 가져올 수 있음.
  ![캡처](https://github.com/Jiiker/github_finder/assets/100774811/be01a8f7-d66e-416b-bb3a-31522d70428b)
