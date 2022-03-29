import style from './App.module.css';
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.jpg';
import img4 from './img/4.png';
import img5 from './img/5.png';

function App() {
  return (
    <div className={style.Wrapper}>
      <h1 className={style.Content}>김세현</h1>
      <img className={style.Img} src={img1} />
      <span className={style.Content}>
        나는 개인공간과 사회공간 사이의 벽, 즉 문을 생각했고, 거기서 비롯된
        생각은 개인공간과 사회공간중, '각 사람마다 선호하는 것이 다를
        것이다'라고 생각했다.
      </span>
      <span className={style.Content}>
        사회공간 기준으로 누군가는 좋은 이미지를 가질 수 있을 것이고, 또한
        누군가는 나쁜 이미지를 가질 수 있을 것이라 생각한다.
      </span>
      <span className={style.Content}>
        이에 위 사진과 같이 점점 밝아지는 통로와, 점점 어두워지는 통로 이 두개를
        문에 장식하면 좋겠다고 생각했다.
      </span>
      <span className={style.Content}>
        하지만 내가 가진 테이프 색상과 문의 색상은 각각 빨강, 노랑, 파랑, 회색
        이였고 이러한 아이디어는 일단 킵해야겠다고 생각했다.
      </span>
      <span className={style.Content}>
        그렇게 또 하나의 아이디어를 생각하는데,
      </span>
      <img className={style.Img} src={img2} />
      <span className={style.Content}>
        위와 같이 양립의 형태를 지우고, 어두운 길을 걸어가는듯한 느낌을 내기
        시작했다. 이제 구상은 다했고 실전이다 싶은 나는 실전으로 돌입하게
        되는데...
      </span>
      <img className={style.Img} src={img3} />
      <span className={style.Content}>
        망했다... 이 작품을 보고 망했다 라는 생각밖에는 떠오르지 않았다. 이
        장난감 문 같이 생긴건 또 뭐냔말이다... 그래서 어쩔 수 없이 편집의 힘을
        빌렸다.
      </span>
      <img className={style.Img} src={img4} />
      <span className={style.Content}>
        음... 그나마 전보단 낫긴 한데 마음에 들지 않는다. 좀 더 수정해보았다.
      </span>
      <img className={style.Img} src={img5} />
      <span className={style.Content}>
        그나마 내 기준으로 좀 봐줄만 했다. 어두운 곳에서 점점 밝아지는듯한
        느낌을 주어 결국 사회공간은 밝다는 메세지를 띄었다.
      </span>
    </div>
  );
}

export default App;
