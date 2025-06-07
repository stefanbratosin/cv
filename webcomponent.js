class CvHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const name = this.getAttribute('name') || 'Your Name';
        const title = this.getAttribute('title') || 'Professional Title';
        const email = this.getAttribute('email') || '';
        const phone = this.getAttribute('phone') || '';
        const linkedin = this.getAttribute('linkedin') || '';
        const github = this.getAttribute('github') || '';

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; text-align: center; }
                h1 { margin: 0; color: #333; }
                h2 { margin: 5px 0; color: #555; font-weight: normal; }
                .contact-info { margin-top: 10px; font-size: 0.9em; color: #444; }
                .contact-info a { color: #007bff; text-decoration: none; }
                .contact-info a:hover { text-decoration: underline; }
                .contact-info span { margin: 0 10px; }
            </style>
            <h1>${name}</h1>
            <h2>${title}</h2>
            <div class="contact-info">
                ${email ? `<span><a href="mailto:${email}">${email}</a></span>` : ''}
                ${phone ? `<span>${phone}</span>` : ''}
                ${linkedin ? `<span><a href="https://${linkedin}" target="_blank">${linkedin}</a></span>` : ''}
                ${github ? `<span><a href="https://${github}" target="_blank">${github}</a></span>` : ''}
            </div>
        `;
    }
}
customElements.define('cv-header', CvHeader);

class CvSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const sectionTitle = this.getAttribute('section-title') || 'Section';
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; margin-bottom: 20px; }
                h3 {
                    margin-top: 0;
                    margin-bottom: 10px;
                    color: #333;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 5px;
                    font-size: 1.4em;
                }
            </style>
            <h3>${sectionTitle}</h3>
            <slot></slot>
        `;
    }
}
customElements.define('cv-section', CvSection);

class CvEntry extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const entryTitle = this.getAttribute('entry-title') || 'Entry Title';
        const period = this.getAttribute('period') || '';
        const location = this.getAttribute('location') || '';

        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; margin-bottom: 15px; }
                .entry-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    margin-bottom: 5px;
                }
                h4 {
                    margin: 0;
                    color: #444;
                    font-size: 1.1em;
                }
                .period-location {
                    font-size: 0.9em;
                    color: #666;
                    text-align: right;
                }
                .description {
                    font-size: 0.95em;
                    color: #555;
                }
            </style>
            <div class="entry-header">
                <h4>${entryTitle}</h4>
                <span class="period-location">
                    ${period}${period && location ? ' | ' : ''}${location}
                </span>
            </div>
            <div class="description">
                <slot></slot>
            </div>
        `;
    }
}
customElements.define('cv-entry', CvEntry);