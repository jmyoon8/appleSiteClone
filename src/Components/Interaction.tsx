import React from "react";

interface SceneInfoType {
  // 브라우저 높이의 5배로 scrollHeight 세팅
  scrollheightMultiple: 5;
  // 에니메이션이 실행될 구간을 스크롤 헤이트로 정의한다.
  scrollHeight: number;
  // 스틱키하게 스크롤할 부분 그냥 스크롤할 부분 분기
  type: "sticky" | "normal";
}
function Interaction() {
  const sceneInfo: SceneInfoType[] = [
    {
      scrollheightMultiple: 5,
      scrollHeight: 0,
      type: "sticky",
    },
    {
      scrollheightMultiple: 5,
      scrollHeight: 0,
      type: "normal",
    },
    {
      scrollheightMultiple: 5,
      scrollHeight: 0,
      type: "sticky",
    },
    {
      scrollheightMultiple: 5,
      scrollHeight: 0,
      type: "sticky",
    },
  ];
  return (
    <>
      {/* 손으로 컵을 돌리면서 텍스트 에니메이션 노출 */}
      <section className="scroll-section" id="scroll-section-0">
        <h1>AIRMUG PRO</h1>
        {/* sticky-elem클래스는 눈앞에 스티키된다(위치를 유지한다) */}
        <div className="sticky-elem main-message">
          <p>
            온전히 빠져들게 하는
            <br /> 최고급 세라믹
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            주변 맛을 느끼게 해주는 <br /> 주변 맛 허용 모드
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            온종일 편안한
            <br />
            맞춤형 손잡이
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            새롭게 입가를 <br /> 찾아온 매혹
          </p>
        </div>
      </section>
      {/* 텍스트가 쭉 올라감 */}
      <section className="scroll-section nomalScroll" id="scroll-section-1">
        <p className="description">
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non odio euismod lacinia at quis risus. Tellus orci ac
          auctor augue. Fermentum posuere urna nec tincidunt praesent. Dui nunc mattis enim ut
          auctor augue. Fermentum posuere urna nec tincidunt praesent. Dui nunc mattis enim ut
          auctor augue. Fermentum posuere urna nec tincidunt praesent. Dui nunc mattis enim ut
          auctor augue. Fermentum posuere urna nec tincidunt praesent. Dui nunc mattis enim ut
        </p>
      </section>
      {/* 컵을 든손 노출 컵설명 */}
      <section className="scroll-section" id="scroll-section-2">
        <div className="sticky-elem main-message">
          <p>
            <small>편안한 촉감</small>
            입과 하나 되다
          </p>
        </div>
        <div className="sticky-elem desc-message">
          <p>
            편안한 목넘김 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis risus.
            Tellus orci ac auctor augue.
          </p>
          <div className="pin"></div>
        </div>
        <div className="sticky-elem desc-message">
          <p>
            디자인 앤 퀄리티 오브 스웨덴 <br />
            ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="pin"></div>
        </div>
      </section>
      {/* 이미지 커지고 그위로 바다이미지 생성 */}
      <section className="scroll-section" id="scroll-section-3">
        <p className="mid-message">
          <strong>Retina 머그</strong>
          아이디어를 광활하게 펼칠 <br />
          아름답고 부드러운 음료 공간.
        </p>
        <p className="canvas-caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non odio euismod lacinia at quis risus. Tellus orci ac
          auctor augue. Fermentum posuere urna nec tincidunt praesent. Dui nunc mattis enim ut
          tellus elementum sagittis. Tellus mauris a ut labore et dolore magna aliqua. Non odio
          euismod lacinia at quis risus. Tellus orci ac auctor augue. Fermentum posuere urna nec
          tincidunt praesent. Dui nunc mattis enim ut tellus elementum sagittis. Tellus mauris a ut
          labore et dolore magna aliqua. Non odio euismod lacinia at quis risus. Tellus orci ac
          auctor augue. Fermentum posuere urna nec tincidunt praesent. Dui nunc mattis enim ut
          tellus elementum sagittis. Tellus mauris a
        </p>
      </section>
    </>
  );
}

export default Interaction;
