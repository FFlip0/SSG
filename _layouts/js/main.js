document.addEventListener('DOMContentLoaded', function() {
    const tocList = document.querySelector('.toc-list');
    console.log('TOC list element:', tocList);
    
    if (tocList) {
        tocList.innerHTML = '';

        const headings = document.querySelectorAll('h1, h2, h3');
        console.log('Found headings:', headings.length);
        
        headings.forEach(heading => {
            const tocItem = document.createElement('li');
            const tocLink = document.createElement('a');
            
            let id = heading.id;
            if (!id) {
                id = heading.textContent.toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                heading.id = id;
            }
            
            tocLink.href = `#${id}`;
            tocLink.textContent = heading.textContent;
            tocLink.className = `toc-${heading.tagName.toLowerCase()}`;
            
            tocItem.appendChild(tocLink);
            tocList.appendChild(tocItem);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = document.querySelector('.main-nav').offsetHeight;
                
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
