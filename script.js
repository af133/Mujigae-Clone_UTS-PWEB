// Menunggu sampai semua elemen HTML termuat
document.addEventListener('DOMContentLoaded', function () {
    // Mendefinisikan variabel untuk tombol hamburger, sidebar, item menu, dan link di sidebar
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const items = document.querySelectorAll('.menu-item');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
  
    // Event klik tombol hamburger untuk membuka/tutup sidebar
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('show');      // Toggle class 'show' pada sidebar
      hamburger.classList.toggle('active');  // Toggle class 'active' pada hamburger
    });
  
    // Event klik pada setiap link di sidebar untuk menutup sidebar
    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('show'); // Menghilangkan class 'show' dari sidebar
      });
    });
  
    // Fungsi untuk menampilkan item secara bertahap saat scroll
    function showItems() {
      items.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top; // Posisi item terhadap viewport
        const windowHeight = window.innerHeight;          // Tinggi layar window
  
        if (itemTop < windowHeight - 100) { // Jika item terlihat di layar
          setTimeout(() => {
            item.classList.add('show');     // Tambahkan class 'show' dengan jeda waktu
          }, index * 300);                  // Delay bertahap tiap item 300ms
        }
      });
    }
  
    // Memanggil showItems saat user scroll
    window.addEventListener('scroll', showItems);
    showItems(); // Panggil sekali ketika halaman pertama kali diload
  
    // ---------------------------------
    // Bagian Slideshow Otomatis
    // ---------------------------------
    let currentIndex = 0; // Menyimpan indeks slide saat ini
    const slides = document.querySelector('.slides'); // Container slide
    const totalSlides = document.querySelectorAll('.slide').length; // Jumlah semua slide
  
    // Fungsi update tampilan slide berdasarkan currentIndex
    function updateSlide() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`; // Geser slide
    }
  
    // Fungsi untuk ke slide berikutnya
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides; // Loop ke awal setelah slide terakhir
      updateSlide();
      stopAutoSlide(); // Reset interval
    }
  
    // Fungsi untuk ke slide sebelumnya
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Jika ke belakang dari index 0, kembali ke akhir
      updateSlide();
      stopAutoSlide(); // Reset interval
    }
  
    // Mengatur slide otomatis berpindah setiap 4 detik
    let autoSlide = setInterval(() => {
      nextSlide();
    }, 4000);
  
    // Fungsi menghentikan lalu mengaktifkan ulang auto-slide
    function stopAutoSlide() {
      clearInterval(autoSlide); // Hentikan interval
      autoSlide = setInterval(() => {
        nextSlide(); // Restart interval
      }, 4000);
    }
  
    // ---------------------------------
    // Bagian Populate (Mengisi) Data Menu
    // ---------------------------------
  
    // ------------------------------
    // Populate multiple design grids
    // ------------------------------
  
    const designsA = [
      { name: "Kimchi Fried Rice with Chees...", img: "https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640574126244-PEQKMY7MY7PDE9IQCPYA/kimci-jigae.png?format=500w" },
      { name: "Kimchi Fried Rice with Ode", img: "https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666257991290-YWV5G5SJYVAV582E1ET7/Kmchi+Fried+Rice+Oden+Web.jpg?format=500w" },
    ];
  
    const designsB = [
      { name: "Jajangmyeon", img: "https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1671005688816-9K4FEY08H7Q4CYUC1XJK/Web+Thumbnail+UI+JJM.jpg?format=500w" },
      { name: "Topokki with Korean Chicken", img: "https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640574956756-BNXOBFZHBAP7BJW2PR1C/Toppoki-with-K-Chck.png?format=500w" },
      { name: "Topokki with Mandu", img: "https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640574991527-JTEDOYXYSK9W8XEH33TT/Kimchi-jigaetopokki-with-mandu.png?format=500w" },
      { name: "Sundubu Jigae with Rice", img: "https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640575090740-VAA5AD7M1GA7AWDA34J3/Kimchi-jigaesundubu-jigae.png?format=500w" },
      { name: "Sundubu Jigae with Noodle", img: "https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640575101614-LGESBR9HLSJO9WBZZWWW/Kimchi-jigaeArtboard-1.png?format=500w" },
      { name: "Bibimbap Beef Bulgogi Original", img: "https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666254781085-1H5M9JP91M2Q8A6H6OHA/Bibimbap+Beef+Bulgogi+Ori+web.jpg?format=500w" },
      { name: "Bibimbap Beef Bulgogi Spicyl", img: "https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666254780490-MNW6DYGCFE2UZIP04PUV/Bibimbap+Beef+Bulgogi+Spicy+web.jpg?format=500w" },
    ];
    const designsC=[

        {
            name:"Super Joy 1 Korean Chicken Original",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640575513046-9F7CQ2QNW33LV2RJHQXX/superSuper-joy-1-Ori.png?format=500w"
        },
        {
            name:"Super Joy 1 Korean Chicken Spicy",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640575521342-P4EVITKRWU72KWWR32MY/superSuper-joy-1-Spicy.png?format=500w"
        },
        {
            name:"Super Joy 2 Beef Bulgogi Original",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640575533453-ISP5YEEZCJ4G2J2D2I1N/superSuper-joy-2-Ori.png?format=500w"
        },
        {
            name:"Super Joy 2 Beef Bulgogi Spicy",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640575539939-32BYN826W1YACRNACC13/superSuper-joy-2-spicy.png?format=500w"
        },
        
];
    const designD=[
        {
            name:"Dosirak 1 Mandu Original",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666251922885-Y0SD9CR8KAOO2YDI9HSC/Dosirak+1+Mandu+Ori+Web.jpg?format=500w"
        },
        {
            name:"Dosirak 1 Mandu Spicy",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666251922901-30LZJ6WMK9JMCPBGJ568/Dosirak+1+Mandu+Spicy+.jpg?format=500w"
        },
        {
            name:"Dosirak 2 Korean Chicken Original",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666251927571-7DEEPYEOLE4ZT081BOQ3/Dosirak+2+KFC+Ori+Web.jpg?format=500w"
        },
        {
            name:"Dosirak 2 Korean Chicken Spicy",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666251928391-DKEVTNIY4PT1SYDDSWF7/Dosirak+2+Kfc+Spicy+Web.jpg?format=500w"
        },
        {
            name:"Dosirak 3 Beef Bulgogi Original",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666251932579-BAEZ6LPQTAH7XMMY4QYB/Dosirak+3+Beef+Ori+Web.jpg?format=500w"
        },
        {
            name:"Dosirak 3 Beef Bulgogi Spicy",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666251933949-X33ZNQ7HEYMEGM1X9QZ9/Dosirak+3+Beef+Spicy+Web.jpg?format=500w"
        },
        {
            name:"Dosirak Korean Signature",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666251936991-ZHU571RROJ1DTG4P8IMN/Dosirak+Korean+Signature+Web.jpg?format=500w"
        },
    ];
    const designdE=[
        {
            name:"Dry Ramyun",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666253186020-924SXUBHSVSGH6T2U7NM/Dry+Ramyun+Polos+Web.jpg?format=500w"
        },
        {
            name:"Dry Ramyun with Mandu",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666253179228-9H0ZVTCA5BGYVYVYAJII/Dry+Ramyun+Mandu+Web.jpg?format=500w"
        },
        {
            name:"Dry Ramyun with Korean Chicken",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666253190418-7BE1Q9RZN1GEXCV8UXB8/Dry+Ramyun+KFC+Web.jpg?format=500w"
        },
        {
            name:"Dry Ramyun Spicy Korean Egg",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666253186876-P46J00V50102VSB34XOU/Dry+Ramyun+SKE+Web.jpg?format=500w"
        },
        {
            name:"Dry Ramyun with Beef Bulgogi",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666253195446-LLO9OT4R476I1QCMO2ZS/Dry+Ramyun+Beef+Web.jpg?format=500w"
        },
        {
            name:"Dry Ramyun with Indonesian Batagori",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666253191952-RGOMPDCRT501AX48JR4S/Dry+Ramyun+Batagor+Webb.jpg?format=500w"
        },
        {
            name:"Dry Ramyun with Smoked Beef Oden",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666253179217-GGE7APAW2P1X443TP39F/Dry+Ramyun+Oden+Web.jpg?format=500w"
        },
    ];
  const designdF =[
    {
        name:"Beef Bulgogi Original A la carte",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640576122155-PNDSHSNUWIC2UPPAS65O/Beef-ori.png?format=500w"
    },
    {
        name:"Beef Bulgogi Spicy A la carte",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640576125992-L0DBBRCJ01R8Q4BJN0YE/beef-bulgogi-spicy.png?format=500w"
    },
    {
        name:"Japchae A la carte",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640576130742-6AJU7ITTF5YFF9PPEM7T/japchae.png?format=500w"
    },
    {
        name:"Kimchi A la carte",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640576137427-OPZELPFB3IAO3J1G86TY/Kimchi.png?format=500w"
    },
    {
        name:"Korean Chicken Original A la carte",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640576165459-2BR5R18R0ZTQ9IFDDVXZ/K-CHICK-ORI.png?format=500w"
    },
    {
        name:"Korean Chicken Spicy A la carte",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640576168856-16VF1GV9B29NZGH0F8AK/K-CHICK-BULDAK.png?format=500w"
    },
    {
        name:"Mandu A la carte",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640576282473-F14R4DK70ACMMFHEORNJ/MANDU.png?format=500w"
    },
    {
        name:"Nasi",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640576286475-17S0QQB3WRSFLUC424EM/Nasi.png?format=500w"
    },
  ];
    const designdG=[
        {
            name:"Classic Coffee",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666255428668-IU5QC76U1DMI1AQHALRI/Classic+Coffee+web.jpg?format=500w"
        },
        
        {
            name:"Banana Milk",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666255425035-P30NKQ7VRK919B2XNA8J/Banana+Milk+web.jpg?format=500w"
        },
        {
            name:"Choco Banana Milk",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666255425148-TARVB8P3T14NC2MXBY06/Choco+Banana+Milk+Web.jpg?format=500w"
        },
        {
            name:"Sea Salt Dark Choco",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666255437750-0QNB3XS89BK0IZRDE1I1/Sea+Salt+Dark+Choco+web.jpg?format=500w"
        },
        {
            name:"Jasmine Tea",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666255429734-KSQLTZ1UFDUIZ4CZN3AJ/Jasmine+Tea+Web.jpg?format=500w"
        },
        {
            name:"Jeju Orange Tea",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666255431642-LLWPXSE1ZE514RE7BNZI/Jeju+Orange+Tea+Web.jpg?format=500w"
        },
        {
            name:"Lemonade",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666255433559-A0UFZX4JYEWA8RACK59M/Lemonade+Web.jpg?format=500w"
        },

    ]  ;
    const designdH=[
        {
            name:"Beef BBQ",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640577115071-STJOERTE9MWINBA1QQ7Q/PIC59A.png?format=500w"
        },
        {
            name:"Chicken BBQ",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1640577110927-9GS9642IXL7SLSG1IKON/PIC58A.png?format=500w"
        },
    ];
    const designdI=[
        {
            name:"Choco Bingsoo",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666255800922-8EC2OQAUCDJ7AOMQ8X12/Choco+Bingsoo.jpg?format=500w"
        },
        {
            name:"Matcha Bingsoo",img:"https://images.squarespace-cdn.com/content/v1/5dccc025a7ec043789f57f1d/1666255833324-E1XY2DMG339FHKGSI07C/Matcha+Bingsoo+Web.jpg?format=500w"
        },
    ];
  // Fungsi umum buat populate gambar
    function populateDesigns(designs, containerId) {
      const container = document.getElementById(containerId);
      designs.forEach(design => {
        const item = document.createElement('div');
        item.className = 'design-item';
        item.innerHTML = `
          <img src="${design.img}" alt="${design.name}">
          <div class="design-name">${design.name}</div>
        `;
        container.appendChild(item);
      });
    }
  
    // Jalankan populate untuk masing-masing grid
    populateDesigns(designsA, 'designGridA');
    populateDesigns(designsB, 'designGridB');
    populateDesigns(designsC, 'designGridC');
    populateDesigns(designD, 'designGridD');
    populateDesigns(designdE, 'designGridE');
    populateDesigns(designdF, 'designGridF');
    populateDesigns(designdG, 'designGridG');
    populateDesigns(designdH, 'designGridH');
    populateDesigns(designdI, 'designGridI');
  
  });
  