class MapaMaravilla {
  constructor() {
    this.current = "giza";
  }

  initMap() {
    this.closeButGiza();
    this.openGiza();
  }

  closeButGiza() {
    $("#chichen").toggle();
    $("#coliseo").toggle();
    $("#muralla").toggle();
    $("#taj").toggle();
  }

  openGiza() {
    this.closeCurrent();
    $("#giza").toggle();
    this.current = "giza";

    var centro = { lat: 29.978904, lng: 31.133078 };
    var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 16,
      center: centro,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });
  }

  openChichen() {
    this.closeCurrent();
    $("#chichen").toggle();
    this.current = "chichen";

    var centro = { lat: 20.683437, lng: -88.568623 };
    var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 17,
      center: centro,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });
  }

  openColiseo() {
    this.closeCurrent();
    $("#coliseo").toggle();
    this.current = "coliseo";

    var centro = { lat: 41.890043, lng: 12.492140 };
    var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 17,
      center: centro,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });
  }

  openMuralla() {
    this.closeCurrent();
    $("#muralla").toggle();
    this.current = "muralla";

    var centro = { lat: 40.431783, lng: 116.571924 };
    var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 17,
      center: centro,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });
  }

  openTaj() {
    this.closeCurrent();
    $("#taj").toggle();
    this.current = "taj";

    var centro = { lat: 27.174044, lng: 78.041939 };
    var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 16,
      center: centro,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });
  }

  closeCurrent() {
    $("#" + this.current).toggle();
  }
}

var mapaMaravilla = new MapaMaravilla();