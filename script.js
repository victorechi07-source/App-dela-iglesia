document.addEventListener('DOMContentLoaded', () => {
    const menuStacked = document.getElementById('menuStacked');

    const menuItems = [
        { label: "💁🏻‍♀🤵🏻‍♂️Sociedad Damas/Varones", url: "index3.html" }, 
        { label: "🧍🏻👶🏻Sociedad Jóvenes/Niños", url: "index5.html" },
        { label: "🛐🕎Promoción Espiritual", url: "index4.html" },
    ];
    
    menuItems.forEach((item, index) => {
        const link = document.createElement('a');
        link.href = item.url;
        link.className = 'menu-link'; 
        link.style.opacity = "0";
        link.style.transform = "translateY(20px)";

        link.innerHTML = `
            <i class="${item.icon}"></i>
            <span>${item.label}</span>
        `;
        
        menuStacked.appendChild(link);

        // Animación de cascada suave
        setTimeout(() => {
            link.style.transition = "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
        }, 100 * index);
    });

    function updatePortal() {
        const now = new Date();
        document.getElementById('currentTime').textContent = now.toLocaleTimeString('es-ES');
        
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        document.getElementById('currentDate').textContent = `D:${y}.${m}.${d}`;
    }

    setInterval(updatePortal, 1000);
    updatePortal();
});