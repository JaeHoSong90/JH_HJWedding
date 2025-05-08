function getValueInText() {
  console.log("들어와짐");
  const inputData = document.getElementById("test").value;
  console.log(inputData);
}
const REST_API_KEY = "9f943b678ccb4d8cc21540039807e92b";

// 주소를 좌표로 변환하는 함수

async function getCoordsFromAddress(address) {
  const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
    address
  )}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `KakaoAK ${REST_API_KEY}`,
    },
  });

  const data = await response.json();

  if (data.documents.length > 0) {
    const { x: longitude, y: latitude } = data.documents[0];
    console.log("경도 (longitude):", longitude);
    console.log("위도 (latitude):", latitude);
    return { longitude, latitude };
  } else {
    throw new Error("주소를 찾을 수 없습니다.");
  }
}

// 사용 예시
getCoordsFromAddress("서울특별시 구로구 구로5동 552-83");
