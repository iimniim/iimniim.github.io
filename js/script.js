function hitungMundur(){
    var hariH = new Date('May 22, 2021 09:00:00').getTime();
    var sekarang = new Date().getTime();
    var selisih = hariH - sekarang;
    
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var ud = Math.floor(selisih / day);
    var uh = Math.floor((selisih % day) / hour);
    var um = Math.floor((selisih % hour) / minute);
    var us = Math.floor((selisih % minute) / second);

    var d = ud.toLocaleString('id-ID', {minimumIntegerDigits: 2, useGrouping: false})
    var h = uh.toLocaleString('id-ID', {minimumIntegerDigits: 2, useGrouping: false})
    var m = um.toLocaleString('id-ID', {minimumIntegerDigits: 2, useGrouping: false})
    var s = us.toLocaleString('id-ID', {minimumIntegerDigits: 2, useGrouping: false})

    document.getElementById("hari").innerText = d;
    document.getElementById("jam").innerText = h;
    document.getElementById("menit").innerText = m;
    document.getElementById("detik").innerText = s;

}
setInterval(function(){ hitungMundur(); }, 1000);

function bukaBuwuhan() {
    var x = document.getElementById("bayarBuwuhan")
    if (x.style.display === "none") {
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
  }

function bukaMusicPlayer() {
    var x = document.getElementById("musicPlayer")
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }


  var audio = document.getElementById("musik");
  audioState = false;
  function playPause() {
      if(!audioState){
          audio.play();
          audioState = true;
          document.getElementById("playPause").innerHTML = "Pause"
      }
      else{
          audio.pause();
          audioState = false;
          document.getElementById("playPause").innerHTML = "Play"
  }}
  function randomMusik(){
      var path = 'mp3/';
      files = ['song1.mp3', 'song2.mp3', 'song3.mp3', 'song4.mp3', 'iimsong (1).mp3', 'iimsong (2).mp3', 'iimsong (3).mp3','iimsong (4).mp3','iimsong (5).mp3','iimsong (6).mp3',]
      i = Math.floor(Math.random()*files.length);
      var musikRandom=(path+files[i]);
      document.getElementById("musik").src= musikRandom;
      audio.play();
      audioState = true;
      document.getElementById("playPause").innerHTML = "Pause"
  }

  const observerAtas = new IntersectionObserver (entries => {
  entries.forEach(entry => {
    const animasiAtas = entry.target.querySelector('.slepetAtas');

    if (entry.isIntersecting) {
      animasiAtas.classList.add('keatas');
      return;
    }

    animasiAtas.classList.remove('keatas');
  });
});

observerAtas.observe(document.querySelector('.slepetAtasWrap'));
observerAtas.observe(document.querySelector('.slepetAtasWrap1'));
observerAtas.observe(document.querySelector('.slepetAtasWrap3'));
observerAtas.observe(document.querySelector('.slepetAtasWrap5'));

const observerBawah = new IntersectionObserver (entries => {
  entries.forEach(entry => {
    const animasiBawah = entry.target.querySelector('.slepetBawah');

    if (entry.isIntersecting) {
      animasiBawah.classList.add('kebawah');
      return;
    }

    animasiBawah.classList.remove('kebawah');
  });
});

observerBawah.observe(document.querySelector('.slepetBawahWrap'));
observerBawah.observe(document.querySelector('.slepetBawahWrap2'));
observerBawah.observe(document.querySelector('.slepetBawahWrap3'));
observerBawah.observe(document.querySelector('.slepetBawahWrap5'));

const observerKiri = new IntersectionObserver (entries => {
  entries.forEach(entry => {
    const animasiKiri = entry.target.querySelector('.slepetKiri');

    if (entry.isIntersecting) {
      animasiKiri.classList.add('kekiri');
      return;
    }

    animasiKiri.classList.remove('kekiri');
  });
});

observerKiri.observe(document.querySelector('.slepetKiriWrap'));
observerKiri.observe(document.querySelector('.slepetKiriWrap2'));
observerKiri.observe(document.querySelector('.slepetKiriWrap4'));
observerKiri.observe(document.querySelector('.slepetKiriWrap5'));


const observerKanan = new IntersectionObserver (entries => {
  entries.forEach(entry => {
    const animasiKanan = entry.target.querySelector('.slepetKanan');

    if (entry.isIntersecting) {
      animasiKanan.classList.add('kekanan');
      return;
    }

    animasiKanan.classList.remove('kekanan');
  });
});

observerKanan.observe(document.querySelector('.slepetKananWrap'));
observerKanan.observe(document.querySelector('.slepetKananWrap2'));
observerKanan.observe(document.querySelector('.slepetKananWrap4'));
observerKanan.observe(document.querySelector('.slepetKananWrap5'));


const observerMuncul = new IntersectionObserver (entries => {
  entries.forEach(entry => {
    const animasiMuncul = entry.target.querySelector('.slepetMuncul');

    if (entry.isIntersecting) {
      animasiMuncul.classList.add('muncul');
      return;
    }

    animasiMuncul.classList.remove('muncul');
  });
});

observerMuncul.observe(document.querySelector('.slepetMunculWrap'));
observerMuncul.observe(document.querySelector('.slepetMunculWrap2'));
observerMuncul.observe(document.querySelector('.slepetMunculWrap3'));
observerMuncul.observe(document.querySelector('.slepetMunculWrap5'));


function bukaAmplop(){
        const bukaAmplop1 = document.getElementById("amplop");
        bukaAmplop1.style.transform= 'rotateY(180deg)'
        
        const bukaAmplop2 = document.getElementById("surat");
        bukaAmplop2.style.top= '-15vh';
        bukaAmplop2.style.zIndex =2;
        

        const bukaAmplop3 = document.getElementById("tutupSuratAtas");
        bukaAmplop3.style.transform= 'rotateX(180deg)';
        bukaAmplop3.style.zIndex= 1;

        const bukaAmplop4 = document.getElementById("bungkus");
        bukaAmplop4.style.bottom = '-50vw';

        const bukaAmplop5 = document.getElementById("tutupSuratKiri");
        bukaAmplop5.style.zIndex= 3;

        const bukaAmplop6 = document.getElementById("tutupSuratKanan");
        bukaAmplop6.style.zIndex= 4;



    }
    function hilangAmplop() {
        var hilangAmplop1 = setTimeout (hilangAmplop2, 4000);
    }

    function hilangAmplop2 () {
        const hilangAmplop3 = document.getElementById("bungkus");
        hilangAmplop3.style.display = 'none';
        const munculAmplop = document.getElementById("isiSurat");
        munculAmplop.style.display = 'block';
    }

  
    const paramsNama = new URLSearchParams(document.location.search);
    let undanganNama = paramsNama.get("inv");
    document.getElementById("namaUndangan").innerHTML = undanganNama;

    const paramsTempat = new URLSearchParams(document.location.search);
    let undanganTempat = paramsTempat.get("plc");
    document.getElementById("namaTempat").innerHTML = undanganTempat;
