// 자바 스크립트에서 주소입력하고 경도,위도 가져오는 코드=======================================================================
const REST_API_KEY = "9f943b678ccb4d8cc21540039807e92b";
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


function getValueInText() {
  const inputData = document.getElementById("찾을주소");
  getCoordsFromAddress(inputData.value)
    .then(({ longitude, latitude }) => {
      inputData.value = `${inputData.value}경도, 위도 가져오기 성공`;
      document.getElementById("경도").value = `경도: ${longitude}`;
      document.getElementById("위도").value = `위도: ${latitude}`;
    })
    .catch((error) => {
      console.error(error.message);
    })
}


// 자바 스크립트에서 주소입력하고 경도,위도 가져오는 코드=======================================================================
const container = document.getElementById("map");
const options = {
  center: new kakao.maps.LatLng(37.5031203672024, 126.886928197239), // 서울 시청 좌표
  level: 3,
};

const map = new kakao.maps.Map(container, options);

kakao.maps.event.addListener(map, "click", function (mouseEvent) {
  const latlng = mouseEvent.latLng;
  const longitude = latlng.getLng();
  const latitude = latlng.getLat();
  document.getElementById("경도").value = `경도: ${longitude}`;
  document.getElementById("위도").value = `위도: ${latitude}`;
});
