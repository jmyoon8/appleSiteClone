/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useLayoutEffect, useState } from "react";

interface SceneInfoType {
  // 브라우저 높이의 5배로 scrollHeight 세팅
  scrollheightMultiple: 5;
  // 에니메이션이 실행될 구간을 스크롤 헤이트로 정의한다.
  scrollHeight: number;
  // 스틱키하게 스크롤할 부분 그냥 스크롤할 부분 분기
  type: "sticky" | "normal";
  objs: {
    container: HTMLElement | null;
    [index: string]: HTMLElement | null | Element;
  };
  values: {
    aOpacity: number[];
  };
}
const sceneInfo: SceneInfoType[] = [
  {
    scrollheightMultiple: 5,
    scrollHeight: 0,
    type: "sticky",
    objs: {
      container: document.getElementById("scroll-section-0"),
      messageA: document.getElementsByClassName("a")[0],
      messageB: document.getElementsByClassName("b")[0],
      messageC: document.getElementsByClassName("c")[0],
      messageD: document.getElementsByClassName("d")[0],
    },
    values: {
      aOpacity: [0, 1],
    },
  },
  {
    scrollheightMultiple: 5,
    scrollHeight: 0,
    type: "normal",
    objs: {
      container: document.getElementById("scroll-section-1"),
    },
    values: {
      aOpacity: [0, 1],
    },
  },
  {
    scrollheightMultiple: 5,
    scrollHeight: 0,
    type: "sticky",
    objs: {
      container: document.getElementById("scroll-section-2"),
    },
    values: {
      aOpacity: [0, 1],
    },
  },
  {
    scrollheightMultiple: 5,
    scrollHeight: 0,
    type: "sticky",
    objs: {
      container: document.getElementById("scroll-section-3"),
    },
    values: {
      aOpacity: [0, 1],
    },
  },
];
function Interaction() {
  const [yOffset, setYOffset] = useState(window.scrollY);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight * 5);
  // 화면에 노출할 씬들
  const [currentScene, setCurrentScene] = useState(-1);
  useLayoutEffect(() => {
    const calcValuses = (
      values: number[],
      currentYOffset: number,
      currentSceneParam: number,
    ) => {
      const sceneRatio = currentYOffset / innerHeight;
      // console.log(currentSceneParam, sceneRatio);

      return currentYOffset / innerHeight;
    };

    const playAnimation = (yScroll: number, currentSceneParam: number) => {
      const { objs } = sceneInfo[currentSceneParam];
      const { values } = sceneInfo[currentSceneParam];
      switch (currentSceneParam) {
        case 0:
          calcValuses(values.aOpacity, yScroll, currentSceneParam);
          break;
        case 1:
          calcValuses(
            values.aOpacity,
            yScroll - innerHeight,
            currentSceneParam,
          );
          break;
        case 2:
          calcValuses(
            values.aOpacity,
            yScroll - innerHeight * 2,
            currentSceneParam,
          );
          break;
        case 3:
          calcValuses(
            values.aOpacity,
            yScroll - innerHeight * 3,
            currentSceneParam,
          );
          break;

        default:
          break;
      }
    };
    // 스크롤 일어날때마다 실행시킬 함수
    const scrollLoop = () => {
      // 각 스크롤신이 시작되는 점을 찾아야한다
      // yOffset(top과 떨어진 높이)와 자기앞에 섹션들의 높이 합을 통해 현재 스크롤하여 화면상에 나온 섹션을 알수있다.
      // innerHeight : 섹션0
      // innerHeight*2 : 섹션1
      const { scrollY } = window;
      if (scrollY > 0 && scrollY <= innerHeight) {
        setCurrentScene(0);
        playAnimation(scrollY, 0);
        // console.log(
        //   "section0의 스크롤위치",
        //   Math.floor((scrollY / innerHeight) * 100),
        // );
      } else if (scrollY > innerHeight && scrollY <= innerHeight * 2) {
        setCurrentScene(1);
        playAnimation(scrollY, 1);
        // console.log(
        //   "section1의 스크롤위치",
        //   Math.floor(((scrollY - innerHeight) / innerHeight) * 100),
        // );
      } else if (scrollY > innerHeight * 2 && scrollY <= innerHeight * 3) {
        setCurrentScene(2);
        playAnimation(scrollY, 2);
        // console.log(
        //   "section2의 스크롤위치",
        //   Math.floor(((scrollY - innerHeight * 2) / innerHeight) * 100),
        // );
      } else if (scrollY > innerHeight * 3 && scrollY <= innerHeight * 4) {
        setCurrentScene(3);
        playAnimation(scrollY, 3);
        // console.log(
        //   "section3의 스크롤위치",
        //   Math.floor(((scrollY - innerHeight * 3) / innerHeight) * 100),
        // );
      } else {
        console.log("section-1");
        setCurrentScene(-1);
      }
    };
    const setLayOut = () => {
      setInnerHeight(window.innerHeight * 5);
      scrollLoop();
    };
    // 리사이징이 일어날경우 setLayOut을 다시실행하여 화면에 맞춘다.
    window.addEventListener("resize", () => {
      setInnerHeight(window.innerHeight * 5);
    });
    // 스크롤 이벤트
    window.addEventListener("scroll", () => {
      scrollLoop();
    });

    return () => {
      window.removeEventListener("resize", setLayOut);
    };
  }, [innerHeight]);

  return (
    <>
      {/* 손으로 컵을 돌리면서 텍스트 에니메이션 노출 */}
      <section
        style={{ height: innerHeight }}
        className="scroll-section"
        id="scroll-section-0"
      >
        <h1>AIRMUG PRO</h1>
        {/* sticky-elem클래스는 눈앞에 스티키된다(위치를 유지한다) */}
        <div
          style={{ display: currentScene === 0 ? "block" : "none" }}
          className="sticky-elem main-message a"
        >
          <p>
            온전히 빠져들게 하는
            <br /> 최고급 세라믹
          </p>
        </div>
        <div
          style={{ display: currentScene === 0 ? "block" : "none" }}
          className="sticky-elem main-message b"
        >
          <p>
            주변 맛을 느끼게 해주는 <br /> 주변 맛 허용 모드
          </p>
        </div>
        <div
          style={{ display: currentScene === 0 ? "block" : "none" }}
          className="sticky-elem main-message c"
        >
          <p>
            온종일 편안한
            <br />
            맞춤형 손잡이
          </p>
        </div>
        <div
          style={{ display: currentScene === 0 ? "block" : "none" }}
          className="sticky-elem main-message d"
        >
          <p>
            새롭게 입가를 <br /> 찾아온 매혹
          </p>
        </div>
      </section>
      {/* 텍스트가 쭉 올라감 */}
      <section
        style={{ height: innerHeight }}
        className="scroll-section nomalScroll"
        id="scroll-section-1"
      >
        <p className="description">
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio
          euismod lacinia at quis risus. Tellus orci ac auctor augue. Fermentum
          posuere urna nec tincidunt praesent. Dui nunc mattis enim ut auctor
          augue. Fermentum posuere urna nec tincidunt praesent. Dui nunc mattis
          enim ut auctor augue. Fermentum posuere urna nec tincidunt praesent.
          Dui nunc mattis enim ut auctor augue. Fermentum posuere urna nec
          tincidunt praesent. Dui nunc mattis enim ut
        </p>
      </section>
      {/* 컵을 든손 노출 컵설명 */}
      <section
        style={{ height: innerHeight }}
        className=" scroll-section"
        id="scroll-section-2"
      >
        <div
          style={{ display: currentScene === 2 ? "block" : "none" }}
          className="sticky-elem main-message"
        >
          <p>
            <small>편안한 촉감</small>
            입과 하나 되다
          </p>
        </div>
        <div
          style={{ display: currentScene === 2 ? "block" : "none" }}
          className="sticky-elem desc-message "
        >
          <p>
            편안한 목넘김 ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            odio euismod lacinia at quis risus. Tellus orci ac auctor augue.
          </p>
          <div className="pin"></div>
        </div>
        <div
          style={{ display: currentScene === 2 ? "block" : "none" }}
          className="sticky-elem desc-message"
        >
          <p>
            디자인 앤 퀄리티 오브 스웨덴 <br />
            ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="pin"></div>
        </div>
      </section>
      {/* 이미지 커지고 그위로 바다이미지 생성 */}
      <section
        style={{ height: innerHeight }}
        className="scroll-section"
        id="scroll-section-3"
      >
        <p className="mid-message">
          <strong>Retina 머그</strong>
          아이디어를 광활하게 펼칠 <br />
          아름답고 부드러운 음료 공간.
        </p>
        <p className="canvas-caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio
          euismod lacinia at quis risus. Tellus orci ac auctor augue. Fermentum
          posuere urna nec tincidunt praesent. Dui nunc mattis enim ut tellus
          elementum sagittis. Tellus mauris a ut labore et dolore magna aliqua.
          Non odio euismod lacinia at quis risus. Tellus orci ac auctor augue.
          Fermentum posuere urna nec tincidunt praesent. Dui nunc mattis enim ut
          tellus elementum sagittis. Tellus mauris a ut labore et dolore magna
          aliqua. Non odio euismod lacinia at quis risus. Tellus orci ac auctor
          augue. Fermentum posuere urna nec tincidunt praesent. Dui nunc mattis
          enim ut tellus elementum sagittis. Tellus mauris a
        </p>
      </section>
    </>
  );
}

export default Interaction;
