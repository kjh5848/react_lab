## React 최신 버전으로 업데이트 권장
- npm install react@latest react-dom@latest


# React_Lab
## Example/nomadcoders
- 해당 폴더는 노마드 코더에서 배우고 있는 ReactJS로 영화 웹앱 만들기를 따라하고 기록하는 중이다.
    ### ex01
    - 리액트의 돔을 만드는 방법을 배우고 자바스크립트와의 차이를 배운다.

    ### ex02
    - 리액트가 어떻게 돔을 생성하고 그 생성된 돔을 바벨을 활용하여 js로 변경 ->  이후 브라우저에 반영하는지 까지에 대한 예시를 배운다.

    ### ex03
    - 리액트로 값은 반역했을때 클릭이 ui 변경되지 않는 이유를 알고 랜더링을 반영하는 방법을 배운다.

    ### 01. useState/ex04
    - 앞서 렌더링에 대해서 개념을 알고 난 후 한번에 가능하게 해주는 useState에서 배운다.

    ### 01. useState/ex05
    - useState를 통해 변경되는 값을 감지하고 해당 값을 반영하는 방법을 배운다.

    ### 01. useState/ex06
    - useState를 통해 minutes에서 변경되는 hours를 적용해보고 해당 값을 reset하는 방법을 배운다.

    ### 01. useState/ex07
    - 두개의 인풋에서 reset하는 방법과 각각의 값을 변경하는 방법을 배운다. 삼항연산자를 활용한다.
     
    ### 01. useState/ex08
    - 컴포넌트로 만들고 select 박스로 컴포넌트를 선택해서 원하는 기능 컨버터선택하기

    ### 02. props/ex09
    - 같은 디자인의 버튼의 함수를 두번세번 만드는게 아닌 같은 함수로 텍스트만 변경한다면 컴포넌트의 props를 받아서 변경하는 방법 props는 객체이며 내가 만든 태그이기 떄문에 해당인자는 내가 마음대로 정할 수 있다. 

    ### 02. props/ex10
    - 컴포넌트에 맞춰서 props를 넘기는 방법을 알아본다. 함수 또는 변수를 넘길 수 있다. 리렌더링을 할때 부모의 자식 중 props가 안넘어가는 자식은 리렌더링을 하지 않는 memo()에 대해서 배운다.

     ### 02. props/ex11
     - propType을 통해 props의 타입을 정할 수 있다. 해당 만약 text에 문자열이 아니라 숫자를 넣는다면? 당연히 아무런 타입이 없기 때문에 실제 ui에서는 오류가 나지 않는다. 하지만 proptype을 통해 타입을 정하면 콘솔에서 오류를 확인할 수 있다.

    ### 03. useEffect/Ex12
    - 가령 api 요청이 useState가 일어날때마다 리렌더링이 일어나서 계속 api요청이 된다면 어떻게 될까? 렌더링을 한번만 되게 하는 useEffect를 통해 반복적으로 실행되는 렌더링을 컨트롤하고 원하는 값이 변경될때만 렌더링을 하는 방법도 배워보자.

    ### 03. useEffect/Ex13
    - useEffet의 생명주기를 확인한다. 보통 생명주기를 넣어주지는 않지만 넣어줄때도 있다. 두가지의 방법을 보고 생명주기를 어떻게 확인하는지에 대한 방법을 배운다.

    ### 04. To Do list/PartOne
    - 배원던 내용을 토대로 ToDolist를 만들어본다. '...element'(스프레드)를 통해 값을 업데이트 해보는 방법을 배운다. 

    ### 04. To Do list/PartTwo
    - map을 통해 ToDoList가 나오는 걸 확인하고 직접 ToDoList를 구현할 수 있다.

    ### 05. coin Tracker/CoinTracker
    - 코인 리스트를 주는 api를 통해 코인을 받고 useEffect와 map을 통해서 바인딩을 해본다.

    ### 06. MovieApp/PartOne
    - 영화 api를 통해 데이터를 가공하는 법을 배운다. async/await에 대해서 알고 사용법을 배운다. 

    ### 06. MovieApp/PartTwo
    - 영화 api를 가공한 부분을 컴포넌트로 빼서 관리하는 방법을 배운다. props를 통해 내가 만든 태그에 자식을 넘겨주어 값을 관리하 할 수 있다. 또한, 그 다음 강의는 리액트 라우터를 통해 페이지 전환하는 법을 진행해 본다.

    ### 06. MovieApp/01. ReactRouter 
    - npm install react-router-dom 으로 설치,  React Router로 페이지를 전환하는 방법을 배운다. 새로고침 없이 바로 페이지를 이동한다.

    ### 06. MovieApp/02. ReactRouter
    - useParams로 movie:id에 오는 id값을 확인하고 값을 가져온다.

    ### package.json
    - 해당 파일에서는 github.io로 무료 페이지를 만들어 배포하는 방법을 배운다.
    - script에 
    "deploy": "gh-pages -d build",
    "predeploy" : "npm run build"
    해당 명령어 추가 
    - 마지막 homepage 에는 "homepage": "https://kjh5848.github.io/react_lab" 자신의 계정과 레포지토리를 조합해서 적어준다.

    ### 06. MovieApp/03. fanal
    - style 컴포넌트를 통해 리액트를 디자인을 해본다.