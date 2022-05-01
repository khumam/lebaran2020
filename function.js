const ucapan = [
  "Idul Fitri adalah momen dimana kita saling menyapa untuk melunturkan dosa.",
  "Manusia itu tempatnya salah, keliru, curang, ego, dan dosa lainnya. Sedangkan Idul Fitri bisa menghapus itu semua.",
  "Lebaran atau Idul Fitri itu tidak ada bagiannya yang tidak menyenangkan. Jika ada, coba koreksi hati kamu.",
  "Jika saya salah dan saya belum meminta maaf, maka izinkan saya untuk meminta maaf di hari dan bulan penuh pengampunan.",
  "Tiada hari yang lebih spesial dari satu syawal. Hari di mana semua mulut berucap untuk meminta permintaan maaf.",
  "Semua yang telah kita lakukan satu bulan terakhir, semoga ibadahnya diterima di sisi Allah SWT.",
  "Saling mengingatkan dalam kebaikan bukanlah hal yang salah. Jika ditolak, tidak apa-apa.",
  "Jika ada quotes yang tidak sesuai, mohon maafkan admin ya.",
  "Syawal adalah awal dari perlombaan untuk terus menuju kebaikan. Jangan berhenti berbuat baik",
  "Bersyukurlah jika kamu merasakan opor lebaran, atau daging lebaran. Itu adalah salah satu rezeki yang datang tanpa kita duga.",
  "Jangan lupa untuk terus bersyukur atas apa yang kita dapat. Rezeki tidak selamanya berbentuk uang."
];
const background = Math.floor(Math.random() * 10);
const foreground = Math.floor(Math.random() * 10);
const index = Math.floor(Math.random() * ucapan.length);
const selected = ucapan[index];
const text = document.getElementById("text-ucapan");
const back = document.getElementById("card-back");
const front = document.getElementById("card-front");
text.innerHTML = `${selected} Selamat Hari Raya Idul Fitri 1443H. Mohon maaf lahir dan batin.`;
back.style.backgroundImage = `url('./back/${background}.jpeg')`;
front.style.backgroundImage = `url('./front/${foreground}.jpeg')`;


