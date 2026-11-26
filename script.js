// ============================================================
// EDIT BAGIAN INI SAJA. Sisanya tidak perlu disentuh.
// ============================================================
const CONFIG = {
  nama: "Miuvanida Klandistin",
  role: "Undergraduate Informatics Student, Universitas Negeri Surabaya",
  bio: "Curious mind, growing through technology.\nAn Informatics student passionate about exploring intelligent systems, visual computing, and turning ideas into thoughtful digital solutions.",

  // About Me
  foto: "miuvanida.jpg",   // nama file foto (taruh di folder yang sama). Kosongkan untuk pakai inisial.
  tentang: [
    "I’m an Informatics student with a strong interest in Artificial Intelligence, Computer Vision, and Software Development. I enjoy exploring new technologies, working on projects, and learning how to turn ideas into practical solutions. My interest in this field comes from the opportunity to create technology that can solve real-world problems and make a meaningful impact.",
    "During my internship, I hope to gain hands-on experience working on real projects, improve my technical and problem-solving skills, and learn from experienced mentors. I also want to understand how teams collaborate and how technology is developed in a professional environment."
  ],
  info: [
    { label: "University", isi: "Universitas Negeri Surabaya" },
    { label: "Major", isi: "Informatics Engineering (Undergraduate)" },
    { label: "Location", isi: "Surabaya, East Java, Indonesia" }
  ],

  // Experience
  pengalaman: [
    {
      judul: "Commission 1 Staff Member",
      tempat: "Faculty of Engineering Student Representative Council (DPM FT), Universitas Negeri Surabaya",
      waktu: "2024 - 2025",
      poin: [
        "Drafted and evaluated student affairs policies.",
        "Took part in a comparative study visit and coordinated with the faculty."
      ]
    },
    {
      judul: "Kindergarten and Madrasah Diniyah Teacher",
      tempat: "PAS Baitul Qur'an Ponorogo",
      waktu: "2023 - 2024",
      poin: [
        "Delivered lessons, assessments, and academic administration.",
        "Worked with parents and fellow educators to support student development."
      ]
    },
    {
      judul: "Secretary and Treasurer",
      tempat: "PAS Baitul Qur'an Ponorogo",
      waktu: "2023 - 2024",
      poin: [
        "Managed administration, documentation, and organizational finances.",
        "Prepared activity reports to keep operations running smoothly."
      ]
    },
    {
      judul: "Head of Skills Development Division",
      tempat: "PM Darussalam Gontor Ponorogo (Kediri Women's Campus)",
      waktu: "2022 - 2023",
      poin: [
        "Led the planning and implementation of skills development programs.",
        "Coordinated training activities for students."
      ]
    }
  ],

  // Skill
  skill: [
    { grup: "Programming languages", daftar: ["Python", "PHP", "SQL", "C++", "JavaScript", "Matlab"] },
    { grup: "Frameworks & libraries", daftar: ["Laravel", "Tailwind CSS", "Bootstrap"] },
    { grup: "AI & data", daftar: ["Machine Learning (basics)", "Computer Vision", "Digital Image Processing", "Data Analysis"] },
    { grup: "Databases", daftar: ["MySQL", "Microsoft Access", "PowerDesigner"] },
    { grup: "Tools", daftar: ["Octave", "Matlab", "GitHub", "VS Code", "XAMPP", "RStudio", "Microsoft Excel"] },
    { grup: "Soft skills", daftar: ["Analytical Thinking", "Problem Solving", "Research & Literature Review", "Team Collaboration", "Communication", "Time Management"] }
  ],

  // Project. sumber: "github" atau "drive". Kalau link kosong, kartu tidak bisa diklik.
  githubUsername: "miuvanida",
  proyek: [
    {
      judul: "SafeBite Vision AI",
      matkul: "Software Engineering",
      tahun: "2026",
      deskripsi: "A web app that extracts text from food labels and analyzes potential consumption risks with AI, using the Google Gemini API for OCR and risk analysis.",
      teknologi: ["Next.js", "TypeScript", "FastAPI", "Python", "Gemini API"],
      sumber: "github",
      link: "https://github.com/miuvanida/SafeBite"
    },
    {
      judul: "SmartWaste AI",
      matkul: "Research Methodology",
      tahun: "2026",
      deskripsi: "A waste sorting system design based on Computer Vision and IoT, complete with a research proposal and system architecture.",
      teknologi: ["Python", "YOLOv8", "Raspberry Pi", "ESP32", "Firebase"],
      sumber: "drive",
      link: ""   // isi link Drive (proposal)
    },
    {
      judul: "Image Quality Enhancement",
      matkul: "Digital Image Processing",
      tahun: "2026",
      deskripsi: "Analyzes the combination of Gaussian Filtering and Histogram Equalization to improve digital image quality, evaluated with MSE, PSNR, and SSIM.",
      teknologi: ["GNU Octave", "MATLAB"],
      sumber: "github",
      link: "https://github.com/miuvanida/Kombinasi-Gaussian-Filtering-dan-Histogram-Equalization-untuk-Peningkatan-Kualitas-Citra-Digital"
    },
    {
      judul: "Employee Performance Evaluation with Fuzzy Logic",
      matkul: "Artificial Intelligence",
      tahun: "2025",
      deskripsi: "A decision support system for performance appraisal and reward recommendations using 27 inference rules: fuzzification, inference, defuzzification, and bonus calculation.",
      teknologi: ["Python", "Fuzzy Logic"],
      sumber: "github",
      link: "https://github.com/miuvanida/Sistem-penilaian-kinerja-dan-rewarding-karyawan-secara-transparan-menggunakan-metode-fuzzy-logic-"
    },
    {
      judul: "Skincare Tracker",
      matkul: "Data Structures",
      tahun: "2025",
      deskripsi: "A skincare management app with product recommendations, active ingredient conflict checking, and routine scheduling.",
      teknologi: ["C++", "Data Structures", "Algorithms"],
      sumber: "github",
      link: "https://github.com/miuvanida/skincare-tracker"
    },
    {
      judul: "Health Cafe",
      matkul: "Entrepreneurship",
      tahun: "2026",
      deskripsi: "A web app with a menu recommendation system and a responsive interface.",
      teknologi: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      sumber: "github",
      link: "https://github.com/miuvanida/HealthCafe-E-Commerce"
    },
    {
      judul: "Outdoor Equipment Rental",
      matkul: "Platform-Based Programming",
      tahun: "2026",
      deskripsi: "An outdoor equipment rental website with authentication, a product catalog, and booking features.",
      teknologi: ["Laravel", "PHP", "MySQL", "JavaScript"],
      sumber: "github",
      link: "https://github.com/miuvanida/Goutside"
    },
    {
      judul: "Tom's Hunt",
      matkul: "Object-Oriented Programming",
      tahun: "2025",
      deskripsi: "A 2D game built with OOP concepts, featuring game mechanics, collision detection, and a timer.",
      teknologi: ["Python", "Pygame"],
      sumber: "drive",
      link: ""
    }
  ],

  bunga: true,

  // Teks yang diketik otomatis di Home
  diketik: ["Computer Vision Enthusiast", "AI Explorer", "Informatics Student", "Research Intern Candidate"],

  // Research Interest (tampil sebagai tag di About Me)
  interest: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Image Processing", "Data Mining", "Software Engineering", "Deep Learning"],

  // Sertifikasi
  sertifikasi: [
    { nama: "Samsung Innovation Campus Batch 7 - Stage 1: Code Kickstart (Python Programming)", penerbit: "Samsung Innovation Campus", tahun: "2025" },
    { nama: "Samsung Innovation Campus Batch 7 - Stage 2: IoT (Device and Hardware Discovery)", penerbit: "Samsung Innovation Campus", tahun: "2025" },
    { nama: "Python Programming with Red Hat (AD141 - RHA Ver. 9.0)", penerbit: "Red Hat", tahun: "2025" },
    { nama: "Winning Every Scholarship Strategic Course", penerbit: "SmartPath", tahun: "2026" },
    { nama: "Faculty of Engineering Legislative Training (Committee Member)", penerbit: "Universitas Negeri Surabaya", tahun: "2025" },
    { nama: "Faculty of Engineering Legislative Training (Participant)", penerbit: "Universitas Negeri Surabaya", tahun: "2024" },
    { nama: "LKMM Pra-TD (Student Management Skills Training)", penerbit: "Universitas Negeri Surabaya", tahun: "2024" }
  ],

  // Contact (kosongkan kalau tidak ada)
  email: "miuvanidak@gmail.com",
  whatsapp: "6282336523214",   // format internasional tanpa + dan tanpa 0 di depan (082336523214 jadi 6282336523214)
  linkedin: "https://www.linkedin.com/in/miuvanida-klandistin/",
  instagram: "https://www.instagram.com/miuvanidak"
};

