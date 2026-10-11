// script.js — H S Logs

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            const isExpanded = navLinks.classList.contains('show');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // 2. Package Selector Styling on Order Form
    const packageOptions = document.querySelectorAll('.package-option');
    packageOptions.forEach(option => {
        option.addEventListener('click', () => {
            packageOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            const radio = option.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        });
    });

    // 3. Auto-Select Package from URL Query Param (e.g., order.html?package=promo)
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPkg = urlParams.get('package');
    if (selectedPkg) {
        const targetRadio = document.querySelector(`input[name="package"][value="${selectedPkg}"]`);
        if (targetRadio) {
            targetRadio.checked = true;
            const parentOption = targetRadio.closest('.package-option');
            if (parentOption) {
                packageOptions.forEach(opt => opt.classList.remove('selected'));
                parentOption.classList.add('selected');
            }
        }
    }

    // 4. Lightbox Modal Logic
    setupLightbox();

    // 5. Scroll Reveal
    setupScrollReveal();

    // 6. Order Form Handling
    setupOrderForm();
});

// Setup Lightbox for Gallery and Flyers
function setupLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentImages = [];
    let currentIndex = 0;

    const clickableImages = document.querySelectorAll('[data-lightbox="true"]');
    clickableImages.forEach((img, index) => {
        currentImages.push(img.getAttribute('src') || img.src);
        img.addEventListener('click', () => {
            currentIndex = index;
            openLightbox(currentImages[currentIndex]);
        });
    });

    function openLightbox(src) {
        modalImg.src = src;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showNext() {
        if (currentImages.length === 0) return;
        currentIndex = (currentIndex + 1) % currentImages.length;
        modalImg.src = currentImages[currentIndex];
    }

    function showPrev() {
        if (currentImages.length === 0) return;
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        modalImg.src = currentImages[currentIndex];
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
}

// Setup Scroll Reveal Animation
function setupScrollReveal() {
    const reveals = document.querySelectorAll(".reveal, .content-block, .feature-card, .pricing-card");
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 80;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", checkReveal);
    checkReveal(); // Trigger once on load
}

// Setup Order Form Submissions (WhatsApp & Email)
function setupOrderForm() {
    const orderForm = document.getElementById('log-order-form');
    if (!orderForm) return;

    const whatsappBtn = document.getElementById('btn-order-whatsapp');
    const emailBtn = document.getElementById('btn-order-email');

    function getOrderData() {
        const name = (document.getElementById('cust-name')?.value || '').trim();
        const phone = (document.getElementById('cust-phone')?.value || '').trim();
        const email = (document.getElementById('cust-email')?.value || '').trim();
        const address = (document.getElementById('cust-address')?.value || '').trim();
        const postcode = (document.getElementById('cust-postcode')?.value || '').trim();
        const appliance = (document.getElementById('cust-appliance')?.value || 'Wood burner').trim();
        const qty = (document.getElementById('cust-qty')?.value || '1').trim();
        const notes = (document.getElementById('cust-notes')?.value || '').trim();

        const selectedPkgInput = document.querySelector('input[name="package"]:checked');
        const pkgText = selectedPkgInput ? selectedPkgInput.getAttribute('data-name') || selectedPkgInput.value : 'Ton Bag Loose (£80)';

        return { name, phone, email, address, postcode, appliance, qty, notes, package: pkgText };
    }

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const data = getOrderData();

            if (!data.name || !data.phone || !data.address) {
                alert('Please provide your Name, Phone Number, and Delivery Address so Hayden can process your delivery.');
                return;
            }

            let msg = `🪵 *H S LOGS — DELIVERY ORDER* 🪵\n\n`;
            msg += `👤 *Name:* ${data.name}\n`;
            msg += `📞 *Phone:* ${data.phone}\n`;
            if (data.email) msg += `✉️ *Email:* ${data.email}\n`;
            msg += `📍 *Delivery Address:* ${data.address}\n`;
            if (data.postcode) msg += `📮 *Postcode:* ${data.postcode}\n`;
            msg += `\n📦 *Order Selection:* ${data.package}\n`;
            msg += `🔢 *Quantity:* ${data.qty}\n`;
            msg += `🔥 *Burner / Appliance:* ${data.appliance}\n`;
            if (data.notes) msg += `\n📝 *Delivery Access / Notes:* ${data.notes}\n`;
            msg += `\n_Sent via hslogs.co.uk order form_`;

            const waUrl = `https://wa.me/447714415606?text=${encodeURIComponent(msg)}`;
            window.open(waUrl, '_blank');
        });
    }

    if (emailBtn) {
        emailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const data = getOrderData();

            if (!data.name || !data.phone || !data.address) {
                alert('Please provide your Name, Phone Number, and Delivery Address.');
                return;
            }

            const subject = encodeURIComponent(`H S Logs Delivery Order — ${data.name}`);
            let body = `Hello Hayden,\n\nI would like to place an order for logs from your website:\n\n`;
            body += `Name: ${data.name}\n`;
            body += `Phone: ${data.phone}\n`;
            if (data.email) body += `Email: ${data.email}\n`;
            body += `Address: ${data.address}\n`;
            if (data.postcode) body += `Postcode: ${data.postcode}\n\n`;
            body += `Order: ${data.package}\n`;
            body += `Quantity: ${data.qty}\n`;
            body += `Appliance: ${data.appliance}\n`;
            if (data.notes) body += `Delivery Notes: ${data.notes}\n\n`;
            body += `Thank you!`;

            window.location.href = `mailto:haydenswan21@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
        });
    }
}
