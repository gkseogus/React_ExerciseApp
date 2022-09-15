# About The Project
취미가 운동인 사람이 취미로 만든 나만의 운동 웹 사이트 입니다.


# Feature List
1. "Weight training" 버튼 클릭 시 각 자세 종류 및 그립 종류가 애니메이션 형태로 노출된다.
2. "Routine" 버튼 클릭 시 본인의 인바디 그래프가 노출되어야 하며 마우스 호버 시 정확한 수치가 노출되야 한다.
3. 카테고리 클릭 시 각 부위에 맞는 운동 종목이 carousel 형식으로 노출되며 부위에 따라 횟수가 노출 되어야 한다.
4. "Protein" 버튼 클릭 시 각 프로틴의 이름, 브랜드, 가격, 이미지, 맛에 대한 평가 정보가 노출되며 검색 창을 통해 해당 프로틴명으로 검색이 가능하다.
5. Protein 정보는 구글 로그인이 가능해야 노출된다.
6. "Notice" 버튼 클릭 시 해당 홈페이지의 릴리즈 정보가 노출 되야 하며 각 버전을 클릭 시 해당 버전에 맞는 릴리즈 정보가 노출 된다.
7. "BGM" 버튼 클릭 시 드롭다운이 노출되며 각 음악 종류를 클릭 시 유튜브 페이지가 로드되며 본인 최애 곡이 틀어진다.
8. "sign in" , "sign out" 버튼 클릭 시 로그인, 로그아웃이 가능하다.


#  Feature List Details
1. "Weight training" 페이지에서 "Chest", "Back", "Arm", "Shoulder" 종목이 노출되며 자세, 그립종류가 노출된다.
2. "Routine" 페이지에서 인바디 그래프를 호버 시 "인바디 점수", "체중", "골격근량", "BMI", "체지방률"이 백분율로 노출된다.
3. 카테고리는 각 "Weight training" 종목과 똑같이 노출되며 carousel 클릭 시 세부 종목이 노출된다.
4. "Protein" 페이지에서 구글 스프레드 시트에 존재하는 프로틴 데이터(이름, 브랜드, 가격, 맛, 이미지) 를 api로 호출해 노출 시켜주며 검색 창을 이용해 프로틴 이름을 검색 할 수 있다.


# Data
-컬럼 종류-

name, price, flatness, brand, image

![protein data](https://user-images.githubusercontent.com/76561461/190295796-1a11fab4-5f93-4717-8030-69c6fae39147.PNG)

# Web Deployment
* AWS - Amplify 사용
도메인 구축 및 운영 서버 분리

# Demo
https://user-images.githubusercontent.com/76561461/190296831-4f0918db-7013-4e29-bc1a-5cb93a7387ab.mp4