// ============================================================

const $ = (id) => document.getElementById(id);
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}

// Home
document.title = CONFIG.nama + " | Portfolio";
$("brand").textContent = CONFIG.nama;
$("nama").textContent = CONFIG.nama;
$("role").textContent = CONFIG.role;
$("bio").textContent = CONFIG.bio;
$("btn-github").href = "https://github.com/" + CONFIG.githubUsername;
$("copy").textContent = "© " + new Date().getFullYear() + " " + CONFIG.nama;

// About Me
if (CONFIG.foto) {
  const img = document.createElement("img");
  img.src = CONFIG.foto; img.alt = "Photo of " + CONFIG.nama;
  $("foto").appendChild(img);
} else {
  $("foto").textContent = CONFIG.nama.split(" ").map((k) => k[0]).slice(0, 2).join("").toUpperCase();
}
CONFIG.tentang.forEach((t) => $("about-text").appendChild(el("p", "", t)));
const facts = el("ul", "facts");
CONFIG.info.forEach((i) => {
  const li = el("li");
  li.appendChild(el("b", "", i.label + ": "));
  li.appendChild(document.createTextNode(i.isi));
  facts.appendChild(li);
});
$("about-text").appendChild(facts);

// Research Interest
const ri = el("div", "interest");
ri.appendChild(el("h3", "", "Research Interest"));
const riList = el("ul", "tags");
CONFIG.interest.forEach((x) => riList.appendChild(el("li", "", x)));
ri.appendChild(riList);
$("about-text").appendChild(ri);


