const SHOP_WHATSAPP = '917046190368';
const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');

menuButton.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
    mainNav.querySelectorAll('a').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

function openWhatsApp(message) {
  const url = `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(message)}`;
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (!newWindow) window.location.href = url;
}

document.querySelectorAll('[data-brand]').forEach(button => {
  button.addEventListener('click', () => {
    openWhatsApp(`नमस्ते M.K मोबाइल रिपेयरिंग सेंटर! मेरे पास ${button.dataset.brand} मोबाइल है। कृपया रिपेयरिंग/सर्विस की उपलब्धता और अनुमानित खर्च बताएं।`);
  });
});

document.querySelectorAll('[data-service]').forEach(button => {
  button.addEventListener('click', () => {
    openWhatsApp(`नमस्ते M.K मोबाइल रिपेयरिंग सेंटर! मुझे "${button.dataset.service}" के बारे में जानकारी चाहिए। कृपया उपलब्धता और अनुमानित खर्च बताएं।`);
  });
});

const form = document.getElementById('enquiryForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const phone = String(data.get('phone') || '').replace(/\D/g, '');
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById('formNote').textContent = 'कृपया सही 10 अंकों का मोबाइल नंबर लिखें।';
    return;
  }
  const message = [
    'नमस्ते M.K मोबाइल रिपेयरिंग सेंटर!',
    '',
    `नाम: ${String(data.get('name') || '').trim()}`,
    `ग्राहक का मोबाइल नंबर: ${phone}`,
    `मोबाइल ब्रांड / मॉडल: ${String(data.get('model') || '').trim() || 'नहीं बताया'}`,
    `समस्या: ${String(data.get('problem') || '').trim()}`,
    '',
    'कृपया रिपेयरिंग की उपलब्धता और अनुमानित खर्च बताएं।'
  ].join('\n');
  document.getElementById('formNote').textContent = 'WhatsApp खुल रहा है — मैसेज जाँचकर Send दबाएँ।';
  openWhatsApp(message);
});

const galleryModal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
function showGallery(kind) {
  if (kind === 'owner') {
    modalImage.src = 'assets/owner-photo.jpg';
    modalImage.alt = 'दुकान के मालिक मोहित कुमार कश्यप';
    modalCaption.textContent = 'मोहित कुमार कश्यप — मालिक, M.K मोबाइल रिपेयरिंग सेंटर';
  } else {
    modalImage.src = 'assets/shop-banner.jpg';
    modalImage.alt = 'M.K मोबाइल रिपेयरिंग सेंटर का बैनर';
    modalCaption.textContent = 'M.K मोबाइल रिपेयरिंग सेंटर — मोबाइल रिपेयरिंग';
  }
  galleryModal.classList.add('open');
  galleryModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeGallery() {
  galleryModal.classList.remove('open');
  galleryModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-gallery]').forEach(item => item.addEventListener('click', () => showGallery(item.dataset.gallery)));
document.getElementById('moreGallery').addEventListener('click', () => showGallery('shop'));
document.getElementById('modalClose').addEventListener('click', closeGallery);
galleryModal.addEventListener('click', event => { if (event.target === galleryModal) closeGallery(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeGallery(); });
