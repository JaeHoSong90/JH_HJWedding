kakao.maps.load(function () {
    var container = document.getElementById('map');

    var options = {
        center: new kakao.maps.LatLng(37.402056, 127.108212), // 위치 좌표
        level: 3
    };

    var map = new kakao.maps.Map(container, options);

    var marker = new kakao.maps.Marker({
        position: options.center
    });

    marker.setMap(map);
});