// Experience
CONFIG.pengalaman.forEach((p) => {
  const li = el("li");
  li.appendChild(el("h3", "", p.judul + " at " + p.tempat));
  li.appendChild(el("div", "when", p.waktu));
  const ul = el("ul");
  p.poin.forEach((x) => ul.appendChild(el("li", "", x)));
  li.appendChild(ul);
  $("exp-list").appendChild(li);
});

// Skill
CONFIG.skill.forEach((g) => {
  const box = el("div");
  box.appendChild(el("h3", "", g.grup));
  const ul = el("ul", "tags");
  g.daftar.forEach((s) => ul.appendChild(el("li", "", s)));
  box.appendChild(ul);
  $("skill-list").appendChild(box);
});

// Project
CONFIG.proyek.forEach((p) => {
  const box = el(p.link ? "a" : "div", "card");
  if (p.link) { box.href = p.link; box.target = "_blank"; box.rel = "noopener"; }

  box.appendChild(el("div", "thumb", p.judul));

  const body = el("div", "body");
  body.appendChild(el("h3", "", p.judul));
  body.appendChild(el("div", "meta", p.matkul + " | " + p.tahun));
  body.appendChild(el("p", "", p.deskripsi));
  const tags = el("ul", "tags mini");
  p.teknologi.forEach((t) => tags.appendChild(el("li", "", t)));
  body.appendChild(tags);
  if (p.link) {
    body.appendChild(el("div", "go", (p.sumber === "github" ? "View on GitHub" : "View on Drive") + " →"));
  }
  box.appendChild(body);
  $("proyek-list").appendChild(box);
});

