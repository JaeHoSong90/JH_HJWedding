window.onload = function () {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.521379, 126.904590), // 영등포 위더스
    level: 4
  };

  const map = new kakao.maps.Map(container, options);

  const markerPosition = new kakao.maps.LatLng(37.521379, 126.904590);
  const marker = new kakao.maps.Marker({ position: markerPosition });
  marker.setMap(map);

  const iwContent = `
    <div style="padding:5px;">
      웨딩그룹 위더스<br>
      <a href="https://map.kakao.com/link/map/웨딩그룹위더스영등포,37.521379,126.904590" target="_blank">
        큰지도보기
      </a>
    </div>
  `;

  const infowindow = new kakao.maps.InfoWindow({ content: iwContent });
  infowindow.open(map, marker);
};