// Certification
CONFIG.sertifikasi.forEach((c) => {
  const box = el("div", "cert");
  box.appendChild(el("h3", "", c.nama));
  box.appendChild(el("p", "", c.penerbit + " | " + c.tahun));
  $("cert-list").appendChild(box);
});

// Contact
[
  ["Email", CONFIG.email ? "mailto:" + CONFIG.email : ""],
  ["WhatsApp", CONFIG.whatsapp ? "https://wa.me/" + CONFIG.whatsapp : ""],
  ["LinkedIn", CONFIG.linkedin],
  ["Instagram", CONFIG.instagram],
  ["GitHub", "https://github.com/" + CONFIG.githubUsername]
].forEach(([nama, href]) => {
  if (!href) return;
  const li = el("li");
  const a = el("a", "", nama);
  a.href = href;
  if (!href.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
  li.appendChild(a);
  $("contact-list").appendChild(li);
});

// Highlight menu navbar sesuai bagian yang sedang dibuka
(function () {
  const links = Array.from(document.querySelectorAll("nav a"));
  const sections = links.map((a) => document.querySelector(a.getAttribute("href")));
  function update() {
    let idx = 0;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top <= 140) idx = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) idx = sections.length - 1;
    links.forEach((a, i) => {
      a.classList.toggle("active", i === idx);
      if (i === idx) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

// Efek ketik di Home
(function () {
  const target = $("typed");
  const words = CONFIG.diketik;
  if (!target || !words || !words.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { target.textContent = words[0]; return; }
  let w = 0, c = 0, hapus = false;
  function tick() {
    const kata = words[w];
    c += hapus ? -1 : 1;
    target.textContent = kata.slice(0, c);
    let delay = hapus ? 40 : 80;
    if (!hapus && c === kata.length) { hapus = true; delay = 1400; }
    else if (hapus && c === 0) { hapus = false; w = (w + 1) % words.length; delay = 350; }
    setTimeout(tick, delay);
  }
  tick();
})();

// Animasi muncul saat scroll
(function () {
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const items = document.querySelectorAll("section h2, .about, .timeline > li, .skill-groups > div, .card, .cert, footer h2, .contacts");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach((x, i) => { x.classList.add("reveal"); x.style.transitionDelay = (i % 3) * 80 + "ms"; io.observe(x); });
})();

// Bunga jatuh di kiri dan kanan
(function () {
  if (!CONFIG.bunga || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = document.createElement("div");
  layer.className = "petals";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);
  const jenis = ["🌸", "🌸", "🌸", "🌷", "🌺"];
  const rand = (a, b) => a + Math.random() * (b - a);
  function build() {
    layer.textContent = "";
    const W = window.innerWidth;
    const sempit = W < 700;
    const margin = sempit ? W * 0.08 : Math.max(70, (W - 1040) / 2 - 20);   // lebar area kiri/kanan
    const perSisi = sempit ? 2 : 4;
    ["kiri", "kanan"].forEach((sisi) => {
      for (let i = 0; i < perSisi; i++) {
        const p = document.createElement("span");
        p.className = "petal";
        p.textContent = jenis[Math.floor(Math.random() * jenis.length)];
        const x = sisi === "kiri" ? rand(0, Math.max(0, margin - 30)) : W - rand(30, margin + 30);
        p.style.left = Math.max(0, x) + "px";
        p.style.fontSize = rand(sempit ? 12 : 16, sempit ? 18 : 28) + "px";
        p.style.setProperty("--drift", rand(-50, 50) + "px");
        p.style.setProperty("--spin", rand(-360, 360) + "deg");
        p.style.animationDuration = rand(9, 17) + "s";
        p.style.animationDelay = -rand(0, 17) + "s";
        layer.appendChild(p);
      }
    });
  }
  build();
  let t;
  window.addEventListener("resize", () => { clearTimeout(t); t = setTimeout(build, 250); });
})();
